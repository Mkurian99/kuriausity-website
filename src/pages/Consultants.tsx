import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Star, Users, BookOpen } from "lucide-react";

/*
  Consultants are friends and colleagues of Kuriausity who can be called upon
  to teach classes, offer field-level expertise, provide specialized sessions,
  and widen your student's network — at no additional cost whatsoever.
*/

const coreConsultants = [
  {
    name: "Matt Chen",
    subject: "Mathematics & Competition Math",
    credential: "Putnam Fellow, UT Austin",
    availability: "Advanced math & Olympiad prep",
    starred: true,
  },
  {
    name: "Reed Weiler",
    subject: "Debate & Rhetoric",
    credential: "TOC Finalist, National Circuit",
    availability: "Tournament season & LD coaching",
    starred: true,
  },
  {
    name: "Nat T",
    subject: "Writing & Literature",
    credential: "Published Essayist, Columbia M.F.A.",
    availability: "Essay coaching & AP Literature",
    starred: true,
  },
  {
    name: "Keenan S",
    subject: "Executive Function & ADHD",
    credential: "M.Ed. Educational Psychology",
    availability: "Ongoing coaching partnerships",
    starred: true,
  },
  {
    name: "Dr. Hayes",
    subject: "Science & Research Methodology",
    credential: "Ph.D. Rice University",
    availability: "Semester support & research mentorship",
    starred: true,
  },
  {
    name: "Dr. Monroy",
    subject: "Political Science & Biopolitics",
    credential: "Ph.D. Georgetown University",
    availability: "Guest lectures & debate research",
    starred: true,
  },
  {
    name: "Jerrod Anthraper",
    subject: "Philosophy & Ethics",
    credential: "Rice M.A., Debate Coach",
    availability: "Philosophy seminars & Ethics deep-dives",
    starred: true,
  },
  {
    name: "Dr. Sanket Vyas",
    subject: "Medicine & Science Communication",
    credential: "M.D., Clinical Researcher",
    availability: "Science mentorship & MCAT prep",
    starred: true,
  },
  {
    name: "Dr. Jill Flury",
    subject: "Psychology & Learning Science",
    credential: "Ph.D. Cognitive Psychology",
    availability: "Learning assessments & strategy design",
    starred: true,
  },
  {
    name: "Neer Jain",
    subject: "Technology & Entrepreneurship",
    credential: "Tech Founder, Rice Engineering",
    availability: "Startup mentorship & CS coaching",
    starred: true,
  },
];

const potentialConsultants = [
  { name: "Adam Maung", subject: "Classical Languages" },
  { name: "Nathan", subject: "History & Social Studies" },
  { name: "Shane Rankin", subject: "Music Theory & Composition" },
  { name: "Mac Hayes", subject: "Economics & Finance" },
  { name: "Prithwiraj Choudhury", subject: "Business & Leadership" },
  { name: "Chakra Jonnalagadda", subject: "Engineering & Physics" },
  { name: "Ashish Wadhwani", subject: "Public Policy & Law" },
  { name: "Dr. Shah (Rice)", subject: "Biology & Cognitive Science" },
];

