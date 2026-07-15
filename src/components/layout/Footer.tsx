import { Link } from "react-router-dom";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/courses", label: "All Courses" },
  { path: "/consultants", label: "Consultants" },
  { path: "/about", label: "About" },
  { path: "/results", label: "Results" },
  { path: "/contact", label: "Contact" },
  { path: "/advisory", label: "Advisory" },
  { path: "/courses#neurolsat", label: "NeuroLSAT" },
  { path: "/courses#speakers", label: "Speakers Corner" },
  { path: "/courses#debate", label: "Debate & Forensics" },
  { path: "/courses#sat", label: "SAT Prep" },
  { path: "/courses#act", label: "ACT Prep" },
  { path: "/courses#college", label: "College Admissions" },
  { path: "/courses#exec", label: "Executive Function" },
  { path: "/courses#essay", label: "Essay Writing" },
  { path: "/courses#ai", label: "AI & Real Ethics" },
  { path: "/courses#sacred", label: "Sacred Texts" },
  { path: "/courses#philosophy", label: "History of Philosophy" },
  { path: "/courses#art", label: "World Art" },
  { path: "/courses#biopolitics", label: "Biopolitics" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--kq-opal-deep)",
        color: "var(--kq-text-muted)",
        borderTop: "0.5px solid var(--kq-opal-rim)",
        position: "relative",
      }}
    >
      {/* Accent gradient bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: "var(--kq-opal-grad)" }}
      />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "1.35rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "var(--kq-em-pale)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-[6px] font-semibold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--kq-em-bright), var(--kq-mal-bright))",
                  color: "var(--kq-obsidian)",
                }}
              >
                K
              </span>
              Kuriausity
            </Link>
            <p
              className="italic mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                fontWeight: 400,
                color: "var(--kq-em-pale)",
              }}
            >
              "Think Deeper. Communicate Better. Go Further."
            </p>
            <p style={{ fontSize: "12px", color: "var(--kq-text-muted)" }}>
              Houston &amp; Sugar Land, TX | Online Nationwide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                fontSize: "11px",
                color: "var(--kq-em-mid)",
              }}
            >
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path + link.label}
                  to={link.path}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "13px",
                    color: "var(--kq-text-muted)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--kq-em-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--kq-text-muted)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                fontSize: "11px",
                color: "var(--kq-em-mid)",
              }}
            >
              Get In Touch
            </p>
            <a
              href="mailto:hello@kuriausitytutoring.com"
              className="block mb-2"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "13px",
                color: "var(--kq-text-muted)",
              }}
            >
              hello@kuriausitytutoring.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "0.5px solid var(--kq-opal-rim)",
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            color: "var(--kq-text-muted)",
          }}
        >
          <span>&copy; 2026 Kuriausity Tutoring &amp; Pedagogy LLC</span>
          <span>
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            {" · "}
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
