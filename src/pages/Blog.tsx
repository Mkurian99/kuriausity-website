import { useStaggerReveal } from "@/hooks/useStaggerReveal";

const blogPosts = [
  {
    id: "adhd-tutoring",
    title: "Why ADHD Students Need Specialized Tutoring (Not Just 'Help with Homework')",
    excerpt: "The difference between a tutor who reviews content and one who rebuilds the systems that make learning possible.",
    category: "Executive Function",
    accent: "#2D9A5E",
    date: "March 15, 2026",
  },
  {
    id: "sat-cognition",
    title: "The Cognition of SAT Prep: Why Practice Tests Aren't Enough",
    excerpt: "What the research says about how the brain actually encodes the skills tested on standardized exams.",
    category: "Test Prep",
    accent: "#0D9488",
    date: "February 28, 2026",
  },
  {
    id: "debate-thinking",
    title: "How Competitive Debate Builds the Cognitive Skills School Doesn't Teach",
    excerpt: "From argument mapping to real-time critical analysis — the mental tools that separate good students from great thinkers.",
    category: "Debate",
    accent: "#7C3AED",
    date: "February 10, 2026",
  },
  {
    id: "college-essays",
    title: "The Three Things That Actually Differentiate a College Essay",
    excerpt: "After reading hundreds of application essays, here's what separates the memorable from the forgettable.",
    category: "College",
    accent: "#C8911F",
    date: "January 22, 2026",
  },
  {
    id: "neurodiverse-learning",
    title: "Neurodiverse Learning: Building Systems, Not Just Skills",
    excerpt: "Why students with ADHD and other learning differences need a fundamentally different approach to tutoring.",
    category: "Executive Function",
    accent: "#2563EB",
    date: "January 8, 2026",
  },
  {
    id: "lsat-logic",
    title: "The Philosophy of LSAT Logic: Why Logic Games Are Actually Beautiful",
    excerpt: "A deeper look at the analytical reasoning section and why mastering it changes how you think.",
    category: "Test Prep",
    accent: "#6B4C9A",
    date: "December 18, 2025",
  },
];

export default function Blog() {
  const addRevealRef = useStaggerReveal();

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <section
        className="section"
        style={{ background: "var(--kq-opal-mid)" }}
      >
        <div className="container">
          <p className="eyebrow mb-4">Blog</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "var(--kq-em-ghost)",
              fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
            }}
          >
            Thinking out loud about{" "}
            <em style={{ color: "var(--kq-em-light)" }}>learning</em>.
          </h1>
          <p
            className="subheadline max-w-2xl mt-4"
            style={{ color: "var(--kq-text-muted)" }}
          >
            Essays on cognition, pedagogy, debate, and the art of helping
            students become better thinkers.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Petrus Alphonsi manuscript — very faint */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: "url(/images/petrus-alphonsi.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 10%, transparent 90%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                ref={addRevealRef}
                className="reveal course-card overflow-hidden cursor-pointer group"
              >
                <div
                  className="card-accent-bar"
                  style={{ background: post.accent, height: "3px" }}
                />
                <div className="p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{
                      background: `${post.accent}20`,
                      color: post.accent,
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="text-lg mb-2 group-hover:text-emerald-300 transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      color: "var(--kq-em-pale)",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{
                      color: "var(--kq-text-muted)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--kq-text-muted)",
                      opacity: 0.6,
                    }}
                  >
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
