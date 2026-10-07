import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface FooterSectionProps {
  onStartProject: () => void;
  onOpenCompany: (section: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenCompany,
}) => {
  const [timeJKT, setTimeJKT] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeJKT(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    playTactileClick(1800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Tentang', id: 'Company' },
    { label: 'Proyek', id: 'Projects' },
    { label: 'Keahlian', id: 'Expertise' },
    { label: 'Jurnal', id: 'Insights' },
    { label: 'Profil Akademik', id: 'Manifesto' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X / Twitter', href: 'https://twitter.com' },
    { label: 'Figma Community', href: 'https://figma.com' },
  ];

  return (
    <footer className="w-full bg-[#0E0F11] text-white pt-24 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-20 relative z-30 select-none overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* ROW 1: BRAND & BRIEF NAVIGATION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-white/10 gap-10">
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-baseline gap-1 text-left cursor-pointer focus-visible:outline-hidden"
              aria-label="Altair Resky Homepage"
            >
              <span className="font-grotesk font-[900] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white group-hover:opacity-80 transition-opacity">
                Altair Resky
              </span>
              <span className="font-mono-num text-xs font-semibold text-white/50 -translate-y-2">
                · CS
              </span>
            </button>
            <p className="text-xs font-mono-num text-white/50 uppercase tracking-widest mt-2">
              Mahasiswa S1 Teknik Informatika · Software Engineer & Designer
            </p>
          </div>

          {/* Brief Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 sm:gap-9 text-xs font-mono-num uppercase tracking-wider text-white/70"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playTactileClick();
                  onOpenCompany(item.id);
                }}
                className="relative py-1 hover:text-white transition-colors cursor-pointer focus-visible:outline-hidden"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* ROW 2: CONTACT, SOCIAL, AND LOCATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10 text-xs">
          {/* Column 1: Direct Contact */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono-num uppercase tracking-widest text-white/40 block">
              01 // KONTAK LANGSUNG
            </span>
            <div className="space-y-2">
              <a
                href="mailto:altairresky84@gmail.com"
                onClick={() => playTactileClick()}
                className="text-sm sm:text-base font-grotesk font-bold text-white hover:opacity-75 transition-opacity block"
              >
                altairresky84@gmail.com
              </a>
              <p className="font-mono-num text-white/50">
                +62 812-8800-xxxx · WhatsApp / Telegram
              </p>
              <p className="font-mono-num text-[11px] text-white/40">
                Terbuka untuk kesempatan magang dan proyek kolaborasi
              </p>
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono-num uppercase tracking-widest text-white/40 block">
              02 // JEJARING & REPOSITORI
            </span>
            <div className="flex flex-col space-y-2 font-mono-num text-white/70">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playTactileClick()}
                  className="hover:text-white transition-colors flex items-center justify-between w-40 group"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Campus & Hub */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono-num uppercase tracking-widest text-white/40 block">
              03 // PENDIDIKAN & KAMPUS
            </span>
            <div className="space-y-3 font-mono-num text-white/70">
              <div>
                <strong className="text-white block font-medium">Program Studi</strong>
                <span className="text-white/50">S1 Teknik Informatika (Computer Science)</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Fakultas</strong>
                <span className="text-white/50">Fakultas Ilmu Komputer / Teknologi Informasi</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Lokasi Kampus</strong>
                <span className="text-white/50">Indonesia · Zona Waktu WIB (UTC+7)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: COPYRIGHT, CLOCK & BACK TO TOP */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-num text-white/45 gap-6">
          <div>
            © 2026 Altair Resky. Seluruh hak cipta dilindungi undang-undang.
          </div>

          {/* Live Clock */}
          <div className="flex items-center gap-3 text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>JAKARTA {timeJKT || '14:20'} WIB</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-white/70"
          >
            <span>Kembali ke Atas</span>
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
