import { useCallback, useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import BrainTransition from "@/components/three/BrainTransition";
import { TransitionProvider } from "@/context/transition";
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

  // Reset scroll on route change
  useEffect(() => {
    if (location.pathname !== lastPath.current) {
      lastPath.current = location.pathname;
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const startResults = useCallback(() => {
    if (location.pathname === "/results") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (reducedMotion()) {
      navigate("/results");
      return;
    }
    setDiving(true);
  }, [location.pathname, navigate]);

  const handleArrive = useCallback(() => {
    navigate("/results");
    setTimeout(() => setDiving(false), 220);
  }, [navigate]);

  return (
    <TransitionProvider onStartResults={startResults} diving={diving}>
      <div className="grain" />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {diving && (
          <BrainTransition key="brain-dive" onComplete={handleArrive} />
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
