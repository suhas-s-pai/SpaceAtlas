import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Cpu, Layers, BookOpen, FileText } from 'lucide-react';
import { ECOSYSTEM_LAYERS, WORKFLOW_STEPS, INTERNSHIP_JOURNEY, LAAP_DICTIONARY } from '../data/spaceEcosystemData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedLayers = q
    ? ECOSYSTEM_LAYERS.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.subtitle.toLowerCase().includes(q) ||
          l.summary.toLowerCase().includes(q) ||
          l.keyFunctions.some((f) => f.toLowerCase().includes(q))
      )
    : ECOSYSTEM_LAYERS;

  const matchedWorkflows = q
    ? WORKFLOW_STEPS.filter(
        (w) => w.name.toLowerCase().includes(q) || w.role.toLowerCase().includes(q) || w.desc.toLowerCase().includes(q)
      )
    : [];

  const matchedJourney = q
    ? INTERNSHIP_JOURNEY.filter(
        (j) => j.title.toLowerCase().includes(q) || j.code.toLowerCase().includes(q) || j.summary.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#070d1e] border border-cyan-500/40 shadow-2xl overflow-hidden hud-border">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#030611]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search layers (e.g. Flight, Telemetry, Ground, NavIC, Analytics)..."
            className="w-full bg-transparent text-gray-100 placeholder-gray-500 font-mono text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-900 text-gray-400 hover:text-white"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 font-mono">
          
          {/* Ecosystem Layer Matches */}
          {matchedLayers.length > 0 && (
            <div>
              <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Ecosystem Layers ({matchedLayers.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedLayers.map((layer) => (
                  <a
                    key={layer.id}
                    href="#ecosystem"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold text-xs">{layer.number}</span>
                        <span className="text-white font-bold text-xs group-hover:text-cyan-300">{layer.title}</span>
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-1 font-sans">{layer.summary}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Workflow Matches */}
          {matchedWorkflows.length > 0 && (
            <div>
              <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Workflow Pipeline Matches ({matchedWorkflows.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedWorkflows.map((w) => (
                  <a
                    key={w.step}
                    href="#workflows"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-indigo-400 font-bold text-xs">{w.step}. {w.name}</span>
                      <p className="text-[11px] text-gray-400 line-clamp-1 font-sans">{w.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Internship Journey Matches */}
          {matchedJourney.length > 0 && (
            <div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Internship Artifact Matches ({matchedJourney.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedJourney.map((j) => (
                  <a
                    key={j.week}
                    href="#journey"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-emerald-400 font-bold text-xs">{j.week} ({j.code}): {j.title}</span>
                      <p className="text-[11px] text-gray-400 line-clamp-1 font-sans">{j.summary}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {q && matchedLayers.length === 0 && matchedWorkflows.length === 0 && matchedJourney.length === 0 && (
            <div className="p-8 text-center text-gray-400 text-xs">
              No matching space software topics found for "<span className="text-cyan-400">{query}</span>".
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-800 bg-[#030611] flex items-center justify-between text-[10px] text-gray-400 font-mono">
          <span>SPACE ATLAS INSTANT SEARCH</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>

      </div>
    </div>
  );
}
