import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const StatementSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Parallax translation based on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  const line1X = useTransform(smoothProgress, [0, 1], ['4%', '-4%']);
  const line2X = useTransform(smoothProgress, [0, 1], ['-4%', '4%']);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LINE_1_WORDS = ['“Code', 'with', 'clarity.'];
  const LINE_2_WORDS = ['Build', 'with', 'purpose.”'];

  return (
    <section
      id="statement-section"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] text-[#0E0F11] py-32 sm:py-44 lg:py-52 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      {/* Background Architectural Watermark */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[20%] pointer-events-none select-none -z-0 opacity-[0.035]"
      >
        <span className="font-grotesk font-[900] text-[28rem] sm:text-[36rem] leading-none block">
          ✦
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col justify-between">
        {/* Top Minimalist Header Tag */}
        <div className="flex items-center justify-between pb-12 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-black/60">
              05 // PRINSIP & FILOSOFI
            </span>
          </div>

          <span className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-black/40 hidden sm:inline">
            CORE PHILOSOPHY · 2026
          </span>
        </div>

        {/* MONUMENTAL DUAL-AXIS SCROLL-ANIMATED STATEMENT */}
        <div className="py-20 sm:py-28 space-y-4 sm:space-y-6">
          {/* LINE 1 */}
          <motion.div
            style={{ x: line1X }}
            className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-7 leading-[0.92]"
          >
            {LINE_1_WORDS.map((word, idx) => {
              const threshold = idx / (LINE_1_WORDS.length + LINE_2_WORDS.length);
              const isLit = scrollProgress > threshold * 0.9;

              return (
                <span
                  key={idx}
                  className={`font-grotesk font-[900] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.25rem] tracking-tight transition-all duration-300 ${
                    isLit
                      ? 'text-[#0A0A0A] opacity-100'
                      : 'text-black/20 opacity-25'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </motion.div>

          {/* LINE 2 */}
          <motion.div
            style={{ x: line2X }}
            className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-7 leading-[0.92] pl-2 sm:pl-8 lg:pl-16"
          >
            {LINE_2_WORDS.map((word, idx) => {
              const overallIdx = LINE_1_WORDS.length + idx;
              const threshold = overallIdx / (LINE_1_WORDS.length + LINE_2_WORDS.length);
              const isLit = scrollProgress > threshold * 0.85;

              return (
                <span
                  key={idx}
                  className={`font-grotesk font-[900] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.25rem] tracking-tight transition-all duration-300 ${
                    isLit
                      ? 'text-[#0A0A0A] opacity-100'
                      : 'text-black/20 opacity-25'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-10 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono-num text-black/50 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
            <span>ALTAIR RESKY · MANIFESTO MAHASISWA INFORMATIKA</span>
          </div>

          <div className="flex items-center gap-6">
            <span>SCROLL TO DISCOVER</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
