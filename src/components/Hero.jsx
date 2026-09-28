import React from 'react';
import { ShieldCheck, ArrowRight, Layers, Terminal, Sparkles, ChevronDown } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Interactive 3D Orbit / Canvas Background */}
      <HeroCanvas />

      {/* Decorative Grid Overlay & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-6">
        
        {/* Top Research Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-8 shadow-lg shadow-cyan-950/50 backdrop-blur-md animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SPACE SOFTWARE ECOSYSTEM</span>
          <span className="text-cyan-600">•</span>
          <span className="text-gray-300 font-sans font-medium">RESEARCH & KNOWLEDGE ATLAS</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 font-mono">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-sm">
            SPACE ATLAS
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-400 tracking-wide mb-6 font-mono">
          India's Space Software Ecosystem
        </h2>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed mb-10 font-normal">
          Explore how software connects spacecraft, ground systems, navigation, data processing, simulation, analytics, and space-enabled services.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#ecosystem"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <span>Explore The Ecosystem</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#journey"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-gray-200 border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-sm tracking-wider transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>View Internship Project</span>
          </a>
        </div>

        {/* Conceptual Telemetry Status Bar */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-2xl bg-[#050914]/80 border border-slate-800/80 backdrop-blur-md text-left font-mono">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
              Software Layers
            </span>
            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              08 Connected Nodes
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
              Research Basis
            </span>
            <span className="text-xs font-bold text-indigo-300 flex items-center gap-1">
              Agnirva Internship
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
              Quality Assurance
            </span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" />
              VQRD Verified
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
              Target Audience
            </span>
            <span className="text-xs font-bold text-gray-200">
              Students & Researchers
            </span>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="relative z-10 text-center mt-6">
        <a
          href="#ecosystem"
          className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label="Scroll to Ecosystem section"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
