import { useState } from "react";
import { Activity, LineChart, MessageCircle, Radar } from "lucide-react";
import type { Match } from "@data/rcqt";

type Props = {
  match: Match;
};

const panels = [
  {
    id: "momentum",
    label: "Momentum",
    icon: Activity,
    title: "Team score pressure is changing point by point.",
    body:
      "RCQT translates every court into a match-level probability layer, making the broadcast readable even when six matches are moving at once."
  },
  {
    id: "serve",
    label: "Serve Map",
    icon: Radar,
    title: "Serve patterns become graphics, not notes in a binder.",
    body:
      "The front end can display high-value tendencies, pressure serving, and serve-plus-one chains without interrupting the live player."
  },
  {
    id: "report",
    label: "Report",
    icon: LineChart,
    title: "After the match, the stream becomes a structured report.",
    body:
      "Clips, stats, and coaching language are tied back to the video library so players can find the exact evidence behind a plan."
  },
  {
    id: "chat",
    label: "Chat",
    icon: MessageCircle,
    title: "Eventually, coaches ask the match what happened.",
    body:
      "The same indexed match layer can power conversational questions about opponents, form, lineups, and player-specific adjustments."
  }
];

export default function MatchSignalDeck({ match }: Props) {
  const [activeId, setActiveId] = useState(panels[0].id);
  const active = panels.find((panel) => panel.id === activeId) ?? panels[0];
  const ActiveIcon = active.icon;

  return (
    <section className="signal-deck" aria-label={`${match.title} signal deck`}>
      <div className="signal-deck__tabs" role="tablist">
        {panels.map((panel) => {
          const Icon = panel.icon;

          return (
            <button
              key={panel.id}
              className={panel.id === active.id ? "is-active" : ""}
              type="button"
              onClick={() => setActiveId(panel.id)}
              role="tab"
              aria-selected={panel.id === active.id}
            >
              <Icon size={16} />
              {panel.label}
            </button>
          );
        })}
      </div>
      <div className="signal-deck__panel">
        <div className="signal-viz" aria-hidden="true">
          <div className="signal-viz__court" />
          <div className="signal-viz__pulse signal-viz__pulse--one" />
          <div className="signal-viz__pulse signal-viz__pulse--two" />
          <div className="signal-viz__trace" />
        </div>
        <div>
          <span className="signal-deck__icon">
            <ActiveIcon size={20} />
          </span>
          <p className="eyebrow">{match.streamTitle}</p>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <div className="metric-strip">
            {match.stats.slice(0, 3).map((stat) => (
              <span key={stat.label}>
                <strong>{stat.value}</strong>
                {stat.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
