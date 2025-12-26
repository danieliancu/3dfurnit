'use client';

import React, { useState, useEffect } from 'react';
import RoomEditor from '../../components/RoomEditor';
import Header from '../../components/Header';
import { useLanguage } from '../providers';
import { useSearchParams } from 'next/navigation';
import { EditorState, Product } from '../../types';
// Wrapper for Suspense (Next.js requirement for useSearchParams)
import { Suspense } from 'react';

const STORAGE_KEY = '3dfurnit_editor_state';

function EditorContent() {
    const { lang, setLang } = useLanguage();
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
    const [initialProduct, setInitialProduct] = useState<Product | null>(null);

    // Fetch all products on mount
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                if (res.ok) {
                    const data = await res.json();
                    setAvailableProducts(data);
                }
            } catch (e) {
                console.error("Failed to fetch products", e);
            }
        }
        fetchProducts();
    }, []);

    // Load initial product from URL (wait for products to be loaded)
    useEffect(() => {
        if (productId && availableProducts.length > 0) {
            const product = availableProducts.find(p => p.id === productId);
            if (product) {
                setInitialProduct(product);
            }
        }
    }, [productId, availableProducts]);

    // Initial State - Start with default to match server
    const [editorState, setEditorState] = useState<EditorState>({
        roomImage: null,
        placedProducts: [],
        activeInstanceId: null,
        isProcessing: false,
        error: null,
    });

    const [isLoaded, setIsLoaded] = useState(false);

    // Load from LocalStorage after mount (client-side only)
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setEditorState(prev => ({
                    ...prev,
                    ...parsed,
                    activeInstanceId: null // Reset active selection
                }));
            } catch (e) {
                console.error("Failed to load saved state", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Persist State
    useEffect(() => {
        // ONLY save if we have confirmed that we tried to load first
        if (!isLoaded) return;

        // Don't save empty state immediately if we just loaded (though setEditorState is async)
        // This is a safety check: if we have products or an image, it's worth saving.
        // If everything is empty, we only save if it was actually changed by the user.

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(editorState));
        } catch (e) {
            if (e instanceof Error && e.name === 'QuotaExceededError') {
                console.warn("Storage quota exceeded, state not saved fully.");
            }
        }
    }, [editorState, isLoaded]);

    const handleProductConsumed = () => {
        setInitialProduct(null);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100" style={{ background: "lightblue" }}>
            <Header />
            <main className="lg:h-[calc(100vh-120px)] lg:max-h-[calc(100vh-120px)] lg:overflow-hidden">
                <RoomEditor
                    initialProduct={initialProduct}
                    onProductConsumed={handleProductConsumed}
                    lang={lang}
                    state={editorState}
                    setState={setEditorState}
                    availableProducts={availableProducts}
                />
            </main>
        </div>
    );
}

export default function EditorPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditorContent />
        </Suspense>
    )
}
