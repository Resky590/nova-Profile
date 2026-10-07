import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface SelectedWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CASES = [
  {
    index: '01',
    title: 'SYNAPSE AI',
    category: 'AI Diagnostics & Triage Platform',
    year: '2026',
    location: 'Juara 1 Hackathon',
  },
  {
    index: '02',
    title: 'CIVICPULSE',
    category: 'GovTech Analytics & Public Feedback',
    year: '2025',
    location: 'Open Source',
  },
  {
    index: '03',
    title: 'AURA SOUND',
    category: 'Creative Code & Web Audio Synthesis',
    year: '2025',
    location: 'Featured Web',
  },
  {
    index: '04',
    title: 'CAMPUSGRID',
    category: 'Academic Portal & Smart Scheduler',
    year: '2026',
    location: 'Campus System',
  },
  {
    index: '05',
    title: 'KARSA UI',
    category: 'Accessible Design System (WCAG 2.1 AA)',
    year: '2026',
    location: 'NPM Package',
  },
  {
    index: '06',
    title: 'ECOTRACK IOT',
    category: 'Campus Energy & Carbon Telemetry',
    year: '2025',
    location: 'Lab Hardware',
  },
];

export const SelectedWorkModal: React.FC<SelectedWorkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6"
    >
      <div className="w-full max-w-2xl bg-[#FAF8F5] border border-black/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-8 py-5 border-b border-black/[0.08]">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-num text-[11px] text-black/40 uppercase tracking-widest">[ ARSIP KARYA ]</span>
            <h2 id="work-modal-title" className="font-grotesk text-lg font-bold tracking-tight text-black">
              Proyek Mahasiswa / 2024–2026
            </h2>
          </div>
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            aria-label="Close dialog"
            className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-black/70" />
          </button>
        </div>

        <div className="p-8">
          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {CASES.map((item) => (
              <div
                key={item.index}
                onClick={() => playTactileClick(2000)}
                className="group py-4 flex items-center justify-between hover:bg-black/[0.02] px-2 transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono-num text-xs text-black/40 font-medium">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="font-grotesk text-base font-bold text-black flex items-center gap-1.5 group-hover:text-black/75 transition-colors">
                      {item.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <div className="text-[12px] text-black/55 mt-0.5 font-normal">
                      {item.category}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono-num text-xs text-black/70 block">{item.location}</span>
                  <span className="font-mono-num text-[11px] text-black/40">{item.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 flex items-center justify-between">
            <span className="text-[11px] font-mono-num text-black/40 uppercase tracking-wider">
              ALTAIR RESKY · S1 INFORMATIKA
            </span>
            <button
              onClick={() => {
                playTactileClick();
                onClose();
              }}
              className="px-6 py-2.5 bg-black text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-black/85 transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
