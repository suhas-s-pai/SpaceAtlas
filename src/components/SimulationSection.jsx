import React, { useState } from 'react';
import { FlaskConical, Play, RotateCcw, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export default function SimulationSection() {
  const [simRunning, setSimRunning] = useState(false);
  const [simResult, setSimResult] = useState(null);

  const runSimulation = () => {
    setSimRunning(true);
    setSimResult(null);
    setTimeout(() => {
      setSimRunning(false);
      setSimResult({
        status: 'NOMINAL PASS',
        confidence: '99.4%',
        iterations: 1000,
        attitudeDrift: '0.003 deg/sec',
        maxThermal: '312.4 K',
        fdirResponseTime: '12 ms'
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#050814] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-400 text-xs font-mono">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>05 • MISSION VERIFICATION & QA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              SIMULATION & TESTING <br />
              <span className="text-violet-400">DIGITAL TWINS & HIL TESTBEDS</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Before launch, flight software undergoes thousands of hours of automated simulation. Testbeds inject orbital perturbations, sensor failures, and communication dropouts to verify that onboard FDIR logic recovers autonomously under any contingency.
            </p>

            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="p-3 rounded-xl bg-[#091024] border border-slate-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Hardware-in-the-Loop (HIL)</span>
                  <span className="text-gray-400">Flight software runs on actual OBC flight hardware connected to simulated sensor inputs.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#091024] border border-slate-800 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-violet-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Monte Carlo Trajectory Runs</span>
                  <span className="text-gray-400">Simulates thousands of trajectory dispersions to verify guidance accuracy.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulator Visual Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-[#020409] border border-violet-500/30 shadow-2xl hud-border">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    Flight Software Scenario Testbed
                  </span>
                </div>
                <span className="text-[10px] font-mono text-violet-300 px-2 py-0.5 rounded bg-violet-950 border border-violet-500/30">
                  CONCEPTUAL TESTBED
                </span>
              </div>

              {/* Console Display */}
              <div className="p-4 rounded-xl bg-[#050814] border border-slate-800 font-mono text-xs space-y-3 mb-6">
                <div className="flex items-center justify-between text-gray-400 text-[11px]">
                  <span>Scenario: Reaction Wheel Anomaly + Sun Tracking Loss</span>
                  <span className="text-violet-400">SEED #88419</span>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800 text-gray-300 space-y-1">
                  <p className="text-cyan-400 text-[11px]">&gt; Initializing orbital propagator (SGP4 Model)...</p>
                  <p className="text-gray-400 text-[11px]">&gt; Injecting 15% sensor noise on Gyro Channel B...</p>
                  <p className="text-amber-400 text-[11px]">&gt; Triggering Simulated Sensor Fault at T+45s...</p>
                </div>

                {simRunning && (
                  <div className="p-3 rounded bg-violet-950/50 border border-violet-500/40 text-violet-300 flex items-center justify-center gap-3 animate-pulse">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
                    <span>Executing 1,000 Monte Carlo Simulation Iterations...</span>
                  </div>
                )}

                {simResult && (
                  <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-2">
                    <div className="flex items-center justify-between font-bold text-sm">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Verification Result: {simResult.status}
                      </span>
                      <span className="text-xs bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-200">
                        {simResult.confidence} Pass Rate
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-300 pt-1 border-t border-emerald-900/50">
                      <div>Max Attitude Drift: <strong className="text-white">{simResult.attitudeDrift}</strong></div>
                      <div>Max Thermal Temp: <strong className="text-white">{simResult.maxThermal}</strong></div>
                      <div>FDIR Recovery: <strong className="text-white">{simResult.fdirResponseTime}</strong></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={runSimulation}
                  disabled={simRunning}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{simRunning ? 'Running Test...' : 'Run Scenario Verification'}</span>
                </button>

                <button
                  onClick={() => setSimResult(null)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 border border-slate-800"
                  aria-label="Reset simulation console"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
