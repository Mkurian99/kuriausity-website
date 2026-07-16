import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2016-2018",
    title: "National Circuit Debate",
    detail: "Competed in LD debate at the Tournament of Champions, Harvard, UT Austin, and the University of Houston. Peaked 9th nationally.",
    relevance: "Elite argumentation training that shapes every course.",
  },
  {
    year: "2018",
    title: "National Symposium for Debate - Instructor",
    detail: "Taught argument structure, critical theory, and political philosophy to advanced debaters in Minneapolis.",
    relevance: "First formal teaching experience at the national level.",
  },
  {
    year: "2020-2024",
    title: "Dulles Speech & Debate - Coaching Consultant",
    detail: "15+ TOC bids produced. Harvard Invitational, NY Invitational, TFA Texas State Qualifier champions. Students ranked top 10 nationally.",
    relevance: "Proven track record developing nationally competitive debaters.",
  },
  {
    year: "2022-2024",
    title: "Rice University - M.A. Religion",
    detail: "Masters in Religion from Rice University. Published scholarly work in religious studies journals.",
    relevance: "Advanced training in critical analysis and academic writing.",
  },
  {
    year: "2024-Present",
    title: "Kuriausity Tutoring & Pedagogy",
    detail: "Founded Kuriausity to bring cognition-focused tutoring to Houston families. Every course built on how the mind actually learns.",
    relevance: "The culmination of a decade of competitive debate, teaching, and academic research.",
  },
];

const values = [
  {
    title: "Cognition & Mindfulness First",
    desc: "Every technique is grounded in peer-reviewed research on how the brain learns. We don't follow trends — we follow evidence.",
  },
  {
    title: "Permanent Skills",
    desc: "We don't teach tricks or shortcuts. We rewire how students think, so the improvements last long after the course ends.",
  },
  {
    title: "Individualized Approach",
    desc: "No two brains are the same. We diagnose each student's cognitive patterns and build a custom learning plan around them.",
  },
  {
    title: "Elite Standards",
    desc: "Our methods come from competitive debate, Rice University research, and the cognitive science of learning. We don't settle for 'good enough'.",
  },
];

const coConsultants = [
  {
    initials: "MC",
    name: "Matt Chen",
    subject: "Mathematics & Competition Math",
    credential: "Putnam Fellow, UT Austin",
    bio: "Advanced mathematics tutor who steps in for competition math prep, SAT Math II, and students aiming for physics or math Olympiads. Available for intensive 4-week engagements.",
    availability: "4-week intensive engagements",
  },
  {
    initials: "RW",
    name: "Reed Weiler",
    subject: "Debate & Rhetoric",
    credential: "TOC Finalist, National Circuit",
    bio: "Nationally competitive debater who coaches argumentation, case writing, and advanced rhetorical strategy. Leads Competitive Debate sessions during tournament season and summer intensive camps.",
    availability: "Tournament season & summer camps",
  },
  {
    initials: "NT",
    name: "Nat T",
    subject: "Writing & Literature",
    credential: "Published Essayist, Columbia M.F.A.",
    bio: "Essayist and writing coach who guides students through college application essays, creative writing, and AP Literature. Specializes in helping students find and refine their authentic voice.",
    availability: "Essay season & ongoing writing coaching",
  },
  {
    initials: "KS",
    name: "Keenan S",
    subject: "Executive Function & ADHD",
    credential: "M.Ed. Educational Psychology",
    bio: "Works alongside Michael to build sustainable systems for students with ADHD and executive function challenges — habit formation, time management, and emotional regulation around academic work.",
    availability: "Ongoing coaching partnerships",
  },
];

