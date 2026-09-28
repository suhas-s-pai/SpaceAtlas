import React, { useState } from 'react';
import { ECOSYSTEM_LAYERS } from '../data/spaceEcosystemData';
import { Cpu, Radio, Navigation, Database, FlaskConical, Activity, BarChart3, Globe, X, ArrowRight, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

const ICON_MAP = {
  Cpu,
  Radio,
  Navigation,
  Database,
  FlaskConical,
  Activity,
  BarChart3,
  Globe
};

export default function EcosystemOverview() {
  const [selectedLayer, setSelectedLayer] = useState(null);

  return (
    <section id="ecosystem" className="relative py-24 bg-[#020409] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>ECOSYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mb-6">
            THE SOFTWARE LAYER
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Modern space capability relies on an interconnected matrix of software systems rather than any single monolithic program. From microsecond thruster control in orbit to web-based GIS portals for ground users, software forms the invisible backbone of modern mission success.
          </p>
        </div>

        {/* Visual Ecosystem Layer Connection Nodes Diagram */}
        <div className="mb-16 p-6 rounded-2xl bg-[#050914] border border-cyan-500/20 glass-panel shadow-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Inter-System Data & Control Flow Matrix
            </span>
            <span className="text-[11px] font-mono text-gray-400">Click layer cards below for deep-dive spec</span>
          </div>

          {/* Interactive Layer Flow Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {ECOSYSTEM_LAYERS.map((layer) => {
              const IconComponent = ICON_MAP[layer.icon] || Cpu;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer)}
                  className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
                    <span>{layer.number}</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-gray-200 truncate group-hover:text-cyan-300">
                      {layer.title.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Ecosystem Layer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM_LAYERS.map((layer) => {
            const IconComponent = ICON_MAP[layer.icon] || Cpu;
            return (
              <div
                key={layer.id}
                className="group relative rounded-2xl bg-[#050914]/90 border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-300 glass-panel-hover flex flex-col justify-between"
              >
                {/* Top Corner HUD Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl group-hover:border-cyan-400 transition-colors" />

                <div>
                  {/* Card Header: Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/90 tracking-wider">
                      {layer.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-gray-400 border border-slate-800 uppercase">
                      {layer.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                      {layer.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs font-mono text-cyan-400/80 mb-3">
                    {layer.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {layer.summary}
                  </p>
                </div>

                {/* Inspect Drawer Action */}
                <button
                  onClick={() => setSelectedLayer(layer)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-cyan-400 flex items-center justify-between transition-all group-hover:text-cyan-300"
                >
                  <span>Subsystem Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Deep-Dive Modal */}
      {selectedLayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#070d1e] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl hud-border">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl font-mono font-bold text-cyan-400">{selectedLayer.number}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {selectedLayer.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-mono text-white">
                  {selectedLayer.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  {selectedLayer.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedLayer(null)}
                className="p-2 rounded-lg bg-slate-900 text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">
                  System Overview
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {selectedLayer.description}
                </p>
              </div>

              {/* Key Core Functions */}
              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">
                  Core Functional Responsibilities
                </h4>
                <ul className="space-y-2">
                  {selectedLayer.keyFunctions.map((func, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Implementation Highlights */}
              <div className="p-4 rounded-xl bg-[#030611] border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-indigo-300 tracking-wider mb-3">
                  Engineering & Architectural Characteristics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedLayer.technicalHighlights.map((high, i) => (
                    <div key={i} className="p-2 rounded bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-cyan-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedLayer(null)}
                className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
