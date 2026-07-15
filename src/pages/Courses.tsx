import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

interface CourseDetail {
  id: string;
  title: string;
  category: string;
  grades: string;
  duration: string;
  price: string;
  accent: string;
  image: string;
  description: string;
  whatYouLearn: string[];
  whoItsFor: string;
  note?: string;
}

const courseDetails: CourseDetail[] = [
  {
    id: "neurolsat",
    image: "/images/neurolsat.jpg",
    accent: "#0D9488",
    title: "NeuroLSAT",
    category: "Test Prep",
    grades: "Adult / Pre-Law",
    duration: "90 days",
    price: "$3,499",
    description:
      "The LSAT is not a memorization test. It is a reasoning test. And the best way to master it is not through endless practice problems, but through understanding the underlying logical structures that the test is designed to assess. NeuroLSAT uses philosophical logic and debate-based analytical frameworks to rewire how you approach arguments, logic games, and reading comprehension. This course treats the LSAT as what it truly is: an applied logic exam.",
    whatYouLearn: [
      "Formal logic systems and their application to LSAT reasoning",
      "Debate-style argument mapping for logical reasoning sections",
      "Structural pattern recognition for logic games",
      "Speed-reading techniques grounded in cognitive science",
      "Anxiety management under timed conditions",
      "How to think like a lawyer, not just test like one",
    ],
    whoItsFor:
      "Adults preparing for the LSAT who want more than practice tests. If you've hit a plateau with traditional prep, this course offers the conceptual depth to break through.",
    note: "Also available as a component of the Pre-Mortem Advisory service for career pivoters.",
  },
  {
    id: "speakers",
    image: "/images/speakers.jpg",
    accent: "#7C3AED",
    title: "Speakers Corner",
    category: "Communication & Debate",
    grades: "Grades 6–12",
    duration: "90 days",
    price: "$3,499",
    description:
      "Most students can speak. Very few can command a room. Speakers Corner is structured public speaking and persuasive communication training that builds from the ground up: voice control, body language, argument structure, audience analysis, and the psychological principles of persuasion. Every session includes live practice with real-time feedback. By the end of 90 days, your student will not just be comfortable speaking — they will be someone people listen to.",
    whatYouLearn: [
      "Vocal projection, pacing, and control techniques",
      "Body language and non-verbal communication mastery",
      "Classical and modern rhetorical frameworks",
      "Audience analysis and adaptive messaging",
      "Impromptu speaking under pressure",
      "Speech writing: from outline to delivery",
    ],
    whoItsFor:
      "Students who dread presentations, aspiring leaders, or anyone who wants to be heard in high-stakes conversations — college interviews, debate rounds, or professional settings.",
  },
  {
    id: "debate",
    image: "/images/debate.jpg",
    accent: "#2563EB",
    title: "Competitive Debate & Forensics",
    category: "Communication & Debate",
    grades: "Grades 6–12 / Adult",
    duration: "120 days",
    price: "$4,000",
    description:
      "National-circuit-level coaching from someone who has been there. Michael Kurian peaked 9th nationally in LD debate and qualified for the Tournament of Champions twice. This course covers every aspect of competitive debate: case construction, cross-examination strategy, flowing, framework debate, kritiks, and the research skills that separate good debaters from great ones. Whether your student is brand new or aiming for a TOC bid, this program meets them where they are and pushes them to the next level.",
    whatYouLearn: [
      "Case writing: affirmative and negative strategies",
      "Cross-examination techniques and trap-setting",
      "Advanced flowing and real-time analysis",
      "Framework debate and philosophical positions",
      "Research methodology for cutting-edge evidence",
      "Tournament preparation and mental strategy",
    ],
    whoItsFor:
      "Students in Lincoln-Douglas, Policy, or Public Forum debate who want to compete at the regional, state, or national level. Prior debate experience helpful but not required.",
    note: "This course includes access to the competitive debate consultant network for specialized event coaching.",
  },
  {
    id: "sat",
    image: "/images/sat.jpg",
    accent: "#059669",
    title: "SAT Prep",
    category: "Test Prep",
    grades: "Grades 10–12",
    duration: "90 days",
    price: "$3,299",
    description:
      "Most SAT prep programs teach tricks. We teach reasoning. The SAT is designed to assess how you think, not what you've memorized. This course focuses on the underlying patterns that govern every section of the test — the logical structures in Reading, the mathematical reasoning in Math, and the rhetorical awareness in Writing. Students typically see improvements of 150-270 points.",
    whatYouLearn: [
      "Pattern recognition for SAT reading comprehension",
      "Algebraic reasoning shortcuts that actually make sense",
      "Grammar rules tested on the SAT — and why they matter",
      "Test-day strategy and time management",
      "Error analysis: understanding why you miss questions",
      "The 5 question types that determine your score",
    ],
    whoItsFor:
      "Students scoring between 1050 and 1400 who want to push into the 1400-1550+ range. Also effective for high scorers seeking the last 50-100 points.",
  },
  {
    id: "act",
    image: "/images/act.jpg",
    accent: "#2D9A5E",
    title: "ACT Prep",
    category: "Test Prep",
    grades: "Grades 10–12",
    duration: "90 days",
    price: "$3,299",
    description:
      "The ACT rewards speed and strategy as much as knowledge. This course builds both. We diagnose how your student processes timed, high-pressure exams and build a custom strategy around their cognitive profile. The science section is decoded as a logic puzzle. The reading section is streamlined through structural analysis. The math section is approached through reasoning, not rote calculation.",
    whatYouLearn: [
      "Time management strategy tailored to your processing speed",
      "Science section decoded as applied logic",
      "Reading structural analysis for speed and accuracy",
      "Math reasoning vs. math calculation — knowing the difference",
      "The specific grammar rules the ACT actually tests",
      "Full-length timed practice with detailed review",
    ],
    whoItsFor:
      "Students who perform well in school but struggle with the ACT's time pressure, or students who prefer the ACT's content structure over the SAT's reasoning focus.",
  },
  {
    id: "college",
    image: "/images/college.jpg",
    accent: "#C8911F",
    title: "College Admissions Masterclass",
    category: "College Readiness",
    grades: "Grades 10–12",
    duration: "90 days",
    price: "$2,998.99",
    description:
      "College admissions is not a lottery. It is a strategy game — and this course teaches you how to play it well. From building a strategic school list to crafting essays that actually differentiate, from understanding what admissions committees reward to positioning your narrative for maximum impact. This is the difference between submitting applications and executing an admissions strategy.",
    whatYouLearn: [
      "School list strategy: reach, target, and safety defined correctly",
      "Essay brainstorming and narrative positioning",
      "The three things admissions officers actually look for",
      "Interview preparation and demonstrated interest",
      "Application timeline and deadline management",
      "How to read between the lines of admissions data",
    ],
    whoItsFor:
      "Juniors and seniors who want to maximize their chances at selective schools, or sophomores who want to start building their profile strategically.",
    note: "This course pairs naturally with the Essay Writing Tour de Force for a comprehensive application package.",
  },
  {
    id: "essay",
    image: "/images/essay.jpg",
    accent: "#4A7A35",
    title: "Essay Writing Tour de Force",
    category: "College Readiness",
    grades: "Grades 8–12",
    duration: "90 days",
    price: "$2,998.99",
    description:
      "Most students don't know how to write because they've never been taught how to think on the page. This course changes that. From thesis construction to voice development, from paragraph architecture to the art of the transition — every element of strong writing is broken down, practiced, and mastered. Students emerge not just with better essays, but with a permanent upgrade to their written communication ability.",
    whatYouLearn: [
      "Thesis construction: finding and sharpening your argument",
      "Paragraph architecture: topic, evidence, analysis, transition",
      "Voice development: writing that sounds like you, only better",
      "The art of the opening and the closing",
      "Editing as thinking: how to revise effectively",
      "Application to academic, creative, and professional writing",
    ],
    whoItsFor:
      "Students who struggle with writing assignments, students applying to colleges with heavy essay requirements, or anyone who wants to communicate more effectively in writing.",
  },
  {
    id: "ai",
    image: "/images/ai.jpg",
    accent: "#1A5F6B",
    title: "AI & Real Ethics",
    category: "Philosophy & Humanities",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,998.99",
    description:
      "Everyone is talking about AI. Almost no one is teaching students to think about it philosophically. This course takes AI ethics seriously — not as a list of do's and don'ts, but as a set of deep questions about consciousness, autonomy, bias, and the future of human work. Students engage with primary philosophical texts, analyze real AI systems, and develop their own ethical frameworks for navigating an AI-saturated world.",
    whatYouLearn: [
      "The philosophy of consciousness and machine intelligence",
      "Algorithmic bias: what it is, how it works, why it matters",
      "Ethical frameworks: utilitarian, deontological, virtue-based approaches",
      "The labor question: AI, automation, and the future of work",
      "Policy analysis: existing AI regulation and what's missing",
      "How to evaluate AI claims in media and marketing",
    ],
    whoItsFor:
      "Students interested in technology, philosophy, policy, or ethics. No programming background required — though a technical consultant is available for students who want to explore the engineering side.",
    note: "Technical deep-dives with Dr. Marcus Nguyen (CMU) available for interested students at no additional cost.",
  },
  {
    id: "sacred",
    image: "/images/sacred.jpg",
    accent: "#8B2635",
    title: "Sacred Texts & Traditions",
    category: "Faith & Culture",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,998.99",
    description:
      "Comparative religion taught the way it should be: with intellectual rigor, historical depth, and genuine respect for the traditions being studied. Drawing on Michael's M.A. in Religion from Rice University, this course surveys the major world religions through their primary texts — the Hebrew Bible, the New Testament, the Quran, the Bhagavad Gita, Buddhist sutras, and foundational philosophical texts. Students learn not just what these traditions believe, but how they think.",
    whatYouLearn: [
      "Primary source analysis of major sacred texts",
      "Historical context: how religions develop and interact",
      "Comparative methodology: how to compare without flattening",
      "The relationship between religion and philosophy",
      "Modern implications: religion in contemporary politics and culture",
      "Critical thinking skills applicable far beyond religious studies",
    ],
    whoItsFor:
      "Students interested in religion, philosophy, history, or politics. Appropriate for students from any faith background or none — the approach is academic, not devotional.",
    note: "Classical language support from Sarah Brennan (UChicago) available for students who want to engage texts in their original languages.",
  },
  {
    id: "art",
    image: "/images/art.jpg",
    accent: "#7D4275",
    title: "World Art AP-reciation",
    category: "Philosophy & Humanities",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,998.99",
    description:
      "Art history is not about memorizing dates and names. It is about learning to see — to observe carefully, to analyze visual arguments, and to understand how images encode cultural meaning. This course covers major movements from the Renaissance to contemporary art, with a focus on developing visual literacy: the ability to read an image the way you would read a text. Taught with museum educator Rachel Chen (Courtauld Institute).",
    whatYouLearn: [
      "Visual literacy: how to read an image analytically",
      "Major art movements from Renaissance to contemporary",
      "Art as cultural argument: what images say about their societies",
      "Aesthetics: the philosophy of beauty and taste",
      "AP Art History preparation (where applicable)",
      "Virtual museum visits with guided analysis",
    ],
    whoItsFor:
      "Students interested in art, design, history, or culture. Also excellent for students who are primarily visual learners and want to build analytical skills through a non-textual medium.",
    note: "Virtual museum tours with Rachel Chen (Tate Modern) included at no additional cost.",
  },
  {
    id: "exec",
    image: "/images/exec.jpg",
    accent: "#2D9A5E",
    title: "Executive Function Training",
    category: "Neurodiverse Support",
    grades: "Grades 6–12",
    duration: "90 days",
    price: "$2,498.99",
    description:
      "Students with ADHD and other learning differences don't need more discipline — they need better systems. This course builds the executive function skills that schools assume students already have: time management, organization, task initiation, sustained focus, and emotional regulation around academic work. Every technique is grounded in research on neurodivergent cognition. Taught in coordination with educational psychologist David Kim (Baylor).",
    whatYouLearn: [
      "Time management systems designed for ADHD brains",
      "Organization strategies that actually stick",
      "Task initiation: how to start when starting is hardest",
      "Sustained focus techniques and environmental design",
      "Emotional regulation around academic stress",
      "Self-advocacy: communicating your needs to teachers",
    ],
    whoItsFor:
      "Students with ADHD, executive function deficits, or other learning differences. Also effective for students who are disorganized or procrastinate despite being capable.",
    note: "Ongoing support from David Kim (Baylor M.Ed.) available for students who need continued coaching beyond the 90-day program.",
  },
  {
    id: "philosophy",
    image: "/images/philosophy.jpg",
    accent: "#9C5A20",
    title: "History of Philosophy",
    category: "Philosophy & Humanities",
    grades: "Grades 9–12",
    duration: "90 days",
    price: "$2,498.99",
    description:
      "From Plato to the present — a rigorous survey of Western philosophical thought. This course is not a history lesson. It is an introduction to the analytical frameworks that underpin critical thinking itself. Students engage directly with primary texts, learning to construct arguments, identify fallacies, and navigate complex conceptual terrain. The skills developed here transfer to every academic subject and every high-stakes conversation.",
    whatYouLearn: [
      "Ancient philosophy: Plato, Aristotle, and the foundations of Western thought",
      "Medieval and early modern: Augustine, Descartes, Locke, Hume",
      "Modern philosophy: Kant, Hegel, Nietzsche, and existentialism",
      "Analytical philosophy: Wittgenstein, Quine, and the linguistic turn",
      "Argument construction and fallacy identification",
      "How to read difficult philosophical texts actively",
    ],
    whoItsFor:
      "Students who want to think more clearly and argue more effectively. Excellent preparation for debate, law, journalism, or any field that rewards analytical precision.",
  },
  {
    id: "biopolitics",
    image: "/images/biopolitics.jpg",
    accent: "#3D5A73",
    title: "Introduction to Biopolitics",
    category: "Philosophy & Humanities",
    grades: "Grades 10–12",
    duration: "90 days",
    price: "$2,498.99",
    description:
      "Power, the body, and the state. This course introduces students to one of the most important frameworks in contemporary political thought — the study of how governments and institutions regulate human life itself. Drawing on Foucault, Agamben, and contemporary thinkers, students learn to analyze public health policy, immigration law, reproductive rights, and surveillance through the lens of biopolitical theory. Taught with geopolitical consultant Dr. Emmanuel Wright (Georgetown).",
    whatYouLearn: [
      "Foucault's concept of biopower and its modern applications",
      "State of exception theory (Agamben) and emergency powers",
      "Biopolitics of public health, immigration, and reproduction",
      "Surveillance capitalism and the politics of data",
      "How to apply biopolitical analysis to current events",
      "Critical reading of primary political theory texts",
    ],
    whoItsFor:
      "Students interested in politics, law, public policy, or social justice. Prior exposure to philosophy helpful but not required. Best for students who enjoy thinking in frameworks.",
    note: "Geopolitical context from Dr. Emmanuel Wright (Georgetown Ph.D.) available for specialized sessions.",
  },
  {
    id: "k8",
    title: "K-8 Reading, Writing & Math",
    category: "Test Prep",
    grades: "Grades K–8",
    duration: "Ongoing",
    price: "$600–$1,200/mo",
    accent: "#0D9488",
    image: "/images/sat.jpg",
    description: "Foundational skill-building for younger students — literacy, numeracy, and early critical thinking that sets the stage for everything that comes after. Sessions focus on building confidence in reading comprehension, writing fundamentals, and mathematical reasoning through age-appropriate, cognition-focused methods. Parents receive weekly progress updates and strategies for reinforcing learning at home.",
    whatYouLearn: [
      "Phonics and reading comprehension strategies",
      "Writing fundamentals: sentences, paragraphs, stories",
      "Number sense and mathematical reasoning",
      "Critical thinking through age-appropriate puzzles",
      "Study habits that stick from an early age",
      "Confidence-building through measurable progress",
    ],
    whoItsFor: "Students in kindergarten through 8th grade who need foundational support in reading, writing, or math — whether catching up, staying on track, or getting ahead.",
    note: "Billed as part of the Monthly Tutoring program at $600 (1 session/wk) or $1,200 (2 sessions/wk).",
  },
  {
    id: "build-your-own",
    title: "Build Your Own",
    category: "Skills",
    grades: "Any",
    duration: "90 days",
    price: "$3,299",
    accent: "#16a252",
    image: "/images/philosophy.jpg",
    description: "Don't see exactly what you need? Start with core subject tutoring and add one or two specialized courses from the full catalog. Fully customized. Michael will work with you to design a curriculum that addresses your student's specific goals, learning style, and timeline — drawing from any combination of the courses in the Kuriausity catalog.",
    whatYouLearn: [
      "Custom curriculum designed around your student's goals",
      "Any combination of courses from the full catalog",
      "Flexible pacing and scheduling",
      "Weekly progress tracking and adjustments",
      "Access to the full consultant network",
      "Final assessment and recommendations for continued growth",
    ],
    whoItsFor: "Students with unique needs that don't fit neatly into a single course — whether that's a blend of test prep and writing, or executive function paired with debate training.",
    note: "The $3,299 base includes 90 days of customized instruction. Additional modules from the catalog can be added at prorated rates.",
  },
  {
    id: "premortem",
    image: "/images/premortem.jpg",
    accent: "#4A3728",
    title: "Pre-Mortem Advisory",
    category: "Advisory Services",
    grades: "Adults / Professionals",
    duration: "Per engagement",
    price: "$350–$1,200",
    description:
      "Not a course. A structured analytical consultation for adults facing a significant decision — a school choice, a career pivot, a business commitment — who want a philosophically trained, debate-tested mind applied to their situation before they commit. The pre-mortem method works backward from failure: we imagine your decision has gone wrong, identify every way it could have failed, and build a prevention strategy around each failure mode.",
    whatYouLearn: [
      "Structured pre-mortem analysis of your specific decision",
      "Identification of primary and secondary failure modes",
      "Live pressure-testing of your underlying assumptions",
      "Risk mitigation strategy for each identified vulnerability",
      "Written analysis with recommended paths (Full Engagement)",
      "30-day follow-up to assess implementation (Full Engagement)",
    ],
    whoItsFor:
      "Adults facing high-stakes decisions who want analytical clarity before committing. Not therapy, not coaching — rigorous philosophical analysis applied to your specific situation.",
    note: "Pricing: Single Session $350–$500 (90 min) · Full Engagement $750–$1,200 (session + written analysis + follow-up). See the Post-Mortem Advisory page for full details.",
  },
];

