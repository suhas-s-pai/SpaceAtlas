import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EcosystemOverview from './components/EcosystemOverview';
import FlightSoftwareSection from './components/FlightSoftwareSection';
import GroundSystemsSection from './components/GroundSystemsSection';
import NavigationSection from './components/NavigationSection';
import DataProcessingSection from './components/DataProcessingSection';
import SimulationSection from './components/SimulationSection';
import MonitoringDashboardSection from './components/MonitoringDashboardSection';
import WorkflowSection from './components/WorkflowSection';
import UsersStakeholdersSection from './components/UsersStakeholdersSection';
import ResearchSection from './components/ResearchSection';
import QualitySection from './components/QualitySection';
import ProductStructureSection from './components/ProductStructureSection';
import CommunicationSection from './components/CommunicationSection';
import AccessibilitySection from './components/AccessibilitySection';
import InternshipTimeline from './components/InternshipTimeline';
import SynthesisSection from './components/SynthesisSection';
import FuturePossibilitiesSection from './components/FuturePossibilitiesSection';
import SourcesSection from './components/SourcesSection';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');

  // Keyboard shortcut Ctrl+K / Cmd+K for search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#020409] text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        activeLang={activeLang}
        onChangeLang={setActiveLang}
      />

      {/* Hero Section with Interactive Space Canvas */}
      <Hero />

      {/* Main Content Sections */}
      <main>
        {/* Section 6: Ecosystem Overview */}
        <EcosystemOverview />

        {/* Section 7: Flight Software */}
        <FlightSoftwareSection />

        {/* Section 8: Ground Systems */}
        <GroundSystemsSection />

        {/* Section 9: Navigation & Positioning */}
        <NavigationSection />

        {/* Section 10: Data Processing & Analytics */}
        <DataProcessingSection />

        {/* Section 11: Simulation & Testing */}
        <SimulationSection />

        {/* Section 12: Monitoring & Dashboards */}
        <MonitoringDashboardSection />

        {/* Section 13: Workflow (From Space to Service) */}
        <WorkflowSection />

        {/* Section 14: Users & Stakeholders */}
        <UsersStakeholdersSection />

        {/* Section 15: Research & Landscape */}
        <ResearchSection />

        {/* Section 16: Quality & Reliability (VQRD) */}
        <QualitySection />

        {/* Section 17: Product Structure (PRD) */}
        <ProductStructureSection />

        {/* Section 18: Communication (SCRP) */}
        <CommunicationSection />

        {/* Section 19: Localization & Accessibility (LAAP) */}
        <AccessibilitySection
          activeLang={activeLang}
          onChangeLang={setActiveLang}
        />

        {/* Section 20: Project Journey (Internship Timeline) */}
        <InternshipTimeline />

        {/* Section 21: Final Synthesis */}
        <SynthesisSection />

        {/* Section 22: Future Possibilities */}
        <FuturePossibilitiesSection />

        {/* Section 23: Sources */}
        <SourcesSection />
      </main>

      {/* Section 24 & 25: Footer & Personal Portfolio Connection */}
      <Footer />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
