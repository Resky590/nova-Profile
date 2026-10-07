import React, { useState } from 'react';
import { ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { playTactileClick, toggleAudioMute } from '../utils/sound';

interface NavbarProps {
  onOpenProjectBrief: () => void;
  onOpenCompanySection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProjectBrief,
  onOpenCompanySection,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleAudioToggle = () => {
    const muted = toggleAudioMute();
    setIsMuted(muted);
  };

  const navItems = [
    { label: 'Tentang', id: 'About' },
    { label: 'Proyek', id: 'Projects' },
    { label: 'Keahlian', id: 'Skills' },
    { label: 'Alur Kerja', id: 'Process' },
    { label: 'Jurnal', id: 'Journal' },
  ];

  return (
    <header className="w-full select-none z-40 relative pt-7 sm:pt-9 px-8 sm:px-14 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Brand mark (Student Name) */}
        <button
          onClick={() => {
            playTactileClick();
            onOpenCompanySection('About');
          }}
          className="group flex items-baseline gap-1.5 text-left cursor-pointer focus-visible:outline-hidden"
          aria-label="Student Portfolio Homepage"
        >
          <span className="text-[13px] text-white/60 font-normal">©</span>
          <span className="font-sans font-semibold text-[15px] tracking-tight text-white group-hover:opacity-80 transition-opacity">
            Altair Resky
          </span>
          <span className="font-mono-num text-[11px] text-white/50 hidden sm:inline">
            · S1 Informatika
          </span>
        </button>

        {/* Right: Clean Nav items floating seamlessly */}
        <div className="flex items-center gap-7 sm:gap-10">
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[14px] font-normal text-white/90"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playTactileClick();
                  onOpenCompanySection(item.id);
                }}
                onMouseEnter={() => playTactileClick(2200)}
                className="group relative py-1 text-white hover:text-white/80 transition-opacity cursor-pointer focus-visible:outline-hidden"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-200" />
              </button>
            ))}
          </nav>

          {/* Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono-num uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
            title="Toggle tactile sound"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Get in Touch CTA */}
          <button
            onClick={() => {
              playTactileClick();
              onOpenProjectBrief();
            }}
            onMouseEnter={() => playTactileClick(2200)}
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white hover:opacity-80 transition-all cursor-pointer focus-visible:outline-hidden"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
