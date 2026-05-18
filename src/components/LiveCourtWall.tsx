import { useMemo, useState } from "react";
import { Camera, LockKeyhole, Play, Radio, Sparkles } from "lucide-react";
import type { Court } from "@data/rcqt";

type Props = {
  courts: Court[];
  compact?: boolean;
};

const statusClass: Record<Court["status"], string> = {
  Live: "is-live",
  "Warming up": "is-warm",
  Review: "is-review",
  Private: "is-private"
};

export default function LiveCourtWall({ courts, compact = false }: Props) {
  const [activeCourtId, setActiveCourtId] = useState(courts[0]?.id ?? "");
  const activeCourt = useMemo(
    () => courts.find((court) => court.id === activeCourtId) ?? courts[0],
    [activeCourtId, courts]
  );

  return (
    <section className={`court-wall ${compact ? "court-wall--compact" : ""}`}>
      <div className="court-wall__stage" aria-live="polite">
        <div className="court-feed" data-status={activeCourt.status}>
          <div className="court-feed__media">
            <div className="court-feed__grid" />
            <div className="court-feed__trajectory court-feed__trajectory--one" />
            <div className="court-feed__trajectory court-feed__trajectory--two" />
            <div className="court-feed__player court-feed__player--a" />
            <div className="court-feed__player court-feed__player--b" />
            <div className="court-feed__hud court-feed__hud--top">
              <span className={`signal-pill ${statusClass[activeCourt.status]}`}>
                {activeCourt.status === "Private" ? <LockKeyhole size={14} /> : <Radio size={14} />}
                {activeCourt.status}
              </span>
              <span>{activeCourt.signal}% signal</span>
            </div>
            <div className="court-feed__hud court-feed__hud--bottom">
              <span>{activeCourt.camera}</span>
              <span>{activeCourt.setting}</span>
            </div>
          </div>
          <div className="court-feed__caption">
            <div>
              <p className="eyebrow">{activeCourt.name}</p>
              <h3>{activeCourt.matchup}</h3>
              <p>{activeCourt.score}</p>
            </div>
            <button className="icon-action" type="button" aria-label={`Open ${activeCourt.name}`}>
              <Play size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="court-wall__list" role="list" aria-label="Court streams">
        {courts.map((court) => (
          <button
            className={`court-tile ${court.id === activeCourt.id ? "is-active" : ""}`}
            type="button"
            key={court.id}
            onClick={() => setActiveCourtId(court.id)}
            role="listitem"
          >
            <span className={`court-tile__status ${statusClass[court.status]}`}>
              {court.status === "Private" ? <LockKeyhole size={13} /> : <Camera size={13} />}
              {court.status}
            </span>
            <strong>{court.name}</strong>
            <span>{court.matchup}</span>
            <small>{court.score}</small>
            <span className="court-tile__tags">
              {court.tags.slice(0, 2).map((tag) => (
                <em key={tag}>{tag}</em>
              ))}
            </span>
          </button>
        ))}
      </div>

      {!compact && (
        <div className="court-wall__footer">
          <Sparkles size={16} />
          <span>
            Camera geometry, AI labels, and broadcast packages ride on the same static-friendly front end.
          </span>
        </div>
      )}
    </section>
  );
}
