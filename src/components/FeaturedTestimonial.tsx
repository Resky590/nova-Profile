import React from 'react';
import clientPortrait from '../assets/images/testimonial_client_portrait_1791285913413.jpg';

export const FeaturedTestimonial: React.FC = () => {
  return (
    <section
      id="testimonials-section"
      className="w-full bg-[#FAF8F5] text-[#111111] pt-28 sm:pt-36 pb-36 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Minimalist & Pure */}
        <div className="flex items-center justify-between pb-12 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[11px] font-mono-num font-semibold tracking-[0.25em] uppercase text-black/60">
              08 // REKOMENDASI & ENDORSEMENT
            </span>
          </div>

          <span className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-black/40 hidden sm:inline">
            DOSEN PEMBIMBING & MENTOR
          </span>
        </div>

        {/* SATU TESTIMONIAL UTAMA */}
        <div className="py-16 sm:py-24">
          <div className="max-w-5xl">
            {/* Giant Typographic Statement */}
            <blockquote className="font-grotesk font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.12] tracking-[-0.035em] text-[#0A0A0A] text-balance mb-12 sm:mb-16">
              “Altair memiliki ketajaman logika rekayasa perangkat lunak yang matang dan rasa estetika antarmuka yang tinggi. Kode yang ia bangun selalu rapi, efisien, dan tervalidasi.”
            </blockquote>

            {/* Identity & Portrait Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-black/[0.08] gap-6">
              <div className="flex items-center gap-5 sm:gap-6">
                {/* Portrait Frame */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full sm:rounded-none overflow-hidden border border-black/15 shadow-sm shrink-0 bg-[#E5E3DD]">
                  <img
                    src={clientPortrait}
                    alt="Dr. Ir. Florian Hidayat"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
                    Dr. Ir. Florian Hidayat, M.Sc.
                  </h3>
                  <p className="text-xs sm:text-[13px] font-mono-num text-black/60 mt-0.5">
                    Kepala Laboratorium Rekayasa Perangkat Lunak · Dosen Pembimbing
                  </p>
                </div>
              </div>

              {/* Verified Outcome Badge */}
              <div className="flex items-center gap-2 self-start sm:self-center font-mono-num text-xs bg-black/[0.04] border border-black/10 px-3.5 py-1.5 rounded-full text-black/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Rekomendasi Akademik Resmi</span>
              </div>
            </div>
          </div>
        </div>

        {/* BEBERAPA TESTIMONIAL KECIL SECARA AIRY */}
        <div className="pt-16 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Secondary 1 */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-black/75 leading-relaxed font-normal">
              “Kolaborator luar biasa di tim. Mampu mengubah rancangan UI rumit menjadi antarmuka web interaktif yang responsif dan sangat kencang dalam waktu singkat.”
            </p>
            <div className="pt-2 text-xs font-mono-num text-black/50">
              <span className="font-bold text-black text-sm block font-grotesk">Nadia Prasetyo</span>
              <span>Rekan Tim Hackathon · UI/UX Researcher</span>
            </div>
          </div>

          {/* Secondary 2 */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-black/75 leading-relaxed font-normal">
              “Kemampuan problem-solving dan adaptasi belajarnya melampaui rata-rata. Struktur kodenya teratur, modular, dan menerapkan praktik software development yang baik.”
            </p>
            <div className="pt-2 text-xs font-mono-num text-black/50">
              <span className="font-bold text-black text-sm block font-grotesk">Rendra Pratama</span>
              <span>Senior Software Engineer · Mentor Program Magang</span>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Footnote */}
        <div className="mt-20 pt-8 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono-num text-black/40">
          <span>REFERENSI & KONTAK REKOMENDASI TERSEDIA DI DALAM CV LENGKAP</span>
          <span className="hidden sm:inline">ALTAIR RESKY · S1 INFORMATIKA</span>
        </div>
      </div>
    </section>
  );
};
