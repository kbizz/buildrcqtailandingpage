import { useState } from "react";
import { BrainCircuit, ChartNoAxesCombined, MessageSquareText } from "lucide-react";
import { insightModes } from "@data/rcqt";

const icons = {
  broadcast: ChartNoAxesCombined,
  coach: BrainCircuit,
  player: MessageSquareText
};

export default function InsightConsole() {
  const [activeId, setActiveId] = useState(insightModes[0].id);
  const active = insightModes.find((mode) => mode.id === activeId) ?? insightModes[0];
  const ActiveIcon = icons[active.id as keyof typeof icons] ?? BrainCircuit;

  return (
    <section className="insight-console" aria-label="RCQT AI insight modes">
      <div className="insight-console__tabs" role="tablist" aria-label="Insight modes">
        {insightModes.map((mode) => {
          const Icon = icons[mode.id as keyof typeof icons] ?? BrainCircuit;

          return (
            <button
              key={mode.id}
              type="button"
              className={mode.id === active.id ? "is-active" : ""}
              onClick={() => setActiveId(mode.id)}
              role="tab"
              aria-selected={mode.id === active.id}
            >
              <Icon size={16} />
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="insight-console__panel" role="tabpanel">
        <div className="insight-console__icon">
          <ActiveIcon size={26} />
        </div>
        <p className="eyebrow">AI match layer</p>
        <h3>{active.title}</h3>
        <p>{active.body}</p>
        <div className="insight-console__stat">{active.stat}</div>
        <div className="insight-console__transcript" aria-label="Example AI commentary">
          <span>RCQT</span>
          <p>
            Court 1 is tilting. Hart is winning the first strike, but the next adjustment is the
            backhand return lane. Clip queue ready for staff and broadcast.
          </p>
        </div>
      </div>
    </section>
  );
}
