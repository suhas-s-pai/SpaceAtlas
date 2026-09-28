import React, { useState } from 'react';
import { Database, BarChart3, ArrowDown, Cpu, Eye, FileCode, CheckCircle2 } from 'lucide-react';

export default function DataProcessingSection() {
  const [activePipelineStep, setActivePipelineStep] = useState(2);

  const pipeline = [
    { name: 'SPACE / SENSOR DATA', role: 'Raw Ingest', desc: 'Raw binary stream from optical cameras, SAR synthetic aperture radar, or spectroradiometers.' },
    { name: 'RECEPTION', role: 'Ground Demux', desc: 'Ground station downlinks ingested and stripped of frame headers.' },
    { name: 'PROCESSING', role: 'Level 1/2 Calibration', desc: 'Radiometric calibration, geometric orthorectification using DEMs, and atmospheric correction.' },
    { name: 'STORAGE', role: 'Spatial Index Catalog', desc: 'Cloud-Optimized GeoTIFFs stored with spatial metadata in high-performance data cubes.' },
    { name: 'ANALYSIS', role: 'Analytics Engine', desc: 'Spectral index computation (NDVI, NDWI), change detection, and machine learning classification.' },
    { name: 'VISUALIZATION', role: 'Web GIS Rendering', desc: 'OGC Web Map Services (WMS/WMTS) tile rendering for browser mapping engines.' },
    { name: 'USER / APPLICATION', role: 'Decision Support', desc: 'Actionable advisory dashboards for agriculture, disaster management, and urban planning.' }
  ];

  return (
    <section className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>04 & 07 • SENSOR DATA TRANSFORMATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            DATA PROCESSING & ANALYTICS <br />
            <span className="text-teal-400">FROM RAW BINARY TO EARTH INSIGHTS</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Raw payload downlinks are noisy compressed binary strings. Software pipelines process gigabytes of sensor downlinks, applying complex camera geometry, atmospheric models, and machine learning to produce usable intelligence.
          </p>
        </div>

        {/* Required Data Pipeline Visualization */}
        <div className="p-8 rounded-2xl bg-[#050914] border border-teal-500/30 shadow-2xl glass-panel mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
              Space Sensor Data Pipeline Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {pipeline.map((step, i) => (
              <button
                key={step.name}
                onClick={() => setActivePipelineStep(i)}
                className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  activePipelineStep === i
                    ? 'bg-teal-950/70 border-teal-400 shadow-lg shadow-teal-500/20 ring-1 ring-teal-400'
                    : 'bg-slate-950/80 border-slate-800 hover:border-teal-500/40'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-teal-400 font-bold block mb-1">
                    0{i + 1}. {step.role}
                  </span>
                  <h3 className="text-xs font-bold font-mono text-white leading-tight mb-2">
                    {step.name}
                  </h3>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-gray-400 line-clamp-3">
                  {step.desc}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="mt-6 p-4 rounded-xl bg-[#020409] border border-slate-800 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span className="text-gray-300">
                Selected Stage: <strong className="text-white">{pipeline[activePipelineStep].name}</strong> — {pipeline[activePipelineStep].desc}
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] text-teal-400 bg-teal-950 px-2.5 py-1 rounded border border-teal-500/30">
              STAGE 0{activePipelineStep + 1} OF 07
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
