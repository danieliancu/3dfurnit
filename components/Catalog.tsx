
'use client';

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';
import { Product, Language } from '../types';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';

interface CatalogProps {
  onSelectProduct: (product: Product) => void;
  lang: Language;
}

const Catalog: React.FC<CatalogProps> = ({ onSelectProduct, lang }) => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('dateNew');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const t = TRANSLATIONS[lang].catalog;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedProduct, setExpandedProduct] = useState<Product | null>(null);

  // Fetch products on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (e) {
        console.error("Failed to fetch products", e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'priceAsc': return a.price - b.price;
      case 'priceDesc': return b.price - a.price;
      case 'nameAsc': return a.name.localeCompare(b.name);
      case 'nameDesc': return b.name.localeCompare(a.name);
      case 'dateNew': return new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime(); // Fallback for safety
      case 'dateOld': return new Date(a.dateAdded || 0).getTime() - new Date(b.dateAdded || 0).getTime();
      default: return 0;
    }
  });

  const categories = [
    { id: 'all', label: lang === 'ro' ? 'Toate' : 'All' },
    { id: 'beds', label: lang === 'ro' ? 'Paturi' : 'Beds' },
    { id: 'chairs', label: lang === 'ro' ? 'Scaune' : 'Chairs' },
    { id: 'lamps', label: lang === 'ro' ? 'Lămpi' : 'Lamps' },
    { id: 'cabinets', label: lang === 'ro' ? 'Dulapuri' : 'Cabinets' },
    { id: 'tables', label: lang === 'ro' ? 'Mese' : 'Tables' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase mb-4">{t.title}</h1>
          <p className="text-gray-500 font-medium max-w-xl text-lg">{t.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group flex-1 sm:w-80">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-[1.5rem] border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all bg-white font-medium shadow-sm"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-100 rounded-[1.5rem] hover:bg-gray-50 transition-all font-bold text-gray-700 shadow-sm active:scale-95"
            >
              <SlidersHorizontal size={20} /> {t.filters}
            </button>

            {/* Sort Menu */}
            {showSortMenu && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-20 animate-in fade-in slide-in-from-top-2">
                {[
                  { id: 'priceAsc', label: t.sort.priceAsc },
                  { id: 'priceDesc', label: t.sort.priceDesc },
                  { id: 'nameAsc', label: t.sort.nameAsc },
                  { id: 'nameDesc', label: t.sort.nameDesc },
                  { id: 'dateNew', label: t.sort.dateNew },
                  { id: 'dateOld', label: t.sort.dateOld },
                ].map(option => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${sortBy === option.id ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50 text-gray-700'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${filter === cat.id
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100'
              : 'bg-white text-gray-400 border-gray-50 hover:border-indigo-200 hover:text-indigo-600'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        {loading ? (
          <div className="col-span-full py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-400 font-medium">Se încarcă catalogul...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              lang={lang}
              onExpand={(p) => setExpandedProduct(p)}
            />
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search className="text-gray-200" size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">{t.noResults}</h3>
          </div>
        )}
      </div>
      {/* Lightbox / Modal */}
      {expandedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setExpandedProduct(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-[2rem] overflow-hidden p-2 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedProduct(null)}
              className="absolute top-6 right-6 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full backdrop-blur-md shadow-lg transition-all hover:scale-110"
            >
              <X size={24} />
            </button>

            <div className="w-full h-full flex flex-col">
              <div className="flex-1 bg-gray-50 rounded-[1.5rem] flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                <img
                  src={expandedProduct.image}
                  alt={expandedProduct.name}
                  className="max-w-full max-h-[75vh] object-contain drop-shadow-2xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{expandedProduct.name}</h3>
                <p className="text-indigo-600 font-bold text-xl mt-2">{expandedProduct.price} lei</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
