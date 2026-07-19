/**
 * Original elemental "spirit" creatures for the persona cards — hand-built SVG,
 * not raster art, so each creature's EYES can glow on hover independently of the
 * body (the whole point of the hover-then-flip beat) and every color is tuned to
 * the obsidian-opal palette. Four kin: Spark (electric), Ember (fire), Sprout
 * (leaf), Tide (water). Carved-obsidian bodies with a luminous opal core.
 *
 * The markup is emitted as a validated SVG string and injected verbatim — the
 * `.creature-eyes` group is what index.css ramps up on hover. Gradient ids are
 * namespaced per creature id (one instance of each per page, so no collisions).
 */

const BODY_PATH =
  "M120,64 C161,64 184,95 184,140 C184,187 157,210 120,210 C83,210 56,187 56,140 C56,95 79,64 120,64 Z";

function defs(id: string, el: string, bodyAlpha: number): string {
  return `
  <defs>
    <radialGradient id="${id}-body" cx="38%" cy="26%" r="90%">
      <stop offset="0" stop-color="${el}" stop-opacity="${bodyAlpha}"/>
      <stop offset="0.5" stop-color="${el}" stop-opacity="${(bodyAlpha * 0.24).toFixed(3)}"/>
      <stop offset="1" stop-color="#050C14"/>
    </radialGradient>
    <radialGradient id="${id}-core" cx="50%" cy="55%" r="55%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="0.3" stop-color="${el}" stop-opacity="0.75"/>
      <stop offset="1" stop-color="${el}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-eye" cx="40%" cy="34%" r="72%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.4" stop-color="${el}"/>
      <stop offset="1" stop-color="#0B1220"/>
    </radialGradient>
    <radialGradient id="${id}-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${el}" stop-opacity="0.95"/>
      <stop offset="1" stop-color="${el}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-ground" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${el}" stop-opacity="0.42"/>
      <stop offset="1" stop-color="${el}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-rim" x1="0.2" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${el}" stop-opacity="0"/>
      <stop offset="1" stop-color="${el}" stop-opacity="0.95"/>
    </linearGradient>
  </defs>`;
}

function eyes(id: string, cy: number, rx: number, ry: number): string {
  const cx1 = 100;
  const cx2 = 140;
  return `
    <g class="creature-eyes">
      <circle cx="${cx1}" cy="${cy}" r="24" fill="url(#${id}-glow)"/>
      <circle cx="${cx2}" cy="${cy}" r="24" fill="url(#${id}-glow)"/>
    </g>
    <ellipse cx="${cx1}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${id}-eye)"/>
    <ellipse cx="${cx2}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${id}-eye)"/>
    <circle cx="${cx1 - 4}" cy="${cy - 6}" r="2.8" fill="#fff" opacity="0.95"/>
    <circle cx="${cx2 - 4}" cy="${cy - 6}" r="2.8" fill="#fff" opacity="0.95"/>
    <circle cx="${cx1 + 4.5}" cy="${cy + 5}" r="1.5" fill="#fff" opacity="0.5"/>
    <circle cx="${cx2 + 4.5}" cy="${cy + 5}" r="1.5" fill="#fff" opacity="0.5"/>`;
}

function mouth(id: string, el: string): string {
  const m: Record<string, string> = {
    spark: `<path d="M110,150 Q120,161 130,150" stroke="${el}" stroke-opacity="0.7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    ember: `<path d="M110,150 Q122,157 131,148" stroke="${el}" stroke-opacity="0.7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    sprout: `<path d="M114,150 Q120,155 126,150" stroke="${el}" stroke-opacity="0.6" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    tide: `<path d="M112,150 Q120,153 128,150" stroke="${el}" stroke-opacity="0.6" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
  };
  return m[id];
}

