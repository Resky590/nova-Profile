import React, { useState } from 'react';
import { playTactileClick } from '../utils/sound';

interface MetricItem {
  number: string;
  label: string;
  sub: string;
  iconSymbol: string;
}

const METRICS: MetricItem[] = [
  {
    number: '3.92',
    label: 'IPK Kumulatif',
    sub: 'Predikat Cum Laude · S1 Informatika',
    iconSymbol: '✦',
  },
  {
    number: '18+',
    label: 'Proyek Selesai',
    sub: 'Web Apps, API & Open Source',
    iconSymbol: '◫',
  },
  {
    number: '05',
    label: 'Penghargaan',
    sub: 'Kompetisi & Hackathon Nasional',
    iconSymbol: '🏆',
  },
  {
    number: '03+',
    label: 'Tahun Belajar',
    sub: 'Eksplorasi Aktif & Hands-on Code',
    iconSymbol: '⚡',
  },
];

export const WhyChooseUs: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#111214] text-white pt-24 sm:pt-32 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Minimalist Header Tag */}
        <div className="flex items-center justify-between pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/50">
              06 // PENCAPAIAN & METRIK
            </span>
          </div>

          <span className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-white/40 hidden sm:inline">
            REKAM JEJAK AKADEMIK // 2023–2026
          </span>
        </div>

        {/* 4 MONUMENTAL METRIC SLABS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10">
          {METRICS.map((metric, idx) => {
            const isHovered = hoveredIdx === idx;
            const isOtherHovered = hoveredIdx !== null && !isHovered;

            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  playTactileClick(1900 + idx * 180);
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative py-16 sm:py-24 lg:py-28 px-6 sm:px-10 flex flex-col justify-between transition-all duration-400 cursor-pointer overflow-hidden group ${
                  isOtherHovered ? 'opacity-30' : 'opacity-100'
                } ${isHovered ? 'bg-white/[0.04]' : 'bg-transparent'}`}
              >
                {/* Subtle Background Glyph */}
                <div
                  aria-hidden="true"
                  className={`absolute right-4 bottom-4 font-mono-num text-7xl sm:text-8xl pointer-events-none select-none transition-all duration-500 ${
                    isHovered ? 'opacity-20 scale-110 translate-y-0' : 'opacity-0 scale-75 translate-y-4'
                  }`}
                >
                  {metric.iconSymbol}
                </div>

                <div className="relative z-10">
                  {/* Plate Index */}
                  <span className="font-mono-num text-xs text-white/35 font-semibold block mb-8">
                    № 0{idx + 1}
                  </span>

                  {/* MONUMENTAL TABULAR NUMBER */}
                  <div className="font-grotesk font-[900] text-7xl sm:text-8xl lg:text-7xl xl:text-[7.5rem] tracking-tight leading-none text-white mb-6 tabular-nums transition-transform duration-300 group-hover:scale-105">
                    {metric.number}
                  </div>
                </div>

                {/* Pure 1-Line Label & Sub */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <h3 className="font-grotesk font-extrabold text-xl sm:text-2xl text-white tracking-tight group-hover:text-white/80 transition-colors">
                    {metric.label}
                  </h3>
                  <p className="text-xs font-mono-num text-white/50 mt-1">
                    {metric.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Footnote */}
        <div className="pt-8 flex items-center justify-between text-xs font-mono-num text-white/40">
          <span>DATA TERVALIDASI DARI TRANSKRIP AKADEMIK & REPOSITORI AKTIF</span>
          <span className="hidden sm:inline">ALTAIR RESKY · MAHASISWA INFORMATIKA</span>
        </div>
      </div>
    </section>
  );
};
