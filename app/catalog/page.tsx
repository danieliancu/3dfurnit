'use client';

import React from 'react';
import Catalog from '../../components/Catalog';
import Header from '../../components/Header';
import { useLanguage } from '../providers';
import { useRouter } from 'next/navigation';
import { Product } from '../../types';

export default function CatalogPage() {
    const { lang, setLang } = useLanguage();
    const router = useRouter();

    const handleSelectProduct = (product: Product) => {
        router.push(`/editor?productId=${product.id}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100">
            <Header />
            <main className="max-w-[1600px] mx-auto w-full">
                <Catalog onSelectProduct={handleSelectProduct} lang={lang} />
            </main>
        </div>
    );
}
