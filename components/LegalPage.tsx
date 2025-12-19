'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LegalPage = ({ title, content, icon: Icon }: { title: string, content: React.ReactNode, icon: any }) => (
    <div className="max-w-4xl mx-auto px-6 py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600">
                <Icon size={32} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">{title}</h1>
        </div>
        <div className="prose prose-indigo max-w-none text-gray-600 space-y-8 font-medium leading-relaxed">
            {content}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
                href="/"
                className="text-indigo-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:gap-4 transition-all"
            >
                <ArrowRight className="rotate-180" size={14} /> Înapoi la Acasă
            </Link>
        </div>
    </div>
);

export default LegalPage;
