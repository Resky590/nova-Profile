import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

import webArt from '../assets/images/service_web_interface_1791283010563.jpg';
import automotiveArt from '../assets/images/case_automotive_cockpit_1791281792376.jpg';
import typographyArt from '../assets/images/service_branding_specimen_1791282992555.jpg';

interface Article {
  id: string;
  issue: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  fullContent: string[];
}

const ARTICLES: Article[] = [
  {
    id: '01',
    issue: 'CATATAN 01',
    date: 'OKTOBER 2026',
    readTime: '03 MIN READ',
    category: 'WEB PERFORMANCE',
    title: 'Optimasi Render 60fps & Web Audio API Tanpa Dependensi Berat.',
    excerpt: 'Eksplorasi pembuatan synthesizer interaktif dan visualisator kanvas browser dengan pemanfaatan hardware acceleration.',
    image: webArt,
    fullContent: [
      'Dalam pengembangan web modern, performa adalah bentuk penghormatan tertinggi kepada pengguna. Daripada membebani aplikasi dengan dependensi berat puluhan kilobyte, Web Audio API bawaan browser mampu menghasilkan audio sintetis taktil dengan latensi di bawah 10 milidetik.',
      'Melalui proyek Aura Sound, saya menerapkan arsitektur modular yang memisahkan komputasi audio dari thread rendering grafis, menjaga frame rate tetap stabil di 60fps pada berbagai perangkat laptop maupun ponsel.',
    ],
  },
  {
    id: '02',
    issue: 'CATATAN 02',
    date: 'SEPTEMBER 2026',
    readTime: '04 MIN READ',
    category: 'SISTEM ARSITEKTUR',
    title: 'Skalabilitas Aplikasi Kampus dengan Kontainerisasi Docker.',
    excerpt: 'Pelajaran dari merancang backend CampusGrid yang melayani ribuan request harian tanpa bottleneck database.',
    image: automotiveArt,
    fullContent: [
      'Saat mengembangkan CampusGrid untuk ribuan mahasiswa di kampus, tantangan terbesar adalah lonjakan beban server saat jadwal pengisian rencana studi dibuka secara serentak.',
      'Dengan memisahkan layanan menjadi REST microservices independen, memanfaatkan pooling koneksi PostgreSQL, dan kontainerisasi Docker, waktu respons rata-rata API terpangkas dari 420ms menjadi 48ms.',
    ],
  },
  {
    id: '03',
    issue: 'CATATAN 03',
    date: 'AGUSTUS 2026',
    readTime: '03 MIN READ',
    category: 'AKSESIBILITAS UI',
    title: 'Desain Inklusif: Menegakkan Standar WCAG 2.1 AA di React.',
    excerpt: 'Mengapa navigasi keyboard dan kontras semantik merupakan fondasi esensial software engineering beretika.',
    image: typographyArt,
    fullContent: [
      'Aksesibilitas seringkali diabaikan dalam proyek mahasiswa. Namun sebuah sistem tidak bisa disebut berkualitas jika tidak bisa diakses oleh semua kalangan masyarakat pengguna.',
      'Melalui Karsa UI, seluruh komponen tombol, dialog modal, dan navigasi diuji secara ketat terhadap pembaca layar (screen reader) dan manajemen fokus keyboard sebelum diintegrasikan ke lingkungan produksi.',
    ],
  },
];

