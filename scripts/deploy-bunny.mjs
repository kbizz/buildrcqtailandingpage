import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

const distDir = new URL("../dist", import.meta.url).pathname;
const storageZone = process.env.BUNNY_STORAGE_ZONE;
const storageHostname = process.env.BUNNY_STORAGE_HOSTNAME ?? "storage.bunnycdn.com";
const storageAccessKey = process.env.BUNNY_STORAGE_ACCESS_KEY;
const remotePath = process.env.BUNNY_REMOTE_PATH ?? "";
const purgeAccessKey = process.env.BUNNY_PURGE_ACCESS_KEY;
const pullZoneId = process.env.BUNNY_PULL_ZONE_ID;

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".ico", "image/x-icon"],
  [".txt", "text/plain; charset=utf-8"]
]);

function required(name, value) {
  if (!value) {
    throw new Error(`${name} is required`);
  }
}

function normalizeRemotePath(path) {
  return path
    .split("/")
    .filter(Boolean)
    .join("/");
}

async function walk(dir) {
  const entries = await readdir(dir);
  const files = [];

  for (const entry of entries) {
    const absolutePath = join(dir, entry);
    const entryStat = await stat(absolutePath);

    if (entryStat.isDirectory()) {
      files.push(...(await walk(absolutePath)));
    } else {
      files.push(absolutePath);
    }
  }

  return files;
}

async function uploadFile(filePath) {
  const body = await readFile(filePath);
  const localRelativePath = relative(distDir, filePath).split(sep).join("/");
  const targetPath = normalizeRemotePath(`${storageZone}/${remotePath}/${localRelativePath}`);
  const url = `https://${storageHostname}/${targetPath}`;
  const contentType = contentTypes.get(extname(filePath)) ?? "application/octet-stream";

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      AccessKey: storageAccessKey,
      "Content-Type": contentType
    },
    body
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Failed to upload ${localRelativePath}: ${response.status} ${message}`);
  }

  const hash = createHash("sha1").update(body).digest("hex").slice(0, 8);
  console.log(`Uploaded ${localRelativePath} (${hash})`);
}

async function purgePullZone() {
  if (!pullZoneId || !purgeAccessKey) {
    console.log("Skipping Bunny pull zone purge; BUNNY_PULL_ZONE_ID or BUNNY_PURGE_ACCESS_KEY is missing.");
    return;
  }

  const response = await fetch(`https://api.bunny.net/pullzone/${pullZoneId}/purgeCache`, {
    method: "POST",
    headers: {
      AccessKey: purgeAccessKey,
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Failed to purge Bunny pull zone: ${response.status} ${message}`);
  }

  console.log(`Purged Bunny pull zone ${pullZoneId}`);
}

required("BUNNY_STORAGE_ZONE", storageZone);
required("BUNNY_STORAGE_ACCESS_KEY", storageAccessKey);

const files = await walk(distDir);

for (const file of files) {
  await uploadFile(file);
}

await purgePullZone();