export default function Courses() {
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Handle anchor scroll after page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="section text-center" style={{ background: "var(--kq-opal-mid)" }}>
        <div className="container">
          <p className="eyebrow mb-4">Courses</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "var(--kq-em-ghost)",
              fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
            }}
          >
            Every course,{" "}
            <em style={{ color: "var(--kq-em-light)" }}>in full detail</em>.
          </h1>
          <p className="subheadline max-w-2xl mx-auto mt-4" style={{ color: "var(--kq-text-muted)" }}>
            Sixteen immersive programs built on the cognitive science of how humans actually learn.
            Select a course to explore its curriculum, outcomes, and enrollment options.
          </p>
        </div>
      </section>

      {/* ═══════════════ COURSE LIST ═══════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Decision tree pattern background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: "url(/images/premortem.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 20%, transparent 80%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 10%, transparent 90%, var(--kq-obsidian) 100%)" }} />

        <div className="container max-w-5xl relative z-10">
          {courseDetails.map((course) => (
            <div
              key={course.id}
              id={course.id}
              className="course-detail-card mb-8 last:mb-0 rounded-[10px] overflow-hidden"
              style={{
                background: "rgba(13, 27, 43, 0.9)",
                border: "0.5px solid rgba(36, 58, 78, 0.5)",
                "--course-accent": course.accent,
              } as React.CSSProperties}
            >
              {/* Accent bar */}
              <div style={{ height: "3px", background: course.accent }} />

              <div className="flex flex-col md:flex-row">
                {/* Course image — left side on desktop, top on mobile */}
                <div className="w-full md:w-[320px] lg:w-[380px] flex-shrink-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 md:h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>

                {/* Content — right side */}
                <div className="flex-1 p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: `${course.accent}15`,
                            color: course.accent,
                            fontFamily: "var(--font-ui)",
                          }}
                        >
                          {course.category}
                        </span>
                        <span className="grade-badge">{course.grades}</span>
                        <span className="duration-badge">{course.duration}</span>
                      </div>
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 500,
                          color: "var(--kq-em-pale)",
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        }}
                      >
                        {course.title}
                      </h2>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span
                        className="text-2xl font-bold"
                        style={{ fontFamily: "var(--font-mono)", color: course.accent }}
                      >
                        {course.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: "var(--kq-text-muted)", fontSize: "15px", lineHeight: 1.75 }}
                  >
                    {course.description}
                  </p>

                  {/* Two-column: What You Learn + Who It's For */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3
                      className="text-sm uppercase tracking-wider mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--kq-em-pale)" }}
                    >
                      <BookOpen size={14} style={{ color: "var(--kq-em-bright)" }} />
                      What You Will Learn
                    </h3>
                    <ul className="space-y-2">
                      {course.whatYouLearn.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2"
                          style={{ color: "var(--kq-text-muted)", fontSize: "13px", lineHeight: 1.6 }}
                        >
                          <CheckCircle
                            size={14}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "var(--kq-em-bright)" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-sm uppercase tracking-wider mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--kq-em-pale)" }}
                    >
                      <Users size={14} style={{ color: "var(--kq-em-bright)" }} />
                      Who This Is For
                    </h3>
                    <p
                      className="mb-3"
                      style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}
                    >
                      {course.whoItsFor}
                    </p>

                    {course.note && (
                      <div
                        className="p-3 rounded-md"
                        style={{
                          background: "rgba(124,58,237,0.06)",
                          border: "0.5px solid rgba(124,58,237,0.2)",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "var(--kq-violet-soft)", lineHeight: 1.5 }}>
                          {course.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA row */}
                <div
                  className="flex flex-wrap items-center justify-between gap-4 pt-4"
                  style={{ borderTop: "0.5px solid var(--kq-opal-rim)" }}
                >
                  <div className="flex items-center gap-4 text-xs" style={{ fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)" }}>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {course.grades}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs cursor-help"
                      style={{ fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)", opacity: 0.6 }}
                      title="Online store coming soon"
                    >
                      Purchase options coming soon
                    </span>
                    <Link to="/contact" className="btn-primary text-xs">
                      Inquire About This Course <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
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
              Ready to enroll?
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--kq-em-pale)", fontSize: "16px", opacity: 0.8 }}>
              The discovery call is free and without obligation. We'll discuss which course fits your student's goals, learning style, and timeline.
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
