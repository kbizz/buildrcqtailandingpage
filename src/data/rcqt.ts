export type Player = {
  slug: string;
  name: string;
  classYear: string;
  hometown: string;
  hand: string;
  archetype: string;
  record: string;
  singlesLine: string;
  doublesTeam: string;
  heroStat: string;
  trend: string;
  image: string;
  profile: string;
  metrics: Array<{
    label: string;
    value: string;
    note: string;
  }>;
};

export type Court = {
  id: string;
  name: string;
  surface: string;
  setting: "Indoor" | "Outdoor";
  status: "Live" | "Warming up" | "Review" | "Private";
  matchup: string;
  score: string;
  camera: string;
  signal: number;
  tags: string[];
};

export type Match = {
  id: string;
  title: string;
  competition: string;
  court: string;
  status: string;
  startTime: string;
  stakes: string;
  streamTitle: string;
  playerA: string;
  playerB: string;
  score: Array<{
    team: string;
    sets: string[];
    points: string;
  }>;
  storyBeats: string[];
  stats: Array<{
    label: string;
    value: string;
    delta: string;
  }>;
};

export type Video = {
  id: string;
  title: string;
  player: string;
  match: string;
  type: string;
  duration: string;
  tags: string[];
  insight: string;
};

export const siteConfig = {
  name: "RCQT.AI",
  tagline: "The live tennis intelligence layer for ambitious college programs.",
  demoUrl:
    import.meta.env.PUBLIC_DEMO_URL ??
    "mailto:hello@rcqt.ai?subject=Schedule%20an%20RCQT.AI%20demo",
  newsletterEndpoint: import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT ?? "#newsletter",
  shopUrl: "https://rcqt.ai/shop",
  contactEmail: "hello@rcqt.ai",
  social: {
    x: "https://x.com/rcqtai",
    instagram: "https://instagram.com/rcqt.ai",
    linkedin: "https://linkedin.com/company/rcqt-ai"
  }
};

export const visualAssets = {
  heroCourt:
    "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=2400&q=90",
  nightCourt:
    "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1800&q=85",
  crowd:
    "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1600&q=85",
  player:
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1600&q=85"
};

export const vanderbiltTeam = {
  name: "Vanderbilt Women's Tennis",
  shortName: "Vanderbilt",
  city: "Nashville",
  state: "Tennessee",
  venue: "Currey Tennis Center",
  conference: "SEC",
  ranking: "No. 12 national seed",
  colors: {
    gold: "#B3A369",
    black: "#000000",
    white: "#FFFFFF",
    smoke: "#F6F2E7"
  },
  social: {
    website: "https://vucommodores.com/sports/wten/",
    instagram: "https://www.instagram.com/vandywtennis/",
    x: "https://x.com/VandyWTennis"
  },
  shopUrl: "https://shop.vucommodores.com/",
  newsletterLabel: "Commodore match alerts",
  note:
    "Fictionalized public demo using Vanderbilt-inspired colors. No official marks, logos, or current athlete likenesses are used."
};

