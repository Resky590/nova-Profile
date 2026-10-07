import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

import brandingArt from '../assets/images/service_branding_specimen_1791282992555.jpg';
import webDesignArt from '../assets/images/service_web_interface_1791283010563.jpg';
import devArt from '../assets/images/case_solaris_biotech_1791282616754.jpg';
import strategyArt from '../assets/images/atelier_blueprint_cad_1791282301226.jpg';

interface Service {
  id: string;
  num: string;
  title: string;
  discipline: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    id: 'frontend',
    num: '01',
    title: 'Frontend Web',
    discipline: 'React · Next.js · TypeScript · Tailwind',
    image: webDesignArt,
  },
  {
    id: 'backend',
    num: '02',
    title: 'Backend & API',
    discipline: 'Node.js · FastAPI · PostgreSQL · REST',
    image: devArt,
  },
  {
    id: 'ui-ux',
    num: '03',
    title: 'UI/UX Design',
    discipline: 'Figma · Prototyping · Design Systems',
    image: brandingArt,
  },
  {
    id: 'ai-data',
    num: '04',
    title: 'AI & Data',
    discipline: 'LLM Integration · RAG · Data Pipelines',
    image: strategyArt,
  },
];

interface ServicesSectionProps {
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services-section"
      className="w-full bg-[#111214] text-white pt-28 sm:pt-36 pb-36 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Minimalist, Airy & Calm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/50">
                04 // BIDANG KEAHLIAN
              </span>
            </div>
            <h2 className="font-grotesk font-[900] text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
              Skills & Focus.
            </h2>
          </div>

          <div className="text-xs font-mono-num text-white/50 uppercase tracking-widest hidden sm:block">
            <span>[ 4 FOKUS UTAMA REKAYASA PERANGKAT LUNAK ]</span>
          </div>
        </div>

        {/* 4 ELEGANT MINIMALIST COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14 sm:mt-18">
          {SERVICES.map((service) => {
            const isHovered = hoveredId === service.id;
            const isOtherHovered = hoveredId !== null && !isHovered;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  playTactileClick(2200);
                  setHoveredId(service.id);
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  playTactileClick(1600);
                  onStartProject();
                }}
                className={`group cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                  isOtherHovered ? 'opacity-40' : 'opacity-100'
                }`}
              >
                {/* Visual Frame */}
                <div className="relative w-full aspect-[4/5] bg-[#161719] overflow-hidden border border-white/15 shadow-xl transition-all duration-500 group-hover:border-white/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 font-mono-num text-xs text-white/70">
                    № {service.num}
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Typography Block */}
                <div className="pt-6 border-b border-white/10 pb-6">
                  <h3 className="font-grotesk font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight group-hover:text-white/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono-num text-white/50 tracking-wider uppercase mt-2">
                    {service.discipline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono-num text-white/40">
          <span>ALTAIR RESKY · BIDANG KOMPETENSI MAHASISWA</span>
          <span className="hidden sm:inline">TERUS BELAJAR & BERADAPTASI DENGAN TEKNOLOGI TERBARU</span>
        </div>
      </div>
    </section>
  );
};
