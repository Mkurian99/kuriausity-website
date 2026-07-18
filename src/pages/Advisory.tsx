import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import Magnetic from "@/components/motion/Magnetic";
import { Search, FileText, Shield, Target, ArrowRight, BookOpen, Network } from "lucide-react";

const processSteps = [
  {
    icon: <Search size={22} />,
    title: "Deep Research Phase",
    desc: "Before you ever sit down for the session, Kurian puts in a week of Rice University-level graduate research into your situation. He investigates your industry, maps your competitive landscape, analyzes comparable case studies, and taps his professional network to gather intelligence you don't have access to.",
  },
  {
    icon: <Network size={22} />,
    title: "Network Activation",
    desc: "Kurian's network spans academia (Rice, UT, Harvard), competitive debate alumni now in law and policy, and professionals across technology, finance, education, and healthcare. He activates the relevant nodes to stress-test assumptions and gather field-level intelligence specific to your decision.",
  },
  {
    icon: <Shield size={22} />,
    title: "Failure Scenario Generation",
    desc: "Drawing on formal training in philosophical logic and a decade of competitive debate argumentation, Kurian aggressively generates failure scenarios. Every assumption is pressure-tested. Every potential blind spot is identified and catalogued. Nothing is taken for granted.",
  },
  {
    icon: <FileText size={22} />,
    title: "Consulting Artifacts",
    desc: "You don't just get advice — you get documents. A structured pre-mortem analysis, risk matrices, decision trees, and strategic recommendations. These are consulting-grade deliverables produced with the rigor of a graduate research project, suitable for sharing with your own advisors, board, or stakeholders.",
  },
  {
    icon: <Target size={22} />,
    title: "Live Pressure-Testing",
    desc: "The session itself is where Kurian presents his findings and subjects your thinking to real-time cross-examination — the same technique that earned him a 9th national ranking in competitive debate. Your reasoning is refined under pressure, not just reviewed.",
  },
];

