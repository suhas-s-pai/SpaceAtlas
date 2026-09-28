import React from 'react';
import { Languages, CheckCircle2, Eye, Layout, ShieldCheck, Sparkles } from 'lucide-react';
import { LAAP_DICTIONARY } from '../data/spaceEcosystemData';

export default function AccessibilitySection({ activeLang, onChangeLang }) {
  return (
    <section id="accessibility" className="py-20 bg-[#020409] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Languages className="w-3.5 h-3.5" />
            <span>LAAP FRAMEWORK • INCLUSION & ACCESSIBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-4">
            LOCALIZATION & ACCESSIBILITY
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Formulated under Week 7 Localization & Accessibility Action Plan (LAAP), the platform ensures that space technical knowledge is readable, high-contrast, screen-reader friendly, and multi-lingual.
          </p>
        </div>

        {/* 4 Interactive Accessibility Badges Panel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 font-mono">
          <div className="p-4 rounded-xl bg-[#050814] border border-cyan-500/30 text-center">
            <Eye className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-white mb-1">READABLE</h3>
            <p className="text-[11px] text-gray-400">Simple English & short technical paragraphs</p>
          </div>

          <div className="p-4 rounded-xl bg-[#050814] border border-cyan-500/30 text-center">
            <Layout className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-white mb-1">ACCESSIBLE</h3>
            <p className="text-[11px] text-gray-400">WCAG 2.1 AAA contrast & reduced-motion support</p>
          </div>

          <div className="p-4 rounded-xl bg-[#050814] border border-cyan-500/30 text-center">
            <Languages className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-white mb-1">LOCALIZED</h3>
            <p className="text-[11px] text-gray-400">Kannada & Hindi term mapping dictionary</p>
          </div>

          <div className="p-4 rounded-xl bg-[#050814] border border-cyan-500/30 text-center">
            <ShieldCheck className="w-6 h-6 text-violet-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-white mb-1">ACCURATE</h3>
            <p className="text-[11px] text-gray-400">Standardized space terminology verified</p>
          </div>
        </div>

        {/* Trilingual Technical Terminology Dictionary Table */}
        <div className="p-6 rounded-2xl bg-[#050814] border border-cyan-500/30 shadow-2xl glass-panel hud-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div>
              <h3 className="text-sm font-bold font-mono text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                LAAP Trilingual Technical Dictionary Preview
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Standardized translations for core space software concepts
              </p>
            </div>

            {/* Language Switcher Button Bar */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <button
                onClick={() => onChangeLang('en')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeLang === 'en' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-gray-300 border border-slate-800'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onChangeLang('kn')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeLang === 'kn' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-gray-300 border border-slate-800'
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => onChangeLang('hi')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeLang === 'hi' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-gray-300 border border-slate-800'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {LAAP_DICTIONARY.map((item) => (
              <div key={item.en} className="p-3.5 rounded-xl bg-[#020409] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white">
                    {item.en}
                  </div>
                  <div className="text-xs text-cyan-400 flex items-center gap-3">
                    <span>ಕನ್ನಡ: <strong className="text-cyan-300 font-normal">{item.kn}</strong></span>
                    <span>•</span>
                    <span>हिन्दी: <strong className="text-indigo-300 font-normal">{item.hi}</strong></span>
                  </div>
                </div>
                <div className="text-[11px] text-gray-400 max-w-xs font-sans">
                  {item.def}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-gray-400 text-center font-mono">
            * Complete multilingual translation framework active in preview mode across core ecosystem headers.
          </div>
        </div>

      </div>
    </section>
  );
}
