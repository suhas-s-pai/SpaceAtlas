import React from 'react';
import { MessageSquare, Users, Radio, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';

export default function CommunicationSection() {
  const scrpFlow = [
    { num: '01', title: 'AUDIENCE', desc: 'Identify target persona (Students, Educators, Researchers, Engineers, Public).' },
    { num: '02', title: 'MESSAGE', desc: 'Craft technically precise, jargon-managed explanation appropriate for persona background.' },
    { num: '03', title: 'CHANNEL', desc: 'Deliver via interactive web atlas, visual flowcharts, or structured documentation.' },
    { num: '04', title: 'EVIDENCE', desc: 'Support every communication point with verified official source citations (VQRD).' },
    { num: '05', title: 'FEEDBACK', desc: 'Collect user comprehension metrics and refine explanations continuously.' }
  ];

  return (
    <section className="py-20 bg-[#050814] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>SCRP FRAMEWORK • STAKEHOLDER STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            COMMUNICATION STRATEGY
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Based on the Stakeholder Communication & Reporting Plan (SCRP), technical communication must remain transparent, evidence-based, and tailored to distinct audience background levels.
          </p>
        </div>

        {/* Required SCRP Flow: AUDIENCE → MESSAGE → CHANNEL → EVIDENCE → FEEDBACK */}
        <div className="p-8 rounded-2xl bg-[#020409] border border-indigo-500/30 shadow-2xl glass-panel hud-border">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
              5-Stage SCRP Communication Matrix
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {scrpFlow.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col justify-between p-4 rounded-xl bg-[#050814] border border-slate-800 hover:border-indigo-500/40 transition-colors">
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold block mb-1">
                    {step.num}
                  </span>
                  <h3 className="text-xs font-bold font-mono text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < scrpFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-indigo-500/40">
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