export const players: Player[] = [
  {
    slug: "maya-hart",
    name: "Maya Hart",
    classYear: "Junior",
    hometown: "Atlanta, GA",
    hand: "Right-handed",
    archetype: "First-strike baseliner",
    record: "18-7",
    singlesLine: "Line 1 singles",
    doublesTeam: "Hart / Imani Price",
    heroStat: "71% hold rate after 30-30",
    trend: "Wins 62% of points when her first forehand lands crosscourt.",
    image:
      "https://images.unsplash.com/photo-1627156658536-0f0c0d8c5e7c?auto=format&fit=crop&w=900&q=85",
    profile:
      "Built around early contact and court position. RCQT flags when her return depth pins opponents behind the baseline.",
    metrics: [
      { label: "Return depth", value: "+14%", note: "vs. last 5 matches" },
      { label: "Serve plus one", value: "58%", note: "points won" },
      { label: "Rally ceiling", value: "7", note: "shots before drift" }
    ]
  },
  {
    slug: "imani-price",
    name: "Imani Price",
    classYear: "Senior",
    hometown: "Memphis, TN",
    hand: "Left-handed",
    archetype: "Angle creator",
    record: "15-5",
    singlesLine: "Line 2 singles",
    doublesTeam: "Hart / Imani Price",
    heroStat: "84% net points won in doubles",
    trend: "Backhand slice changes rally height on 41% of extended points.",
    image:
      "https://images.unsplash.com/photo-1623039405147-547794f92e9e?auto=format&fit=crop&w=900&q=85",
    profile:
      "Turns neutral rallies into geometry problems. RCQT highlights her lefty serve patterns and poach triggers.",
    metrics: [
      { label: "Wide serve pressure", value: "66%", note: "free ball rate" },
      { label: "Approach conversion", value: "73%", note: "points won" },
      { label: "Doubles pressure", value: "+21", note: "season index" }
    ]
  },
  {
    slug: "sofia-navas",
    name: "Sofia Navas",
    classYear: "Sophomore",
    hometown: "Austin, TX",
    hand: "Right-handed",
    archetype: "Counterpuncher",
    record: "20-4",
    singlesLine: "Line 3 singles",
    doublesTeam: "Navas / Elena Cho",
    heroStat: "9-1 in deciding sets",
    trend: "Point construction improves after receiving AI break-point clips.",
    image:
      "https://images.unsplash.com/photo-1613918431703-aa50889e3be3?auto=format&fit=crop&w=900&q=85",
    profile:
      "Absorbs pace and stretches opponents into low-percentage finishing zones. RCQT maps her late-set resilience.",
    metrics: [
      { label: "Decider win rate", value: "90%", note: "season" },
      { label: "Break save", value: "61%", note: "under pressure" },
      { label: "Neutral rally win", value: "55%", note: "6+ shots" }
    ]
  }
];

export const courts: Court[] = [
  {
    id: "court-1",
    name: "Court 1",
    surface: "Hard",
    setting: "Outdoor",
    status: "Live",
    matchup: "Hart vs. Romero",
    score: "6-4, 3-2",
    camera: "North mast 22 ft / 48mm",
    signal: 96,
    tags: ["Line 1", "AI graphics", "Fan stream"]
  },
  {
    id: "court-2",
    name: "Court 2",
    surface: "Hard",
    setting: "Outdoor",
    status: "Live",
    matchup: "Price vs. Keller",
    score: "4-6, 6-3, 1-0",
    camera: "South mast 20 ft / 35mm",
    signal: 92,
    tags: ["Line 2", "Coach view", "Momentum"]
  },
  {
    id: "court-3",
    name: "Court 3",
    surface: "Hard",
    setting: "Outdoor",
    status: "Warming up",
    matchup: "Navas vs. Chen",
    score: "Starts 3:30 PM",
    camera: "West mast 18 ft / 35mm",
    signal: 89,
    tags: ["Line 3", "Preview", "Opponent report"]
  },
  {
    id: "court-4",
    name: "Court 4",
    surface: "Hard",
    setting: "Indoor",
    status: "Review",
    matchup: "Doubles replay",
    score: "Archived 14 min ago",
    camera: "Indoor truss 16 ft / 24mm",
    signal: 100,
    tags: ["Doubles", "Video library", "Searchable"]
  },
  {
    id: "court-5",
    name: "Court 5",
    surface: "Hard",
    setting: "Indoor",
    status: "Private",
    matchup: "Coach tactical feed",
    score: "Staff only",
    camera: "Indoor truss 16 ft / 24mm",
    signal: 98,
    tags: ["Private", "Scouting", "AI report"]
  },
  {
    id: "court-6",
    name: "Court 6",
    surface: "Hard",
    setting: "Outdoor",
    status: "Live",
    matchup: "Exhibition feed",
    score: "3-3",
    camera: "East mast 19 ft / 35mm",
    signal: 94,
    tags: ["Development", "Fan stream", "Serve map"]
  }
];