export default function Advisory() {
  const addRevealRef = useStaggerReveal();

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Subtle decision tree background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: "url(/images/premortem.jpg)" }}
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
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(124,58,237,0.14)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--kq-violet-soft)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Advisory Services
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "var(--kq-em-ghost)",
                fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
                lineHeight: 1.1,
              }}
            >
              Pre-Mortem Advisory:
              <br />
              <em style={{ color: "var(--kq-em-light)" }}>Research-grade</em> decision analysis.
            </h1>

            <p
              className="mt-6 leading-relaxed max-w-3xl"
              style={{ color: "var(--kq-text-muted)", fontSize: "17px" }}
            >
              This is not coaching. This is not consulting theater. The Pre-Mortem Advisory
              Service is the output of an extreme and deep research process — one week of
              investigation for a Single Session, two weeks for a Full Engagement — that
              produces a storehouse of data on your situation, your industry, your competitive
              landscape, and every plausible failure mode. Michael Kurian applies his advanced
              research skills — honed through a Rice University M.A. and years of competitive
              debate research — to your most consequential decision. The session itself is where
              that research is delivered, stress-tested under cross-examination, and turned into
              action.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-xs" style={{ fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)" }}>
              <span className="flex items-center gap-1.5">
                <BookOpen size={13} style={{ color: "var(--kq-em-bright)" }} />
                Rice University M.A. level research
              </span>
              <span className="flex items-center gap-1.5">
                <Network size={13} style={{ color: "var(--kq-em-bright)" }} />
                Professional network intelligence
              </span>
              <span className="flex items-center gap-1.5">
                <Search size={13} style={{ color: "var(--kq-em-bright)" }} />
                ~1 week research per engagement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ THE PROCESS ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        <div
          className="absolute inset-0 bg-cover opacity-[0.14]"
          style={{ backgroundImage: "url(/images/forest-lake.jpg)", backgroundPosition: "center 35%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }}
        />
        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-14">
            <p className="eyebrow mb-4">The Method</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              How a debater and a scholar{" "}
              <em style={{ color: "var(--kq-em-light)" }}>attacks your problem</em>.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal flex gap-6 mb-10 last:mb-0"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 flex flex-col items-center">
                  <div
                    className="kq-icon-circle w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ color: "var(--kq-violet-soft)", "--icon-accent": "var(--kq-violet-flash)" } as React.CSSProperties}
                  >
                    {step.icon}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-[1px] flex-1 mt-3" style={{ background: "var(--kq-opal-rim)" }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3
                    className="text-lg mt-1 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--kq-text-muted)", fontSize: "15px", lineHeight: 1.75 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT YOU RECEIVE ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        <div
          className="absolute inset-0 bg-cover opacity-[0.16]"
          style={{ backgroundImage: "url(/images/artifact-prism.jpg)", backgroundPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }}
        />
        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Deliverables</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Not advice. <em style={{ color: "var(--kq-em-light)" }}>Artifacts</em>.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              Every engagement produces documents you can use — share with your board, your advisors, your stakeholders. These are the same analytical frameworks used in top-tier consulting and graduate research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Pre-Mortem Analysis Document",
                desc: "A structured document mapping every identified failure mode, its probability, impact, and recommended mitigation strategy.",
              },
              {
                title: "Decision Risk Matrix",
                desc: "A consulting-grade risk assessment scoring each vulnerability by likelihood and severity, with prioritized action items.",
              },
              {
                title: "Strategic Recommendation Brief",
                desc: "A concise executive summary with Kurian's recommended path forward, including alternative scenarios and their trade-offs.",
              },
              {
                title: "Consultant Network Activation",
                desc: "At company discretion, specialists from the Kuriausity consultant network — spanning law, policy, academia, and industry — are activated to provide field-level expertise and stress-test assumptions. Included at no additional cost.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal kq-panel p-6"
              >
                <div
                  className="w-10 h-[2px] mb-4"
                  style={{ background: "var(--kq-violet-soft)", opacity: 0.5 }}
                />
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING TABLE ═══════════════ */}
      <section className="section" style={{ background: "var(--kq-obsidian)" }}>
        <div className="container">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Investment</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Two tiers. <em style={{ color: "var(--kq-em-light)" }}>Same rigor</em>.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto" ref={addRevealRef}>
            <div className="overflow-hidden rounded-[10px]" style={{ boxShadow: "var(--kq-shadow-lg)" }}>
              {/* Table header */}
              <div
                className="grid grid-cols-3 gap-4 px-6 py-3"
                style={{ background: "var(--kq-opal-deep)", borderBottom: "0.5px solid var(--kq-opal-rim)" }}
              >
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Service</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Investment</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>What You Receive</span>
              </div>

              {/* Single Session */}
              <div className="grid grid-cols-3 gap-4 px-6 py-5 items-center" style={{ borderBottom: "0.5px solid var(--kq-opal-rim)" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)", fontSize: "15px" }}>
                    Single Session
                  </p>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-text-muted)", marginTop: "2px" }}>
                    90 minutes
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: "bold", color: "var(--kq-cobalt-soft)" }}>
                    $350–$500
                  </span>
                </div>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "13px", lineHeight: 1.6 }}>
                  One full week of extreme, deep research across your industry, competitive landscape, and failure modes — producing a storehouse of data. Delivered as a 90-minute live session with failure scenario analysis and strategic recommendations.
                </p>
              </div>

              {/* Full Engagement */}
              <div className="grid grid-cols-3 gap-4 px-6 py-5 items-center">
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)", fontSize: "15px" }}>
                    Full Engagement
                  </p>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-text-muted)", marginTop: "2px" }}>
                    90-min session + written analysis + 30-min follow-up
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: "bold", color: "var(--kq-em-light)" }}>
                    $750–$1,200
                  </span>
                </div>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "13px", lineHeight: 1.6 }}>
                  Two full weeks of extreme, deep research producing a comprehensive storehouse of data. Everything in the single session plus the full consulting artifact package: written pre-mortem analysis, risk matrix, strategic recommendation brief — plus a 30-minute follow-up session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONSULTANT NETWORK ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Kurian at UST presentation — consultant network */}
        <div className="absolute inset-0 bg-cover opacity-[0.08]" style={{ backgroundImage: "url(/images/kurian-ust.jpg)", backgroundPosition: "72% 40%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 30%, transparent 60%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full"
              style={{ background: "rgba(5,150,105,0.14)" }}
            >
              <Network size={14} style={{ color: "var(--kq-em-bright)" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "var(--kq-em-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Included With Every Engagement
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              The full <em style={{ color: "var(--kq-em-light)" }}>consultant network</em>, at your disposal.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              Every Pre-Mortem Advisory engagement includes at least one activation of the Kuriausity consultant network — specialists across law, policy, academia, technology, finance, and education who are called upon at Kurian's discretion to provide field-level expertise, stress-test assumptions, and widen the analytical lens on your decision. No additional cost. No administrative burden. Just more rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 max-w-4xl mx-auto">
            {[
              {
                title: "Pressure-Testing",
                desc: "Consultants challenge assumptions from their domain expertise — law, policy, science, finance — ensuring no blind spot goes unexamined.",
              },
              {
                title: "Field Intelligence",
                desc: "Access to real-world practitioners and researchers who can validate or refute hypotheses with current, ground-level knowledge.",
              },
              {
                title: "Network Effects",
                desc: "Each consultant brings their own professional network. The activation cascades — connecting you to expertise you didn't know you needed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal pt-5"
                style={{ borderTop: "2px solid var(--kq-em-mid)" }}
              >
                <span
                  className="block mb-3"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.75rem", color: "var(--kq-em-mid)", opacity: 0.6 }}
                >
                  {["I", "II", "III"][i]}
                </span>
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO THIS IS FOR ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Black opal texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: "url(/images/opal.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal text-center mb-12">
            <p className="eyebrow mb-4">Engagement Criteria</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              Only 4 engagements per semester.
            </h2>
            <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
              Because each engagement requires approximately one week of dedicated research, Kurian accepts only four advisory clients per semester. The application is selective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "The High-Stakes Decision Maker",
                desc: "A school choice, career pivot, business commitment, or organizational change where the cost of being wrong exceeds the cost of the engagement by an order of magnitude.",
              },
              {
                title: "The Professional Under Pressure",
                desc: "Executives, entrepreneurs, and professionals who need an external analytical mind to stress-test their thinking before a board, investors, or stakeholders commit.",
              },
              {
                title: "The Strategic Planner",
                desc: "Those facing complex multi-variable decisions where intuition isn't enough — you need structured analysis, research-backed insight, and documented recommendations. During your engagement, Kurian activates his network of specialists across law, policy, academia, and industry to pressure-test assumptions at no additional cost.",
              },
              {
                title: "The Comeback",
                desc: "A situation that didn't go as planned. You need a rigorous post-hoc analysis to understand what happened and a structured path forward that accounts for every lesson learned.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className="reveal kq-panel p-6"
                style={{ borderLeft: "3px solid var(--kq-violet-flash)", borderRadius: "4px 14px 14px 4px" }}
              >
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="section text-center relative overflow-hidden" style={{ background: "var(--kq-em-deep)" }}>
        {/* Malachite stone texture */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.10]" style={{ backgroundImage: "url(/images/malachite.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-em-deep) 0%, transparent 25%, transparent 75%, var(--kq-em-deep) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-em-deep) 0%, transparent 15%, transparent 85%, var(--kq-em-deep) 100%)" }} />

        <div className="container relative z-10">
          <div ref={addRevealRef} className="reveal">
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--kq-em-ghost)", fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)" }}
            >
              Ready for research-grade clarity?
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--kq-em-pale)", fontSize: "16px", opacity: 0.8 }}>
              Submit an inquiry describing your decision and its stakes. If the engagement is a fit, you'll receive a detailed proposal outlining the research scope and timeline.
            </p>
            <Magnetic>
              <Link to="/contact" className="btn-gold">
                Inquire About a Pre-Mortem Session <ArrowRight size={14} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
