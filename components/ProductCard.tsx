
'use client';

import React from 'react';
import { Product, Language } from '../types';
import { Plus, Maximize2 } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  lang: Language;
  onExpand: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, lang, onExpand }) => {
  const t = TRANSLATIONS[lang];
  const isAutoDetected =
    product.description === 'Item automatically detected from library.' ||
    product.description?.startsWith('Available for the demo simulation');
  const descriptionText = isAutoDetected ? t.catalog.autoDetectedDescription : product.description;

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col p-4">
      <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-[2rem] flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: '', backgroundSize: '16px 16px' }}></div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          style={{ mixBlendMode: "multiply" }}
        />

        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest text-white shadow-lg">
            {product.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand(product);
            }}
            className="bg-white p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 pointer-events-auto hover:bg-gray-50 active:scale-90"
          >
            <Maximize2 size={24} className="text-indigo-600" />
          </button>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight tracking-tight uppercase">{product.name}</h3>
        <p className="text-sm text-gray-400 font-medium line-clamp-2 mb-6">
          {descriptionText}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t.common.price}</p>
            <span className="text-2xl font-black text-indigo-600">{product.price} lei</span>
          </div>
          <button
            onClick={() => onSelect(product)}
            className="bg-indigo-600 text-white p-4 rounded-2xl hover:bg-indigo-700 transition-all active:scale-90 shadow-xl shadow-indigo-100"
            title="Vezi în camera ta"
          >
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
