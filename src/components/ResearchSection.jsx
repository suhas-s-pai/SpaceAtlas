import React from 'react';
import { BookOpen, ShieldCheck, FileText, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>RESEARCH & METHODOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              RESEARCH & LANDSCAPE <br />
              <span className="text-cyan-400">CREDIBLE SPACE KNOWLEDGE</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              The SPACE ATLAS synthesizes public technical literature, official government policy releases, regulatory documentation, and academic research papers into a cohesive software architecture taxonomy.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-gray-300">ISRO & IN-SPACe Official Publications & Guidelines</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-gray-300">CCSDS & OGC International Space Data Standards</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-gray-300">Agnirva Software Internship Synthesis Documents</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-[#050914] border border-cyan-500/30 shadow-2xl glass-panel hud-border space-y-4">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  RESEARCH SOURCE CATEGORIZATION
                </span>
                <span className="text-[10px] font-mono text-gray-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  RLD ARTIFACT
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
                  <div className="flex items-center justify-between text-cyan-300 font-bold mb-1">
                    <span>1. Official Space Agency Portals</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    ISRO annual reports, NRSC Bhuvan portal specifications, MOSDAC data archives, and ISTRAC ground network overviews.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
                  <div className="flex items-center justify-between text-cyan-300 font-bold mb-1">
                    <span>2. Government Regulatory Sources</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    IN-SPACe authorization guidelines, Department of Space policy releases, and national space sector reform documents.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
                  <div className="flex items-center justify-between text-cyan-300 font-bold mb-1">
                    <span>3. Peer-Reviewed Academic Papers</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    Technical literature on satellite attitude control algorithms, SGP4 orbit propagation models, and COG raster storage benchmarks.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
