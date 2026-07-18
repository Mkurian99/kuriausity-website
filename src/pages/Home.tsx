import { Suspense, lazy, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTransition } from "@/context/transition";

const HeroBrain = lazy(() => import("@/components/three/HeroBrain"));

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

// Course data (subset for homepage preview)
const featuredCourses = [
  {
    id: "neurolsat",
    title: "NeuroLSAT",
    category: "Test Prep",
    grades: "Adult / Pre-Law",
    duration: "90 days",
    description: "Philosophical logic and debate-based approaches to mastering the LSAT — built for thinkers, not test-grinders.",
    accent: "#0D9488",
  },
  {
    id: "speakers",
    title: "Speakers Corner",
    category: "Communication & Debate",
    grades: "Grades 6–12",
    duration: "90 days",
    description: "Structured public speaking and persuasive communication for students who want to command any room.",
    accent: "#7C3AED",
  },
  {
    id: "exec",
    title: "Executive Function Training",
    category: "Neurodiverse Support",
    grades: "Grades 6–12",
    duration: "90 days",
    description: "For students with ADHD or learning differences who need structure, systems, and someone who understands how they think.",
    accent: "#2D9A5E",
  },
];

// Testimonials — real Kuriausity families (quotes being collected)
const testimonials = [
  {
    quote: "(Testimonial being finalized — Lisa worked with Kuriausity on SAT prep and saw a 200+ point improvement.)",
    name: "Lisa Ring",
    meta: "SAT Mastery",
  },
  {
    quote: "(Testimonial being finalized — Sara's student worked with Kuriausity on college admissions and essay writing.)",
    name: "Sara Mischler",
    meta: "College Admissions Masterclass",
  },
  {
    quote: "(Testimonial being finalized — Robert's student participated in the Competitive Debate program.)",
    name: "Robert",
    meta: "Competitive Debate",
  },
];

// Credential pills
const credentials = [
  { text: "Rice University M.A." },
  { text: "9th Nationally in LD Debate" },
  { text: "M.A. Rice University" },
  { text: "Published Scholar" },
  { text: "Decade of Experience" },
  { text: "Measurable Results" },
];

