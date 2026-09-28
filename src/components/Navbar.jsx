import React, { useState, useEffect } from 'react';
import { Globe, Search, Menu, X, Satellite, ShieldCheck, Languages } from 'lucide-react';

export default function Navbar({ onOpenSearch, activeLang, onChangeLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Workflows', href: '#workflows' },
    { name: 'Research', href: '#research' },
    { name: 'Quality', href: '#quality' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Sources', href: '#sources' },
  ];

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020409]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3'
          : 'bg-gradient-to-b from-[#020409]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 group-hover:border-cyan-400/80 transition-all duration-300">
            <Satellite className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-lg bg-cyan-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400 font-mono">
                SPACE ATLAS
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-mono font-medium hidden sm:inline-block">
                INDIA
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-medium tracking-tight">
              Space Software Ecosystem
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#091024]/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-mono transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Search Space Atlas"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-gray-400 rounded border border-slate-700">
              Ctrl K
            </kbd>
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40 text-xs font-mono transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase font-semibold">{activeLang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#091024] border border-cyan-500/30 rounded-lg shadow-xl py-1 z-50 backdrop-blur-md">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onChangeLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-cyan-950/60 ${
                      activeLang === l.code ? 'text-cyan-400 font-semibold bg-cyan-950/40' : 'text-gray-300'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[11px] text-gray-400 font-mono">{l.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg bg-slate-900 text-gray-300 border border-slate-800"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050914]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-xs font-medium text-gray-200 hover:text-cyan-300 hover:bg-cyan-950/60 border border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-cyan-400" /> Language:
            </span>
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onChangeLang(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1 text-xs rounded font-mono ${
                    activeLang === l.code
                      ? 'bg-cyan-500 text-black font-semibold'
                      : 'bg-slate-900 text-gray-400 border border-slate-800'
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
