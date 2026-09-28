import React, { useState } from 'react';
import { LayoutGrid, Search, BookOpen, GitFork, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

export default function ProductStructureSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  const journeySteps = [
    { title: 'OPEN', role: 'Entry Point', desc: 'User arrives at the Space Atlas home portal greeted by the cinematic command interface.' },
    { title: 'SEARCH / EXPLORE', role: 'Discovery', desc: 'User triggers instant global search or filters through 8 core software ecosystem nodes.' },
    { title: 'UNDERSTAND', role: 'Deep Dive', desc: 'User inspects technical specifications, RTOS constraints, and protocol highlights.' },
    { title: 'FOLLOW WORKFLOW', role: 'Pipeline Mapping', desc: 'User traces spatial data flow from space sensor downlinks to web GIS service outputs.' },
    { title: 'CHECK SOURCES', role: 'Verification', desc: 'User inspects official citation links (ISRO, IN-SPACe, CCSDS) validating technical facts.' },
    { title: 'LEARN MORE', role: 'Synthesis & Action', desc: 'User explores academic references, internship deliverables, and career pathways.' }
  ];

  return (
    <section className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>PRD ARCHITECTURE • USER EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            PRODUCT STRUCTURE & USER JOURNEY
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Formulated during Week 5 Product Requirements (PRD), the platform's information architecture balances intuitive discovery with deep technical rigor.
          </p>
        </div>

        {/* Required User Journey Flow Diagram */}
        <div className="p-8 rounded-2xl bg-[#050914] border border-cyan-500/30 shadow-2xl glass-panel hud-border mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              PRD Conceptual User Journey Sequence
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {journeySteps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                  activeStepIndex === idx
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400'
                    : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">
                  STAGE 0{idx + 1}
                </span>
                <h3 className="text-xs font-bold font-mono text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-snug">
                  {step.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Core Product Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-5 rounded-xl bg-[#050914] border border-slate-800">
            <Search className="w-5 h-5 text-cyan-400 mb-3" />
            <h3 className="text-sm font-bold text-white mb-1">Instant Global Search</h3>
            <p className="text-gray-400 leading-relaxed">
              Keyboard-driven (Ctrl+K) instant indexing across all 8 layers, workflows, and citations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#050914] border border-slate-800">
            <GitFork className="w-5 h-5 text-cyan-400 mb-3" />
            <h3 className="text-sm font-bold text-white mb-1">Interactive Workflows</h3>
            <p className="text-gray-400 leading-relaxed">
              Visual pipeline steppers rendering spatial telemetry and data transits in real-time.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#050914] border border-slate-800">
            <BookOpen className="w-5 h-5 text-cyan-400 mb-3" />
            <h3 className="text-sm font-bold text-white mb-1">Verified Reference Vault</h3>
            <p className="text-gray-400 leading-relaxed">
              Categorized direct links to official ISRO, IN-SPACe, CCSDS, and OGC specification docs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