export default function Home() {
  const { startResults, diving } = useTransition();
  const revealRefs = useRef<HTMLDivElement[]>([]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div>
      {/* ========== HERO ========== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ marginTop: 0, paddingTop: "72px" }}
      >
        {/* Ambient radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 75% 45%, rgba(5,150,105,0.18) 0%, rgba(13,148,136,0.08) 40%, rgba(7,16,26,0) 70%)",
          }}
        />

        {/* 3D brain - fills the right side, sits BEHIND all text */}
        <div
          className="absolute inset-0 cursor-pointer"
          style={{ zIndex: 1 }}
          onClick={startResults}
          title="Enter the Mind - see the results"
        >
          <div className="absolute inset-0 md:left-[35%] lg:left-[40%]">
            <Suspense fallback={null}>
              {!diving && <HeroBrain />}
            </Suspense>
          </div>
        </div>

        {/* Hero text content - sits ABOVE the brain */}
        <div className="relative container px-6 md:px-12 w-full pointer-events-none" style={{ zIndex: 10 }}>
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.13, delayChildren: 0.15 },
              },
            }}
          >
            <motion.p
              variants={item}
              className="eyebrow mb-7"
              style={{ color: "var(--kq-em-mid)" }}
            >
              Houston &amp; Sugar Land, TX &middot; Online Nationwide
            </motion.p>

            <motion.h1
              variants={item}
              className="leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "var(--kq-em-ghost)",
              }}
            >
              Your mind is{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--kq-em-light)",
                  fontWeight: 400,
                }}
              >
                more capable
              </em>
              <br />
              than any grade could encapsulate.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg leading-relaxed max-w-xl mb-10 font-light"
              style={{ color: "var(--kq-text-muted)" }}
            >
              Sixteen specialized courses in test prep, college readiness,
              debate, executive function, and philosophy — taught by a Rice
              University M.A. and nationally ranked debater.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 mb-8 pointer-events-auto"
            >
              <Link to="/contact" className="btn-primary">
                Book a Free Discovery Call
              </Link>
              <button onClick={startResults} className="btn-gold">
                Real Results
              </button>
            </motion.div>


          </motion.div>
        </div>

      </section>

      {/* ========== CREDENTIAL BAR ========== */}
      <div className="credential-bar">
        {/* Barton Springs — faded backdrop behind the accolades ticker */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.24]"
          style={{ backgroundImage: "url(/images/barton-springs-aerial.jpg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--kq-opal-deep) 0%, transparent 20%, transparent 80%, var(--kq-opal-deep) 100%)",
          }}
        />
        <div className="credential-track relative z-10">
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="flex items-center gap-0"
              aria-hidden={setIndex === 1 ? "true" : undefined}
            >
              {credentials.map((cred, i) => (
                <div key={i} className="credential-pill">
                  <span>{cred.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========== PROMISE SECTION ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Malachite stone texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.10]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
            {/* Left: anchor headline, left-aligned, sticky on scroll */}
            <div ref={addRevealRef} className="reveal lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow mb-4">Why Families Choose Kuriausity</p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: "var(--kq-em-pale)",
                  }}
                >
                  The gap between{" "}
                  <em style={{ color: "var(--kq-em-light)", fontWeight: 400 }}>
                    potential
                  </em>{" "}
                  and performance is where we live.
                </h2>
              </div>
            </div>

            {/* Right: ruled dossier list — no icons, no boxes */}
            <div className="lg:col-span-8 lg:col-start-6">
              <div className="space-y-12">
                {[
                  {
                    mark: "I",
                    title: "Diagnose First, Tutor Second",
                    desc: "We identify the root cognitive pattern before teaching content. Most tutors skip this step entirely — and students stay stuck.",
                  },
                  {
                    mark: "II",
                    title: "Cognition & Mindfulness Methods",
                    desc: "Every technique is backed by research in how the brain actually learns. No gimmicks. Just what works.",
                  },
                  {
                    mark: "III",
                    title: "Communication as Master Skill",
                    desc: "From debate to essays to executive function — we teach students to think clearly and express those thoughts effectively.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    ref={addRevealRef}
                    className="reveal grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0"
                    style={{ borderBottom: i < 2 ? "0.5px solid var(--kq-opal-rim)" : "none" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "2.75rem",
                        lineHeight: 1,
                        color: "var(--kq-em-mid)",
                        opacity: 0.5,
                      }}
                    >
                      {card.mark}
                    </span>
                    <div>
                      <h3
                        className="text-lg mb-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 500,
                          color: "var(--kq-em-pale)",
                        }}
                      >
                        {card.title}
                      </h3>
                      <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO IT'S FOR ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Black opal texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url(/images/opal.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-16">
            <p className="eyebrow mb-4">Who This Is For</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              For every student in need of{" "}
              <em style={{ color: "var(--kq-em-light)" }}>clarity and systems</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Capable Underperformer",
                desc: "Smart, but grades don't reflect it. Test anxiety, organizational issues, or never taught how to study. This is the student we see most — and the gap closes fastest.",
                featured: true,
              },
              {
                title: "The High Achiever Pushing Further",
                desc: "Already doing well, but wants elite test scores, competitive debate rankings, or admission to top programs.",
              },
              {
                title: "The Neurodiverse Thinker",
                desc: "ADHD, anxiety, or other learning differences. Needs a tutor who understands how your brain works — not a one-size-fits-all approach.",
              },
              {
                title: "The College-Bound Strategist",
                desc: "Planning for LSAT, SAT, ACT, or college admissions. Needs more than practice tests — needs a system.",
              },
            ].map((card, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className={`reveal kq-panel ${card.featured ? "md:col-span-2 lg:col-span-3 p-8" : "p-6"}`}
                style={{ borderLeft: "3px solid var(--kq-em-bright)", borderRadius: "4px 14px 14px 4px" }}
              >
                <h3
                  className={card.featured ? "text-xl mb-3" : "text-base mb-3"}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    color: "var(--kq-em-pale)",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "var(--kq-text-muted)", fontSize: card.featured ? "15px" : "14px", lineHeight: 1.7, maxWidth: card.featured ? "34rem" : undefined }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COURSES PREVIEW ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Dark library interior background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url(/images/dark-library.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-16">
            <p className="eyebrow mb-4">90-Day Courses</p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Sixteen ways to become a{" "}
              <em style={{ color: "var(--kq-em-light)" }}>better thinker</em>.
            </h2>
            <p className="subheadline max-w-2xl mx-auto">
              Every course is built on the cognitive science of how humans actually
              learn. Not rote memorization. Not tricks. Permanent cognitive
              upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                ref={addRevealRef}
                className="reveal course-card overflow-hidden"
              >
                <div
                  className="card-accent-bar"
                  style={{ background: course.accent, height: "3px" }}
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="grade-badge">{course.grades}</span>
                    <span className="duration-badge">{course.duration}</span>
                  </div>
                  <h3
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      color: "var(--kq-em-pale)",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--kq-text-muted)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {course.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 font-semibold text-sm transition-opacity hover:opacity-70 cursor-pointer"
                    style={{
                      color: "var(--kq-em-light)",
                      fontFamily: "var(--font-ui)",
                      letterSpacing: "0.05em",
                    }}
                    title="Detailed course pages coming soon"
                  >
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Students laughing */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url(/images/students-laughing.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-16">
            <p className="eyebrow mb-4">Results</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Real families.{" "}
              <em style={{ color: "var(--kq-em-light)" }}>Real transformations</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Featured testimonial — large, quiet, no card box */}
            <div ref={addRevealRef} className="reveal lg:col-span-3 relative">
              <span
                className="block text-8xl leading-none mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--kq-em-light)", opacity: 0.25 }}
              >
                &ldquo;
              </span>
              <p
                className="italic -mt-8 mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--kq-text-primary)",
                  fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {testimonials[0].quote}
              </p>
              <div className="w-10 h-[2px] mb-3" style={{ background: "var(--kq-em-light)", opacity: 0.4 }} />
              <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-ui)", color: "var(--kq-em-pale)" }}>
                {testimonials[0].name}
              </p>
              <p className="text-xs" style={{ fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)" }}>
                {testimonials[0].meta}
              </p>
            </div>

            {/* Supporting testimonials — compact, stacked, ruled */}
            <div className="lg:col-span-2 space-y-8">
              {testimonials.slice(1).map((t, i) => (
                <div
                  key={i}
                  ref={addRevealRef}
                  className="reveal pl-5"
                  style={{ borderLeft: "2px solid var(--kq-opal-rim)" }}
                >
                  <p
                    className="italic mb-3"
                    style={{ fontFamily: "var(--font-body)", color: "var(--kq-text-primary)", fontSize: "14px", lineHeight: 1.7 }}
                  >
                    {t.quote}
                  </p>
                  <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-ui)", color: "var(--kq-em-pale)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)" }}>
                    {t.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-em-deep)" }}>
        {/* Malachite stone texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.10]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-em-deep) 0%, transparent 25%, transparent 75%, var(--kq-em-deep) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-em-deep) 0%, transparent 15%, transparent 85%, var(--kq-em-deep) 100%)" }} />

        <div className="container text-center relative z-10">
          <div ref={addRevealRef} className="reveal">
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "var(--kq-em-ghost)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)",
              }}
            >
              Ready to see what's possible?
            </h2>
            <p
              className="max-w-xl mx-auto mb-8"
              style={{
                color: "var(--kq-em-pale)",
                fontSize: "16px",
                opacity: 0.8,
              }}
            >
              The discovery call is free, 45 minutes, and completely without
              obligation. We'll figure out what your student needs and whether
              Kuriausity is the right fit.
            </p>
            <Link to="/contact" className="btn-gold text-base px-8 py-4">
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
