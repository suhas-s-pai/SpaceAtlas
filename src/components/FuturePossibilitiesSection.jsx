import React from 'react';
import { Compass, Sparkles, MapPin, Globe, Code, Cpu, BookOpen, Layers } from 'lucide-react';

export default function FuturePossibilitiesSection() {
  const futureItems = [
    {
      title: 'Interactive 3D Orbital Layer Maps',
      desc: 'Three.js / WebGL dynamic visualization of satellite constellations interacting with real-time ground tracking stations.',
      icon: Globe
    },
    {
      title: 'Expanded Regional Language Support',
      desc: 'Complete trilingual translation across all 8 software layer technical specs in Kannada, Hindi, Tamil, and Telugu.',
      icon: Compass
    },
    {
      title: 'Interactive Telemetry Simulators',
      desc: 'In-browser WebAssembly flight software simulator allowing students to adjust PID attitude loops and observe stability.',
      icon: Cpu
    },
    {
      title: 'Searchable Open Knowledge Base',
      desc: 'Algolia-indexed repository of space data protocol specifications (CCSDS, OGC) with downloadable code samples.',
      icon: BookOpen
    },
    {
      title: 'Structured Student Learning Modules',
      desc: 'Guided step-by-step educational tracks for computer science students interested in aerospace software careers.',
      icon: Layers
    },
    {
      title: 'GIS Analytics Pipeline Visualizer',
      desc: 'Live interactive canvas demonstrating Level-0 to Level-3 satellite imagery orthorectification in real-time.',
      icon: Code
    }
  ];

  return (
    <section className="py-20 bg-[#050814] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ROADMAP & FUTURE HORIZONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            WHERE THIS CAN GO NEXT
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Potential future extensions for the Space Atlas platform. Note: these are conceptual future possibilities designed for post-internship development.
          </p>

          <div className="mt-3 inline-block px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs">
            ✨ PROPOSED FUTURE ROADMAP — NOT COMPLETED FEATURES
          </div>
        </div>

        {/* Future Possibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureItems.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-2xl bg-[#020409] border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 w-fit mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-mono text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] font-mono text-cyan-400">
                  FUTURE SCOPE PIPELINE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
