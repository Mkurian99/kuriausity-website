import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCw } from "lucide-react";

interface Persona {
  id: string;
  title: string;
  spirit: string; // the creature-spirit subtitle
  img: string;
  element: string; // elemental glow color
  elementName: string;
  desc: string; // primary persona description
  legacy: string; // original persona text — preserved, supporting
  legacyTitle: string;
}

const PERSONAS: Persona[] = [
  {
    id: "spark",
    title: "The Spark",
    spirit: "Electric current",
    img: "/images/creature-spark.png",
    element: "#FBBF24",
    elementName: "Electric",
    desc: "The energetic kid with ADHD-related learning differences — boundless passion and energy that just needs a system built for how their mind actually runs.",
    legacyTitle: "The Neurodiverse Thinker",
    legacy:
      "ADHD, anxiety, or other learning differences. Needs a tutor who understands how your brain works — not a one-size-fits-all approach.",
  },
  {
    id: "ember",
    title: "The Ember",
    spirit: "Living flame",
    img: "/images/creature-ember.png",
    element: "#F87171",
    elementName: "Fire",
    desc: "The bright rapscallion — adventurous, allergic to systems and discipline, and too clever for the structures built to contain them.",
    legacyTitle: "The Capable Underperformer",
    legacy:
      "Smart, but grades don't reflect it. Test anxiety, organizational issues, or never taught how to study. This is the student we see most — and the gap closes fastest.",
  },
  {
    id: "sprout",
    title: "The Sprout",
    spirit: "Rooted growth",
    img: "/images/creature-sprout.png",
    element: "#4ADE80",
    elementName: "Leaf",
    desc: "The shy kid with special interests — deep talent and intrigue waiting to come out of its shell and be offered to the world.",
    legacyTitle: "The High Achiever Pushing Further",
    legacy:
      "Already doing well, but wants elite test scores, competitive debate rankings, or admission to top programs.",
  },
  {
    id: "tide",
    title: "The Tide",
    spirit: "Steady current",
    img: "/images/creature-tide.png",
    element: "#38BDF8",
    elementName: "Water",
    desc: "The go-with-the-flow prodigy — internally motivated and genuinely talented, but struggles to stay disciplined and orderly.",
    legacyTitle: "The College-Bound Strategist",
    legacy:
      "Planning for LSAT, SAT, ACT, or college admissions. Needs more than practice tests — needs a system.",
  },
];

function PersonaCard({ p }: { p: Persona }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className={`persona-card ${flipped ? "is-flipped" : ""}`}
      style={{ "--el": p.element } as React.CSSProperties}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${p.title} — flip to read more`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="persona-card__inner">
        {/* ══ Front — the emerald wood carving ══ */}
        <div className="persona-card__face persona-card__front wood-carve">
          <div className="persona-card__frame" />
          <div className="persona-card__art">
            <img src={p.img} alt={`${p.title} — carved wooden creature`} loading="lazy" />
          </div>
          <div className="persona-card__plate">
            <span className="persona-card__title">{p.title}</span>
            <span className="persona-card__spirit">{p.spirit}</span>
          </div>
          <span className="persona-card__chip">{p.elementName}</span>
        </div>

        {/* ══ Back — the persona ══ */}
        <div className="persona-card__face persona-card__back wood-carve">
          <div className="persona-card__frame" />
          <div className="persona-card__back-scroll">
            <p className="persona-card__back-title">{p.title}</p>
            <p className="persona-card__back-desc">{p.desc}</p>
            <div className="persona-card__divider" />
            <p className="persona-card__back-legacy-title">{p.legacyTitle}</p>
            <p className="persona-card__back-legacy">{p.legacy}</p>
          </div>
          <span className="persona-card__flip-hint">
            <RotateCw size={11} style={{ display: "inline", marginRight: 5 }} />
            Flip back
          </span>
        </div>
      </div>
    </div>
  );
}

/** Small external feature: flips on hover/tap into a contact link. */
function WildcardChip() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`wildcard-chip ${flipped ? "is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div className="wildcard-chip__inner">
        <div className="wildcard-chip__face wildcard-chip__front wood-carve">
          Don&rsquo;t feel like any one of these?
        </div>
        <Link
          to="/contact"
          className="wildcard-chip__face wildcard-chip__back wood-carve"
          onClick={(e) => e.stopPropagation()}
        >
          Tell me about it <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function PersonaCards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PERSONAS.map((p) => (
          <PersonaCard key={p.id} p={p} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <WildcardChip />
      </div>
    </>
  );
}
