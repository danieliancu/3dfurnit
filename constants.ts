
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Fotoliu Scandinav Premium',
    category: 'chairs',
    price: 1100,
    image: '/images/chairs/chair.png',
    glbModel: '/models/chairs/chair.glb',
    description: 'Un fotoliu minimalist cu linii ergonomice, ideal pentru spații moderne și confortabile.',
    dateAdded: '2023-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: 'Masă Futuristă Astra',
    category: 'tables',
    price: 2400,
    image: '/images/tables/table.png',
    glbModel: '/models/tables/table.glb',
    description: 'O piesă de design centrală care transformă orice living într-un spațiu de avangardă.',
    dateAdded: '2023-02-15T00:00:00.000Z'
  },
  {
    id: '3',
    name: 'Lampă Industrială Tech',
    category: 'lamps',
    price: 320,
    image: '/images/lamps/lamp.png',
    glbModel: '/models/lamps/lamp.glb',
    description: 'Iluminat inteligent cu aspect vintage, perfect pentru birouri sau zone de lectură.',
    dateAdded: '2023-03-10T00:00:00.000Z'
  },
  {
    id: '4',
    name: 'Pat Matrimonial Royal',
    category: 'beds',
    price: 4500,
    image: '/images/beds/bed.png',
    glbModel: '/models/beds/bed.glb',
    description: 'Confort regal pentru dormitorul tău, cu tapițerie premium și structură solidă.',
    dateAdded: '2023-04-05T00:00:00.000Z'
  },
  {
    id: '5',
    name: 'Dulap Minimalist',
    category: 'cabinets',
    price: 1800,
    image: '/images/cabinets/cabinet.png',
    glbModel: '/models/cabinets/cabinet.glb',
    description: 'Organizare eficientă într-un design compact și modern.',
    dateAdded: '2023-05-20T00:00:00.000Z'
  }
];

export const PRICING_PLANS = [
  {
    id: 'monthly',
    name: 'Lunar',
    price: '299€',
    period: '/ lună',
    features: [
      'Conversie 3D Automată (până la 50 produse)',
      'Vizualizare AR (Realitate Augmentată) direct în browser',
      'Integrare 1-Click (Shopify, WooCommerce)',
      'Suport tehnic prin email (24h)',
      'Dashboard Analytics de bază',
      'Gazduire modele 3D pe serverele noastre ultra-rapide',
      'Update-uri de securitate incluse'
    ],
    highlight: false
  },
  {
    id: 'quarterly',
    name: 'Trimestrial',
    price: '799€',
    period: '/ 3 luni',
    features: [
      'Tot ce include planul LUNAR',
      'Conversie 3D Automată (până la 200 produse)',
      'AI Room Rendering Pro (calitate superioară)',
      'Branding personalizat (Custom UI)',
      'Suport Priority & Setup Asistat',
      'Advanced Analytics (Heatmaps & User Journey)',
      'Optimizare SEO pentru obiecte 3D',
      'Economisești 10% față de plata lunară'
    ],
    highlight: true,
    badge: 'CEL MAI POPULAR'
  },
  {
    id: 'annual',
    name: 'Anual',
    price: '2499€',
    period: '/ an',
    features: [
      'Tot ce include planul TRIMESTRIAL',
      'Număr NELIMITAT de produse convertite',
      'Manager de cont dedicat (VIP Support)',
      'Acces API complet pentru integrări custom',
      'Training pentru echipa de vânzări/marketing',
      'White-label Full (fără watermark 3dFurnit)',
      'Backup-uri zilnice și SLA garantat 99.9%',
      'Economisești peste 30% față de plata lunară'
    ],
    highlight: false
  }
];

const sharedHome = {
  stats: { auto: '100% Automatizat', conv: '+40% Conversie', integ: '1-Click Integrare' }
};

