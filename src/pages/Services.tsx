import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Clock, Users, ArrowRight } from "lucide-react";

/* ═══════════════ CATEGORY TABS ═══════════════ */
const categories = [
  "All",
  "Test Prep",
  "College Readiness",
  "Communication & Debate",
  "Neurodiverse Support",
  "Philosophy & Humanities",
  "Faith & Culture",
  
];

/* ═══════════════ COURSES DATA ═══════════════ */
const courses = [
  {
    id: "neurolsat",
    title: "NeuroLSAT",
    subtitle: "Philosophical logic and debate-based approaches to mastering the LSAT — built for thinkers, not test-grinders.",
    category: "Test Prep",
    grades: "Adult / Pre-Law",
    duration: "90 days",
    price: "$3,499",
    accent: "#0D9488",
    image: "/images/neurolsat.jpg",
  },
  {
    id: "speakers",
    title: "Speakers Corner",
    subtitle: "Structured public speaking and persuasive communication for students who want to command any room.",
    category: "Communication & Debate",
    grades: "Grades 6–12 / Adult",
    duration: "90 days",
    price: "$3,499",
    accent: "#7C3AED",
    image: "/images/speakers.jpg",
  },
  {
    id: "debate",
    title: "Competitive Debate & Forensics",
    subtitle: "National-circuit-level coaching from a 9th-nationally-ranked LD debater and 2× TOC qualifier.",
    category: "Communication & Debate",
    grades: "Grades 6–12 / Adult",
    duration: "120 days",
    price: "$4,000",
    accent: "#2563EB",
    image: "/images/debate.jpg",
  },
  {
    id: "sat",
    title: "SAT Prep",
    subtitle: "Strategic, logic-driven SAT preparation that focuses on reasoning patterns, not rote memorization.",
    category: "Test Prep",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$3,299",
    accent: "#059669",
    image: "/images/sat.jpg",
  },
  {
    id: "act",
    title: "ACT Prep",
    subtitle: "Comprehensive ACT strategy tailored to how your student actually processes timed, high-pressure exams.",
    category: "Test Prep",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$3,299",
    accent: "#2D9A5E",
    image: "/images/act.jpg",
  },
  {
    id: "college",
    title: "College Admissions Masterclass",
    subtitle: "Strategic application coaching — essays, school list, narrative positioning — by someone who understands what committees reward.",
    category: "College Readiness",
    grades: "Grades 10–12",
    duration: "90 days",
    price: "$2,998.99",
    accent: "#C8911F",
    image: "/images/college.jpg",
  },
  {
    id: "essay",
    title: "Essay Writing Tour de Force",
    subtitle: "From thesis construction to voice development — the writing course that teaches students to think on the page.",
    category: "College Readiness",
    grades: "Grades 8–12",
    duration: "90 days",
    price: "$2,998.99",
    accent: "#4A7A35",
    image: "/images/essay.jpg",
  },
  {
    id: "ai",
    title: "AI & Real Ethics",
    subtitle: "A philosophically serious examination of artificial intelligence, consciousness, and the ethical questions no one else is teaching your student.",
    category: "Philosophy & Humanities",
    grades: "Grades 6–12",
    duration: "90 days",
    price: "$2,998.99",
    accent: "#1A5F6B",
    image: "/images/ai.jpg",
  },
  {
    id: "sacred",
    title: "Sacred Texts & Traditions",
    subtitle: "Comparative religion, sacred literature, and the intellectual history of spiritual thought — taught by a Rice religion scholar.",
    category: "Faith & Culture",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,998.99",
    accent: "#8B2635",
    image: "/images/sacred.jpg",
  },
  {
    id: "art",
    title: "World Art AP-reciation",
    subtitle: "Art history as intellectual history — visual culture, aesthetics, and the ideas behind the images.",
    category: "Philosophy & Humanities",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,998.99",
    accent: "#7D4275",
    image: "/images/art.jpg",
  },
  {
    id: "exec",
    title: "Executive Function Training",
    subtitle: "For students with ADHD or learning differences who need structure, systems, and someone who understands how they think.",
    category: "Neurodiverse Support",
    grades: "Grades 6–12",
    duration: "90 days",
    price: "$2,498.99",
    accent: "#2D9A5E",
    image: "/images/exec.jpg",
  },
  {
    id: "philosophy",
    title: "History of Philosophy",
    subtitle: "From Plato to the present — a rigorous survey of Western philosophical thought that teaches critical reasoning at its source.",
    category: "Philosophy & Humanities",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,498.99",
    accent: "#9C5A20",
    image: "/images/philosophy.jpg",
  },
  {
    id: "biopolitics",
    title: "Introduction to Biopolitics",
    subtitle: "Power, the body, and the state — an introduction to one of the most important frameworks in contemporary political thought.",
    category: "Philosophy & Humanities",
    grades: "Grades 10–12",
    duration: "90 days",
    price: "$2,498.99",
    accent: "#3D5A73",
    image: "/images/biopolitics.jpg",
  },

];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("All");
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const filterBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = filterBarRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      e.preventDefault();
      el.scrollLeft += delta;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const filteredCourses =
    activeFilter === "All"
      ? courses
      : courses.filter((c) => c.category === activeFilter);

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
  }, [activeFilter]);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="section text-center" style={{ background: "var(--kq-opal-mid)" }}>
        <div className="container">
          <p className="eyebrow mb-4">Services</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "var(--kq-em-ghost)",
              fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
            }}
          >
            Built for{" "}
            <em style={{ color: "var(--kq-em-light)" }}>thinkers</em>, not test-takers.
          </h1>
          <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
            From ongoing one-on-one tutoring to immersive 90-day courses to structured advisory consultations — every service is grounded in how the brain actually learns.
          </p>
        </div>
      </section>

      {/* ═══════════════════ MONTHLY TUTORING ═══════════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Students laughing background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url(/images/students-laughing.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Monthly Tutoring</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              General{" "}
              <em style={{ color: "var(--kq-em-light)" }}>K-12 Tutoring</em>.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              Core subject support with built-in executive function coaching. Every session includes the organizational systems and focus techniques from the Executive Function program — because most students don't need more content, they need better structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Tier 1: Intensive */}
            <div
              ref={addRevealRef}
              className="reveal tutoring-card p-8 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--kq-opal-grad)" }} />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="kq-icon-circle inline-flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ color: "var(--kq-em-light)" }}
                >
                  <Users size={22} />
                </div>
                <div>
                  <span className="eyebrow" style={{ color: "var(--kq-em-mid)" }}>Intensive</span>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--kq-em-pale)", marginBottom: 0 }}>
                    2 Sessions Weekly
                  </h3>
                </div>
              </div>

              <div className="mb-5">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--kq-cobalt-soft)" }}
                >
                  $1,200
                </span>
                <span className="text-sm ml-2" style={{ color: "var(--kq-text-muted)" }}>/ month</span>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Two 2-hour sessions per week (8 hrs/mo)",
                  "Math Foundations through pre-calculus",
                  "Reading Comprehension & Critical Analysis",
                  "Essay Writing & Argumentation",
                  "Executive Function & Study Systems (built in)",
                  "Science Reasoning & Test-Taking Strategy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: "var(--kq-text-muted)", fontSize: "14px" }}>
                    <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--kq-em-bright)" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-primary w-full justify-center">
                Get Started
              </Link>
            </div>

            {/* Tier 2: Standard */}
            <div
              ref={addRevealRef}
              className="reveal tutoring-card p-8 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #059669, #2D9A5E)" }} />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="kq-icon-circle inline-flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ color: "var(--kq-em-light)" }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <span className="eyebrow" style={{ color: "var(--kq-em-mid)" }}>Standard</span>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--kq-em-pale)", marginBottom: 0 }}>
                    1 Session Weekly
                  </h3>
                </div>
              </div>

              <div className="mb-5">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--kq-em-light)" }}
                >
                  $600
                </span>
                <span className="text-sm ml-2" style={{ color: "var(--kq-text-muted)" }}>/ month</span>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "One 2-hour session per week (4 hrs/mo)",
                  "Math Foundations through pre-calculus",
                  "Reading Comprehension & Critical Analysis",
                  "Essay Writing & Argumentation",
                  "Executive Function & Study Systems (built in)",
                  "Science Reasoning & Test-Taking Strategy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: "var(--kq-text-muted)", fontSize: "14px" }}>
                    <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--kq-em-bright)" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-secondary w-full justify-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 90-DAY COURSES ═══════════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Barton Springs backdrop is visible behind the intro banner, then fades
            to fully covered by the third row of course cards — a banner accent,
            not a backdrop for the whole grid. */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-[0.24]"
          style={{
            backgroundImage: "url(/images/barton-springs-aerial.jpg)",
            backgroundSize: "auto 150%",
            backgroundPosition: "center 72%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 20%, transparent 80%, var(--kq-opal-mid) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 0%, var(--kq-opal-mid) 55%, var(--kq-opal-mid) 100%)" }}
        />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">90-Day Courses</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Immersive programs for{" "}
              <em style={{ color: "var(--kq-em-light)" }}>permanent transformation</em>.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              Each course is a structured 90-day (or 120-day) engagement designed to rewire how your student thinks — not just improve their grades.
            </p>
          </div>

          {/* Filter Bar */}
          <div
            ref={filterBarRef}
            className="filter-bar sticky top-[72px] z-[100] py-3 mb-10"
            style={{
              background: "var(--kq-opal-deep)",
              borderBottom: "0.5px solid var(--kq-opal-rim)",
              borderRadius: "6px",
            }}
          >
            <div className="container flex gap-2 min-w-max px-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses#${course.id}`}
                id={course.id}
                className="course-card overflow-hidden flex flex-col block"
                style={{ textDecoration: "none", color: "inherit", "--course-accent": course.accent } as React.CSSProperties}
              >
                {/* Accent bar */}
                <div className="card-accent-bar" style={{ background: course.accent, height: "3px" }} />

                {/* Course thumbnail image */}
                <div className="w-full aspect-[16/9] relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.currentTarget.parentElement as HTMLDivElement).style.background = `linear-gradient(135deg, ${course.accent}15, ${course.accent}05)`;
                    }}
                  />
                  {/* Dark overlay for text legibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101A]/40 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="grade-badge">{course.grades}</span>
                    <span className="duration-badge">{course.duration}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}
                  >
                    {course.title}
                  </h3>

                  {/* Subtitle */}
                  <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {course.subtitle}
                  </p>

                  {/* Price + Link — push to bottom */}
                  <div className="mt-auto flex items-center justify-between pt-3" style={{ borderTop: "0.5px solid var(--kq-opal-rim)" }}>
                    <span
                      className="font-bold text-sm"
                      style={{ fontFamily: "var(--font-mono)", color: course.accent }}
                    >
                      {course.price}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold"
                      style={{ fontFamily: "var(--font-ui)", color: "var(--kq-em-light)", letterSpacing: "0.05em" }}
                    >
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <p className="text-center py-12" style={{ color: "var(--kq-text-muted)" }}>
              No courses found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ═══════════════════ ADVISORY SERVICES ═══════════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Black opal background — dark iridescent texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url(/images/opal.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full"
              style={{ background: "rgba(124,58,237,0.14)" }}
            >
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-violet-soft)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Advisory Services
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              For{" "}
              <em style={{ color: "var(--kq-violet-soft)" }}>high-stakes decisions</em>{" "}
              that require a rigorous mind.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              The Pre-Mortem Advisory Service is the output of an extreme and deep research process — one week of investigation for a Single Session, two weeks for a Full Engagement — that produces a storehouse of data on your situation, your industry, your competitive landscape, and every plausible failure mode. The session itself is where that research is delivered, stress-tested, and turned into action.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ INVESTMENT ═══════════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Malachite stone texture against dark background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          {/* Advisory Pricing Table */}
          <div className="max-w-3xl mx-auto" ref={addRevealRef}>
            <div className="overflow-hidden rounded-[10px]" style={{ boxShadow: "var(--kq-shadow-lg)" }}>
              {/* Table header */}
              <div
                className="grid grid-cols-3 gap-4 px-6 py-3"
                style={{ background: "var(--kq-opal-deep)", borderBottom: "0.5px solid var(--kq-opal-rim)" }}
              >
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Service</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Investment</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>What You Get</span>
              </div>

              {/* Single Session */}
              <div className="grid grid-cols-3 gap-4 px-6 py-5 items-center" style={{ borderBottom: "0.5px solid var(--kq-opal-rim)" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)", fontSize: "15px" }}>
                    Single Session
                  </p>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-text-muted)", marginTop: "2px" }}>
                    90 minutes · 1 week of deep research
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: "bold", color: "var(--kq-cobalt-soft)" }}>
                    $350–$500
                  </span>
                </div>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "13px", lineHeight: 1.6 }}>
                  One full week of extreme, deep research producing a storehouse of data on your industry, competitive landscape, and failure modes. Delivered as a 90-minute live session with failure scenario analysis and strategic recommendations.
                </p>
              </div>

              {/* Full Engagement */}
              <div className="grid grid-cols-3 gap-4 px-6 py-5 items-center">
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)", fontSize: "15px" }}>
                    Full Engagement
                  </p>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-text-muted)", marginTop: "2px" }}>
                    90-min session + written analysis + 30-min follow-up · 2 weeks of deep research
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: "bold", color: "var(--kq-em-light)" }}>
                    $750–$1,200
                  </span>
                </div>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "13px", lineHeight: 1.6 }}>
                  Two full weeks of extreme, deep research producing a comprehensive storehouse of data. Everything in the single session plus the full consulting artifact package — suitable for sharing with advisors. Includes consultant network activation at no additional cost.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div ref={addRevealRef} className="reveal text-center mt-10">
            <Link to="/advisory" className="btn-primary">
              Inquire About a Pre-Mortem Session <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section className="section text-center relative overflow-hidden" style={{ background: "var(--kq-em-deep)" }}>
        {/* Malachite stone — rich green texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.10]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-em-deep) 0%, transparent 25%, transparent 75%, var(--kq-em-deep) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-em-deep) 0%, transparent 20%, transparent 80%, var(--kq-em-deep) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal">
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--kq-em-ghost)", fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)" }}
            >
              Not sure which service fits your student?
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--kq-em-pale)", fontSize: "16px", opacity: 0.8 }}>
              The discovery call is where we figure out what your student actually needs. No obligation. Just clarity.
            </p>
            <Link to="/contact" className="btn-gold">
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
