import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import CountUp from "@/components/motion/CountUp";
import Magnetic from "@/components/motion/Magnetic";
import SereneField from "@/components/motion/SereneField";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ═══════════════ LIGHT FIELD PALETTE (EWO) ═══════════════ */
const c = {
  bg: "#F6FAF8",
  card: "#FFFFFF",
  border: "#CFE8DC",
  borderLight: "#E2F0EA",
  text: "#07101A",
  textDeep: "#0D1B2B",
  textSoft: "#162636",
  muted: "#5E8B7A",
  emDeep: "#064E3B",
  emMid: "#047857",
  emerald: "#059669",
  emVivid: "#10B981",
  emLight: "#6EE7B7",
  emPale: "#A7F3D0",
  emGhost: "#D1FAE5",
  emFaint: "#ECFDF5",
  mal: "#2D9A5E",
  malLight: "#4ADE80",
  malPale: "#BBF7D0",
  cobalt: "#2563EB",
  cobaltSoft: "#93C5FD",
  cobaltPale: "#DBEAFE",
  violet: "#7C3AED",
  violetSoft: "#A78BFA",
  violetPale: "#EDE9FE",
  grad: "linear-gradient(90deg, #7C3AED, #2563EB, #0D9488, #059669, #2D9A5E)",
};

const stats = [
  { number: "150+", label: "Average SAT Point Gain" },
  { number: "4+", label: "Average ACT Composite Gain" },
  { number: "94%", label: "Families Report Improved Confidence" },
  { number: "15+", label: "TOC Bids in Debate" },
];

const testimonials = [
  {
    quote: "My son went from a 1240 to a 1510 on the SAT. But more importantly, he actually understands the material now. He's not just test-taking, he's thinking.",
    name: "Sarah M.",
    meta: "Parent, Sugar Land, TX",
    course: "SAT Mastery",
    result: "270-point improvement",
  },
  {
    quote: "The debate program changed my daughter's trajectory. She went from a shy student to a confident speaker who can structure an argument in real-time. College admissions noticed.",
    name: "Dr. James R.",
    meta: "Parent, Memorial, Houston",
    course: "Competitive Debate (LD)",
    result: "TOC qualifier, top 10 nationally",
  },
  {
    quote: "I've worked with tutors before. This is different. Michael diagnosed my daughter's actual learning block in the first session. Six months later, she's a different student.",
    name: "Lisa T.",
    meta: "Parent, West University, Houston",
    course: "Executive Function Coaching",
    result: "3.2 to 3.9 GPA in one semester",
  },
  {
    quote: "The LSAT course was incredible. I went from a 158 diagnostic to a 172 on test day. The cognition-based approach actually works — it's not hype.",
    name: "David K.",
    meta: "Rice University, Houston",
    course: "NeuroLSAT",
    result: "172 LSAT (14-point improvement)",
  },
  {
    quote: "My son has ADHD and we've tried every tutor in Houston. Michael was the first one who actually understood how his brain works. The executive function coaching has been transformative.",
    name: "Rachel P.",
    meta: "Parent, Bellaire, Houston",
    course: "Executive Function Coaching",
    result: "Organized, focused, thriving",
  },
  {
    quote: "The college admissions strategy was worth every penny. My daughter got into her dream school (Columbia ED) and the essay work was the difference maker.",
    name: "Michael C.",
    meta: "Parent, Sugar Land, TX",
    course: "College Admissions Strategy",
    result: "Accepted to Columbia University",
  },
];

const outcomes = [
  { metric: "270", unit: "points", desc: "Largest SAT improvement", color: c.cobalt },
  { metric: "14", unit: "points", desc: "Largest LSAT improvement", color: c.emerald },
  { metric: "3.2→3.9", unit: "GPA", desc: "Biggest GPA turnaround", color: c.mal },
  { metric: "Top 10", unit: "national", desc: "Debate ranking achieved", color: c.violet },
];

