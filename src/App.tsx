import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  ArrowRight,
  Mail,
  MoveDown,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { Button } from "../components/ui/button"

import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact"

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="0" y="0" width="24" height="24" rx="2" fill="currentColor" />
    <path
      fill="black"
      d="M3.56 20.45h3.57V8.99H3.56v11.46ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM9.35 8.99v11.46h3.57v-5.67c0-1.49.28-2.94 2.13-2.94 1.82 0 1.85 1.71 1.85 3.04v5.57h3.56v-6.29c0-3.09-.66-5.46-4.26-5.46-1.73 0-2.89.95-3.37 1.85h-.05V8.99H9.35Z"
    />
  </svg>
);

const NetworkSphere = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, lines } = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const radius = 2.25;

    // Generate points on sphere
    for (let i = 0; i < 150; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 150);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points.push(new THREE.Vector3(x, y, z));
    }

    // Connect nearby points
    const linePositions: number[] = [];

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = points[i].distanceTo(points[j]);

        if (distance < 0.75) {
          linePositions.push(
            points[i].x,
            points[i].y,
            points[i].z,
            points[j].x,
            points[j].y,
            points[j].z,
          );
        }
      }
    }

    return {
      positions: points,
      lines: new Float32Array(linePositions),
    };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x += delta * 0.025;
  });

  const pointPositions = useMemo(() => {
    const array = new Float32Array(positions.length * 3);

    positions.forEach((point, index) => {
      array[index * 3] = point.x;
      array[index * 3 + 1] = point.y;
      array[index * 3 + 2] = point.z;
    });

    return array;
  }, [positions]);

  return (
    <group ref={groupRef}>
      {/* Network lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lines, 3]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.32}
        />
      </lineSegments>

      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#a78bfa"
          size={0.035}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />

        <meshBasicMaterial
          color="#5b21b6"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Horizontal orbit */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.65, 0.006, 8, 150]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Diagonal orbit */}
      <mesh rotation={[0.7, 0.3, 0]}>
        <torusGeometry args={[2.55, 0.004, 8, 150]} />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
};

/* ================================================================
   3D SCENE
   ================================================================ */

const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[3, 3, 4]}
          intensity={10}
          color="#8b5cf6"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={5}
          color="#4c1d95"
        />

        <NetworkSphere />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.35}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

/* ================================================================
   STAR / PARTICLE BACKGROUND
   ================================================================ */

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

