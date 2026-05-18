import { useMemo, useState } from "react";
import { PlayCircle, Search, SlidersHorizontal } from "lucide-react";
import type { Video } from "@data/rcqt";

type Props = {
  videos: Video[];
};

export default function VideoLibrary({ videos }: Props) {
  const [query, setQuery] = useState("");

  const filteredVideos = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return videos;
    }

    return videos.filter((video) =>
      [video.title, video.player, video.match, video.type, video.tags.join(" "), video.insight]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query, videos]);

  return (
    <section className="video-library">
      <div className="library-toolbar">
        <label className="library-search">
          <Search size={18} />
          <span className="sr-only">Search video library</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search serve, doubles, player, opponent..."
          />
        </label>
        <button className="icon-action icon-action--label" type="button">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="library-grid">
        {filteredVideos.map((video) => (
          <article className="video-card" key={video.id}>
            <div className="video-card__poster">
              <PlayCircle size={34} />
              <span>{video.duration}</span>
            </div>
            <div className="video-card__body">
              <p className="eyebrow">{video.type}</p>
              <h3>{video.title}</h3>
              <p>{video.insight}</p>
              <div className="video-card__meta">
                <span>{video.player}</span>
                <span>{video.match}</span>
              </div>
              <div className="chip-row">
                {video.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
