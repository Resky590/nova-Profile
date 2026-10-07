import React, { useState } from 'react';
import { ArrowUpRight, Grid3X3, Columns3 } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

import automotiveImage from '../assets/images/case_automotive_cockpit_1791281792376.jpg';
import audioImage from '../assets/images/case_audio_hardware_1791281824301.jpg';
import kyotoImage from '../assets/images/nova_monolith_architecture_1791279892540.jpg';
import atriumImage from '../assets/images/nova_editorial_architecture_1791279272688.jpg';
import horologyImage from '../assets/images/case_lumen_horology_1791282417459.jpg';
import biotechImage from '../assets/images/case_solaris_biotech_1791282616754.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  client?: string;
  impact?: string;
  description?: string;
}

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'SYNAPSE AI',
    category: 'AI Diagnostics & Triage',
    year: '2026',
    image: atriumImage,
    client: 'Capstone Project / Juara 1 Hackathon',
    impact: 'Akurasi 94.8% · 1.2k Kasus',
    description: 'Sistem skrining dan triase rekam medis cerdas berbasis model bahasa lokal dengan latensi inferensi sub-detik.',
  },
  {
    id: '02',
    title: 'CIVICPULSE',
    category: 'GovTech Public Analytics',
    year: '2025',
    image: automotiveImage,
    client: 'Proyek Kolaborasi Open-Source',
    impact: '500+ Stars · 4 Komunitas',
    description: 'Dashboard monitoring keluhan fasilitas publik real-time dengan integrasi peta spasial dan analisis sentimen.',
  },
  {
    id: '03',
    title: 'AURA SOUND',
    category: 'Creative Web Audio & WebGL',
    year: '2025',
    image: audioImage,
    client: 'Eksperimen Interaksi Mandiri',
    impact: 'Featured CreativeWeb',
    description: 'Synthesizer polifonis berbasis browser dengan visualisasi spektrum 60fps WebGL tanpa dependensi berat.',
  },
  {
    id: '04',
    title: 'CAMPUSGRID',
    category: 'Academic Portal & Planner',
    year: '2026',
    image: kyotoImage,
    client: 'Platform Mahasiswa Kampus',
    impact: '3,400+ Mahasiswa Aktif',
    description: 'Aplikasi manajemen jadwal kuliah, reminder tugas otomatis, dan kalender ujian dengan sinkronisasi multi-perangkat.',
  },
  {
    id: '05',
    title: 'KARSA UI',
    category: 'Accessible Design System',
    year: '2026',
    image: horologyImage,
    client: 'Open Source UI Library',
    impact: 'Kepatuhan Penuh WCAG 2.1 AA',
    description: 'Koleksi komponen React berbasis Tailwind & TypeScript yang dirancang untuk performa tinggi dan aksesibilitas ramah pembaca layar.',
  },
  {
    id: '06',
    title: 'ECOTRACK IOT',
    category: 'Campus Carbon Telemetry',
    year: '2025',
    image: biotechImage,
    client: 'Riset Lab Sistem Tertanam',
    impact: '-18% Pemborosan Listrik',
    description: 'Platform telemetri energi cerdas menghubungkan mikrokontroler sensor daya dengan visualisasi analitik real-time.',
  },
];

