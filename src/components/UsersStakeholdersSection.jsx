import React, { useState } from 'react';
import { STAKEHOLDERS } from '../data/spaceEcosystemData';
import { Users, GraduationCap, BookOpen, Search, Code2, Building2, CheckCircle2 } from 'lucide-react';

const ICON_MAP = [GraduationCap, BookOpen, Search, Code2, Building2, Users];

export default function UsersStakeholdersSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-[#050814] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>AUDIENCE ORIENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            USERS & STAKEHOLDERS
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            The Space Atlas is designed for diverse learners—from students discovering aerospace coding options to researchers looking for structured software layer classifications.
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAKEHOLDERS.map((stk, idx) => {
            const IconComponent = ICON_MAP[idx] || Users;
            return (
              <div
                key={stk.title}
                className="p-6 rounded-2xl bg-[#020409] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 uppercase">
                      {stk.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-mono mb-2">
                    {stk.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {stk.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">
                    Key Platform Value
                  </span>
                  {stk.needs.map((need, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
