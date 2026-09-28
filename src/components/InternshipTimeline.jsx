import React, { useState } from 'react';
import { INTERNSHIP_JOURNEY } from '../data/spaceEcosystemData';
import { Calendar, CheckCircle2, ChevronRight, FileText, Layers } from 'lucide-react';

export default function InternshipTimeline() {
  const [selectedWeek, setSelectedWeek] = useState(6); // Default Week 8 Final

  return (
    <section id="journey" className="py-24 bg-[#050814] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>AGNIRVA SOFTWARE INTERNSHIP DEVELOPMENT TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mb-4">
            PROJECT JOURNEY
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Trace the 8-week structured software engineering progression from initial business requirements framing to final interactive platform deployment.
          </p>
        </div>

        {/* Timeline Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-12">
          {INTERNSHIP_JOURNEY.map((item, idx) => {
            const isSelected = selectedWeek === idx;
            return (
              <button
                key={item.week}
                onClick={() => setSelectedWeek(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-500/20 transform -translate-y-1'
                    : 'bg-[#020409]/80 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 font-bold mb-1">
                    <span>{item.week}</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px]">
                      {item.code}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold font-mono text-white leading-snug group-hover:text-cyan-300">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>Artifact</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-cyan-400" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Week Artifact Detail Box */}
        <div className="p-8 rounded-2xl bg-[#020409] border border-cyan-500/30 shadow-2xl glass-panel hud-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold">
                  {INTERNSHIP_JOURNEY[selectedWeek].week} • {INTERNSHIP_JOURNEY[selectedWeek].code}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {INTERNSHIP_JOURNEY[selectedWeek].tagline}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-mono text-white">
                {INTERNSHIP_JOURNEY[selectedWeek].title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {INTERNSHIP_JOURNEY[selectedWeek].summary}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold block">
                  Key Artifact Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {INTERNSHIP_JOURNEY[selectedWeek].highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[#050814] border border-slate-800 text-xs text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-[#050814] border border-slate-800 space-y-3 font-mono text-xs text-center">
              <FileText className="w-8 h-8 text-cyan-400 mx-auto" />
              <div className="font-bold text-white uppercase">
                {INTERNSHIP_JOURNEY[selectedWeek].code} DOCUMENTATION
              </div>
              <p className="text-gray-400 text-[11px]">
                Agnirva Internship Software Engineering Synthesis Artifact.
              </p>
              <div className="pt-2 text-[10px] text-emerald-400 font-bold">
                ✓ VERIFIED & SYNTHESIZED
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
