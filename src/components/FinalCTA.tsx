import React, { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { playTactileClick } from '../utils/sound';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Magnetic button physics
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { damping: 15, stiffness: 160 });
  const springY = useSpring(btnY, { damping: 15, stiffness: 160 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btnX.set(x * 0.4);
    btnY.set(y * 0.4);
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <section
      id="final-cta"
      className="w-full bg-[#FAF8F5] text-[#0A0A0A] pt-32 sm:pt-44 lg:pt-52 pb-32 sm:pb-40 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      {/* Background Architectural Watermark */}
      <div
        aria-hidden="true"
        className="absolute right-[-4%] bottom-[-10%] pointer-events-none select-none -z-0 opacity-[0.035]"
      >
        <span className="font-grotesk font-[900] text-[20rem] sm:text-[30rem] lg:text-[38rem] leading-none block select-none">
          ALTAIR
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center justify-between pb-12 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-black/60">
              10 // AJAKAN KOLABORASI
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-num text-black/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>STATUS: TERBUKA UNTUK PROGRAM MAGANG & PROYEK RISET</span>
          </div>
        </div>

        {/* MONUMENTAL FINAL STATEMENT */}
        <div className="py-16 sm:py-24 lg:py-28 max-w-5xl space-y-6 sm:space-y-8">
          <span className="font-mono-num text-sm sm:text-base text-black/45 tracking-widest uppercase block">
            [ HUBUNGI MAHASISWA ]
          </span>

          <h2 className="font-grotesk font-[900] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] tracking-tight leading-[0.92] text-[#0A0A0A] text-balance">
            “Have an idea worth building?”
          </h2>

          <p className="font-grotesk font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.05] text-black/65 text-balance">
            Let’s turn it into something people remember.
          </p>
        </div>

        {/* INTERACTIVE ACTION BAR */}
        <div className="pt-10 border-t border-black/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Magnetic Button */}
          <div className="flex items-center">
            <motion.button
              ref={buttonRef}
              style={{
                x: springX,
                y: springY,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                playTactileClick(1500);
                onStartProject();
              }}
              onMouseEnter={() => playTactileClick(2200)}
              className="group relative inline-flex items-center gap-4 px-10 sm:px-14 py-6 sm:py-7 bg-[#0A0A0A] text-[#FAF8F5] font-grotesk font-extrabold text-lg sm:text-xl tracking-tight hover:bg-black transition-all cursor-pointer shadow-2xl rounded-full"
            >
              <span>Mulai Kolaborasi</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </div>

          {/* Direct Contact Channel */}
          <div className="space-y-2 text-left lg:text-right">
            <a
              href="mailto:altairresky84@gmail.com"
              onClick={() => playTactileClick()}
              className="font-grotesk font-bold text-xl sm:text-2xl text-black hover:opacity-70 transition-opacity flex items-center lg:justify-end gap-2"
            >
              <Mail className="w-5 h-5 text-black/50" />
              <span>altairresky84@gmail.com</span>
            </a>
            <p className="text-xs font-mono-num text-black/50">
              Respon cepat dalam 24 jam · Terbuka untuk diskusi proyek & rekrutmen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
