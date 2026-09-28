import React from 'react';
import { ExternalLink, BookOpen, Building2, ShieldCheck, FileCode } from 'lucide-react';
import { OFFICIAL_SOURCES, RESEARCH_SOURCES } from '../data/spaceEcosystemData';

export default function SourcesSection() {
  return (
    <section id="sources" className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>VERIFIED REFERENCE CATALOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            SOURCES & CITATIONS
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            All factual references, policy frameworks, data standards, and project materials supporting the SPACE ATLAS. Links open directly to authoritative portals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OFFICIAL SOURCES */}
          <div className="p-6 rounded-2xl bg-[#050814] border border-cyan-500/30 shadow-xl glass-panel space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold font-mono text-white">
                OFFICIAL SOURCES
              </h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {OFFICIAL_SOURCES.map((src) => (
                <div key={src.title} className="p-4 rounded-xl bg-[#020409] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-sm">{src.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                      {src.type}
                    </span>
                  </div>
                  <p className="text-xs text-cyan-300 font-medium mb-2">{src.org}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3 font-sans">{src.desc}</p>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* RESEARCH SOURCES & PROJECT MATERIAL */}
          <div className="p-6 rounded-2xl bg-[#050814] border border-indigo-500/30 shadow-xl glass-panel space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h3 className="text-base font-bold font-mono text-white">
                RESEARCH SOURCES & PROJECT MATERIAL
              </h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {RESEARCH_SOURCES.map((src) => (
                <div key={src.title} className="p-4 rounded-xl bg-[#020409] border border-slate-800 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-sm">{src.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-indigo-400 border border-slate-800">
                      {src.type}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium mb-2">{src.org}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3 font-sans">{src.desc}</p>
                  <a
                    href={src.url}
                    target={src.url.startsWith('http') ? '_blank' : '_self'}
                    rel={src.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-mono"
                  >
                    <span>{src.url.startsWith('http') ? 'View Standard Specs' : 'Inspect Artifact Timeline'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