export const InsightsJournal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleOpenArticle = (article: Article) => {
    playTactileClick(1600);
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    playTactileClick();
    setSelectedArticle(null);
  };

  return (
    <section
      id="insights-section"
      className="w-full bg-[#111214] text-white pt-28 sm:pt-36 pb-36 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-white/50">
                09 // JURNAL & CATATAN RISET
              </span>
            </div>
            <h2 className="font-grotesk font-[900] text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
              Journal.
            </h2>
          </div>

          <div className="text-xs font-mono-num text-white/45 uppercase tracking-widest hidden sm:block">
            <span>[ 3 CATATAN EKSPLORASI TEKNOLOGI · 2026 ]</span>
          </div>
        </div>

        {/* PURE GPU-ACCELERATED RUNNER TICKER */}
        <div className="py-4 border-b border-white/10 overflow-hidden mb-12 sm:mb-16">
          <div className="marquee-gpu whitespace-nowrap flex items-center text-xs font-mono-num uppercase tracking-[0.25em] text-white/40">
            {Array.from({ length: 4 }).map((_, blockIdx) => (
              <div key={blockIdx} className="flex items-center gap-8 mr-8 shrink-0">
                <span className="font-semibold text-white/80">✦ CATATAN MAHASISWA 2026</span>
                <span>·</span>
                <span className="text-white/60">REKAYASA WEB & SISTEM CERDAS</span>
                <span>·</span>
                <span className="font-semibold text-white/80">LEARNING IN PUBLIC</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 MONUMENTAL EDITORIAL PLATES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {ARTICLES.map((article, idx) => {
            const isHovered = hoveredIdx === idx;
            const isOtherHovered = hoveredIdx !== null && !isHovered;

            return (
              <div
                key={article.id}
                onMouseEnter={() => {
                  playTactileClick(2000 + idx * 150);
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleOpenArticle(article)}
                className={`group cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                  isOtherHovered ? 'opacity-35' : 'opacity-100'
                }`}
              >
                {/* Visual Plate */}
                <div className="relative w-full aspect-[16/10] bg-[#161719] overflow-hidden border border-white/15 shadow-2xl transition-all duration-500 group-hover:border-white/40">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 font-mono-num text-[10px] text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 border border-white/15 uppercase tracking-widest">
                    {article.issue}
                  </div>
                  <div className="absolute top-3 right-3 font-mono-num text-[10px] text-white/70 bg-black/50 backdrop-blur-xs px-2 py-0.5 border border-white/10 uppercase tracking-widest">
                    {article.readTime}
                  </div>
                </div>

                {/* Content Row */}
                <div className="pt-6 border-b border-white/10 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-num text-white/50 mb-3">
                      <span className="uppercase tracking-wider font-semibold text-white/70">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-grotesk font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-white/80 transition-colors">
                      {article.title}
                    </h3>
                  </div>

                  <div className="pt-6 flex items-center justify-between text-xs font-mono-num text-white/40 group-hover:text-white transition-colors">
                    <span>BACA CATATAN</span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Bottom Footnote */}
        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono-num text-white/40">
          <span>DITULIS SECARA MANDIRI OLEH ALTAIR RESKY</span>
          <span className="hidden sm:inline">DOKUMENTASI RISET & PEMBELAJARAN TERBUKA</span>
        </div>
      </div>

      {/* READING MODAL */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 sm:p-6"
        >
          <div className="w-full max-w-3xl bg-[#161719] text-white border border-white/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono-num text-white/50 uppercase tracking-wider">
                <span>{selectedArticle.issue}</span>
                <span>·</span>
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <button
                onClick={handleCloseArticle}
                aria-label="Close dialog"
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer rounded-full"
              >
                <X className="w-4 h-4 text-white/70" />
              </button>
            </div>

            <div className="p-8 max-h-[75vh] overflow-y-auto space-y-6">
              <div className="aspect-[16/9] w-full bg-black overflow-hidden border border-white/10">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 id="article-modal-title" className="font-grotesk font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/10 pt-6 font-normal">
                {selectedArticle.fullContent.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono-num text-white/50">
                <span>PENULIS: ALTAIR RESKY · S1 INFORMATIKA</span>
                <button
                  onClick={handleCloseArticle}
                  className="px-5 py-2 bg-white text-black font-semibold uppercase tracking-wider text-xs hover:bg-white/90 transition-colors cursor-pointer"
                >
                  Tutup Catatan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
