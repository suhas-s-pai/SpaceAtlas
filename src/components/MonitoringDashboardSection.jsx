import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Wifi, Cpu, AlertCircle, RefreshCw, BarChart2, Radio } from 'lucide-react';

export default function MonitoringDashboardSection() {
  const [telemetryTick, setTelemetryTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryTick((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulated telemetry parameters
  const solarPower = (342 + Math.sin(telemetryTick) * 4).toFixed(1);
  const batteryVoltage = (28.4 + Math.cos(telemetryTick * 0.5) * 0.2).toFixed(2);
  const orbitalAltitude = (542.8 + Math.sin(telemetryTick * 0.2) * 0.3).toFixed(1);
  const downlinkRate = (124.5 + Math.random() * 3).toFixed(1);

  return (
    <section className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>06 • COMMAND & CONTROL MONITORING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            MONITORING & DASHBOARDS <br />
            <span className="text-emerald-400">REAL-TIME MISSION CONSOLES</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Mission command consoles aggregate millions of raw downlinked telemetry points into intuitive, high-density visual interfaces, empowering operators to track spacecraft health and execute orbital maneuvers.
          </p>

          <div className="mt-4 inline-block px-3 py-1 rounded bg-amber-950/50 border border-amber-500/40 text-amber-300 font-mono text-xs">
            ⚠️ NOTICE: CONCEPTUAL RESEARCH DEMONSTRATION — NOT LIVE MISSION DATA
          </div>
        </div>

        {/* Command Center Dashboard UI */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#050814] border border-emerald-500/30 shadow-2xl glass-panel hud-border">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  MISSION CONTROL DASHBOARD — CONCEPTUAL CONSOLE
                </h3>
                <span className="text-[10px] text-gray-400">SAT-ID: CONCEPT-LEO-01 • ORBIT: SUN-SYNCHRONOUS (SSO)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                TELEMETRY LINK: NOMINAL
              </span>
              <span className="text-gray-400 text-[11px]">
                UTC: {new Date().toISOString().substring(11, 19)}
              </span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 font-mono">
            
            <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                <span>SOLAR POWER</span>
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {solarPower} <span className="text-xs font-normal text-gray-400">Watts</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full rounded-full transition-all duration-500" style={{ width: '85%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                <span>BATTERY BUS</span>
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {batteryVoltage} <span className="text-xs font-normal text-gray-400">Volts</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: '92%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                <span>ORBIT ALTITUDE</span>
                <Radio className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {orbitalAltitude} <span className="text-xs font-normal text-gray-400">km</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full rounded-full transition-all duration-500" style={{ width: '78%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#020409] border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                <span>X-BAND DOWNLINK</span>
                <Wifi className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {downlinkRate} <span className="text-xs font-normal text-gray-400">Mbps</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full transition-all duration-500" style={{ width: '95%' }} />
              </div>
            </div>

          </div>

          {/* Subsystem Health Grid & Alert Log */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono text-xs">
            
            {/* Subsystems Matrix */}
            <div className="lg:col-span-7 p-4 rounded-xl bg-[#020409] border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-gray-400">
                <span>SUBSYSTEM MATRIX</span>
                <span>STATUS / HEALTH</span>
              </div>

              {[
                { name: 'Attitude & Orbit Control (AOCS)', status: 'NOMINAL', health: '99.8%', color: 'text-emerald-400' },
                { name: 'Electrical Power Subsystem (EPS)', status: 'NOMINAL', health: '100%', color: 'text-emerald-400' },
                { name: 'Thermal Control System (TCS)', status: 'NOMINAL', health: '98.5%', color: 'text-emerald-400' },
                { name: 'Telemetry & Command (TT&C)', status: 'NOMINAL', health: '100%', color: 'text-emerald-400' },
                { name: 'Optical Payload Processor', status: 'STANDBY', health: '100%', color: 'text-cyan-400' },
              ].map((sub) => (
                <div key={sub.name} className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-900">
                  <span className="text-gray-200">{sub.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-[10px]">{sub.health}</span>
                    <span className={`font-bold ${sub.color} text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800`}>
                      {sub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Log Console */}
            <div className="lg:col-span-5 p-4 rounded-xl bg-[#020409] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-gray-400 mb-3">
                  <span>OPERATIONAL LOGS</span>
                  <span className="text-emerald-400">STREAMING</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-950 border border-slate-900 text-gray-300">
                    <span className="text-cyan-400">[T+02:14:05]</span> Ground station tracking lock acquired (ISTRAC station).
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-900 text-gray-300">
                    <span className="text-emerald-400">[T+02:12:30]</span> Telecommand frame #4092 executed successfully.
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-900 text-gray-300">
                    <span className="text-indigo-400">[T+02:08:11]</span> Solar array tracking angle adjusted (+2.4 deg).
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-gray-400">
                <span>LIMIT CHECKS: PASS</span>
                <span>CHECKSUM: 0x9F42B</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
