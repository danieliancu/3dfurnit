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
    Armchair,
    Box,
    Eye,
    ShoppingBag,
    ShieldCheck,
    Rotate3D
} from 'lucide-react';
import { TRANSLATIONS, PRICING_PLANS } from '../constants';
import FeatureCard from '../components/FeatureCard';
import Header from '../components/Header';
import Link from 'next/link';
import { useLanguage } from './providers';

export default function Home() {
    const { lang, setLang } = useLanguage();
    const t = TRANSLATIONS[lang];
    const integrationContent: Record<string, {
        title: string;
        subtitle: string;
        providers: { id: string; name: string; logo: string; tagline: string; tech: string }[];
    }> = {
        ro: {
            title: 'Integrare e-commerce',
            subtitle: 'Conectăm platformele tale în câteva minute, cu onboarding asistat.',
            providers: [
                { id: 'woocommerce', name: 'WooCommerce', logo: '/logos/wordpress.png', tagline: 'Plugin + chei REST (ck/cs)', tech: 'Instalăm modulul 3dFurnit, generăm chei REST, activăm webhooks product create/update și sincronizăm imaginile + fișierele GLB.' },
                { id: 'shopify', name: 'Shopify', logo: '/logos/shopify.png', tagline: 'Custom App + GraphQL', tech: 'App privată/publică cu Admin & Storefront API, App Proxy pentru widget, webhooks product/update și metafield pentru link-ul 3D.' },
                { id: 'magento', name: 'Magento', logo: '/logos/Magento.webp', tagline: 'Token REST/GraphQL', tech: 'Token integrator, endpoint dedicat feed-ului, cron de sincronizare și observer pe product save pentru a trimite asset-urile 3D.' },
                { id: 'bigcommerce', name: 'BigCommerce', logo: '/logos/BigCommerce.png', tagline: 'OAuth App + Catalog API', tech: 'Aplicație OAuth, Catalog API pentru produse/imagini, webhook product.updated și Script Manager pentru butonul 3D.' },
                { id: 'prestashop', name: 'PrestaShop', logo: '/logos/PrestaShop.png', tagline: 'Modul + Webservice key', tech: 'Modul 3dFurnit, generăm Webservice key, endpoint de sync și hook actionProductSave pentru actualizări automate.' },
                { id: 'wix', name: 'Wix', logo: '/logos/wix.png', tagline: 'Wix App + OAuth', tech: 'Aplicație Wix cu OAuth, Wix Stores API pentru catalog, events products.onUpdate pentru refresh automat al previzualizărilor 3D.' },
                { id: 'squarespace', name: 'Squarespace', logo: '/logos/squarespace.png', tagline: 'Commerce API + Webhooks', tech: 'Cheie Commerce API, webhook pe catalog, snippet injectat pentru butonul 3D și mapare SKU–model.' },
                { id: 'opencart', name: 'OpenCart', logo: '/logos/opencart.png', tagline: 'Extensie + API key', tech: 'Extensie 3dFurnit, API key pentru feed, event pe catalog/model product pentru sync imagini/stoc și link 3D.' },
            ]
        },
        en: {
            title: 'E-commerce Integrations',
            subtitle: 'Connect your stack in minutes with guided onboarding.',
            providers: [
                { id: 'woocommerce', name: 'WooCommerce', logo: '/logos/wordpress.png', tagline: 'Plugin + REST keys (ck/cs)', tech: 'Install the 3dFurnit plugin, generate REST keys, enable product create/update webhooks, sync images and GLB assets.' },
                { id: 'shopify', name: 'Shopify', logo: '/logos/shopify.png', tagline: 'Custom App + GraphQL', tech: 'Private/public app with Admin & Storefront API, App Proxy for the widget, product/update webhooks, metafield to store the 3D link.' },
                { id: 'magento', name: 'Magento', logo: '/logos/Magento.webp', tagline: 'REST/GraphQL token', tech: 'Integrator token, dedicated feed endpoint, cron sync, observer on product save to push 3D assets.' },
                { id: 'bigcommerce', name: 'BigCommerce', logo: '/logos/BigCommerce.png', tagline: 'OAuth App + Catalog API', tech: 'OAuth app, Catalog APIs for products/images, webhook product.updated, Script Manager injects the 3D button.' },
                { id: 'prestashop', name: 'PrestaShop', logo: '/logos/PrestaShop.png', tagline: 'Module + Webservice key', tech: '3dFurnit module, generate Webservice key, expose sync endpoint and hook actionProductSave for automatic updates.' },
                { id: 'wix', name: 'Wix', logo: '/logos/wix.png', tagline: 'Wix App + OAuth', tech: 'Wix app with OAuth, Wix Stores APIs for catalog, products.onUpdate events to refresh 3D previews automatically.' },
                { id: 'squarespace', name: 'Squarespace', logo: '/logos/squarespace.png', tagline: 'Commerce API + Webhooks', tech: 'Commerce API key, catalog webhook, injected snippet for the 3D button, SKU-to-model mapping.' },
                { id: 'opencart', name: 'OpenCart', logo: '/logos/opencart.png', tagline: 'Extension + API key', tech: '3dFurnit extension, API key for feed, event on catalog/model product to sync images/stock and 3D link.' },
            ]
        },
        fr: {
            title: 'Intégrations e-commerce',
            subtitle: 'Connectez vos plateformes en quelques minutes avec onboarding guidé.',
            providers: [
                { id: 'woocommerce', name: 'WooCommerce', logo: '/logos/wordpress.png', tagline: 'Plugin + clés REST (ck/cs)', tech: 'Installer le plugin 3dFurnit, générer les clés REST, activer les webhooks product create/update, synchroniser images et fichiers GLB.' },
                { id: 'shopify', name: 'Shopify', logo: '/logos/shopify.png', tagline: 'App sur mesure + GraphQL', tech: 'Application privée/publique avec Admin & Storefront API, App Proxy pour le widget, webhooks product/update, metafield pour le lien 3D.' },
                { id: 'magento', name: 'Magento', logo: '/logos/Magento.webp', tagline: 'Jeton REST/GraphQL', tech: 'Jeton intégrateur, endpoint de feed dédié, cron de synchro et observer sur product save pour pousser les assets 3D.' },
                { id: 'bigcommerce', name: 'BigCommerce', logo: '/logos/BigCommerce.png', tagline: 'App OAuth + Catalog API', tech: 'Application OAuth, Catalog API pour produits/images, webhook product.updated, Script Manager injecte le bouton 3D.' },
                { id: 'prestashop', name: 'PrestaShop', logo: '/logos/PrestaShop.png', tagline: 'Module + clé Webservice', tech: 'Module 3dFurnit, génération de clé Webservice, endpoint de sync et hook actionProductSave pour mises à jour auto.' },
                { id: 'wix', name: 'Wix', logo: '/logos/wix.png', tagline: 'App Wix + OAuth', tech: 'App Wix avec OAuth, Wix Stores APIs pour le catalogue, événements products.onUpdate pour rafraîchir les vues 3D.' },
                { id: 'squarespace', name: 'Squarespace', logo: '/logos/squarespace.png', tagline: 'Commerce API + Webhooks', tech: 'Clé Commerce API, webhook catalogue, snippet injecté pour le bouton 3D, mapping SKU–modèle.' },
                { id: 'opencart', name: 'OpenCart', logo: '/logos/opencart.png', tagline: 'Extension + clé API', tech: 'Extension 3dFurnit, clé API pour le feed, event sur catalog/model product pour synchroniser images/stock et lien 3D.' },
            ]
        },
        de: {
            title: 'E-Commerce-Integrationen',
            subtitle: 'Verbinden Sie Ihre Plattformen in Minuten mit geführtem Onboarding.',
            providers: [
                { id: 'woocommerce', name: 'WooCommerce', logo: '/logos/wordpress.png', tagline: 'Plugin + REST-Schlüssel', tech: '3dFurnit-Plugin installieren, REST-Schlüssel erzeugen, Webhooks für product create/update aktivieren, Bilder und GLB synchronisieren.' },
                { id: 'shopify', name: 'Shopify', logo: '/logos/shopify.png', tagline: 'Custom App + GraphQL', tech: 'Private/öffentliche App mit Admin & Storefront API, App Proxy für das Widget, Webhooks product/update, Metafield für den 3D-Link.' },
                { id: 'magento', name: 'Magento', logo: '/logos/Magento.webp', tagline: 'REST/GraphQL Token', tech: 'Integrator-Token, eigener Feed-Endpoint, Cron-Sync, Observer auf product save zum Pushen der 3D-Assets.' },
                { id: 'bigcommerce', name: 'BigCommerce', logo: '/logos/BigCommerce.png', tagline: 'OAuth App + Catalog API', tech: 'OAuth-App, Catalog APIs für Produkte/Bilder, Webhook product.updated, Script Manager injiziert den 3D-Button.' },
                { id: 'prestashop', name: 'PrestaShop', logo: '/logos/PrestaShop.png', tagline: 'Modul + Webservice-Key', tech: '3dFurnit-Modul, Webservice-Schlüssel, Sync-Endpoint und Hook actionProductSave für automatische Updates.' },
                { id: 'wix', name: 'Wix', logo: '/logos/wix.png', tagline: 'Wix App + OAuth', tech: 'Wix-App mit OAuth, Wix Stores APIs fürs Katalog, products.onUpdate Events für automatische 3D-Updates.' },
                { id: 'squarespace', name: 'Squarespace', logo: '/logos/squarespace.png', tagline: 'Commerce API + Webhooks', tech: 'Commerce-API-Schlüssel, Katalog-Webhooks, injizierter Snippet für 3D-Button, SKU–Modell-Mapping.' },
                { id: 'opencart', name: 'OpenCart', logo: '/logos/opencart.png', tagline: 'Extension + API-Key', tech: '3dFurnit-Extension, API-Key für Feed, Event auf catalog/model product für Sync von Bildern/Bestand und 3D-Link.' },
            ]
        },
        es: {
            title: 'Integraciones e-commerce',
            subtitle: 'Conecta tus plataformas en minutos con onboarding asistido.',
            providers: [
                { id: 'woocommerce', name: 'WooCommerce', logo: '/logos/wordpress.png', tagline: 'Plugin + claves REST', tech: 'Instalamos el plugin 3dFurnit, generamos claves REST, activamos webhooks de creación/actualización y sincronizamos imágenes y GLB.' },
                { id: 'shopify', name: 'Shopify', logo: '/logos/shopify.png', tagline: 'App personalizada + GraphQL', tech: 'App privada/pública con Admin y Storefront API, App Proxy para el widget, webhooks product/update y metafield para el enlace 3D.' },
                { id: 'magento', name: 'Magento', logo: '/logos/Magento.webp', tagline: 'Token REST/GraphQL', tech: 'Token de integrador, endpoint de feed dedicado, cron de sincronización y observer en product save para enviar assets 3D.' },
                { id: 'bigcommerce', name: 'BigCommerce', logo: '/logos/BigCommerce.png', tagline: 'App OAuth + Catalog API', tech: 'Aplicación OAuth, Catalog APIs para productos/imágenes, webhook product.updated, Script Manager inyecta el botón 3D.' },
                { id: 'prestashop', name: 'PrestaShop', logo: '/logos/PrestaShop.png', tagline: 'Módulo + clave Webservice', tech: 'Módulo 3dFurnit, generamos Webservice key, endpoint de sync y hook actionProductSave para actualizaciones automáticas.' },
                { id: 'wix', name: 'Wix', logo: '/logos/wix.png', tagline: 'App Wix + OAuth', tech: 'App Wix con OAuth, Wix Stores APIs para catálogo, eventos products.onUpdate para refrescar las vistas 3D automáticamente.' },
                { id: 'squarespace', name: 'Squarespace', logo: '/logos/squarespace.png', tagline: 'Commerce API + Webhooks', tech: 'Clave Commerce API, webhook de catálogo, snippet inyectado para el botón 3D, mapeo SKU–modelo.' },
                { id: 'opencart', name: 'OpenCart', logo: '/logos/opencart.png', tagline: 'Extensión + clave API', tech: 'Extensión 3dFurnit, clave API para el feed, evento en catalog/model product para sincronizar imágenes/stock y enlace 3D.' },
            ]
        },
    };
    const integration = integrationContent[lang] || integrationContent.en;

    const advantageContent: Record<string, {
        title: string;
        subtitle: string;
        items: { icon: 'Eye' | 'Rotate3D' | 'Box' | 'ShoppingBag' | 'ShieldCheck'; title: string; desc: string }[];
    }> = {
        ro: {
            title: 'Avantajele 3D pentru e-commerce',
            subtitle: 'Crește conversia, reduce retururile și oferă încredere instant clienților tăi.',
            items: [
                { icon: 'Eye', title: 'Claritate vizuală', desc: 'Model 3D la scară reală, cu unghiuri multiple și iluminare corectă pentru zero surprize la livrare.' },
                { icon: 'Rotate3D', title: 'Proba în cameră', desc: 'Produsul se așază pe fundalul clientului, cu rotație și scalare precise pentru potrivire reală.' },
                { icon: 'Box', title: 'Asset unic', desc: 'Un singur GLB optimizat rulează pe web, mobile și AR, fără duplicate de imagini greu de întreținut.' },
                { icon: 'ShoppingBag', title: 'Flux de checkout rapid', desc: 'Butonul “Adaugă în coș” din scenă trimite direct în coșul platformei tale, fără pași în plus.' },
                { icon: 'ShieldCheck', title: 'Mai puține retururi', desc: 'Așteptările sunt aliniate: clienții văd dimensiuni, materiale și proporții înainte să cumpere.' },
            ],
        },
        en: {
            title: '3D advantages for furniture e-commerce',
            subtitle: 'Boost conversion, cut returns, and deliver instant buyer confidence.',
            items: [
                { icon: 'Eye', title: 'Visual clarity', desc: 'True-to-scale 3D with multiple angles and accurate lighting—no surprises at delivery.' },
                { icon: 'Rotate3D', title: 'Try in-room', desc: 'Place, rotate, and scale the product on the customer’s background for a real fit check.' },
                { icon: 'Box', title: 'Single asset', desc: 'One optimized GLB powers web, mobile, and AR—no fragile image bundles to maintain.' },
                { icon: 'ShoppingBag', title: 'Fast checkout', desc: '“Add to cart” inside the scene sends the item straight to your platform cart.' },
                { icon: 'ShieldCheck', title: 'Fewer returns', desc: 'Expectations match reality: size, materials, and proportions are clear pre-purchase.' },
            ],
        },
        fr: {
            title: "Atouts 3D pour l’e-commerce mobilier",
            subtitle: 'Plus de conversion, moins de retours, confiance immédiate pour l’acheteur.',
            items: [
                { icon: 'Eye', title: 'Clarté visuelle', desc: '3D à l’échelle réelle, angles multiples, lumière fidèle – pas de surprises à la livraison.' },
                { icon: 'Rotate3D', title: 'Essai in situ', desc: 'Placement, rotation et mise à l’échelle dans la pièce du client pour vérifier l’ajustement.' },
                { icon: 'Box', title: 'Asset unique', desc: 'Un GLB optimisé alimente web, mobile et AR, sans lots d’images difficiles à gérer.' },
                { icon: 'ShoppingBag', title: 'Checkout rapide', desc: '“Ajouter au panier” depuis la scène envoie l’article directement dans le panier e-commerce.' },
                { icon: 'ShieldCheck', title: 'Moins de retours', desc: 'Attentes alignées : dimensions, matériaux et proportions visibles avant l’achat.' },
            ],
        },
        de: {
            title: '3D-Vorteile für Möbel-E-Commerce',
            subtitle: 'Mehr Conversion, weniger Retouren und sofortiges Käufervertrauen.',
            items: [
                { icon: 'Eye', title: 'Visuelle Klarheit', desc: '3D in echter Größe, mehrere Blickwinkel, korrektes Licht – keine Überraschungen bei Lieferung.' },
                { icon: 'Rotate3D', title: 'Im Raum testen', desc: 'Platzieren, drehen und skalieren im Kundenraum für den echten Passform-Check.' },
                { icon: 'Box', title: 'Ein einziges Asset', desc: 'Ein optimiertes GLB bedient Web, Mobile und AR – keine anfälligen Bildstapel.' },
                { icon: 'ShoppingBag', title: 'Schneller Checkout', desc: '“In den Warenkorb” aus der Szene legt direkt in den Shop-Warenkorb.' },
                { icon: 'ShieldCheck', title: 'Weniger Retouren', desc: 'Erwartung trifft Realität: Maße, Materialien und Proportionen sind vor dem Kauf klar.' },
            ],
        },
        es: {
            title: 'Ventajas 3D para e-commerce de muebles',
            subtitle: 'Más conversión, menos devoluciones y confianza inmediata del comprador.',
            items: [
                { icon: 'Eye', title: 'Claridad visual', desc: '3D a escala real, múltiples ángulos y luz precisa: sin sorpresas en la entrega.' },
                { icon: 'Rotate3D', title: 'Prueba en la habitación', desc: 'Coloca, rota y escala el producto en el fondo del cliente para verificar el ajuste real.' },
                { icon: 'Box', title: 'Asset único', desc: 'Un GLB optimizado impulsa web, móvil y AR; sin paquetes de imágenes frágiles.' },
                { icon: 'ShoppingBag', title: 'Checkout rápido', desc: '“Añadir al carrito” desde la escena envía directo al carrito de tu plataforma.' },
                { icon: 'ShieldCheck', title: 'Menos devoluciones', desc: 'Expectativas alineadas: tamaños, materiales y proporciones claros antes de comprar.' },
            ],
        },
    };
    const advantages = advantageContent[lang] || advantageContent.en;
    const iconMap = { Eye, Rotate3D, Box, ShoppingBag, ShieldCheck };
    const positionedProviders = integration.providers.map((p, idx) => {
        const angle = (360 / integration.providers.length) * idx;
        const rad = (angle * Math.PI) / 180;
        const radius = 38;
        const top = 50 - radius * Math.cos(rad);
        const left = 50 + radius * Math.sin(rad);
        return { ...p, angle, top, left };
    });

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

                    {/* Integrations */}
                    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">{integration.title}</h2>
                                <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium">{integration.subtitle}</p>
                            </div>

                            {/* Radial layout for desktop */}
                            <div className="hidden md:block">
                                <div className="relative max-w-5xl mx-auto aspect-square">
                                    {/* Background decorative elements */}
                                    <div className="absolute inset-4 rounded-full border border-indigo-500/5 animate-[pulse_4s_infinite]"></div>
                                    <div className="absolute inset-12 rounded-full border border-dashed border-white/5"></div>
                                    <div className="absolute inset-24 rounded-full border border-white/5"></div>

                                    {/* Central Hub with Pulse */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full animate-pulse"></div>
                                            <div className="relative bg-indigo-600/40 backdrop-blur-2xl rounded-full w-44 h-44 shadow-[0_0_50px_rgba(99,102,241,0.3)] border border-indigo-400/30 flex flex-col items-center justify-center gap-3 transition-transform hover:scale-105 duration-700">
                                                <div className="relative">
                                                    <Armchair className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" size={48} />
                                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
                                                </div>
                                                <p className="text-[14px] font-black uppercase tracking-[0.3em] text-white">3dFurnit</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SVG Arrows Layer */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="transparent" />
                                                <stop offset="50%" stopColor="rgba(129, 140, 248, 0.5)" />
                                                <stop offset="100%" stopColor="rgba(129, 140, 248, 0.8)" />
                                            </linearGradient>
                                        </defs>
                                        {positionedProviders.map((p, idx) => {
                                            // Calculate path from node to center
                                            const x1 = p.left;
                                            const y1 = p.top;
                                            const x2 = 50;
                                            const y2 = 50;

                                            return (
                                                <g key={`arrow-${p.id}`}>
                                                    <path
                                                        d={`M ${x1} ${y1} L ${x2} ${y2}`}
                                                        stroke="rgba(129, 140, 248, 0.15)"
                                                        strokeWidth="0.5"
                                                        fill="none"
                                                    />
                                                    <circle r="0.4" fill="#818cf8">
                                                        <animateMotion
                                                            dur={`${2 + Math.random() * 2}s`}
                                                            repeatCount="indefinite"
                                                            path={`M ${x1} ${y1} L ${x2} ${y2}`}
                                                            begin={`${idx * 0.4}s`}
                                                        />
                                                    </circle>
                                                </g>
                                            );
                                        })}
                                    </svg>

                                    {/* Platform Nodes */}
                                    {positionedProviders.map((p) => (
                                        <div
                                            key={p.id}
                                            className="absolute group z-20"
                                            style={{ top: `${p.top}%`, left: `${p.left}%`, transform: 'translate(-50%,-50%)' }}
                                        >
                                            <div className="relative flex flex-col items-center">
                                                {/* Logo Container */}
                                                <div className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center p-2.5 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-400/50 backdrop-blur-md">
                                                    <img src={p.logo} alt={`${p.name} logo`} className="w-full h-full object-contain filter brightness-110" />
                                                </div>

                                                {/* Tooltip-style info */}
                                                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-56 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none translate-y-2 group-hover:translate-y-0">
                                                    <div className="bg-slate-900/95 border border-indigo-500/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl text-center">
                                                        <p className="text-sm font-black text-white uppercase tracking-tight mb-1">{p.name}</p>
                                                        <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-widest leading-normal mb-2">{p.tagline}</p>
                                                        <p className="text-[12px] text-white/80 leading-relaxed font-medium">{p.tech}</p>
                                                    </div>
                                                </div>

                                                {/* Static label for always-on visibility */}
                                                <p className="mt-4 text-[13px] font-black text-white uppercase tracking-[0.25em] group-hover:text-indigo-400 transition-colors duration-300 drop-shadow-md">
                                                    {p.name}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile / tablet stacked list */}
                            <div className="md:hidden mt-12 space-y-6">
                                {integration.providers.map((p) => (
                                    <div key={p.id} className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative bg-white/5 rounded-2xl border border-white/10 p-6 flex gap-4 backdrop-blur-xl items-center">
                                            <div className="w-16 h-16 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center p-3 shrink-0 shadow-lg">
                                                <img src={p.logo} alt={`${p.name} logo`} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <p className="text-lg font-black text-white uppercase tracking-tight">{p.name}</p>
                                                    <ArrowRight size={18} className="text-indigo-400 opacity-50" />
                                                </div>
                                                <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-[0.15em] mb-2">{p.tagline}</p>
                                                <p className="text-[14px] text-white/80 leading-normal font-medium">{p.tech}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

                    {/* 3D Advantages */}
                    <div className="bg-white py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">{advantages.title}</h2>
                                <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">{advantages.subtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {advantages.items.map((item, idx) => {
                                    const IconComp = iconMap[item.icon];
                                    return (
                                        <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
                                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner">
                                                <IconComp size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">{item.title}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
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