/* ================================================================
   HOME PAGE
   ================================================================ */

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06070b] text-white">
      {/* ============================================================
          BACKGROUND
          ============================================================ */}

      <Stars />

      {/* Main purple glow */}

      <div className="pointer-events-none absolute right-[8%] top-[15%] h-137.5 w-137.5 rounded-full bg-violet-700/8 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-50 left-[20%] h-100 w-125 rounded-full bg-purple-900/8 blur-[150px]" />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* ============================================================
          NAVIGATION
          ============================================================ */}

      <header className="relative z-50">
        <div className="mx-auto flex h-24 max-w-375 items-center justify-between px-7 lg:px-12">
          {/* Logo */}

          <a
            href="/"
            className="group text-xl font-semibold tracking-tight"
          >
            ZM
            <span className="text-violet-500">.</span>
          </a>

          {/* Navigation */}

          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="/about"
              className="text-[13px] text-white/50 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="/projects"
              className="text-[13px] text-white/50 transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="/projects"
              className="text-[13px] text-white/50 transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="/experience"
              className="text-[13px] text-white/50 transition-colors hover:text-white"
            >
              Experience
            </a>

            <a
              href="/contact"
              className="text-[13px] text-white/50 transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* Resume */}

          <Button
            variant="outline"
            className="h-9 rounded-lg border-violet-500/50 bg-transparent px-4 text-xs text-white hover:border-violet-400 hover:bg-violet-500/8 hover:text-white"
          >
            Resume
          </Button>
        </div>
      </header>

      {/* ============================================================
          HERO
          ============================================================ */}

      <section className="relative min-h-[calc(100vh-96px)]">
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-375 items-center px-7 lg:grid-cols-2 lg:px-12">
          {/* ========================================================
              LEFT CONTENT
              ======================================================== */}

          <div className="relative z-20 pb-28 pt-16 lg:pb-24 lg:pt-0">
            {/* Small label */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-500" />

              <span className="text-xs uppercase tracking-[0.25em] text-violet-400">
                Hello, I'm
              </span>
            </div>

            {/* Name */}

            <h1 className="max-w-187.5 text-[58px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[72px] lg:text-[82px] xl:text-[96px]">
              Zaid
              <br />

              <span className="bg-linear-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                Masuldar
              </span>
            </h1>

            {/* Role */}

            <div className="mt-7">
              <h2 className="text-xl font-medium text-violet-400 sm:text-2xl">
                Software Engineer
              </h2>
            </div>

            {/* Description */}

            <p className="mt-6 max-w-127.5 text-sm leading-7 text-white/40 sm:text-base">
              I create performant web applications and tools with
              modern technologies, focusing on clean interfaces,
              secure systems and meaningful user experiences.
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="group h-11 rounded-lg bg-violet-600 px-5 text-sm hover:bg-violet-500"
              >
                Explore My Work

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-lg border-white/15 bg-transparent px-5 text-sm text-white/80 hover:border-white/25 hover:bg-white/4 hover:text-white"
              >
                Get In Touch
              </Button>
            </div>

            {/* Small tech line */}

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                Building with
              </span>

              <span className="text-xs text-white/35">
                React
              </span>

              <span className="h-1 w-1 rounded-full bg-white/15" />

              <span className="text-xs text-white/35">
                Node.js
              </span>

              <span className="h-1 w-1 rounded-full bg-white/15" />

              <span className="text-xs text-white/35">
                Electron
              </span>

              <span className="h-1 w-1 rounded-full bg-white/15" />

              <span className="text-xs text-white/35">
                Chrome Extensions
              </span>
            </div>
          </div>

          {/* ========================================================
              RIGHT THREE.JS AREA
              ======================================================== */}

          <div className="absolute right-[-5%] top-[7%] h-162.5 w-[65%] lg:relative lg:right-auto lg:top-auto lg:h-162.5 lg:w-full">
            {/* Glow behind globe */}

            <div className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

            <HeroScene />

            {/* Bottom glow */}

            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-20 87.5 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[70px]" />
          </div>
        </div>

        {/* ==========================================================
            SOCIAL SIDEBAR
            ========================================================== */}

        <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex">
          <a
            href="https://linkedin.com/in/zaid-masuldar"
            aria-label="LinkedIn"
            target="_blank"
            className="text-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-400"
          >
            <LinkedinIcon className="h-4.25 w-4.25" />
          </a>

          <a
            href="http://github.com/zaid-sinpie"
            aria-label="GitHub"
            target="_blank"
            className="text-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-400"
          >
            <SiGithub className="h-4.25 w-4.25" />
          </a>

          <a
            href="#"
            aria-label="Email"
            className="text-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-400"
          >
            <Mail className="h-4.25 w-4.25" />
          </a>

          <div className="mt-2 h-16 w-px bg-linear-to-b from-white/20 to-transparent" />
        </div>

        {/* ==========================================================
            SCROLL INDICATOR
            ========================================================== */}

        <div className="absolute bottom-8 left-7 z-30 flex items-center gap-3 lg:left-12">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10">
            <MoveDown className="h-3 w-3 animate-bounce text-white/40" />
          </div>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            Scroll to explore
          </span>
        </div>

        {/* ==========================================================
            BOTTOM RIGHT TEXT
            ========================================================== */}

        <div className="absolute bottom-9 right-24 z-30 hidden md:block">
          <p className="text-[10px] tracking-[0.18em] text-white/20">
            BUILT WITH PASSION&nbsp;&nbsp;•&nbsp;&nbsp;DEPLOYED WITH
            PURPOSE
          </p>
        </div>
      </section>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  );
};

export default Home;