export const matches: Match[] = [
  {
    id: "sec-night-session",
    title: "Vanderbilt vs. Georgia",
    competition: "SEC Night Session",
    court: "Court 1",
    status: "Live",
    startTime: "6:05 PM CT",
    stakes:
      "A late-season conference result that reshapes seeding, national ranking math, and doubles-lineup decisions.",
    streamTitle: "Hart vs. Romero",
    playerA: "Maya Hart",
    playerB: "Elena Romero",
    score: [
      { team: "Vanderbilt", sets: ["6", "3", "40"], points: "2" },
      { team: "Georgia", sets: ["4", "2", "30"], points: "1" }
    ],
    storyBeats: [
      "Hart has won 8 of 11 points when she lands the first forehand through the deuce corner.",
      "Romero is protecting the backhand return lane, opening the wide serve at 30-30.",
      "Team scoreboard projects Vanderbilt clinch probability up 18 points if Court 1 closes in straight sets."
    ],
    stats: [
      { label: "First serve points", value: "68%", delta: "+9 vs. season" },
      { label: "Return depth win", value: "57%", delta: "+14 last 20 min" },
      { label: "Rallies 6+ shots", value: "42%", delta: "Georgia edge" },
      { label: "Broadcast moments", value: "11", delta: "auto-tagged" }
    ]
  },
  {
    id: "regional-final",
    title: "Vanderbilt vs. Texas",
    competition: "Regional Final Preview",
    court: "Court 2",
    status: "Scheduled",
    startTime: "Saturday 1:00 PM CT",
    stakes:
      "A fan-forward match center with historical context, roster form, and a court-by-court stream wall.",
    streamTitle: "Price vs. Walsh",
    playerA: "Imani Price",
    playerB: "Avery Walsh",
    score: [
      { team: "Vanderbilt", sets: ["-", "-", "-"], points: "0" },
      { team: "Texas", sets: ["-", "-", "-"], points: "0" }
    ],
    storyBeats: [
      "Price has created short-ball chances on 66% of wide serves against right-handed returners.",
      "Texas enters with the highest doubles hold rate in the field.",
      "RCQT can package pre-match social clips from last season's deciding tiebreak."
    ],
    stats: [
      { label: "Projected swing courts", value: "2", delta: "Lines 2 and 5" },
      { label: "Fan clips queued", value: "18", delta: "pre-match" },
      { label: "Opponent patterns", value: "47", delta: "indexed" },
      { label: "Newsletter capture", value: "12%", delta: "target rate" }
    ]
  }
];

export const videos: Video[] = [
  {
    id: "vid-serve-heat",
    title: "Hart serve pattern after 30-30",
    player: "Maya Hart",
    match: "Vanderbilt vs. Georgia",
    type: "AI clip reel",
    duration: "4:18",
    tags: ["serve", "pressure", "broadcast"],
    insight:
      "Wide serve creates the first forehand 71% of the time when Hart leads the game score."
  },
  {
    id: "vid-doubles-net",
    title: "Price poach triggers in doubles",
    player: "Imani Price",
    match: "Vanderbilt vs. Auburn",
    type: "Coach cut",
    duration: "7:42",
    tags: ["doubles", "net", "training"],
    insight:
      "The strongest poach windows appear when the opponent return contact is below hip height."
  },
  {
    id: "vid-rally-ceiling",
    title: "Navas deciding-set rally tolerance",
    player: "Sofia Navas",
    match: "Vanderbilt vs. Kentucky",
    type: "Player report",
    duration: "6:03",
    tags: ["rally", "fitness", "decision"],
    insight:
      "Navas wins 64% of 7+ shot rallies after moving opponents through both doubles alleys."
  },
  {
    id: "vid-team-momentum",
    title: "Six-court momentum map",
    player: "Team",
    match: "Vanderbilt vs. Georgia",
    type: "Broadcast package",
    duration: "3:51",
    tags: ["team", "fan", "graphics"],
    insight:
      "Court 1 and Court 4 produced the two biggest team-score probability swings."
  }
];

export const insightModes = [
  {
    id: "broadcast",
    label: "Broadcast",
    title: "The match finally explains itself.",
    body:
      "Lower thirds, player arcs, team stakes, conference implications, and momentum graphics are generated from the same event layer that powers coach review.",
    stat: "11 auto-tagged story beats"
  },
  {
    id: "coach",
    label: "Coach",
    title: "Every court becomes searchable context.",
    body:
      "Staff can move from live court wall to opponent tendencies, private notes, and after-match reports without manually hunting through files.",
    stat: "6 live courts, 1 tactical view"
  },
  {
    id: "player",
    label: "Player",
    title: "The film room learns the player.",
    body:
      "The platform builds a player model over time, translating match video into a plan that is specific, conversational, and easy to act on.",
    stat: "90% decider win rate surfaced"
  }
];
