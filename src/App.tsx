import { useMemo } from "react";

import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import Header from "./components/Header";

const Stars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() > 0.8 ? 2 : 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-violet-300"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06070b] text-white">
      <Stars />
      <div className="pointer-events-none absolute right-[8%] top-[15%] h-137.5 w-137.5 rounded-full bg-violet-700/8 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-50 left-[20%] h-100 w-125 rounded-full bg-purple-900/8 blur-[150px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