interface SelectedProjectsProps {
  onOpenProjectDetail: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({
  onOpenProjectDetail,
  onViewAllProjects,
}) => {
  const [activePanelIndex, setActivePanelIndex] = useState<number>(0);
  const [layoutView, setLayoutView] = useState<'panorama' | 'modular'>('panorama');

  const toggleView = (view: 'panorama' | 'modular') => {
    playTactileClick(view === 'panorama' ? 1600 : 2200);
    setLayoutView(view);
  };

  return (
    <section
      id="selected-projects"
      className="w-full bg-[#111214] text-white pt-28 sm:pt-36 pb-36 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/50">
                03 // KARYA & PROYEK TERPILIH
              </span>
            </div>
            <h2 className="font-grotesk font-[900] text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
              Selected Work.
            </h2>
          </div>

          {/* Layout Switcher */}
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 bg-white/5 border border-white/15 rounded-full text-xs font-mono-num uppercase tracking-wider">
              <button
                onClick={() => toggleView('panorama')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  layoutView === 'panorama'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span>6-Panel Panorama</span>
              </button>
              <button
                onClick={() => toggleView('modular')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  layoutView === 'modular'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>6-Col Modular</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: 6-PANEL EXPANDING PANORAMA */}
        {layoutView === 'panorama' && (
          <div className="mt-14 sm:mt-18">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[640px] xl:h-[700px] w-full border border-white/15 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/15 bg-black">
              {PROJECTS.map((project, idx) => {
                const isExpanded = activePanelIndex === idx;

                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => {
                      playTactileClick(2000);
                      setActivePanelIndex(idx);
                    }}
                    onClick={() => {
                      playTactileClick(1500);
                      onOpenProjectDetail(project);
                    }}
                    className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      isExpanded
                        ? 'lg:flex-[3.8] h-[400px] lg:h-full bg-[#18191C]'
                        : 'lg:flex-1 h-[100px] lg:h-full bg-[#0E0F11] hover:bg-[#141517]'
                    }`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                          isExpanded
                            ? 'scale-105 opacity-85 grayscale-0'
                            : 'scale-100 opacity-25 grayscale hover:opacity-40'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between z-10">
                      {/* Top Bar: Plate Index */}
                      <div className="flex items-center justify-between font-mono-num text-xs tracking-widest text-white/70">
                        <span className="font-bold text-white">№ {project.id}</span>
                        {isExpanded ? (
                          <span className="text-[11px] uppercase tracking-[0.2em] bg-white/20 px-2.5 py-0.5 rounded-full text-white backdrop-blur-xs">
                            PROYEK AKTIF
                          </span>
                        ) : (
                          <span className="text-white/40">{project.year}</span>
                        )}
                      </div>

                      {/* Center Typography in Collapsed Mode */}
                      {!isExpanded && (
                        <div className="hidden lg:flex flex-col items-center justify-center my-auto">
                          <span className="font-grotesk font-extrabold text-lg text-white/60 tracking-tight transform -rotate-90 whitespace-nowrap">
                            {project.title}
                          </span>
                        </div>
                      )}

                      {/* Bottom Reveal in Expanded Mode */}
                      {isExpanded ? (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div>
                            <span className="text-xs font-mono-num uppercase tracking-[0.2em] text-white/60 block mb-1">
                              {project.category}
                            </span>
                            <h3 className="font-grotesk font-[900] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white flex items-center gap-3">
                              <span>{project.title}</span>
                              <ArrowUpRight className="w-7 h-7 text-white/80" />
                            </h3>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs font-mono-num text-white/70">
                            <span>{project.client} · {project.year}</span>
                            <span className="text-white/90 font-medium">DETAIL PROYEK ↗</span>
                          </div>
                        </div>
                      ) : (
                        <div className="lg:hidden flex items-center justify-between text-xs font-mono-num text-white/60">
                          <span className="font-bold text-white">{project.title}</span>
                          <span>{project.category}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Instruction footnote */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono-num text-white/40 uppercase tracking-widest">
              <span>ARAHKAN KURSOR ATAU KLIK PANEL UNTUK MELIHAT DETAIL PROYEK</span>
              <span>6 PROYEK MAHASISWA</span>
            </div>
          </div>
        )}

        {/* VIEW 2: 6-COLUMN MODULAR ASYMMETRIC SHEET */}
        {layoutView === 'modular' && (
          <div className="mt-14 sm:mt-18 space-y-16 animate-in fade-in duration-300">
            {/* ROW 1: 4 Columns + 2 Columns */}
            <div className="grid grid-cols-6 gap-6 sm:gap-8 items-start">
              {/* Project 1 */}
              <div
                onClick={() => {
                  playTactileClick();
                  onOpenProjectDetail(PROJECTS[0]);
                }}
                className="col-span-6 lg:col-span-4 group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] bg-[#161719] overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={PROJECTS[0].image}
                    alt={PROJECTS[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 font-mono-num text-xs text-white bg-black/60 px-2.5 py-1 uppercase tracking-widest border border-white/15">
                    PLATE 01
                  </div>
                </div>
                <div className="pt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {PROJECTS[0].title}
                  </h3>
                  <div className="text-xs font-mono-num text-white/60">
                    {PROJECTS[0].category} — {PROJECTS[0].year}
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div
                onClick={() => {
                  playTactileClick();
                  onOpenProjectDetail(PROJECTS[1]);
                }}
                className="col-span-6 lg:col-span-2 group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] bg-[#161719] overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={PROJECTS[1].image}
                    alt={PROJECTS[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 font-mono-num text-xs text-white bg-black/60 px-2.5 py-1 uppercase tracking-widest border border-white/15">
                    PLATE 02
                  </div>
                </div>
                <div className="pt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {PROJECTS[1].title}
                  </h3>
                  <div className="text-xs font-mono-num text-white/60">
                    {PROJECTS[1].year}
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: 2 Columns + 4 Columns */}
            <div className="grid grid-cols-6 gap-6 sm:gap-8 items-start">
              {/* Project 3 */}
              <div
                onClick={() => {
                  playTactileClick();
                  onOpenProjectDetail(PROJECTS[2]);
                }}
                className="col-span-6 lg:col-span-2 group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] bg-[#161719] overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={PROJECTS[2].image}
                    alt={PROJECTS[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 font-mono-num text-xs text-white bg-black/60 px-2.5 py-1 uppercase tracking-widest border border-white/15">
                    PLATE 03
                  </div>
                </div>
                <div className="pt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {PROJECTS[2].title}
                  </h3>
                  <div className="text-xs font-mono-num text-white/60">
                    {PROJECTS[2].year}
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div
                onClick={() => {
                  playTactileClick();
                  onOpenProjectDetail(PROJECTS[3]);
                }}
                className="col-span-6 lg:col-span-4 group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] bg-[#161719] overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={PROJECTS[3].image}
                    alt={PROJECTS[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 font-mono-num text-xs text-white bg-black/60 px-2.5 py-1 uppercase tracking-widest border border-white/15">
                    PLATE 04
                  </div>
                </div>
                <div className="pt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {PROJECTS[3].title}
                  </h3>
                  <div className="text-xs font-mono-num text-white/60">
                    {PROJECTS[3].category} — {PROJECTS[3].year}
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: 3 Columns + 3 Columns */}
            <div className="grid grid-cols-6 gap-6 sm:gap-8 items-start">
              {/* Project 5 */}
              <div
                onClick={() => {
                  playTactileClick();
                  onOpenProjectDetail(PROJECTS[4]);
                }}
                className="col-span-6 lg:col-span-3 group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] bg-[#161719] overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={PROJECTS[4].image}
                    alt={PROJECTS[4].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 font-mono-num text-xs text-white bg-black/60 px-2.5 py-1 uppercase tracking-widest border border-white/15">
                    PLATE 05
                  </div>
                </div>
                <div className="pt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {PROJECTS[4].title}
                  </h3>
                  <div className="text-xs font-mono-num text-white/60">
                    {PROJECTS[4].category} — {PROJECTS[4].year}
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div
                onClick={() => {
                  playTactileClick();
                  onOpenProjectDetail(PROJECTS[5]);
                }}
                className="col-span-6 lg:col-span-3 group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] bg-[#161719] overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={PROJECTS[5].image}
                    alt={PROJECTS[5].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 font-mono-num text-xs text-white bg-black/60 px-2.5 py-1 uppercase tracking-widest border border-white/15">
                    PLATE 06
                  </div>
                </div>
                <div className="pt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {PROJECTS[5].title}
                  </h3>
                  <div className="text-xs font-mono-num text-white/60">
                    {PROJECTS[5].category} — {PROJECTS[5].year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Archive Action */}
        <div className="mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-num text-white/50 gap-6">
          <span>KODE SUMBER & DOKUMENTASI PROYEK TERSEDIA DI GITHUB</span>
          <button
            onClick={() => {
              playTactileClick();
              onViewAllProjects();
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white text-xs font-mono-num uppercase tracking-wider text-white transition-all cursor-pointer rounded-full"
          >
            <span>Buka Arsip Repositori (06)</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
