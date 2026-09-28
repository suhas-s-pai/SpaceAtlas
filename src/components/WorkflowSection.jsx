import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/spaceEcosystemData';
import { Satellite, Radio, Server, Database, Cpu, LayoutGrid, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Satellite,
  Radio,
  Server,
  Database,
  Cpu,
  LayoutGrid,
  Users
};

export default function WorkflowSection() {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const activeStep = WORKFLOW_STEPS[activeWorkflowIndex];

  return (
    <section id="workflows" className="py-24 bg-[#020409] border-t border-slate-800 relative overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>END-TO-END PIPELINE SYNTHESIS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mb-4">
            FROM SPACE TO SERVICE
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Trace the full operational journey of space data—from orbital sensor capture to ground station downlinks, automated data calibration, spatial analytics, and end-user decision support.
          </p>
        </div>

        {/* Major Animated Workflow Flowchart Container */}
        <div className="p-8 rounded-2xl bg-[#050914] border border-cyan-500/30 shadow-2xl glass-panel hud-border mb-12">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              Complete Conceptual Workflow Sequence
            </span>
            <span className="text-[11px] font-mono text-gray-400">Step {activeStep.step} of 07</span>
          </div>

          {/* 7 Horizontal Workflow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-8">
            {WORKFLOW_STEPS.map((step, idx) => {
              const IconComponent = ICON_MAP[step.icon] || Satellite;
              const isSelected = activeWorkflowIndex === idx;
              return (
                <div key={step.step} className="relative flex flex-col items-center">
                  <button
                    onClick={() => setActiveWorkflowIndex(idx)}
                    className={`w-full p-4 rounded-xl border text-center transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-500/20 transform -translate-y-1'
                        : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-900 text-cyan-400'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">
                      {step.step}
                    </span>
                    <h3 className="text-xs font-bold font-mono text-white leading-tight">
                      {step.name}
                    </h3>
                  </button>

                  {/* Flow Connection Arrow for Desktop */}
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-cyan-500/40">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Workflow Step Detailed Inspector Box */}
          <div className="p-6 rounded-xl bg-[#020409] border border-cyan-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-cyan-400">{activeStep.step}</span>
                  <div>
                    <h4 className="text-xl font-bold font-mono text-white">{activeStep.name}</h4>
                    <span className="text-xs font-mono text-cyan-400">{activeStep.role}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>

              <div className="lg:col-span-4 p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider border-b border-slate-800 pb-1">
                  STAGE SPECIFICATION
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span>Latency Target:</span>
                  <span className="text-cyan-400 font-bold">&lt; 15 mins</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span>Validation Protocol:</span>
                  <span className="text-emerald-400 font-bold">AUTOMATED</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
