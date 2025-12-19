'use client';

import React, { useState } from 'react';
import { Language } from '../types';
import { Menu, Armchair, Globe, X, Mail, Phone, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../app/providers';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;
  const pathname = usePathname();

  const languages: { code: Language; label: string }[] = [
    { code: 'ro', label: 'Română' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' }
  ];

  const isActive = (path: string) => pathname === path;

  // Function to handle scroll to section on Home page
  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (pathname !== '/') {
      // If not on home, we might want to navigate to home then scroll, 
      // but for now let's just navigate to home with query param or hash?
      // Simple approach: standard anchor link usually works if id exists, but standard anchor links refresh/jump.
      // Let's use window.location for hash if not on home, or just Link with hash.
      window.location.href = `/#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm md:bg-white/95 md:backdrop-blur-xl">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-900 py-2">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Mail size={12} className="text-indigo-400" />
              office@3dfurnit.com
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Phone size={12} className="text-indigo-400" />
              +40 700 000 000
            </div>
          </div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsMenuOpen(false)}
          >
            <Armchair className="w-8 h-8 text-black" />
            <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-colors">
              3dFurnit<span className="text-indigo-600 group-hover:text-gray-900">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/catalog"
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive('/catalog') ? 'text-indigo-600' : ''}`}
            >
              {t.store}
            </Link>
            <button
              onClick={() => handleScrollTo('pricing-section')}
              className="text-[10px] font-bold uppercase tracking-[0.2em]  transition-colors"
            >
              {t.pricing}
            </button>
            <button
              onClick={() => handleScrollTo('contact-section')}
              className="text-[10px] font-bold uppercase tracking-[0.2em]  transition-colors"
            >
              {t.contact}
            </button>

            <div className="h-6 w-px bg-gray-100 mx-2"></div>

            <Link
              href="/editor"
              className="bg-indigo-600 text-white px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
            >
              {t.demo}
            </Link>

            {/* Desktop Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-100 transition-all"
              >
                <Globe size={14} className="text-indigo-600" />
                {lang}
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 animate-in fade-in zoom-in-95 duration-200 z-[100]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors ${lang === l.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-900 bg-gray-100 rounded-2xl border border-gray-200 active:scale-90 transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-2xl animate-in slide-in-from-top duration-300 z-50">
          <nav className="flex flex-col p-6 gap-3">
            <Link href="/catalog" onClick={() => setIsMenuOpen(false)} className={`text-left p-4 rounded-2xl text-[12px] font-bold uppercase tracking-widest transition-colors ${isActive('/catalog') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 bg-gray-50'}`}>{t.store}</Link>
            <button onClick={() => handleScrollTo('pricing-section')} className="text-left p-4 rounded-2xl text-[12px] font-bold uppercase tracking-widest text-gray-700 bg-gray-50">{t.pricing}</button>
            <button onClick={() => handleScrollTo('contact-section')} className="text-left p-4 rounded-2xl text-[12px] font-bold uppercase tracking-widest text-gray-700 bg-gray-50">{t.contact}</button>

            <div className="h-px bg-gray-200 my-2"></div>

            <Link href="/editor" onClick={() => setIsMenuOpen(false)} className="text-left p-5 rounded-2xl text-[12px] font-bold uppercase tracking-widest bg-indigo-600 text-white shadow-xl">{t.demo}</Link>

            {/* Mobile Language Selector */}
            <div className="mt-4">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 ml-2">Selectează Limba</p>
              <div className="relative">
                <button
                  onClick={() => setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen)}
                  className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-indigo-600" />
                    {languages.find(l => l.code === lang)?.label}
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileLangDropdownOpen && (
                  <div className="mt-2 w-full bg-white rounded-2xl border border-gray-100 py-2 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsMobileLangDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest transition-colors ${lang === l.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
