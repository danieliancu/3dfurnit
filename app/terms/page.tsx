'use client';

import React from 'react';
import Header from '../../components/Header';
import LegalPage from '../../components/LegalPage';
import { FileText } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100">
            <Header />
            <main>
                <LegalPage
                    title="Termeni și Condiții"
                    icon={FileText}
                    content={
                        <>
                            <section className="bg-white p-8 rounded-[2rem] border border-gray-50 shadow-sm">
                                <h2 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">1. Utilizarea Serviciului</h2>
                                <p>3dFurnit oferă o platformă de tip SaaS. Utilizarea demo-ului este permisă oricărui vizitator în scop exploratoriu. Integrarea comercială necesită un abonament valid.</p>
                            </section>
                            <section className="bg-indigo-50/30 p-8 rounded-[2rem] border border-indigo-100/50 shadow-sm">
                                <h2 className="text-xl font-black text-indigo-900 uppercase mb-4 tracking-tight">2. Proprietate Intelectuală</h2>
                                <p>Toate modelele 3D generate sau găzduite prin platforma noastră rămân sub licența 3dFurnit sau a partenerilor noștri furnizori de conținut. Copierea modelelor GLB fără acord este strict interzisă.</p>
                            </section>
                            <section className="bg-white p-8 rounded-[2rem] border border-gray-50 shadow-sm">
                                <h2 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">3. Limitări de Răspundere</h2>
                                <p>Deși tehnologia noastră este avansată, randările 3D în AR/Camera pot avea variații de culoare de până la 5% față de produsul fizic, în funcție de calitatea senzorului camerei tale și de iluminarea ambientală.</p>
                            </section>
                        </>
                    }
                />
            </main>
        </div>
    );
}