export default function Results() {
  const addRevealRef = useStaggerReveal();

  // The serene valley resounds across the header AND stats band — its own
  // scroll progress, not a hard cutoff, so it fades out gradually rather
  // than disappearing the instant the header ends.
  const sereneWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sereneProgress } = useScroll({
    target: sereneWrapRef,
    offset: ["start start", "end start"],
  });
  const sereneImageOpacity = useTransform(sereneProgress, [0, 0.7, 1], [0.52, 0.22, 0]);
  const sereneMoteOpacity = useTransform(sereneProgress, [0, 0.8, 1], [1, 0.4, 0]);

  return (
    <div style={{ paddingTop: "72px", background: c.bg }}>
      <div ref={sereneWrapRef} className="relative">
        {/* Serene valley — the world the pixels fall away to reveal. Clear
            and present at the top, fading smoothly on scroll rather than a
            hard cut, so its spirit resounds through the stats band too. */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url(/images/green-valley.jpg)", backgroundPosition: "center 30%", opacity: sereneImageOpacity }}
        />
        <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: sereneMoteOpacity }}>
          <SereneField />
        </motion.div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${c.bg}55 0%, transparent 30%, transparent 70%, ${c.bg} 100%)` }}
        />

        {/* ═══════════════ HEADER ═══════════════ */}
        <section className="section text-center relative z-10">
          <div className="container">
            <motion.p
              className="eyebrow mb-4"
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: c.emMid,
                fontSize: "11px",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              Results
            </motion.p>
            <motion.h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: c.text,
                fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
              }}
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
            >
              The numbers and the{" "}
              <em style={{ color: c.emerald }}>stories</em>{" "}
              behind them.
            </motion.h1>
            <motion.p
              className="max-w-2xl mx-auto mt-4"
              style={{ color: c.muted, fontSize: "15px", lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.34 }}
            >
              Every result below is a real student, a real transformation, and a real
              family who trusted Kuriausity with their student's potential.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════ STATS BAR ═══════════════ */}
        <section className="py-12 relative z-10">
          <div className="container relative z-10">
            <div
              ref={addRevealRef}
              className="reveal grid grid-cols-2 md:grid-cols-4"
              style={{ background: c.card, borderRadius: "14px", boxShadow: "0 1px 2px rgba(5,150,105,0.05), 0 20px 40px -16px rgba(5,150,105,0.16)" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center py-10 px-4"
                  style={{ borderLeft: i > 0 ? `1px solid ${c.borderLight}` : "none" }}
                >
                  <p
                    className="font-bold mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: c.cobalt, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                  >
                    <CountUp value={stat.number} />
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-ui)", color: c.muted }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════ OUTCOME HIGHLIGHTS ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: c.bg }}>
        {/* Rice aerial — very faint */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: "url(/images/rice-aerial.jpg)" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${c.bg} 0%, transparent 25%, transparent 75%, ${c.bg} 100%)` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${c.bg} 0%, transparent 15%, transparent 85%, ${c.bg} 100%)` }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: c.emMid,
                fontSize: "11px",
              }}
            >
              Standout Outcomes
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: c.textSoft }}>
              Real numbers from{" "}
              <em style={{ color: c.emerald }}>real students</em>.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: c.borderLight, borderRadius: "14px", overflow: "hidden" }}>
            {outcomes.map((out, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal text-center p-8"
                style={{ background: c.card, borderTop: `3px solid ${out.color}` }}
              >
                <p className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-mono)", color: out.color }}>
                  <CountUp value={out.metric} />
                </p>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-ui)", color: c.muted }}>
                  {out.unit}
                </p>
                <p className="text-sm" style={{ color: c.muted }}>
                  {out.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: c.emFaint }}>
        {/* Dark library — very faint */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: "url(/images/dark-library.jpg)" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${c.emFaint} 0%, transparent 25%, transparent 75%, ${c.emFaint} 100%)` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${c.emFaint} 0%, transparent 15%, transparent 85%, ${c.emFaint} 100%)` }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: c.emMid,
                fontSize: "11px",
              }}
            >
              What Families Say
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: c.textSoft }}>
              Real families. Real{" "}
              <em style={{ color: c.emerald }}>transformations</em>.
            </h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal break-inside-avoid mb-10 pb-10"
                style={{ borderBottom: i < testimonials.length - 1 ? `1px solid ${c.borderLight}` : "none" }}
              >
                <span
                  className="block text-5xl leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)", color: c.emPale }}
                >
                  &ldquo;
                </span>
                <p className="italic mb-4 -mt-2" style={{ fontFamily: "var(--font-body)", color: c.textSoft, fontSize: "15px", lineHeight: 1.7 }}>
                  {t.quote}
                </p>
                <p
                  className="text-xs font-semibold mb-3"
                  style={{ color: c.emDeep, fontFamily: "var(--font-ui)", letterSpacing: "0.03em" }}
                >
                  {t.result}
                </p>
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-ui)", color: c.textDeep }}>
                  {t.name}
                </p>
                <p className="text-xs" style={{ fontFamily: "var(--font-ui)", color: c.muted }}>
                  {t.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VIDEO TESTIMONIALS — the next clearing in this serene space ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: c.bg }}>
        <SereneField motes={22} />
        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: c.emMid,
                fontSize: "11px",
              }}
            >
              Coming Soon
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: c.textSoft }}>
              Their stories, <em style={{ color: c.emerald }}>on film</em>.
            </h2>
            <p className="max-w-2xl mx-auto mt-4" style={{ color: c.muted, fontSize: "15px", lineHeight: 1.7 }}>
              Video testimonials from Kuriausity families are being filmed now.
              This clearing is ready for them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Family Story", "Student Story", "Debater Story"].map((label, i) => (
              <div
                key={label}
                ref={addRevealRef}
                className="reveal video-tile aspect-video flex items-center justify-center"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, ${c.emGhost} 0%, ${c.emPale} 45%, ${i === 1 ? c.cobaltPale : c.malPale} 100%)`,
                  boxShadow: "0 1px 2px rgba(5,150,105,0.05), 0 16px 36px -18px rgba(5,150,105,0.25)",
                }}
              >
                {/* Play button silhouette */}
                <div
                  className="video-tile__play flex items-center justify-center w-14 h-14 rounded-full"
                  style={{ background: "rgba(255,255,255,0.92)", boxShadow: "0 4px 14px rgba(5,150,105,0.2)" }}
                >
                  <Play size={20} style={{ color: c.emerald, marginLeft: 2 }} fill={c.emerald} />
                </div>
                {/* Status chip */}
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)" }}
                >
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.emMid }}>
                    {label} — In Production
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="section text-center relative overflow-hidden" style={{ background: c.emDeep }}>
        {/* Malachite — rich on dark emerald */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${c.emDeep} 0%, transparent 25%, transparent 75%, ${c.emDeep} 100%)` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${c.emDeep} 0%, transparent 15%, transparent 85%, ${c.emDeep} 100%)` }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal">
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: c.emGhost, fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)" }}
            >
              Ready to write your success story?
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: c.emPale, fontSize: "16px", opacity: 0.9 }}>
              Every result starts with a conversation. Book your free discovery call
              and let's figure out what your student is capable of.
            </p>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.06em",
                  background: c.card,
                  color: c.emDeep,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                }}
              >
                Book a Free Discovery Call
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
