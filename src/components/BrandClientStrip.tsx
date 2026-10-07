import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { playTactileClick } from '../utils/sound';

import automotiveImage from '../assets/images/case_automotive_cockpit_1791281792376.jpg';
import audioImage from '../assets/images/case_audio_hardware_1791281824301.jpg';
import kyotoImage from '../assets/images/nova_monolith_architecture_1791279892540.jpg';
import atriumImage from '../assets/images/nova_editorial_architecture_1791279272688.jpg';

interface TechItem {
  id: string;
  name: string;
  category: string;
  level: string;
  image: string;
}

const TECH_STACK: TechItem[] = [
  {
    id: '01',
    name: 'REACT & NEXT.JS',
    category: 'Modern Web Frontend & SSR',
    level: 'Advanced',
    image: atriumImage,
  },
  {
    id: '02',
    name: 'TYPESCRIPT',
    category: 'Type-Safe Software Engineering',
    level: 'Core Skill',
    image: automotiveImage,
  },
  {
    id: '03',
    name: 'PYTHON & FASTAPI',
    category: 'Backend API & Data Processing',
    level: 'Competent',
    image: audioImage,
  },
  {
    id: '04',
    name: 'POSTGRESQL',
    category: 'Relational Database & Prisma',
    level: 'Database Design',
    image: kyotoImage,
  },
  {
    id: '05',
    name: 'FIGMA & UI/UX',
    category: 'Design Systems & Prototyping',
    level: 'Interactive Design',
    image: audioImage,
  },
  {
    id: '06',
    name: 'GIT & DOCKER',
    category: 'Version Control & Deployment',
    level: 'DevOps Baseline',
    image: automotiveImage,
  },
];

interface BrandClientStripProps {
  onSelectPartner?: (partnerName: string) => void;
}

export const BrandClientStrip: React.FC<BrandClientStripProps> = ({ onSelectPartner }) => {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  // Smooth floating cursor preview
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 220 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="brand-strip"
      onMouseMove={handleMouseMove}
      className="w-full bg-[#141517] text-white pt-20 pb-24 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      {/* Floating Cursor Image Preview */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          transform: 'translate(-50%, -50%)',
        }}
        className={`fixed z-50 pointer-events-none transition-opacity duration-300 hidden md:block ${
          activeTech ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {activeTech && (
          <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black relative">
            <img
              src={activeTech.image}
              alt={activeTech.name}
              className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <div>
                <span className="font-grotesk font-bold text-sm text-white block">
                  {activeTech.name}
                </span>
                <span className="text-[11px] font-mono-num text-white/70">
                  {activeTech.category} · {activeTech.level}
                </span>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <div className="max-w-[1440px] mx-auto">
        {/* Clean Header */}
        <div className="flex items-center justify-between pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/60">
              01 // TECH STACK & TOOLS
            </span>
          </div>

          <span className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-white/40 hidden sm:inline">
            CORE PROFICIENCY // 2026
          </span>
        </div>

        {/* PURE GPU-ACCELERATED KINETIC LOGO STRIP (60FPS ZERO-LAG) */}
        <div className="py-12 overflow-hidden border-b border-white/10 relative">
          <div className="marquee-gpu whitespace-nowrap flex items-center">
            {Array.from({ length: 2 }).map((_, blockIdx) => (
              <div key={blockIdx} className="flex items-center gap-16 sm:gap-24 mr-16 sm:mr-24 shrink-0">
                {TECH_STACK.map((tech) => (
                  <button
                    key={`${blockIdx}-${tech.id}`}
                    onMouseEnter={() => {
                      playTactileClick(2200);
                      setActiveTech(tech);
                    }}
                    onMouseLeave={() => setActiveTech(null)}
                    onClick={() => {
                      playTactileClick(1600);
                      onSelectPartner?.(tech.name);
                    }}
                    className="group flex items-baseline gap-3 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="font-grotesk font-[900] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white group-hover:text-white">
                      {tech.name}
                    </span>
                    <span className="text-white/20 text-2xl font-light">/</span>
                  </button>
                ))}
              </div>
            ))}
            {Array.from({ length: 2 }).map((_, blockIdx) => (
              <div key={`repeat-${blockIdx}`} className="flex items-center gap-16 sm:gap-24 mr-16 sm:mr-24 shrink-0">
                {TECH_STACK.map((tech) => (
                  <button
                    key={`repeat-${blockIdx}-${tech.id}`}
                    onMouseEnter={() => {
                      playTactileClick(2200);
                      setActiveTech(tech);
                    }}
                    onMouseLeave={() => setActiveTech(null)}
                    onClick={() => {
                      playTactileClick(1600);
                      onSelectPartner?.(tech.name);
                    }}
                    className="group flex items-baseline gap-3 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="font-grotesk font-[900] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white group-hover:text-white">
                      {tech.name}
                    </span>
                    <span className="text-white/20 text-2xl font-light">/</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE STACK TILES */}
        <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-white/10 border-b border-white/10">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.id}
              onMouseEnter={() => {
                playTactileClick(2200);
                setActiveTech(tech);
              }}
              onMouseLeave={() => setActiveTech(null)}
              onClick={() => {
                playTactileClick(1600);
                onSelectPartner?.(tech.name);
              }}
              className="group py-12 sm:py-16 px-6 sm:px-10 flex flex-col justify-between h-44 sm:h-52 cursor-pointer transition-colors duration-200 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between text-[11px] font-mono-num text-white/40">
                <span>№ {tech.id}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-white/80" />
              </div>

              <div>
                <h3 className="font-grotesk font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white/85 group-hover:text-white transition-colors">
                  {tech.name}
                </h3>
                <span className="text-xs font-mono-num text-white/50 tracking-wider uppercase mt-1 block">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Bottom Footnote */}
        <div className="pt-8 flex items-center justify-between text-xs font-mono-num text-white/40">
          <span>KLIK ATAU ARAHKAN KURSOR UNTUK DETAIL TEKNOLOGI</span>
          <span className="hidden sm:inline">ALTAIR RESKY · S1 INFORMATIKA</span>
        </div>
      </div>
    </section>
  );
};
