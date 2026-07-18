import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useTransition } from "@/context/transition";
import Magnetic from "@/components/motion/Magnetic";
import LogoMark from "@/components/layout/LogoMark";
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
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

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
    <>
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
      {/* Gradient top bar + scroll progress */}
      <div className="absolute top-0 left-0 right-0 h-[3px] kq-grad-bar" />
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, var(--kq-em-vivid), var(--kq-em-light))",
        }}
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
            className="inline-flex items-center justify-center w-8 h-8 rounded-[6px]"
            style={{
              background: "linear-gradient(135deg, var(--kq-em-bright), var(--kq-mal-bright))",
              color: "var(--kq-obsidian)",
            }}
          >
            <LogoMark size={19} />
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
                <motion.span
                  layoutId="kq-nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: "var(--kq-em-vivid)" }}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Magnetic className="hidden lg:inline-block">
          <Link
            to="/contact"
            className="btn-primary hidden lg:inline-flex text-xs"
          >
            Book a Free Call
          </Link>
        </Magnetic>

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

    </nav>

    {/* Mobile Overlay — rendered OUTSIDE <nav>: its backdrop-filter would
        otherwise become the containing block for this fixed overlay and
        collapse it to the header's height. */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="lg:hidden fixed left-0 right-0 top-[72px] bottom-0 z-[999] flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--kq-obsidian)" }}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.045, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
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
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + navLinks.length * 0.045, duration: 0.35 }}
          >
            <Link to="/contact" className="btn-primary mt-4">
              Book a Free Call
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
