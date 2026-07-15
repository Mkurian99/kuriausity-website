import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTransition } from "@/context/transition";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/courses", label: "Courses" },
  { path: "/advisory", label: "Advisory" },
  { path: "/results", label: "Results" },
  { path: "/consultants", label: "Consultants" },
  { path: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { startResults } = useTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleResultsClick = (e: React.MouseEvent) => {
    if (location.pathname !== "/results") {
      e.preventDefault();
      startResults();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.5)]" : ""
      }`}
      style={{
        background: "rgba(7, 16, 26, 0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "0.5px solid var(--kq-opal-rim)",
      }}
    >
      {/* Gradient top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "var(--kq-opal-grad)" }}
      />

      <div className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
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
              background: "linear-gradient(135deg, var(--kq-em-bright), var(--kq-mal-bright))",
              color: "var(--kq-obsidian)",
            }}
          >
            K
          </span>
          Kuriausity
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={link.path === "/results" ? handleResultsClick : undefined}
              className="relative py-1 transition-colors duration-200"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "10px",
                fontWeight: 600,
                color:
                  location.pathname === link.path
                    ? "var(--kq-em-light)"
                    : "var(--kq-text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
              }}
            >
              {link.label}
              {location.pathname === link.path && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: "var(--kq-em-vivid)" }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="btn-primary hidden lg:inline-flex text-xs"
        >
          Book a Free Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} style={{ color: "var(--kq-em-pale)" }} />
          ) : (
            <Menu size={24} style={{ color: "var(--kq-em-pale)" }} />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] z-[999] flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--kq-obsidian)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={link.path === "/results" ? handleResultsClick : undefined}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                color:
                  location.pathname === link.path
                    ? "var(--kq-em-light)"
                    : "var(--kq-em-pale)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4">
            Book a Free Call
          </Link>
        </div>
      )}
    </nav>
  );
}
