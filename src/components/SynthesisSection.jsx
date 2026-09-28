import React from 'react';
import { Layers, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function SynthesisSection() {
  const synthesisPhases = [
    { name: 'Research', code: 'RLD', desc: 'Ecosystem layer survey & technical literature mapping.' },
    { name: 'Requirements', code: 'BRD', desc: 'Scope boundaries, stakeholder personas & non-functional rules.' },
    { name: 'Validation', code: 'VQRD', desc: 'Fact checking, evidence verification & source integrity.' },
    { name: 'Product Thinking', code: 'PRD', desc: 'User journeys, search indexing & information architecture.' },
    { name: 'Communication', code: 'SCRP', desc: 'Audience messaging, reporting channels & feedback loops.' },
    { name: 'Accessibility', code: 'LAAP', desc: 'Trilingual dictionary, contrast & readable typography.' },
    { name: 'Final Product', code: 'ATLAS', desc: 'Interactive production space software knowledge platform.' }
  ];

  return (
    <section className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIX ARTIFACT NEXUS INTEGRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            FROM RESEARCH TO KNOWLEDGE
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            The SPACE ATLAS unites six distinct software engineering artifacts into a single cohesive, high-performance web platform.
          </p>
        </div>

        {/* Required Synthesis Flow Sequence */}
        <div className="p-8 rounded-2xl bg-[#050914] border border-cyan-500/30 shadow-2xl glass-panel hud-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {synthesisPhases.map((phase, idx) => (
              <div key={phase.name} className="relative p-4 rounded-xl bg-[#020409] border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 font-bold mb-1">
                    <span>0{idx + 1}</span>
                    <span className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {phase.code}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold font-mono text-white mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-snug">
                    {phase.desc}
                  </p>
                </div>

                {idx < synthesisPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-cyan-500/40">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
