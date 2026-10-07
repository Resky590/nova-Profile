import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { playTactileClick } from '../utils/sound';

interface Step {
  num: string;
  title: string;
  descriptor: string;
  timeframe: string;
  output: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Discover',
    descriptor: 'Riset kebutuhan pengguna, studi literatur, dan perumusan akar permasalahan.',
    timeframe: 'FASE 01',
    output: 'Problem Statement & Spesifikasi Fitur',
  },
  {
    num: '02',
    title: 'Define',
    descriptor: 'Perancangan arsitektur sistem, skema relasi database, dan pemilihan stack teknologi.',
    timeframe: 'FASE 02',
    output: 'Diagram Arsitektur & Skema DB',
  },
  {
    num: '03',
    title: 'Design',
    descriptor: 'Pembuatan wireframe, komponen UI berstandar aksesibilitas, dan prototipe interaktif.',
    timeframe: 'FASE 03',
    output: 'Design System & Figma Prototype',
  },
  {
    num: '04',
    title: 'Build',
    descriptor: 'Penulisan kode terstruktur, type-safe TypeScript, integrasi backend API, dan unit test.',
    timeframe: 'FASE 04',
    output: 'Clean Codebase & Dokumentasi Git',
  },
  {
    num: '05',
    title: 'Launch',
    descriptor: 'Deployment otomatis ke edge environment, optimasi kecepatan, dan rilis uji coba.',
    timeframe: 'FASE 05',
    output: 'Aplikasi Live & Monitoring Performa',
  },
];

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for continuous line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });
  const progressPercent = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const activeStep = STEPS[activeIdx];

  const handleSelectStep = (idx: number) => {
    playTactileClick(1800 + idx * 160);
    setActiveIdx(idx);
  };

  return (
    <section
      id="process-section"
      ref={containerRef}
      className="w-full bg-[#111214] text-white pt-28 sm:pt-36 pb-36 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Minimalist & Serene */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/50">
                07 // ALUR KERJA PROYEK
              </span>
            </div>
            <h2 className="font-grotesk font-[900] text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
              How I Work.
            </h2>
          </div>

          <div className="text-xs font-mono-num text-white/45 uppercase tracking-widest hidden sm:block">
            <span>DISCOVER → DEFINE → DESIGN → BUILD → LAUNCH</span>
          </div>
        </div>

        {/* UNBROKEN HORIZONTAL FLOW & PROGRESS LINE */}
        <div className="pt-16 sm:pt-24 relative">
          {/* Continuous Track Line */}
          <div className="relative w-full h-[2px] bg-white/15 mb-12 sm:mb-16">
            <motion.div
              style={{ width: progressPercent }}
              className="absolute top-0 left-0 h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]"
            />
          </div>

          {/* 5 Airy Horizontal Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-16 border-b border-white/10">
            {STEPS.map((step, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => handleSelectStep(idx)}
                  onClick={() => handleSelectStep(idx)}
                  className="cursor-pointer group transition-all duration-300"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className={`font-mono-num text-xs font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-white/35 group-hover:text-white/70'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono-num text-white/30 uppercase tracking-widest">
                      {step.timeframe}
                    </span>
                  </div>

                  <h3
                    className={`font-grotesk font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Active Indicator Underline */}
                  <div
                    className={`h-[2px] mt-4 transition-all duration-300 ${
                      isActive ? 'bg-white w-full' : 'bg-transparent w-0 group-hover:w-8 group-hover:bg-white/40'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* ACTIVE MILESTONE SPOTLIGHT STAGE */}
          <div className="pt-16 sm:pt-20">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Giant Phase Number */}
              <div className="col-span-12 lg:col-span-3">
                <span className="font-grotesk font-[900] text-7xl sm:text-8xl lg:text-9xl text-white/20 leading-none block font-mono-num">
                  {activeStep.num}
                </span>
                <span className="font-mono-num text-xs uppercase tracking-widest text-white/40 block mt-2">
                  TAHAPAN // {activeStep.timeframe}
                </span>
              </div>

              {/* Phase Title & Concise Description */}
              <div className="col-span-12 lg:col-span-6 space-y-4">
                <h4 className="font-grotesk font-[900] text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Tahap {activeStep.title}
                </h4>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                  {activeStep.descriptor}
                </p>
                <div className="pt-2 text-xs font-mono-num text-white/50">
                  <span>HASIL UTAMA: </span>
                  <strong className="text-white font-medium">{activeStep.output}</strong>
                </div>
              </div>

              {/* Action Button */}
              <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
                <button
                  onClick={() => {
                    playTactileClick();
                    onStartProject();
                  }}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-all cursor-pointer shadow-xl rounded-full"
                >
                  <span>Mulai Diskusi</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Footnote */}
        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono-num text-white/40">
          <span>METODOLOGI PENGEMBANGAN SISTEM TANGGAP & ADAPTIF</span>
          <span className="hidden sm:inline">ALTAIR RESKY · S1 INFORMATIKA</span>
        </div>
      </div>
    </section>
  );
};
