import React from 'react';
import { Navigation, Satellite, Radio, Cpu, MapPin, ArrowRight } from 'lucide-react';

export default function NavigationSection() {
  const pntSteps = [
    {
      title: 'SATELLITES',
      subtitle: 'Space Segment',
      desc: 'Constellation of navigation satellites broadcasting dual-frequency L5/S-band signals and atomic clock ephemeris.',
      icon: Satellite
    },
    {
      title: 'SIGNALS',
      subtitle: 'RF Propagation',
      desc: 'Radio frequency signals travel through ionosphere and atmosphere to ground reference and user receivers.',
      icon: Radio
    },
    {
      title: 'PROCESSING',
      subtitle: 'Software Engine',
      desc: 'Receiver software decodes pseudoranges, applies dual-frequency ionospheric corrections, and executes Extended Kalman Filters.',
      icon: Cpu
    },
    {
      title: 'POSITION / TIMING',
      subtitle: 'PNT Output',
      desc: 'Precise latitude, longitude, altitude, velocity vector, and nanosecond UTC time synchronization.',
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-[#050814] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <Navigation className="w-3.5 h-3.5" />
              <span>03 • PNT ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              NAVIGATION & POSITIONING <br />
              <span className="text-indigo-400">SIGNAL PROCESSING & TIMING</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Satellite navigation software translates high-frequency radio signals into ultra-precise user position, velocity, and time (PVT). Ground reference software monitors satellite clock drift, orbital perturbation, and ionospheric delay to maintain system integrity.
            </p>

            <div className="p-4 rounded-xl bg-[#091024] border border-indigo-500/20 text-xs text-gray-300 space-y-2">
              <span className="font-bold text-indigo-300 font-mono block">
                NavIC Context & Technical Note
              </span>
              <p className="text-gray-400 leading-relaxed">
                India’s regional navigation constellation (NavIC) provides positioning across the Indian subcontinent and surrounding region. Software receiver algorithms utilize dual-frequency (L5 and S-band) measurements to directly compensate for ionospheric delay without external correction models.
              </p>
            </div>
          </div>

          {/* Right Column: Required Visual Flow Diagram */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-[#020409] border border-indigo-500/30 shadow-2xl hud-border">
              <div className="text-center mb-6">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                  PNT Processing Pipeline Flow
                </span>
              </div>

              <div className="space-y-4">
                {pntSteps.map((step, index) => {
                  const IconC = step.icon;
                  return (
                    <div key={step.title} className="relative">
                      <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 shrink-0">
                          <IconC className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold text-indigo-300">
                              0{index + 1}. {step.title}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-gray-400 border border-slate-800">
                              {step.subtitle}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {index < pntSteps.length - 1 && (
                        <div className="flex justify-center my-1 text-indigo-500/50">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
