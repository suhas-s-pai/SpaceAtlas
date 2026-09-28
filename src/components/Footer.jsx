import React from 'react';
import { Satellite, ExternalLink, Terminal, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#010206] border-t border-cyan-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section: Project Info & Portfolio Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Left: Project Branding */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                <Satellite className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400 font-mono">
                  SPACE ATLAS
                </span>
                <p className="text-xs text-cyan-400 font-mono">
                  India's Space Software Ecosystem
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              Built as a student research and knowledge synthesis project based on Agnirva Software Internship deliverables on India's Human Spaceflight Knowledge Atlas & Space Software Ecosystem.
            </p>

            <div className="text-[11px] font-mono text-gray-400 flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>VQRD Fact-Checked • Open Educational Resource</span>
            </div>
          </div>

          {/* Right: Personal Portfolio Connection Section (Suhas S Pai) */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#050914] border border-cyan-500/30 shadow-xl hud-border">
            <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-2 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROJECT AUTHOR & DEVELOPER</span>
            </div>

            <h3 className="text-xl font-bold font-mono text-white mb-1">
              Suhas S Pai
            </h3>

            <p className="text-xs text-cyan-300 font-mono mb-3">
              Computer Science & Engineering Student
            </p>

            <p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">
              Interested in Java Development, Full-Stack Development, and Practical Software Engineering. Passionate about building mission-critical software systems, intuitive user interfaces, and robust backend architectures.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-gray-200 flex items-center gap-2 transition-all group"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-gray-200 flex items-center gap-2 transition-all group"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} SPACE ATLAS • Agnirva Software Internship Synthesis Project.</p>
          <p className="text-gray-400">Designed & Engineered by Suhas S Pai (CS&E)</p>
        </div>

      </div>
    </footer>
  );
}
