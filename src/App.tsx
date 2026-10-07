import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BottomHeroRow } from './components/BottomHeroRow';
import { BrandClientStrip } from './components/BrandClientStrip';
import { AboutPreview } from './components/AboutPreview';
import { SelectedProjects, Project } from './components/SelectedProjects';
import { ServicesSection } from './components/ServicesSection';
import { StatementSection } from './components/StatementSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { FeaturedTestimonial } from './components/FeaturedTestimonial';
import { InsightsJournal } from './components/InsightsJournal';
import { FinalCTA } from './components/FinalCTA';
import { FooterSection } from './components/FooterSection';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import { SelectedWorkModal } from './components/SelectedWorkModal';
import { CompanyModal } from './components/CompanyModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProjectBriefOpen, setIsProjectBriefOpen] = useState(false);
  const [isSelectedWorkOpen, setIsSelectedWorkOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState<Project | null>(null);
  const [activeCompanySection, setActiveCompanySection] = useState('Profil Mahasiswa');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleOpenCompanySection = (section: string) => {
    if (section === 'About' || section === 'Company') {
      const el = document.getElementById('about-preview');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (section === 'Projects') {
      const el = document.getElementById('selected-projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (section === 'Skills' || section === 'Expertise') {
      const el = document.getElementById('services-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (section === 'Process') {
      const el = document.getElementById('process-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (section === 'Journal' || section === 'Insights') {
      const el = document.getElementById('insights-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveCompanySection(section === 'Manifesto' ? 'Profil Akademik & Riwayat' : section);
    setIsCompanyModalOpen(true);
  };

  const handleStatClick = (stat: string) => {
    const el = document.getElementById('why-choose-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      showToast(`${stat}`);
    }
  };

  const handleScrollClick = () => {
    const el = document.getElementById('brand-strip');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsSelectedWorkOpen(true);
    }
  };

  const handleSelectPartner = (partnerName: string) => {
    showToast(`Teknologi: ${partnerName} · Repositori Mahasiswa Terpilih`);
  };

  const handleDiscoverStory = () => {
    setActiveCompanySection('Profil Mahasiswa & Minat Riset');
    setIsCompanyModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#989C9D] text-white flex flex-col selection:bg-white selection:text-[#121212] relative overflow-x-hidden">
      {/* Editorial Preloader on every page reload */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* SECTION 1: HERO VIEWPORT (Dennis Snellenberg layout) */}
      <section className="h-screen min-h-[720px] max-h-[1080px] w-full flex flex-col justify-between relative overflow-hidden">
        <Navbar
          onOpenProjectBrief={() => setIsProjectBriefOpen(true)}
          onOpenCompanySection={handleOpenCompanySection}
        />

        <HeroSection
          onExploreWork={() => {
            const el = document.getElementById('selected-projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else setIsSelectedWorkOpen(true);
          }}
          onAboutCompany={() => handleOpenCompanySection('About')}
          onImageClick={() => setIsSelectedWorkOpen(true)}
          isLoaded={isLoaded}
        />

        <BottomHeroRow
          onScrollClick={handleScrollClick}
          onStatClick={handleStatClick}
        />
      </section>

      {/* SECTION 2: TECH STACK / TOOLS (Kinetic ribbon & interactive stack tiles) */}
      <BrandClientStrip onSelectPartner={handleSelectPartner} />

      {/* SECTION 3: TENTANG MAHASISWA (Singkat, Padat, Foto Ruang Lab, CTA Baca Profil) */}
      <AboutPreview onDiscoverStory={handleDiscoverStory} />

      {/* SECTION 4: KARYA & PROYEK TERPILIH (6 Proyek Mahasiswa, 6-Column / Panorama) */}
      <SelectedProjects
        onOpenProjectDetail={(project) => setSelectedProjectDetail(project)}
        onViewAllProjects={() => setIsSelectedWorkOpen(true)}
      />

      {/* SECTION 5: KEAHLIAN / SKILLS (4-Column Minimalist Focus) */}
      <ServicesSection onStartProject={() => setIsProjectBriefOpen(true)} />

      {/* SECTION 6: STATEMENT / PRINSIP KODING MAHASISWA */}
      <StatementSection />

      {/* SECTION 7: PENCAPAIAN AKADEMIK & METRIK (IPK 3.92, 18+ Proyek, 05 Penghargaan, 03+ Tahun) */}
      <WhyChooseUs />

      {/* SECTION 8: ALUR KERJA (Discover → Define → Design → Build → Launch) */}
      <ProcessSection onStartProject={() => setIsProjectBriefOpen(true)} />

      {/* SECTION 9: REKOMENDASI DOSEN & MENTOR (Satu Quote Utama + Dua Pendukung Ringkas) */}
      <FeaturedTestimonial />

      {/* SECTION 10: CATATAN BELAJAR & JURNAL (3 Artikel Riset Singkat) */}
      <InsightsJournal />

      {/* SECTION 11: FINAL CTA (Ajakan Kolaborasi & Kontak Email Mahasiswa) */}
      <FinalCTA onStartProject={() => setIsProjectBriefOpen(true)} />

      {/* SECTION 12: FOOTER (Navigasi Singkat, Kontak, Kampus, Jam WIB & Back to Top) */}
      <FooterSection
        onStartProject={() => setIsProjectBriefOpen(true)}
        onOpenCompany={() => handleOpenCompanySection('Manifesto')}
      />

      {/* Minimal Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#1C1D20] text-white text-[11px] font-mono-num uppercase tracking-wider px-5 py-2.5 border border-white/15 shadow-2xl animate-in fade-in duration-200"
        >
          {toastMessage}
        </div>
      )}

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProjectDetail}
        onClose={() => setSelectedProjectDetail(null)}
        onStartProject={() => setIsProjectBriefOpen(true)}
      />

      <ProjectBriefModal
        isOpen={isProjectBriefOpen}
        onClose={() => setIsProjectBriefOpen(false)}
      />

      <SelectedWorkModal
        isOpen={isSelectedWorkOpen}
        onClose={() => setIsSelectedWorkOpen(false)}
      />

      <CompanyModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
        activeSection={activeCompanySection}
      />
    </div>
  );
}
