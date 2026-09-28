import React from 'react';
import { Cpu, ShieldAlert, Zap, Clock, Terminal, Activity } from 'lucide-react';

export default function FlightSoftwareSection() {
  return (
    <section className="py-20 bg-[#050814] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Technical Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>01 • SPACE SEGMENT CONTROL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              FLIGHT SOFTWARE <br />
              <span className="text-cyan-400">ONBOARD AUTONOMY & CONTROL</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Operating inside radiation-hardened spacecraft computers, flight software executes continuous real-time loops to control orientation, solar power generation, thermal stability, payload schedules, and telemetry downlinks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#091024] border border-slate-800">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <h3 className="text-sm font-bold text-white font-mono mb-1">Hard Real-Time RTOS</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Deterministic task scheduling guarantees microsecond response times for attitude control loops and emergency thruster firing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#091024] border border-slate-800">
                <ShieldAlert className="w-5 h-5 text-indigo-400 mb-2" />
                <h3 className="text-sm font-bold text-white font-mono mb-1">Autonomous FDIR</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Fault Detection, Isolation, and Recovery logic automatically reconfigures redundant hardware upon anomaly detection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Onboard Architecture HUD Diagram */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-[#020409] border border-cyan-500/30 shadow-2xl hud-border relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Onboard Flight Stack Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  REAL-TIME EXECUTIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-cyan-300">
                  <span className="font-bold flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    Attitude & Orbit Control (AOCS Loop)
                  </span>
                  <span className="text-[10px] bg-cyan-900/60 px-2 py-0.5 rounded">100 Hz</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-300">
                    <span className="text-[10px] text-gray-400 block mb-1">Subsystem 1</span>
                    <span className="font-semibold text-white">Power (EPS) Management</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-300">
                    <span className="text-[10px] text-gray-400 block mb-1">Subsystem 2</span>
                    <span className="font-semibold text-white">Thermal Heater Control</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Housekeeping & Telemetry</span>
                    <span className="font-semibold text-white">CCSDS Packet Encoder Engine</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-1 rounded">
                    ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-indigo-200">
                  <span className="text-[10px] text-indigo-400 block mb-1">BUS PROTOCOLS</span>
                  <span className="text-[11px]">SpaceWire / MIL-STD-1553B / CAN Bus Interconnects</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
