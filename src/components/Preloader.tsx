import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 750; // fast & punchy
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * 100);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 550);
        }, 120);
      }
    };

    requestAnimationFrame(animateCount);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 bg-[#121212] text-[#FAF8F5] flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto"
        >
          {/* Top Preloader Row */}
          <div className="flex items-center justify-between text-[11px] font-mono-num uppercase tracking-[0.25em] text-white/40">
            <span>ALTAIR RESKY // STUDENT PORTFOLIO</span>
            <span>CLASS OF 2026</span>
          </div>

          {/* Center Student Mark */}
          <div className="flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-grotesk font-[900] text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white flex items-baseline text-center"
            >
              ALTAIR RESKY
            </motion.h1>
            <span className="text-xs font-mono-num text-white/50 tracking-[0.2em] uppercase mt-3">
              Computer Science & Software Engineering
            </span>
          </div>

          {/* Bottom Counter Row */}
          <div className="flex items-end justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-mono-num text-white/40 uppercase tracking-widest">
              INITIALIZING ENVIRONMENT
            </span>
            <div className="font-mono-num font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {count < 10 ? `0${count}` : count}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
