import { useCallback, useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import BrainTransition from "@/components/three/BrainTransition";
import PageShell from "@/components/motion/PageShell";
import { TransitionProvider } from "@/context/transition";
import { useTiltCards } from "@/hooks/useTiltCards";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Courses from "@/pages/Courses";
import Consultants from "@/pages/Consultants";
import About from "@/pages/About";
import Results from "@/pages/Results";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Advisory from "@/pages/Advisory";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const [diving, setDiving] = useState(false);
  const lastPath = useRef(location.pathname);
  const lenisRef = useRef<Lenis | null>(null);

  // Cursor-tracked tilt + sheen on every card surface (design layer only)
  useTiltCards();

  // Buttery inertial scrolling — the page glides instead of jumping
  useEffect(() => {
    if (reducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 1.02 });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    if (location.pathname !== lastPath.current) {
      lastPath.current = location.pathname;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const startResults = useCallback(() => {
    if (location.pathname === "/results") {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (reducedMotion()) {
      navigate("/results");
      return;
    }
    setDiving(true);
  }, [location.pathname, navigate]);

  // Route swap at the crest of the bloom — the overlay stays up through
  // the pixel release, so the new page is only ever seen through it.
  // `fromDive` tells the page shell to skip its own entrance: the pixel
  // dissolve is the entrance.
  const handleNavigate = useCallback(() => {
    navigate("/results", { state: { fromDive: true } });
  }, [navigate]);

  const handleFinish = useCallback(() => {
    setDiving(false);
  }, []);

  return (
    <TransitionProvider onStartResults={startResults} diving={diving}>
      <div className="grain" />
      <Nav />
      <AnimatePresence mode="wait">
        <PageShell key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<Results />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageShell>
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {diving && (
          <BrainTransition
            key="brain-dive"
            onNavigate={handleNavigate}
            onFinish={handleFinish}
          />
        )}
      </AnimatePresence>
    </TransitionProvider>
  );
}

export default function App() {
  return (
    <div className="App">
      <AppShell />
    </div>
  );
}
