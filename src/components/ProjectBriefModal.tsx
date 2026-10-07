import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({ isOpen, onClose }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('Proyek Kolaborasi');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick(1500);
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brief-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6"
    >
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-black/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-8 py-5 border-b border-black/[0.08]">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-num text-[11px] text-black/40 uppercase tracking-widest">[ KONTAK ]</span>
            <h2 id="brief-modal-title" className="font-grotesk text-lg font-bold tracking-tight text-black">
              Kirim Pesan & Kolaborasi
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
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-black mx-auto stroke-1" />
              <p className="font-grotesk text-xl font-bold text-black">Pesan Terkirim</p>
              <p className="text-xs text-black/60 max-w-xs mx-auto">
                Terima kasih telah menghubungi saya. Saya akan membalas pesan Anda dalam kurun 24 jam.
              </p>
              <button
                onClick={() => {
                  playTactileClick();
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-black text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-black/85 transition-colors cursor-pointer"
              >
                Kembali
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-mono-num uppercase tracking-wider text-black/50 mb-2.5">
                  Tujuan Kolaborasi
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Magang / Internship', 'Proyek Kolaborasi', 'Riset / Skripsi', 'Diskusi Teknis'].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => {
                        playTactileClick(2200);
                        setSelectedDiscipline(d);
                      }}
                      className={`text-xs px-3 py-1.5 border transition-colors cursor-pointer ${
                        selectedDiscipline === d
                          ? 'bg-black text-[#FAF8F5] border-black font-semibold'
                          : 'bg-transparent text-black/70 border-black/20 hover:border-black/50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[11px] font-mono-num uppercase tracking-wider text-black/50 mb-1.5">
                  Email Anda
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  placeholder="nama@perusahaan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/70 border border-black/20 px-3.5 py-2.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-msg" className="block text-[11px] font-mono-num uppercase tracking-wider text-black/50 mb-1.5">
                  Pesan Singkat
                </label>
                <textarea
                  id="contact-msg"
                  rows={2}
                  placeholder="Ceritakan gambaran singkat proyek atau tawaran magang..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white/70 border border-black/20 px-3.5 py-2 text-sm text-black focus:outline-hidden focus:border-black transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    onClose();
                  }}
                  className="px-4 py-2 text-xs text-black/60 hover:text-black transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-black text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-black/85 transition-colors cursor-pointer"
                >
                  <span>Kirim Pesan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