export default function About() {
  const revealRefs = useRef<HTMLDivElement[]>([]);

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
    <div style={{ paddingTop: "72px" }}>
      {/* ========== HERO - Rice Sally Port Background ========== */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--kq-opal-mid)" }}
      >
        {/* Rice University Sally Port background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: "url(/images/rice-sally-port.jpg)" }}
        />
        {/* Fade overlays for smooth blending */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 30%, transparent 70%, var(--kq-opal-mid) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div ref={addRevealRef} className="reveal">
              <p className="eyebrow mb-4">About</p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "var(--kq-em-ghost)",
                  fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
                }}
              >
                From debate champion to{" "}
                <em style={{ color: "var(--kq-em-light)" }}>learning scientist</em>.
              </h1>
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "var(--kq-text-muted)", fontSize: "16px" }}
              >
                I'm Michael Kurian — Rice M.A., nationally ranked debater, and the
                founder of Kuriausity. I built this practice because I believe every
                student is capable of far more than their current performance suggests.
                The gap between potential and results isn't about intelligence — it's
                about having the right framework.
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: "var(--kq-text-muted)", fontSize: "16px" }}
              >
                After a decade of competitive debate, academic research, and teaching, I
                developed a system that combines cognitive science with the analytical rigor
                of debate training. The result is a tutoring practice that doesn't just
                improve grades — it rewires how students think.
              </p>
            </div>

            {/* Profile visual */}
            <div
              ref={addRevealRef}
              className="reveal flex items-center justify-center"
            >
              <div
                className="w-full aspect-[4/5] max-w-md rounded-[10px] relative overflow-hidden"
                style={{ boxShadow: "var(--kq-shadow-lg)" }}
              >
                <img
                  src="/images/thesis-presentation.jpg"
                  alt="Michael Kurian presenting his thesis research"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% -10%", transform: "scale(1.25)" }}
                />
                {/* Bottom gradient for text legibility */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(7,16,26,0.85) 0%, rgba(7,16,26,0.4) 40%, transparent 70%)",
                  }}
                />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--kq-em-ghost)",
                    }}
                  >
                    Michael Kurian
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "13px",
                      color: "var(--kq-em-light)",
                    }}
                  >
                    M.A. Rice University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES - Kerry at Rice Background ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Secretary Kerry at Rice campus background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url(/images/kerry-campus.jpg)" }}
        />
        {/* Fade overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 12%, transparent 88%, var(--kq-obsidian) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Our Approach</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Four principles that guide{" "}
              <em style={{ color: "var(--kq-em-light)" }}>everything</em> we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal grid grid-cols-[auto_1fr] gap-5"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "2.25rem",
                    lineHeight: 1,
                    color: "var(--kq-em-mid)",
                    opacity: 0.5,
                  }}
                >
                  {["I", "II", "III", "IV"][i]}
                </span>
                <div>
                <h3
                  className="text-base mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    color: "var(--kq-em-pale)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "var(--kq-text-muted)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TIMELINE - Keck Hall Background ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Keck Hall at Rice University background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{ backgroundImage: "url(/images/keck-hall.jpg)" }}
        />
        {/* Fade overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 20%, transparent 80%, var(--kq-opal-mid) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 10%, transparent 90%, var(--kq-opal-mid) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">The Journey</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              A decade of{" "}
              <em style={{ color: "var(--kq-em-light)" }}>building thinkers</em>.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px]"
              style={{ background: "var(--kq-opal-rim)" }}
            />

            {timeline.map((entry, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal relative pl-16 md:pl-20 pb-12"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-[3px]"
                  style={{
                    background: "var(--kq-em-bright)",
                    borderColor: "var(--kq-opal-mid)",
                  }}
                />

                <p
                  className="text-sm font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--kq-cobalt-soft)",
                  }}
                >
                  {entry.year}
                </p>
                <h3
                  className="text-lg mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    color: "var(--kq-em-pale)",
                  }}
                >
                  {entry.title}
                </h3>
                <p
                  className="mb-2"
                  style={{
                    color: "var(--kq-text-muted)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {entry.detail}
                </p>
                <p
                  className="italic text-sm"
                  style={{ color: "var(--kq-em-light)", fontFamily: "var(--font-ui)" }}
                >
                  {entry.relevance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CO-CONSULTANTS - Petrus Alphonsi Background ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Medieval manuscript background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: "url(/images/petrus-alphonsi.jpg)" }}
        />
        {/* Fade overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 12%, transparent 88%, var(--kq-obsidian) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Co-Consultants</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              A network of{" "}
              <em style={{ color: "var(--kq-em-light)" }}>specialized expertise</em>.
            </h2>
            <p
              className="subheadline max-w-2xl mx-auto mt-4"
              style={{ color: "var(--kq-text-muted)" }}
            >
              These colleagues step in for specialized lessons, intensive camps, and
              subject-specific coaching. Each brings elite credentials and a shared
              commitment to cognition-focused pedagogy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coConsultants.map((consultant, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal consultant-card p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Initials avatar */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--kq-em-bright), var(--kq-mal-bright))",
                      color: "var(--kq-obsidian)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                    }}
                  >
                    {consultant.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base mb-0.5"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        color: "var(--kq-em-pale)",
                      }}
                    >
                      {consultant.name}
                    </h3>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--kq-em-mid)",
                        fontWeight: 600,
                      }}
                    >
                      {consultant.subject}
                    </p>
                    <p
                      className="text-xs mb-3"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--kq-cobalt-soft)",
                      }}
                    >
                      {consultant.credential}
                    </p>
                  </div>
                </div>

                <p
                  className="mt-3"
                  style={{
                    color: "var(--kq-text-muted)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {consultant.bio}
                </p>

                <div
                  className="mt-4 flex items-center gap-2 pt-3"
                  style={{ borderTop: "0.5px solid var(--kq-opal-rim)" }}
                >
                  <GraduationCap size={14} style={{ color: "var(--kq-em-mid)" }} />
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--kq-text-muted)",
                    }}
                  >
                    {consultant.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section text-center relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Rice Sally Port */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url(/images/rice-sally-port.jpg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 20%, transparent 80%, var(--kq-opal-mid) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 10%, transparent 90%, var(--kq-opal-mid) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal">
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Want to learn more about our approach?
            </h2>
            <p
              className="subheadline max-w-xl mx-auto mb-8"
              style={{ color: "var(--kq-text-muted)" }}
            >
              The discovery call is where we figure out if Kuriausity is the right
              fit for your student. No pressure. Just clarity.
            </p>
            <a href="/contact" className="btn-primary">
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
