import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import studentPortrait from '../assets/images/student_developer_portrait_1791372453023.jpg';
import workspaceImage from '../assets/images/student_workspace_desk_1791372472870.jpg';
import { playTactileClick } from '../utils/sound';

interface HeroSectionProps {
  onExploreWork: () => void;
  onAboutCompany: () => void;
  onImageClick?: () => void;
  isLoaded: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onAboutCompany,
  onImageClick,
  isLoaded,
}) => {
  const [activePlate, setActivePlate] = useState<0 | 1>(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    { src: studentPortrait, label: 'Altair Resky · Developer Portrait', code: 'PORTRAIT' },
    { src: workspaceImage, label: 'Student Dev Desk & Hardware Setup', code: 'DEV LAB' },
  ];

  const togglePlate = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTactileClick(1200);
    setActivePlate((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <main className="relative flex-1 w-full flex flex-col justify-between overflow-hidden select-none">
      {/* LAYER 1: Colossal GPU-Accelerated Student Marquee */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 lg:bottom-10 left-0 right-0 pointer-events-none select-none z-10 overflow-hidden"
      >
        <div className="marquee-gpu whitespace-nowrap flex items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-grotesk font-[900] text-[20vw] lg:text-[22vw] leading-[0.78] tracking-[-0.04em] text-white uppercase mr-16 sm:mr-24 inline-block select-none drop-shadow-xs"
            >
              ALTAIR RESKY — INFORMATICS —
            </span>
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={`repeat-${i}`}
              className="font-grotesk font-[900] text-[20vw] lg:text-[22vw] leading-[0.78] tracking-[-0.04em] text-white uppercase mr-16 sm:mr-24 inline-block select-none drop-shadow-xs"
            >
              ALTAIR RESKY — INFORMATICS —
            </span>
          ))}
        </div>
      </div>

      {/* LAYER 2 & 3: Floating Stage Elements & Center Visual */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20 flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center relative">
          {/* LEFT ELEMENT: Student Status Capsule */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between space-y-6 lg:space-y-16 z-30">
            {/* Dark Curved Pill pinned on left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex self-start"
            >
              <div className="bg-[#1C1D20] text-white pl-5 pr-2.5 py-3 rounded-full flex items-center gap-4 shadow-2xl border border-white/10 cursor-default">
                <div className="text-[12px] font-mono-num tracking-tight leading-tight">
                  <span className="block text-white/50 text-[10.5px]">Mahasiswa Aktif</span>
                  <span className="block text-white/50 text-[10.5px]">Teknik Informatika ·</span>
                  <span className="font-semibold text-white">Computer Science</span>
                </div>
                {/* Rotating Globe Disc */}
                <div className="w-10 h-10 rounded-full bg-[#2C2D31] flex items-center justify-center shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-white animate-spin-slow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8" />
                    <ellipse cx="12" cy="12" rx="4.5" ry="9" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Quiet Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/80 block">
                PORTFOLIO MAHASISWA // 2026
              </span>
            </motion.div>
          </div>

          {/* CENTER VISUAL: Student Portrait overlapping marquee */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5 flex justify-center items-center z-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[480px] relative cursor-pointer group"
              onClick={() => {
                playTactileClick();
                onImageClick?.();
              }}
            >
              {/* Plate switcher header */}
              <div className="flex items-center justify-between pb-2 text-[10px] font-mono-num text-white/70 uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">PLATE 0{activePlate + 1}</span>
                  <span className="text-white/40">/</span>
                  <button
                    onClick={togglePlate}
                    className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer font-medium"
                  >
                    SWITCH VIEW
                  </button>
                </div>
                <span>{images[activePlate].code}</span>
              </div>

              {/* Photo Frame: Tall portrait aspect */}
              <div className="relative w-full aspect-[3/4] max-h-[460px] lg:max-h-[500px] xl:max-h-[540px] bg-[#1E2022] overflow-hidden border border-white/20 shadow-2xl transition-all duration-300">
                <img
                  key={activePlate}
                  src={images[activePlate].src}
                  alt={images[activePlate].label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Hover Callout */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-[#1C1D20] text-white text-[11px] font-mono-num uppercase tracking-[0.2em] px-4 py-2 border border-white/20 flex items-center gap-2 shadow-2xl">
                    <span>LIHAT PROFIL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono-num uppercase tracking-[0.2em] text-white/80">
                <span>Altair Resky · S1 Informatika</span>
                <span className="text-white/60 text-[10px]">{images[activePlate].label}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT ELEMENT: Student Headline & Call to Action */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col justify-center text-left pl-0 lg:pl-6 z-30">
            {/* Slanted Arrow ↘ */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-3 text-white/90"
            >
              <ArrowDownRight className="w-7 h-7 stroke-[1.6]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.05] tracking-tight text-white mb-4 text-balance"
            >
              Designing ideas,<br />
              coding the future.
            </motion.h1>

            {/* Short clean description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] lg:text-[15px] text-white/80 leading-[1.6] max-w-[340px] mb-6 font-normal"
            >
              Mahasiswa Teknik Informatika dengan fokus pada software engineering, interaksi web modern, dan sistem cerdas.
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-5 sm:gap-6"
            >
              <button
                onClick={() => {
                  playTactileClick();
                  onExploreWork();
                }}
                onMouseEnter={() => playTactileClick(2200)}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#1C1D20] text-white text-[13px] font-medium tracking-tight hover:bg-black transition-all duration-200 cursor-pointer shadow-lg border border-white/15 focus-visible:outline-hidden"
              >
                <span>Lihat Karya</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => {
                  playTactileClick();
                  onAboutCompany();
                }}
                onMouseEnter={() => playTactileClick(2200)}
                className="relative py-1 text-[13px] font-medium text-white/90 hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/40 hover:after:bg-white after:transition-colors"
              >
                Tentang Saya
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};