export default function Consultants() {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
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
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Kurian at UST presentation */}
        <div
          className="absolute inset-0 bg-cover opacity-[0.12]"
          style={{ backgroundImage: "url(/images/kurian-ust.jpg)", backgroundPosition: "72% 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 30%, transparent 60%, var(--kq-opal-mid) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 10%, transparent 80%, var(--kq-opal-mid) 100%)" }}
        />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">Consultants</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--kq-em-ghost)", fontSize: "clamp(2.2rem, 5vw, 3.625rem)", lineHeight: 1.1 }}>
              A network of{" "}
              <em style={{ color: "var(--kq-em-light)" }}>exceptional minds</em>,
              <br />
              at your disposal.
            </h1>
            <p className="subheadline max-w-2xl mt-6" style={{ color: "var(--kq-text-muted)", fontSize: "17px" }}>
              These are friends and colleagues of Kuriausity — professors, practitioners,
              researchers, and professionals — who can be called upon to teach classes,
              offer field-level expertise, provide specialized sessions, and widen your
              student's network.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(5,150,105,0.14)" }}>
              <GraduationCap size={14} style={{ color: "var(--kq-em-bright)" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-em-light)", fontWeight: 600 }}>
                No additional cost — included with every engagement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ KURIAN WITH NOTABLE FIGURES ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: "url(/images/thesis-presentation.jpg)", backgroundPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Network</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--kq-em-pale)" }}>
              Connections that <em style={{ color: "var(--kq-em-light)" }}>matter</em>.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              Kurian's professional network extends to some of the most influential thinkers of our time.
            </p>
          </div>

          <div className="grid grid-cols-4 max-w-5xl mx-auto" style={{ borderTop: "0.5px solid var(--kq-opal-rim)", borderBottom: "0.5px solid var(--kq-opal-rim)" }}>
            {[
              { name: "Karl Rove", title: "Former Deputy Chief of Staff" },
              { name: "William Lane Craig", title: "Philosopher & Theologian" },
              { name: "Andreas Jung", title: "Carl Jung's Grandson" },
              { name: "Jeffrey Kripal", title: "Religious Studies Scholar" },
            ].map((person, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal text-center py-8 px-2 md:px-4"
                style={{ borderLeft: i > 0 ? "0.5px solid var(--kq-opal-rim)" : "none" }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, color: "var(--kq-em-pale)", fontSize: "clamp(12px, 2.2vw, 16px)", lineHeight: 1.3 }}>
                  {person.name}
                </p>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "10px", color: "var(--kq-text-muted)", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE CONSULTANT GRID ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: "url(/images/rice-sculpture.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 12%, transparent 88%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Core Network</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--kq-em-pale)" }}>
              <em style={{ color: "var(--kq-em-light)" }}>{coreConsultants.length} specialists</em>{" "}
              across disciplines.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coreConsultants.map((c, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal consultant-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: c.starred
                        ? "linear-gradient(135deg, var(--kq-em-bright), var(--kq-mal-bright))"
                        : "var(--kq-opal-surface)",
                      color: c.starred ? "var(--kq-obsidian)" : "var(--kq-em-light)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                    }}
                  >
                    {c.name.split(" ").map((n) => n[0]).join("")}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)", fontSize: "16px" }}>
                        {c.name}
                      </h3>
                      {c.starred && <Star size={12} style={{ color: "var(--kq-em-bright)", flexShrink: 0 }} />}
                    </div>
                    <p style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-em-mid)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      {c.subject}
                    </p>
                    <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-cobalt-soft)", marginTop: "2px" }}>
                      {c.credential}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 pt-3" style={{ borderTop: "0.5px solid var(--kq-opal-rim)" }}>
                  <BookOpen size={14} style={{ color: "var(--kq-em-mid)" }} />
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-text-muted)" }}>
                    {c.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ POTENTIAL CONSULTANTS ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: "url(/images/keck-hall.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Extended Network</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--kq-em-pale)" }}>
              Additional <em style={{ color: "var(--kq-em-light)" }}>potential</em> consultants.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              The network continues to grow. These professionals are available for specialized engagements on a case-by-case basis.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {potentialConsultants.map((pc, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal px-5 py-3 rounded-full flex items-center gap-2"
                style={{ background: "var(--kq-opal-deep)", boxShadow: "var(--kq-shadow-sm)" }}
              >
                <Users size={12} style={{ color: "var(--kq-em-mid)" }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "var(--kq-em-pale)" }}>{pc.name}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "var(--kq-text-muted)" }}>— {pc.subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        <div className="absolute inset-0 bg-cover opacity-[0.14]" style={{ backgroundImage: "url(/images/aurora-network.jpg)", backgroundPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--kq-em-pale)" }}>
              Accessing the network is{" "}
              <em style={{ color: "var(--kq-em-light)" }}>simple</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Identify the Need", desc: "During your discovery call or ongoing sessions, Michael identifies when a consultant's specialized expertise would benefit your student." },
              { step: "02", title: "Make the Connection", desc: "Michael coordinates directly with the consultant to arrange sessions that complement your student's existing learning plan." },
              { step: "03", title: "Seamless Integration", desc: "Consultant sessions are woven into your program at no extra charge. Your student gets world-class expertise without any administrative burden." },
            ].map((item, i) => (
              <div key={i} ref={addRevealRef} className="reveal text-center pt-6" style={{ borderTop: "2px solid var(--kq-cobalt-flash)" }}>
                <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--kq-cobalt-soft)" }}>{item.step}</p>
                <h3 className="text-lg mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}>{item.title}</h3>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="section text-center relative overflow-hidden" style={{ background: "var(--kq-em-deep)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.10]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-em-deep) 0%, transparent 25%, transparent 75%, var(--kq-em-deep) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-em-deep) 0%, transparent 20%, transparent 80%, var(--kq-em-deep) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal">
            <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--kq-em-ghost)", fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)" }}>
              Ready to meet your student's extended team?
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--kq-em-pale)", fontSize: "16px", opacity: 0.8 }}>
              The discovery call is where we assess what your student needs and which consultants in the network can help. Every engagement includes access to the full consultant network at no additional cost.
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