function body(id: string, el: string): string {
  return `
    <ellipse cx="120" cy="214" rx="58" ry="11" fill="url(#${id}-ground)"/>
    <ellipse cx="102" cy="206" rx="13" ry="9" fill="url(#${id}-body)" stroke="${el}" stroke-opacity="0.35" stroke-width="1.2"/>
    <ellipse cx="138" cy="206" rx="13" ry="9" fill="url(#${id}-body)" stroke="${el}" stroke-opacity="0.35" stroke-width="1.2"/>
    <ellipse cx="60" cy="158" rx="10" ry="14" fill="url(#${id}-body)" stroke="${el}" stroke-opacity="0.3" stroke-width="1.1" transform="rotate(18 60 158)"/>
    <ellipse cx="180" cy="158" rx="10" ry="14" fill="url(#${id}-body)" stroke="${el}" stroke-opacity="0.3" stroke-width="1.1" transform="rotate(-18 180 158)"/>
    <path d="${BODY_PATH}" fill="url(#${id}-body)" stroke="${el}" stroke-opacity="0.5" stroke-width="1.6"/>
    <ellipse cx="120" cy="168" rx="30" ry="27" fill="url(#${id}-core)"/>
    <path d="M158,92 C174,112 179,134 176,158" stroke="url(#${id}-rim)" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <ellipse cx="93" cy="98" rx="15" ry="9" fill="#ffffff" opacity="0.16" transform="rotate(-32 93 98)"/>
    <circle cx="86" cy="140" r="6" fill="${el}" opacity="0.28"/>
    <circle cx="154" cy="140" r="6" fill="${el}" opacity="0.28"/>
    ${mouth(id, el)}`;
}

function features(id: string, el: string): { behind: string; front: string } {
  switch (id) {
    case "spark":
      return {
        behind: "",
        front: `
      <path d="M106,70 L94,34 L107,44 L100,14 L122,42 L114,70 Z" fill="url(#spark-body)" stroke="${el}" stroke-opacity="0.6" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M134,70 L146,34 L133,44 L140,14 L118,42 L126,70 Z" fill="url(#spark-body)" stroke="${el}" stroke-opacity="0.6" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="100" cy="18" r="3" fill="${el}"/><circle cx="140" cy="18" r="3" fill="${el}"/>
      <path d="M182,150 L206,146 L190,164 L212,160 L182,206 L194,172 L174,176 Z" fill="url(#spark-body)" stroke="${el}" stroke-opacity="0.55" stroke-width="1.6" stroke-linejoin="round"/>`,
      };
    case "ember":
      return {
        behind: `<ellipse cx="120" cy="42" rx="30" ry="34" fill="url(#ember-glow)" opacity="0.55"/>`,
        front: `
      <path d="M120,68 C108,50 111,28 121,12 C131,28 133,50 121,68 Z" fill="url(#ember-body)" stroke="${el}" stroke-opacity="0.65" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M100,70 C92,56 95,40 104,30 C110,44 110,58 104,70 Z" fill="url(#ember-body)" stroke="${el}" stroke-opacity="0.55" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M140,70 C148,56 145,40 136,30 C130,44 130,58 136,70 Z" fill="url(#ember-body)" stroke="${el}" stroke-opacity="0.55" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="121" cy="30" r="3.4" fill="${el}" opacity="0.9"/>
      <path d="M176,152 C192,150 200,138 201,126 C193,132 189,128 187,132 C196,146 182,162 172,160 Z" fill="url(#ember-body)" stroke="${el}" stroke-opacity="0.5" stroke-width="1.5" stroke-linejoin="round"/>`,
      };
    case "sprout":
      return {
        behind: "",
        front: `
      <path d="M120,66 C119,48 118,32 126,20 C132,13 141,12 147,17 C138,21 137,32 133,42 C142,35 153,38 157,47 C148,49 139,54 132,63 C128,66 124,67 120,66 Z" fill="url(#sprout-body)" stroke="${el}" stroke-opacity="0.6" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M108,72 C97,63 87,63 80,68 C89,71 94,78 106,78 Z" fill="url(#sprout-body)" stroke="${el}" stroke-opacity="0.5" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M62,148 C53,157 51,170 55,181 C64,172 68,161 66,148 Z" fill="url(#sprout-body)" stroke="${el}" stroke-opacity="0.45" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M178,148 C187,157 189,170 185,181 C176,172 172,161 174,148 Z" fill="url(#sprout-body)" stroke="${el}" stroke-opacity="0.45" stroke-width="1.4" stroke-linejoin="round"/>`,
      };
    case "tide":
      return {
        behind: `
      <path d="M120,74 C152,74 178,108 178,150 C161,137 141,131 120,131 C99,131 79,137 62,150 C62,108 88,74 120,74 Z" fill="url(#tide-body)" opacity="0.9"/>
      <path d="M120,80 L120,140 M120,80 C126,102 130,122 132,140 M120,80 C114,102 110,122 108,140" stroke="${el}" stroke-opacity="0.28" stroke-width="1.4" fill="none"/>`,
        front: `
      <path d="M120,66 C112,52 115,36 122,26 C129,36 132,52 124,66 Z" fill="url(#tide-body)" stroke="${el}" stroke-opacity="0.6" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="122" cy="42" r="3.4" fill="${el}" opacity="0.9"/>
      <path d="M60,150 C50,152 44,160 44,169 C55,167 61,161 63,152 Z" fill="url(#tide-body)" stroke="${el}" stroke-opacity="0.45" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M180,150 C190,152 196,160 196,169 C185,167 179,161 177,152 Z" fill="url(#tide-body)" stroke="${el}" stroke-opacity="0.45" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M102,184 q18,-9 36,0" stroke="${el}" stroke-opacity="0.4" stroke-width="1.6" fill="none"/>`,
      };
    default:
      return { behind: "", front: "" };
  }
}

