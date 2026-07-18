import { motion } from "framer-motion";
import type { CSSProperties } from "react";

export interface RevealWord {
  t: string;
  em?: boolean;
}

interface RevealWordsProps {
  words: RevealWord[];
  baseDelay?: number;
  stagger?: number;
  emStyle?: CSSProperties;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Word-by-word masked headline reveal: each word slides up from behind an
 * overflow mask in sequence. Same text, same typography — only the entrance
 * is choreographed.
 */
export default function RevealWords({ words, baseDelay = 0, stagger = 0.055, emStyle }: RevealWordsProps) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="mask-word">
            <motion.span
              initial={reduced ? false : { y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease: EASE, delay: baseDelay + i * stagger }}
              style={w.em ? emStyle : undefined}
            >
              {w.t}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
