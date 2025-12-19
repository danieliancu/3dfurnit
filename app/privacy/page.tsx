'use client';

import React from 'react';
import Header from '../../components/Header';
import LegalPage from '../../components/LegalPage';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../providers';

export default function PrivacyPage() {
    const { lang } = useLanguage(); // Although static content mostly

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100">
            <Header />
            <main>
                <LegalPage
                    title="Politica de Confidențialitate"
                    icon={ShieldCheck}
                    content={
                        <>
                            <section className="bg-white p-8 rounded-[2rem] border border-gray-50 shadow-sm">
                                <h2 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">1. Angajamentul Nostru</h2>
                                <p>La 3dFurnit.com, protejăm datele partenerilor noștri cu aceeași rigoare cu care proiectăm experiențele 3D. Nu vindem și nu înstrăinăm datele tale către terți.</p>
                            </section>
                            <section className="bg-indigo-50/30 p-8 rounded-[2rem] border border-indigo-100/50 shadow-sm">
                                <h2 className="text-xl font-black text-indigo-900 uppercase mb-4 tracking-tight">2. Datele Camerei (Vizualizare Locală)</h2>
                                <p>Imaginile pe care le încarci în editorul nostru sunt stocate în memoria locală a browserului tău (localStorage). Acestea nu sunt trimise pe serverele noastre decât dacă folosești funcția de optimizare prin AI, moment în care sunt procesate securizat și șterse imediat după generare.</p>
                            </section>
                            <section className="bg-white p-8 rounded-[2rem] border border-gray-50 shadow-sm">
                                <h2 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">3. Cookie-uri și Analytics</h2>
                                <p>Folosim tool-uri de analiză pentru a înțelege cum interacționează utilizatorii cu modelele 3D, ajutându-te pe tine, retailerul, să optimizezi catalogul de produse.</p>
                            </section>
                        </>
                    }
                />
            </main>
        </div>
    );
}