export const TRANSLATIONS = {
  ro: {
    nav: { home: 'Acasă', features: 'Funcționalități', pricing: 'Prețuri', store: 'Catalog Produse', contact: 'Contact', demo: 'Demo Live' },
    home: {
      badge: 'VIITORUL E-COMMERCE-ULUI DE MOBILĂ',
      heroTitle: 'Transformă-ți magazinul într-o ',
      heroTitleGradient: 'experiență imersivă',
      heroSubtitle: '3dFurnit.com oferă soluții ultra-rapide pentru site-urile de mobilă. Clienții tăi pot vizualiza produsele tale direct în casa lor, la dimensiune reală, eliminând orice dubiu înainte de cumpărare.',
      btnTry: 'Testează Demo',
      btnCatalog: 'Catalog Produse',
      stats: { auto: '100% Automatizat', conv: '+40% Conversie', integ: '1-Click Integrare' },
      stepsTitle: 'Cum funcționează?',
      step1Title: 'Integrare 1-Click',
      step1Desc: 'Fără cod complicat. Ne conectăm la platforma ta (Shopify, Woo, Custom) instantaneu.',
      step2Title: 'Conversie Automată',
      step2Desc: 'Produsele tale sunt convertite în modele 3D de înaltă fidelitate fără niciun efort din partea ta.',
      step3Title: 'Clienți Fericiți',
      step3Desc: 'Vizualizarea în propria casă reduce retururile și crește rata de finalizare a comenzii.',
      ctaTitle: 'Ești gata să schimbi regulile jocului?',
      ctaDesc: 'Alătură-te sutelor de branduri care folosesc 3dFurnit pentru a domina piața online.',
      features: {
        noCode: { title: 'Fără programare', desc: 'Integrare plug-and-play în site-ul tău existent, fără a scrie o singură linie de cod.' },
        autoGlb: { title: 'Conversie magică', desc: 'Sistemul nostru transformă automat fotografiile de catalog în obiecte 3D interactive.' },
        analytics: { title: 'Date inteligente', desc: 'Află exact ce produse probează clienții tăi și ce unghiuri îi conving să cumpere.' },
        mobile: { title: 'Mobile first', desc: 'Experiență ultra-fluidă pe orice smartphone, direct din browser, fără aplicație.' }
      },
      journeyTitle: 'Experiența Clientului Tău',
      pricingTitle: 'Investiție în Conversie',
      pricingSubtitle: 'Alege planul care se potrivește dimensiunii afacerii tale. Fără costuri ascunse, doar performanță.',
      journey: [
        { title: 'Surpriză', desc: 'Clientul intră în magazin și vede butonul de vizualizare 3D.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Captură', desc: 'Face o poză rapidă camerei sale direct cu telefonul.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Magie', desc: 'Alege produsul și acesta apare instant pe ecran, în camera lui.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Potrivire', desc: 'Îl mișcă, îl rotește și vede exact dacă încape lângă canapea.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Finalizare', desc: 'Adaugă în coș cu zero dubii. Retururile dispar, vânzările cresc.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    catalog: {
      title: 'Catalog Produse',
      subtitle: 'Alege un produs pentru a experimenta puterea vizualizării 3D în timp real.',
      search: 'Caută în magazin...',
      filters: 'Filtrează',
      noResults: 'Nu am găsit produse.',
      autoDetectedDescription: 'Disponibil pentru simularea demo - adauga produsul apasand butonul +.',
      sort: {
        priceAsc: 'Preț: Mic la Mare',
        priceDesc: 'Preț: Mare la Mic',
        nameAsc: 'Nume: A-Z',
        nameDesc: 'Nume: Z-A',
        dateNew: 'Cele mai noi',
        dateOld: 'Cele mai vechi'
      }
    },
    editor: { step1: 'PASUL 1: CAMERA TA', uploadRoom: 'Încarcă poza camerei tale', step2: 'PASUL 2: CATALOGUL TĂU', catalogTitle: 'Catalogul tău', inventory: 'Listă produse', emptyInventory: 'Niciun produs adăugat încă', uploadPhoto: 'Încarcă fundal', changePhoto: 'Schimbă fundal', uploadGlb: 'Încarcă GLB', visualize: 'Vizualizează', studioTitle: 'Numele tău aici', studioDesc: 'Control manual 3D', loading3d: 'Se încarcă...', rotationActive: 'Rotire activă', addToCart: 'Adaugă în Coș', addedToCart: 'Adăugat în Coș', customProduct: 'Produs Personalizat', dimensions: 'Dimensiuni' },
    common: { price: 'Preț', buyNow: 'Cumpără acum', getStarted: 'Începe acum', contactUs: 'Contactează-ne' }
  },
  en: {
    nav: { home: 'Home', features: 'Features', pricing: 'Pricing', store: 'Product Catalog', contact: 'Contact', demo: 'Live Demo' },
    home: {
      badge: 'THE FUTURE OF FURNITURE E-COMMERCE',
      heroTitle: 'Transform your store into an ',
      heroTitleGradient: 'immersive experience',
      heroSubtitle: '3dFurnit.com provides ultra-fast solutions. Your customers can visualize products in their home, at real scale, removing all doubts.',
      btnTry: 'Test Demo',
      btnCatalog: 'Product Catalog',
      stats: { auto: '100% Automated', conv: '+40% Conversion', integ: '1-Click Integration' },
      stepsTitle: 'How it works?',
      step1Title: '1-Click Integration',
      step1Desc: 'Connect to Shopify, Woo or Custom instantly.',
      step2Title: 'Automatic Conversion',
      step2Desc: 'Photos are turned into high-fidelity 3D assets.',
      step3Title: 'Happy Customers',
      step3Desc: 'Visualization reduces returns and boosts sales.',
      ctaTitle: 'Ready to change the game?',
      ctaDesc: 'Join hundreds of brands using 3dFurnit.',
      features: {
        noCode: { title: 'No Coding', desc: 'Plug-and-play integration for your store.' },
        autoGlb: { title: 'Magic Conversion', desc: 'Turn photos into interactive 3D objects.' },
        analytics: { title: 'Smart Insights', desc: 'Track what products drive more conversions.' },
        mobile: { title: 'Mobile First', desc: 'Ultra-smooth experience on any smartphone.' }
      },
      journeyTitle: 'Customer Experience',
      pricingTitle: 'Investment in Conversion',
      pricingSubtitle: 'Choose the plan that fits your business.',
      journey: [
        { title: 'Surprise', desc: 'Customer sees the 3D view button.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Capture', desc: 'Takes a photo of their room.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Magic', desc: 'Product appears instantly on screen.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Fitting', desc: 'Rotates it and checks if it fits.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Finalization', desc: 'Adds to cart with zero doubts.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    catalog: {
      title: 'Product Catalog',
      subtitle: 'Experience real-time 3D visualization.',
      search: 'Search...',
      filters: 'Filter',
      noResults: 'No results.',
      autoDetectedDescription: 'Available for the demo simulation - add this product by pressing the + button.',
      sort: {
        priceAsc: 'Price: Low to High',
        priceDesc: 'Price: High to Low',
        nameAsc: 'Name: A-Z',
        nameDesc: 'Name: Z-A',
        dateNew: 'Newest',
        dateOld: 'Oldest'
      }
    },
    editor: { step1: 'STEP 1: ROOM', uploadRoom: 'Upload room photo', step2: 'STEP 2: CATALOG', catalogTitle: 'Catalog', inventory: 'Listă produse', emptyInventory: 'No items yet', uploadPhoto: 'Upload background', changePhoto: 'Change background', uploadGlb: 'Upload GLB', visualize: 'Visualize', studioTitle: 'Your Name Here', studioDesc: 'Manual 3D Control', loading3d: 'Loading...', rotationActive: 'Rotation active', addToCart: 'Add to Cart', addedToCart: 'Added to Cart', customProduct: 'Custom Product', dimensions: 'Dimensions' },
    common: { price: 'Price', buyNow: 'Buy now', getStarted: 'Get started', contactUs: 'Contact Us' }
  },
  fr: {
    nav: { home: 'Accueil', features: 'Fonctionnalités', pricing: 'Prix', store: 'Catalogue Produits', contact: 'Contact', demo: 'Démo Live' },
    home: {
      badge: "L'AVENIR DU E-COMMERCE DE MEUBLES",
      heroTitle: 'Transformez votre magasin en une ',
      heroTitleGradient: 'expérience immersive',
      heroSubtitle: '3dFurnit.com propose des solutions ultra-rapides. Vos clients visualisent les produits chez eux, à l’échelle réelle.',
      btnTry: 'Tester la Démo',
      btnCatalog: 'Catalogue Produits',
      stats: { auto: '100% Automatisé', conv: '+40% Conversion', integ: 'Intégration 1-Click' },
      stepsTitle: 'Comment ça marche?',
      step1Title: 'Intégration 1-Click',
      step1Desc: 'Connectez-vous instantanément à Shopify ou Woo.',
      step2Title: 'Conversion Automatique',
      step2Desc: 'Vos photos deviennent des objets 3D haute fidélité.',
      step3Title: 'Clients Heureux',
      step3Desc: 'La visualisation réduit les retours et booste les ventes.',
      ctaTitle: 'Prêt à changer les règles?',
      ctaDesc: 'Rejoignez des centaines de marques utilisant 3dFurnit.',
      features: {
        noCode: { title: 'Sans Code', desc: 'Intégration plug-and-play pour votre site.' },
        autoGlb: { title: 'Conversion Magique', desc: 'Transformez vos photos en objets 3D.' },
        analytics: { title: 'Données Intelligentes', desc: 'Suivez les produits qui convertissent le mieux.' },
        mobile: { title: 'Mobile First', desc: 'Expérience fluide sur tout smartphone.' }
      },
      journeyTitle: 'Expérience Client',
      pricingTitle: 'Investissement Conversion',
      pricingSubtitle: 'Choisissez le plan adapté à votre entreprise.',
      journey: [
        { title: 'Surprise', desc: 'Le client voit le bouton de vue 3D.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Capture', desc: 'Prend une photo de sa pièce.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Magie', desc: 'Le produit apparaît instantanément.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Adaptation', desc: 'Le fait pivoter et vérifie s’il s’adapte.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Finalisation', desc: 'Ajoute au panier sans aucun doute.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    catalog: {
      title: 'Catalogue Produits',
      subtitle: 'Découvrez la visualisation 3D en temps réel.',
      search: 'Chercher...',
      filters: 'Filtres',
      noResults: 'Aucun résultat.',
      autoDetectedDescription: 'Disponible pour la simulation demo - ajoutez ce produit en appuyant sur +.',
      sort: {
        priceAsc: 'Prix: Croissant',
        priceDesc: 'Prix: Décroissant',
        nameAsc: 'Nom: A-Z',
        nameDesc: 'Nom: Z-A',
        dateNew: 'Plus récents',
        dateOld: 'Plus anciens'
      }
    },
    editor: { step1: 'ÉTAPE 1: PIÈCE', uploadRoom: 'Charger photo de pièce', step2: 'ÉTAPE 2: CATALOGUE', catalogTitle: 'Catalogue', inventory: 'Listă produse', emptyInventory: 'Aucun article pour l’instant', uploadPhoto: 'Charger fond', changePhoto: 'Changer le fond', uploadGlb: 'Charger GLB', visualize: 'Visualiser', studioTitle: 'Votre Nom Ici', studioDesc: 'Contrôle 3D Manuel', loading3d: 'Chargement...', rotationActive: 'Rotation active', addToCart: 'Ajouter au Panier', addedToCart: 'Ajouté au Panier', customProduct: 'Produit Personnalisé', dimensions: 'Dimensions' },
    common: { price: 'Prix', buyNow: 'Acheter', getStarted: 'Démarrer', contactUs: 'Contactez-nous' }
  },
  de: {
    nav: { home: 'Startseite', features: 'Funktionen', pricing: 'Preise', store: 'Produktkatalog', contact: 'Kontakt', demo: 'Live-Demo' },
    home: {
      badge: 'DIE ZUKUNFT DES MÖBEL-E-COMMERCE',
      heroTitle: 'Verwandeln Sie Ihren Shop in ein ',
      heroTitleGradient: 'immersives Erlebnis',
      heroSubtitle: '3dFurnit.com bietet ultraschnelle Lösungen. Ihre Kunden visualisieren Produkte direkt in ihrem Zuhause, in echter Größe.',
      btnTry: 'Demo testen',
      btnCatalog: 'Produktkatalog',
      stats: { auto: '100% Automatisiert', conv: '+40% Konversion', integ: '1-Klick Integration' },
      stepsTitle: 'Wie es funktioniert?',
      step1Title: '1-Klick Integration',
      step1Desc: 'Sofortige Verbindung zu Shopify, Woo oder Custom.',
      step2Title: 'Automatische Konvertierung',
      step2Desc: 'Fotos werden in hochwertige 3D-Modelle umgewandelt.',
      step3Title: 'Glückliche Kunden',
      step3Desc: 'Visualisierung reduziert Retouren und steigert den Umsatz.',
      ctaTitle: 'Bereit, die Regeln zu ändern?',
      ctaDesc: 'Schließen Sie sich Hunderten von Marken an.',
      features: {
        noCode: { title: 'Kein Coding', desc: 'Plug-and-Play-Integration für Ihren Shop.' },
        autoGlb: { title: 'Magische Konvertierung', desc: 'Verwandeln Sie Fotos in 3D-Objekte.' },
        analytics: { title: 'Smarte Einblicke', desc: 'Verfolgen Sie, welche Produkte am besten konvertieren.' },
        mobile: { title: 'Mobile First', desc: 'Nahtloses Erlebnis auf jedem Smartphone.' }
      },
      journeyTitle: 'Kundenerlebnis',
      pricingTitle: 'Investition in Konversion',
      pricingSubtitle: 'Wählen Sie den Plan, der zu Ihrem Unternehmen passt.',
      journey: [
        { title: 'Überraschung', desc: 'Der Kunde sieht den 3D-Ansicht-Button.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Aufnahme', desc: 'Macht ein Foto seines Zimmers.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Magie', desc: 'Das Produkt erscheint sofort auf dem Bildschirm.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Anpassung', desc: 'Dreht es und prüft, ob es passt.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Abschluss', desc: 'Legt es ohne Zweifel in den Warenkorb.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    catalog: {
      title: 'Produktkatalog',
      subtitle: 'Erleben Sie 3D-Visualisierung in Echtzeit.',
      search: 'Suche...',
      filters: 'Filter',
      noResults: 'Keine Ergebnisse.',
      autoDetectedDescription: 'Verfugbar fur die Demo-Simulation - fugen Sie dieses Produkt uber die Taste + hinzu.',
      sort: {
        priceAsc: 'Preis: Aufsteigend',
        priceDesc: 'Preis: Absteigend',
        nameAsc: 'Name: A-Z',
        nameDesc: 'Name: Z-A',
        dateNew: 'Neueste',
        dateOld: 'Älteste'
      }
    },
    editor: { step1: 'SCHRITT 1: RAUM', uploadRoom: 'Raumfoto hochladen', step2: 'SCHRITT 2: KATALOG', catalogTitle: 'Katalog', inventory: 'Listă produse', emptyInventory: 'Noch keine Artikel', uploadPhoto: 'Hintergrund hochladen', changePhoto: 'Hintergrund ändern', uploadGlb: 'GLB hochladen', visualize: 'Visualisieren', studioTitle: 'Dein Name', studioDesc: 'Manuelle 3D-Steuerung', loading3d: 'Laden...', rotationActive: 'Drehung aktiv', addToCart: 'In den Warenkorb', addedToCart: 'Zum Warenkorb hinzugefügt', customProduct: 'Individuelles Produkt', dimensions: 'Maße' },
    common: { price: 'Preis', buyNow: 'Jetzt kaufen', getStarted: 'Jetzt starten', contactUs: 'Kontaktieren Sie uns' }
  },
  es: {
    nav: { home: 'Inicio', features: 'Funcionalidades', pricing: 'Precios', store: 'Catálogo de productos', contact: 'Contacto', demo: 'Demo en vivo' },
    home: {
      badge: 'EL FUTURO DEL E-COMMERCE DE MUEBLES',
      heroTitle: 'Transforma tu tienda en una ',
      heroTitleGradient: 'experiencia inmersiva',
      heroSubtitle: '3dFurnit.com ofrece soluciones ultra rápidas. Tus clientes visualizan los productos en su hogar, a escala real.',
      btnTry: 'Probar Demo',
      btnCatalog: 'Catálogo de productos',
      stats: { auto: '100% Automatizado', conv: '+40% Conversión', integ: 'Integración 1-Click' },
      stepsTitle: '¿Cómo funciona?',
      step1Title: 'Integración 1-Click',
      step1Desc: 'Conéctate a Shopify, Woo o Custom al instante.',
      step2Title: 'Conversión Automática',
      step2Desc: 'Tus fotos se convierten en activos 3D de alta fidelidad.',
      step3Title: 'Clientes Felices',
      step3Desc: 'La visualización reduce las devoluciones y aumenta las ventas.',
      ctaTitle: '¿Listo para cambiar las reglas?',
      ctaDesc: 'Únete a cientos de marcas que usan 3dFurnit.',
      features: {
        noCode: { title: 'Sin Código', desc: 'Integración plug-and-play para tu tienda.' },
        autoGlb: { title: 'Conversión Mágica', desc: 'Convierte fotos en objetos 3D interactivos.' },
        analytics: { title: 'Datos Inteligentes', desc: 'Rastrea qué productos generan más conversiones.' },
        mobile: { title: 'Mobile First', desc: 'Experiencia fluida en cualquier smartphone.' }
      },
      journeyTitle: 'Experiencia del Cliente',
      pricingTitle: 'Inversión en Conversión',
      pricingSubtitle: 'Elige el plan que se adapte a tu negocio.',
      journey: [
        { title: 'Sorpresa', desc: 'El cliente ve el botón de vista 3D.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Captura', desc: 'Toma una foto de su habitación.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Magia', desc: 'El producto aparece al instante en pantalla.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Ajuste', desc: 'Lo gira y comprueba si encaja.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Finalización', desc: 'Añade al carrito sin ninguna duda.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    catalog: {
      title: 'Catálogo de productos',
      subtitle: 'Experimenta la visualización 3D en tiempo real.',
      search: 'Buscar...',
      filters: 'Filtros',
      noResults: 'Sin resultados.',
      autoDetectedDescription: 'Disponible para la simulacion demo - anade este producto pulsando +.',
      sort: {
        priceAsc: 'Precio: Menor a Mayor',
        priceDesc: 'Precio: Mayor a Menor',
        nameAsc: 'Nombre: A-Z',
        nameDesc: 'Nombre: Z-A',
        dateNew: 'Más recientes',
        dateOld: 'Más antiguos'
      }
    },
    editor: { step1: 'PASO 1: HABITACIÓN', uploadRoom: 'Subir foto de habitación', step2: 'PASO 2: CATÁLOGO', catalogTitle: 'Catálogo', inventory: 'Listă produse', emptyInventory: 'Sin artículos aún', uploadPhoto: 'Subir fondo', changePhoto: 'Cambiar fondo', uploadGlb: 'Subir GLB', visualize: 'Visualizar', studioTitle: 'Tu Nombre', studioDesc: 'Control 3D Manual', loading3d: 'Cargando...', rotationActive: 'Rotación activa', addToCart: 'Añadir al Carrito', addedToCart: 'Añadido al Carrito', customProduct: 'Producto Personalizado', dimensions: 'Dimensiones' },
    common: { price: 'Precio', buyNow: 'Comprar ahora', getStarted: 'Empezar ahora', contactUs: 'Contáctanos' }
  }
};
