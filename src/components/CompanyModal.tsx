import React from 'react';
import { X } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ isOpen, onClose, activeSection = 'Profil' }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6"
    >
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-black/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-8 py-5 border-b border-black/[0.08]">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-num text-[11px] text-black/40 uppercase tracking-widest">[ MAHASISWA ]</span>
            <h2 id="about-modal-title" className="font-grotesk text-lg font-bold tracking-tight text-black">
              {activeSection}
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

        <div className="p-8 space-y-6">
          <p className="font-grotesk text-2xl font-bold text-black leading-tight tracking-tight">
            Altair Resky Pratama
          </p>

          <p className="text-black/70 text-sm leading-relaxed">
            Mahasiswa aktif S1 Teknik Informatika dengan ketertarikan mendalam pada rekayasa perangkat lunak modern, UI/UX interaction design, dan kecerdasan artifisial. Berpengalaman membangun aplikasi web responsif dan memenangkan kompetisi hackathon tingkat nasional.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-black/[0.08] text-xs">
            <div>
              <span className="font-mono-num text-[11px] text-black/40 uppercase tracking-wider block mb-1">PROGRAM STUDI</span>
              <span className="font-medium text-black">S1 Teknik Informatika (IPK 3.92)</span>
            </div>
            <div>
              <span className="font-mono-num text-[11px] text-black/40 uppercase tracking-wider block mb-1">PERAN KAMPUS</span>
              <span className="font-medium text-black">Asisten Lab RPL & Tim Riset</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
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