function creatureMarkup(id: string, el: string): string {
  const ex =
    id === "sprout"
      ? { cy: 130, rx: 13.5, ry: 15.5 }
      : id === "ember"
        ? { cy: 124, rx: 12, ry: 13 }
        : id === "tide"
          ? { cy: 128, rx: 12.5, ry: 14 }
          : { cy: 124, rx: 13, ry: 15 };
  const bodyAlpha = id === "spark" ? 0.3 : 0.4;
  const f = features(id, el);
  return (
    defs(id, el, bodyAlpha) +
    f.behind +
    body(id, el) +
    f.front +
    eyes(id, ex.cy, ex.rx, ex.ry)
  );
}

export default function CreatureSprite({ id, el }: { id: string; el: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: creatureMarkup(id, el) }}
    />
  );
}

/* ── Ornate collectible frame: beveled metal border + corner gems + a top
      element crest + bottom flourish. viewBox matches the 5:7 card so it
      scales without distortion. ── */
function frameMarkup(id: string, el: string): string {
  return `
    <defs>
      <linearGradient id="${id}-metal" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0" stop-color="#42566A"/>
        <stop offset="0.45" stop-color="#6A84A0"/>
        <stop offset="0.55" stop-color="#3E5266"/>
        <stop offset="1" stop-color="#1C2836"/>
      </linearGradient>
    </defs>
    <rect x="7" y="7" width="286" height="406" rx="20" fill="none" stroke="url(#${id}-metal)" stroke-width="5.5"/>
    <rect x="13.5" y="13.5" width="273" height="393" rx="15" fill="none" stroke="${el}" stroke-opacity="0.38" stroke-width="1.5"/>
    <g fill="none" stroke="${el}" stroke-opacity="0.62" stroke-width="2">
      <path d="M34,13 q-21,0 -21,21"/><path d="M266,13 q21,0 21,21"/>
      <path d="M13,386 q0,21 21,21"/><path d="M287,386 q0,21 -21,21"/>
    </g>
    <g fill="none" stroke="${el}" stroke-opacity="0.4" stroke-width="1.4">
      <path d="M46,13 q-33,0 -33,33"/><path d="M254,13 q33,0 33,33"/>
    </g>
    <g fill="url(#${id}-metal)" stroke="${el}" stroke-opacity="0.75" stroke-width="1.2">
      <circle cx="18" cy="18" r="4.5"/><circle cx="282" cy="18" r="4.5"/>
      <circle cx="18" cy="402" r="4.5"/><circle cx="282" cy="402" r="4.5"/>
    </g>
    <g transform="translate(150,9)">
      <path d="M-26,5 L0,-7 L26,5 L0,17 Z" fill="url(#${id}-metal)" stroke="${el}" stroke-opacity="0.7" stroke-width="1.5"/>
      <path d="M-10,5 L0,-1 L10,5 L0,11 Z" fill="${el}" fill-opacity="0.9"/>
      <path d="M-10,5 L0,1 L10,5 L0,3 Z" fill="#fff" fill-opacity="0.4"/>
    </g>
    <g transform="translate(150,411)">
      <path d="M-18,0 L0,7 L18,0" fill="none" stroke="${el}" stroke-opacity="0.5" stroke-width="1.6"/>
      <circle cx="0" cy="2" r="2.6" fill="${el}" fill-opacity="0.75"/>
    </g>`;
}

export function CardFrame({ id, el }: { id: string; el: string }) {
  return (
    <svg
      className="persona-card__frame-svg"
      viewBox="0 0 300 420"
      preserveAspectRatio="none"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: frameMarkup(id, el) }}
    />
  );
}
