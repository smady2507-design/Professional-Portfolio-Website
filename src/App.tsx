import { useEffect, useState } from 'react';
import { AiVisionSection } from './components/AiVisionSection';
import { CareerSection } from './components/CareerSection';
import { ContactSection } from './components/ContactSection';
import { ExecutiveProfileModal } from './components/ExecutiveProfileModal';
import { ExpertiseSection } from './components/ExpertiseSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ImpactSection } from './components/ImpactSection';
import { Navbar } from './components/Navbar';
import { PhilosophyAndCredentials } from './components/PhilosophyAndCredentials';
import { ProfileSection } from './components/ProfileSection';
import { ENGAGEMENT_SUBJECTS, SectorFilter } from './data/portfolioData';

const TRACKED_SECTIONS = ['about', 'expertise', 'impact', 'journey', 'ai-vision'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [selectedSector, setSelectedSector] = useState<SectorFilter>('all');
  const [preselectedSubject, setPreselectedSubject] = useState<string>(ENGAGEMENT_SUBJECTS[0]);
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    TRACKED_SECTIONS.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleScheduleAiAdvisory = () => {
    setPreselectedSubject('AI & Digital Transformation Advisory');
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectVerticalSector = (sector: SectorFilter) => {
    setSelectedSector(sector);
    const impactEl = document.getElementById('impact');
    impactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060B16] text-slate-100">
      <Navbar activeSection={activeSection} />

      <main className="no-print">
        <HeroSection onOpenProfileModal={() => setProfileModalOpen(true)} />
        <ProfileSection />
        <ExpertiseSection />
        <ImpactSection selectedSector={selectedSector} onSelectSector={setSelectedSector} />
        <CareerSection />
        <AiVisionSection onScheduleAiAdvisory={handleScheduleAiAdvisory} />
        <PhilosophyAndCredentials onSelectVerticalSector={handleSelectVerticalSector} />
        <ContactSection preselectedSubject={preselectedSubject} />
      </main>

      <Footer />

      <ExecutiveProfileModal
        open={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </div>
  );
}
