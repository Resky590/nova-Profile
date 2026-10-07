import React from 'react';
import { ArrowDown } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface BottomHeroRowProps {
  onScrollClick: () => void;
  onStatClick?: (stat: string) => void;
}

export const BottomHeroRow: React.FC<BottomHeroRowProps> = ({
  onScrollClick,
  onStatClick,
}) => {
  return (
    <footer className="w-full select-none z-30 pb-6 sm:pb-8 pt-3 px-8 sm:px-14 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs tracking-tight">
        {/* Left: Student stats with clean monospace figures */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-9 text-white/80">
          <button
            onClick={() => {
              playTactileClick(1600);
              onStatClick?.('03+ Tahun Pengalaman Koding');
            }}
            onMouseEnter={() => playTactileClick(2400)}
            className="flex items-baseline gap-2 cursor-pointer group focus-visible:outline-hidden"
          >
            <span className="font-mono-num font-bold text-white text-[13.5px] group-hover:opacity-75 transition-opacity">
              03+
            </span>
            <span className="text-[12px] font-normal text-white/70 group-hover:text-white transition-colors">
              Tahun Koding
            </span>
          </button>

          <span className="text-white/30 hidden sm:inline" aria-hidden="true">
            /
          </span>

          <button
            onClick={() => {
              playTactileClick(1600);
              onStatClick?.('18+ Proyek & Repositori Selesai');
            }}
            onMouseEnter={() => playTactileClick(2400)}
            className="flex items-baseline gap-2 cursor-pointer group focus-visible:outline-hidden"
          >
            <span className="font-mono-num font-bold text-white text-[13.5px] group-hover:opacity-75 transition-opacity">
              18+
            </span>
            <span className="text-[12px] font-normal text-white/70 group-hover:text-white transition-colors">
              Proyek Dibuat
            </span>
          </button>

          <span className="text-white/30 hidden sm:inline" aria-hidden="true">
            /
          </span>

          <button
            onClick={() => {
              playTactileClick(1600);
              onStatClick?.('3.92 IPK Kumulatif (Cum Laude)');
            }}
            onMouseEnter={() => playTactileClick(2400)}
            className="flex items-baseline gap-2 cursor-pointer group focus-visible:outline-hidden"
          >
            <span className="font-mono-num font-bold text-white text-[13.5px] group-hover:opacity-75 transition-opacity">
              3.92
            </span>
            <span className="text-[12px] font-normal text-white/70 group-hover:text-white transition-colors">
              IPK / Cum Laude
            </span>
          </button>
        </div>

        {/* Far Right: Scroll to discover */}
        <div className="flex items-center">
          <button
            onClick={() => {
              playTactileClick(1400);
              onScrollClick();
            }}
            onMouseEnter={() => playTactileClick(2400)}
            className="group inline-flex items-center gap-2 text-[11px] font-mono-num font-medium uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer focus-visible:outline-hidden"
          >
            <span>JELAJAHI PROFIL</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};
