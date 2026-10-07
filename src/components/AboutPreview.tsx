import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import workspaceImage from '../assets/images/student_workspace_desk_1791372472870.jpg';
import blueprintImage from '../assets/images/atelier_blueprint_cad_1791282301226.jpg';
import { playTactileClick } from '../utils/sound';

interface AboutPreviewProps {
  onDiscoverStory: () => void;
}

const MANIFESTO_WORDS = [
  'Saya', 'menggabungkan', 'estetika', 'desain', 'antarmuka', 'dengan', 'ketepatan',
  'software', 'engineering', 'modern.', 'Fokus', 'pada', 'arsitektur', 'sistem',
  'yang', 'rapi,', 'performa', 'cepat,', 'dan', 'pengalaman', 'pengguna',
  'yang', 'intuitif', 'serta', 'bermakna.'
];

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onDiscoverStory }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'blueprint'>('photo');
  const [hoveredWordIndex, setHoveredWordIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0.4);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Magnetic button physics
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springBtnX = useSpring(btnX, { damping: 15, stiffness: 150 });
  const springBtnY = useSpring(btnY, { damping: 15, stiffness: 150 });

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btnX.set(x * 0.35);
    btnY.set(y * 0.35);
  };

  const handleButtonMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleViewMode = (mode: 'photo' | 'blueprint') => {
    playTactileClick(mode === 'photo' ? 1400 : 2400);
    setViewMode(mode);
  };

  return (
    <section
      id="about-preview"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] text-[#111111] pt-28 sm:pt-36 pb-32 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-black/60">
              02 // TENTANG MAHASISWA
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-black/45 hidden sm:inline">
              S1 TEKNIK INFORMATIKA · 2026
            </span>

            {/* Rotating Stamp */}
            <div className="w-9 h-9 relative flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-dashed border-black/30 animate-spin-slow" />
              <span className="absolute font-mono-num text-[10px] font-bold text-black/70">✦</span>
            </div>
          </div>
        </div>

        {/* Word-Scrubbing Kinetic Typography */}
        <div className="py-16 sm:py-24 max-w-5xl">
          <p className="font-grotesk font-extrabold text-3xl sm:text-5xl lg:text-[4.25rem] leading-[1.08] tracking-[-0.035em] text-balance">
            {MANIFESTO_WORDS.map((word, idx) => {
              const wordThreshold = idx / MANIFESTO_WORDS.length;
              const isLit = scrollProgress > wordThreshold * 0.85 || (hoveredWordIndex !== null && idx <= hoveredWordIndex);

              return (
                <span
                  key={idx}
                  onMouseEnter={() => setHoveredWordIndex(idx)}
                  onMouseLeave={() => setHoveredWordIndex(null)}
                  className={`inline-block mr-2.5 sm:mr-3.5 transition-all duration-300 cursor-default ${
                    isLit
                      ? 'text-[#0D0D0D] opacity-100'
                      : 'text-black/20 opacity-30 hover:opacity-75 hover:text-black'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

        {/* DUAL-MODE VISUAL CONTAINER + MAGNETIC CIRCULAR CTA */}
        <div className="relative mt-2">
          {/* Top Control Bar for the Visual */}
          <div className="flex items-center justify-between pb-3 text-xs font-mono-num uppercase tracking-wider text-black/60">
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleViewMode('photo')}
                className={`px-3 py-1 border transition-colors cursor-pointer ${
                  viewMode === 'photo'
                    ? 'bg-black text-[#FAF8F5] border-black font-semibold'
                    : 'bg-transparent text-black/60 border-black/15 hover:border-black/40'
                }`}
              >
                [01] Ruang Belajar & Lab
              </button>
              <button
                onClick={() => toggleViewMode('blueprint')}
                className={`px-3 py-1 border transition-colors cursor-pointer ${
                  viewMode === 'blueprint'
                    ? 'bg-black text-[#FAF8F5] border-black font-semibold'
                    : 'bg-transparent text-black/60 border-black/15 hover:border-black/40'
                }`}
              >
                [02] Arsitektur Sistem
              </button>
            </div>

            <span className="hidden sm:inline text-black/45">
              {viewMode === 'photo' ? 'DEV WORKSPACE' : 'SYSTEM BLUEPRINT'}
            </span>
          </div>

          {/* Large Screen Frame */}
          <div className="relative w-full aspect-[16/9] max-h-[580px] lg:max-h-[640px] bg-[#161719] overflow-hidden border border-black/15 shadow-2xl">
            <img
              key={viewMode}
              src={viewMode === 'photo' ? workspaceImage : blueprintImage}
              alt="Altair Resky student developer workspace"
              className="w-full h-full object-cover transition-all duration-700 ease-out animate-in fade-in duration-500"
              loading="lazy"
            />

            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* HUD Coordinates Overlay */}
            <div className="absolute top-4 left-4 font-mono-num text-[10px] text-white/80 bg-black/60 backdrop-blur-xs px-2.5 py-1 uppercase tracking-widest border border-white/10 pointer-events-none">
              LAB INFORMATIKA // 2026
            </div>

            {/* FLOATING MAGNETIC CIRCULAR BUTTON */}
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20">
              <motion.button
                ref={buttonRef}
                style={{
                  x: springBtnX,
                  y: springBtnY,
                }}
                onMouseMove={handleButtonMouseMove}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => {
                  playTactileClick();
                  onDiscoverStory();
                }}
                onMouseEnter={() => playTactileClick(2200)}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#111111] text-[#FAF8F5] flex flex-col items-center justify-center shadow-2xl border border-white/20 hover:bg-black transition-colors cursor-pointer group select-none"
              >
                <span className="font-grotesk font-extrabold text-xs sm:text-sm tracking-tight text-center px-4 leading-tight">
                  Baca<br />Profil
                </span>
                <ArrowUpRight className="w-4 h-4 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </div>
          </div>

          {/* Minimalist Caption Underneath */}
          <div className="mt-4 flex items-center justify-between text-[11px] font-mono-num uppercase tracking-[0.2em] text-black/55">
            <span>Altair Resky · Mahasiswa S1 Teknik Informatika</span>
            <span className="text-black/40 font-medium">Angkatan 2023 · IPK 3.92</span>
          </div>
        </div>
      </div>
    </section>
  );
};
