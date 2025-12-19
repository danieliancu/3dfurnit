'use client';

import React from 'react';
import {
    Sparkles,
    ArrowRight,
    Code2,
    Zap,
    BarChart3,
    Smartphone,
    Phone,
    Mail,
    Send,
    Check,
    Armchair
} from 'lucide-react';
import { TRANSLATIONS, PRICING_PLANS } from '../constants';
import FeatureCard from '../components/FeatureCard';
import Header from '../components/Header';
import Link from 'next/link';
import { useLanguage } from './providers';

export default function Home() {
    const { lang, setLang } = useLanguage();
    const t = TRANSLATIONS[lang];

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100">
            <Header />
            <main>
                <div className="animate-in fade-in duration-700">
                    {/* Landing Content */}
                    <div className="relative overflow-hidden bg-white py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-indigo-100">
                                        <Sparkles size={14} />
                                        {t.home.badge}
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[0.95] mb-8">
                                        {t.home.heroTitle}
                                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                            {t.home.heroTitleGradient}
                                        </span>
                                    </h1>
                                    <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
                                        {t.home.heroSubtitle}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/editor"
                                            className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 active:scale-95 flex items-center justify-center gap-3"
                                        >
                                            {t.home.btnTry} <ArrowRight size={18} />
                                        </Link>
                                        <Link
                                            href="/catalog"
                                            className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3"
                                        >
                                            {t.home.btnCatalog}
                                        </Link>
                                    </div>

                                    <div className="mt-12 flex items-center gap-8 border-t border-gray-50 pt-8">
                                        <div>
                                            <p className="text-2xl font-black text-gray-900 leading-none">100%</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{t.home.stats.auto}</p>
                                        </div>
                                        <div className="w-px h-8 bg-gray-200"></div>
                                        <div>
                                            <p className="text-2xl font-black text-gray-900 leading-none">+40%</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{t.home.stats.conv}</p>
                                        </div>
                                        <div className="w-px h-8 bg-gray-200"></div>
                                        <div>
                                            <p className="text-2xl font-black text-gray-900 leading-none">1-Click</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{t.home.stats.integ}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 lg:mt-0 relative">
                                    <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl transform lg:rotate-1 border-[12px] border-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                                            alt="Sufragerie Moderna"
                                            className="w-full h-auto object-cover aspect-[4/3]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features & Other sections... */}
                    <div id="features-section" className="bg-white py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">{t.home.ctaTitle}</h2>
                                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">{t.home.ctaDesc}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                                <FeatureCard
                                    icon={<Code2 size={40} />}
                                    title={t.home.features.noCode.title}
                                    description={t.home.features.noCode.desc}
                                />
                                <FeatureCard
                                    icon={<Zap size={40} />}
                                    title={t.home.features.autoGlb.title}
                                    description={t.home.features.autoGlb.desc}
                                />
                                <FeatureCard
                                    icon={<BarChart3 size={40} />}
                                    title={t.home.features.analytics.title}
                                    description={t.home.features.analytics.desc}
                                />
                                <FeatureCard
                                    icon={<Smartphone size={40} />}
                                    title={t.home.features.mobile.title}
                                    description={t.home.features.mobile.desc}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div id="pricing-section" className="bg-gray-50/50 py-32">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-24">
                                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">{t.home.pricingTitle}</h2>
                                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">{t.home.pricingSubtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {PRICING_PLANS.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-4 ${plan.highlight
                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xl shadow-indigo-200'
                                            : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-2xl'
                                            }`}
                                    >
                                        {plan.highlight && (
                                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                {plan.badge}
                                            </div>
                                        )}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-black uppercase tracking-widest mb-4">{plan.name}</h3>
                                            <div className="flex items-end gap-1">
                                                <span className="text-5xl font-black leading-none tracking-tighter">{plan.price}</span>
                                                <span className={`text-sm font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>{plan.period}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-5 mb-12 flex-1">
                                            {plan.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-4">
                                                    <div className={`mt-1 p-1 rounded-full ${plan.highlight ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                                                        <Check size={12} strokeWidth={4} />
                                                    </div>
                                                    <span className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-indigo-50' : 'text-gray-500'}`}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${plan.highlight
                                            ? 'bg-white text-indigo-600 hover:bg-gray-100'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                            }`}>
                                            {t.common.getStarted}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div id="contact-section" className="bg-gray-900 py-32">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                                <div>
                                    <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">Pregătit să <br /><span className="text-indigo-400">revoluționezi</span> <br />vânzările?</h2>
                                    <div className="space-y-8 mt-12">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400"><Phone size={24} /></div>
                                            <div><p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Sună-ne</p><p className="text-lg font-bold text-white">+40 700 000 000</p></div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400"><Mail size={24} /></div>
                                            <div><p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email</p><p className="text-lg font-bold text-white">office@3dfurnit.com</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-3xl p-10 lg:p-16 rounded-[4rem] border border-white/10">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <input type="text" placeholder="Nume" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium" />
                                            <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium" />
                                        </div>
                                        <button className="w-full bg-indigo-600 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all flex items-center justify-center gap-3">
                                            {t.common.contactUs} <Send size={18} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                    <Link href="/" className="flex items-center gap-3 cursor-pointer">
                        <Armchair className="w-8 h-8 text-black" />
                        <span className="text-xl font-black text-gray-900 tracking-tighter">3dFurnit<span className="text-indigo-600">.com</span></span>
                    </Link>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-indigo-600">Privacy</Link>
                        <Link href="/terms" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-indigo-600">Terms</Link>
                    </div>
                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em]">© {new Date().getFullYear()} 3dFurnit Solutions.</p>
                </div>
            </footer>
        </div>
    );
}
