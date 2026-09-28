import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, FileCheck } from 'lucide-react';
import { VQRD_STEPS } from '../data/spaceEcosystemData';

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 bg-[#050814] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VQRD FRAMEWORK • CREDIBILITY GUARANTEE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            TRUST THE INFORMATION
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Based on the Verification & Quality Requirements Document (VQRD), every technical assertion on this platform undergoes rigorous multi-tier fact checking to eliminate sensationalism and unverified claims.
          </p>
        </div>

        {/* Required Visual Verification Flow: CLAIM → SOURCE → EVIDENCE → REVIEW → PUBLISH */}
        <div className="p-8 rounded-2xl bg-[#020409] border border-emerald-500/30 shadow-2xl glass-panel hud-border mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              5-Stage VQRD Fact Verification Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {VQRD_STEPS.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col justify-between p-4 rounded-xl bg-[#050814] border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold mb-2">
                    <span>{step.num}</span>
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xs font-bold font-mono text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < VQRD_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-emerald-500/40">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-5 rounded-xl bg-[#020409] border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Fact vs. Interpretation
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Maintains strict boundaries between empirical system specs (e.g. telemetry frequencies) and analytical projections.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#020409] border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Zero Exaggerated Claims
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Rejects hyperbole, fake statistics, or unverified performance numbers in favor of official documentation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#020409] border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Source Traceability
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Every data point maps directly to verified government, agency, or standard-setting organisation publications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
