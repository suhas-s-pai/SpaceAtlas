import React, { useState } from 'react';
import { Radio, Satellite, Server, ArrowDown, Database, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function GroundSystemsSection() {
  const [activeStep, setActiveStep] = useState(2);

  const flowNodes = [
    {
      id: 0,
      title: 'SPACECRAFT',
      subtitle: 'Space Segment',
      desc: 'Onboard sensors collect telemetry & payload data; telecommands are decoded.',
      icon: Satellite
    },
    {
      id: 1,
      title: 'COMMUNICATION',
      subtitle: 'RF Link',
      desc: 'X-band & S-band radio frequency downlink/uplink via parabolic ground dishes.',
      icon: Radio
    },
    {
      id: 2,
      title: 'GROUND SYSTEM',
      subtitle: 'Ground Operations',
      desc: 'Demodulation, frame de-multiplexing, orbit determination, and telecommand validation.',
      icon: Server
    },
    {
      id: 3,
      title: 'DATA / OPERATIONS',
      subtitle: 'Downstream Delivery',
      desc: 'Engineered parameter routing to flight control consoles and payload archives.',
      icon: Database
    }
  ];

  return (
    <section className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>02 • GROUND SEGMENT INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            GROUND SYSTEMS <br />
            <span className="text-blue-400">TELEMETRY ACQUISITION & COMMAND</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Ground software bridges orbiting spacecraft and mission flight controllers. It handles tracking antenna positioning, telemetry reception, cryptographic command verification, and multi-station pass scheduling.
          </p>
        </div>

        {/* Required Visual Flow Diagram: SPACECRAFT ↓ COMMUNICATION ↓ GROUND SYSTEM ↓ DATA / OPERATIONS */}
        <div className="p-8 rounded-2xl bg-[#050914] border border-blue-500/30 shadow-2xl glass-panel">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              Telemetry Ingestion & Command Execution Flow
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {flowNodes.map((node, index) => {
              const IconComp = node.icon;
              const isActive = activeStep === index;
              return (
                <div key={node.id} className="relative flex flex-col items-center text-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-full p-5 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-950/60 border-blue-400 shadow-lg shadow-blue-500/20'
                        : 'bg-slate-950/80 border-slate-800 hover:border-blue-500/40'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                      isActive ? 'bg-blue-500 text-black font-bold' : 'bg-slate-900 text-blue-400'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-sm font-bold text-white font-mono mb-1">
                      {node.title}
                    </h3>
                    <span className="text-[10px] font-mono text-blue-400 block mb-2">
                      {node.subtitle}
                    </span>
                    <p className="text-xs text-gray-400 leading-snug">
                      {node.desc}
                    </p>
                  </button>

                  {/* Flow Arrow for Mobile & Desktop */}
                  {index < flowNodes.length - 1 && (
                    <div className="my-2 md:my-0 md:absolute md:top-1/2 md:-right-3 md:-translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border border-blue-500/40 flex items-center justify-center text-blue-400">
                        <ArrowDown className="w-3.5 h-3.5 md:-rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Flow Inspection Card */}
          <div className="mt-8 p-4 rounded-xl bg-[#020409] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="text-xs font-mono text-gray-300">
                <span className="font-bold text-white uppercase">{flowNodes[activeStep].title}:</span> High-reliability ground station protocol handling with automated error checking.
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded bg-blue-950 text-blue-300 border border-blue-500/30 whitespace-nowrap">
              CCSDS PROTOCOL STACK
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
