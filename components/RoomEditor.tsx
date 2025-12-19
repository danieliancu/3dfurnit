
'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { Product, PlacedProduct, EditorState, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  Maximize2,
  ShoppingCart,
  X,
  Box,
  Move,
  Armchair,
  Plus,
  Minus,
  Layers,
  RefreshCw,
  Search
} from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': any;
      }
    }
  }
}

interface RoomEditorProps {
  initialProduct?: Product | null;
  onProductConsumed: () => void;
  lang: Language;
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  availableProducts: Product[];
}

interface DragStart {
  mouseX: number;
  mouseY: number;
  productX: number;
  productY: number;
  productScale: number;
  startDist: number;
}

const RoomEditor: React.FC<RoomEditorProps> = ({
  initialProduct,
  onProductConsumed,
  lang,
  state,
  setState,
  availableProducts = []
}) => {
  const t = TRANSLATIONS[lang].editor;

  const [dragMode, setDragMode] = React.useState<'none' | 'move' | 'scale'>('none');
  const [searchTerm, setSearchTerm] = React.useState('');
  const dragStart = useRef<DragStart | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Track processed product ID to prevent double-insertion in Strict Mode
  const processedProductRef = useRef<string | null>(null);

  const filteredCatalog = useMemo(() => {
    return availableProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [availableProducts, searchTerm]);

  const groupedProducts = useMemo(() => {
    return state.placedProducts.reduce((acc, curr) => {
      const existing = acc.find(item => item.product.id === curr.product.id);
      if (existing) {
        existing.count += 1;
        existing.instances.push(curr.instanceId);
      } else {
        acc.push({
          product: curr.product,
          count: 1,
          instances: [curr.instanceId]
        });
      }
      return acc;
    }, [] as { product: Product, count: number, instances: string[] }[]);
  }, [state.placedProducts]);

  const totalPrice = useMemo(() => {
    return state.placedProducts.reduce((sum, p) => sum + p.product.price, 0);
  }, [state.placedProducts]);

  useEffect(() => {
    if (initialProduct && initialProduct.id !== processedProductRef.current) {
      addProductToRoom(initialProduct);
      processedProductRef.current = initialProduct.id;
      onProductConsumed();
    }
  }, [initialProduct]);

  const addProductToRoom = (product: Product) => {
    const instanceId = `inst-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newPlacedProduct: PlacedProduct = {
      instanceId,
      product,
      position: { x: 50, y: 50 },
      scale: 0.8,
      rotation: 0,
      cameraOrbit: "0deg 75deg 105%" // Valoare default pentru vizualizare optimă
    };

    setState(prev => ({
      ...prev,
      placedProducts: [...prev.placedProducts, newPlacedProduct],
      activeInstanceId: instanceId
    }));
  };

  const handleResetScene = () => {
    setState({
      roomImage: null,
      placedProducts: [],
      activeInstanceId: null,
      isProcessing: false,
      error: null
    });
  };

  const handleDownloadScene = async () => {
    if (!containerRef.current) return;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(containerRef.current, {
        backgroundColor: null,
        useCORS: true,
        logging: false,
        scale: 2
      });
      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'scene.jpg';
      link.click();
    } catch (err) {
      console.error('Failed to download scene', err);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(prev => ({
          ...prev,
          roomImage: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };



  const handleRemoveInstance = (instanceId: string) => {
    setState(prev => ({
      ...prev,
      placedProducts: prev.placedProducts.filter(p => p.instanceId !== instanceId),
      activeInstanceId: prev.activeInstanceId === instanceId ? null : prev.activeInstanceId
    }));
  };

  const handleMouseDown = (e: React.MouseEvent, instanceId: string, mode: 'move' | 'scale') => {
    e.stopPropagation();
    if (!containerRef.current) return;

    const instance = state.placedProducts.find(p => p.instanceId === instanceId);
    if (!instance) return;

    setState(prev => ({ ...prev, activeInstanceId: instanceId }));

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = ((e.clientX - rect.left) / rect.width) * 100;
    const currentY = ((e.clientY - rect.top) / rect.height) * 100;

    const dx = currentX - instance.position.x;
    const dy = currentY - instance.position.y;

    dragStart.current = {
      mouseX: currentX,
      mouseY: currentY,
      productX: instance.position.x,
      productY: instance.position.y,
      productScale: instance.scale,
      startDist: Math.sqrt(dx * dx + dy * dy),
    };

    setDragMode(mode);
  };

  // Sincronizarea orientării 3D când utilizatorul rotește produsul
  const handleCameraChange = (e: any, instanceId: string) => {
    const modelViewer = e.target;
    if (!modelViewer) return;

    const orbit = modelViewer.getCameraOrbit();
    const orbitString = `${orbit.theta}rad ${orbit.phi}rad ${orbit.radius}m`;

    setState(prev => ({
      ...prev,
      placedProducts: prev.placedProducts.map(p =>
        p.instanceId === instanceId ? { ...p, cameraOrbit: orbitString } : p
      )
    }));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const start = dragStart.current;
      if (dragMode === 'none' || !containerRef.current || !start || !state.activeInstanceId) return;

      const rect = containerRef.current.getBoundingClientRect();
      const currentMouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const currentMouseY = ((e.clientY - rect.top) / rect.height) * 100;

      setState(prev => {
        const newProducts = prev.placedProducts.map(p => {
          if (p.instanceId !== prev.activeInstanceId) return p;

          if (dragMode === 'move') {
            const deltaX = currentMouseX - start.mouseX;
            const deltaY = currentMouseY - start.mouseY;
            return {
              ...p,
              position: {
                x: Math.max(0, Math.min(100, start.productX + deltaX)),
                y: Math.max(0, Math.min(100, start.productY + deltaY))
              }
            };
          } else if (dragMode === 'scale') {
            const dx = currentMouseX - start.productX;
            const dy = currentMouseY - start.productY;
            const currentDist = Math.sqrt(dx * dx + dy * dy);
            const scaleFactor = currentDist / Math.max(0.1, start.startDist);
            return {
              ...p,
              scale: Math.max(0.1, start.productScale * scaleFactor)
            };
          }
          return p;
        });

        return { ...prev, placedProducts: newProducts };
      });
    };

    const handleMouseUp = () => {
      setDragMode('none');
      dragStart.current = null;
    };

    if (dragMode !== 'none') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragMode, state.activeInstanceId, setState]);

  const activeProduct = state.placedProducts.find(p => p.instanceId === state.activeInstanceId);
  const hasSceneImage = !!state.roomImage;
  const isEmptyState = !state.roomImage && state.placedProducts.length === 0;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Panou Control Lateral */}
        <div className="lg:col-span-4 space-y-6">
          {/* Sursa Foto */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xs font-black text-indigo-600 mb-4 flex items-center gap-2 uppercase tracking-[0.2em]">
              {t.step1}
            </h2>

            <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />

            {!state.roomImage ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-100 rounded-2xl p-10 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition-all group"
              >
                <Upload className="mx-auto w-10 h-10 text-indigo-100 group-hover:text-indigo-400 mb-3" />
                <p className="text-sm font-bold text-gray-700">{t.uploadRoom}</p>
              </div>
            ) : (
              <div className="relative group rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50">
                <img src={state.roomImage} className="w-full h-32 object-cover opacity-90" alt="Camera" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white p-3 rounded-2xl text-indigo-600 shadow-xl hover:scale-110 transition-transform flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                  >
                    <RefreshCw size={14} /> Schimbă Foto
                  </button>
                  <button
                    onClick={() => setState(prev => ({ ...prev, roomImage: null, activeInstanceId: null }))}
                    className="bg-white p-3 rounded-2xl text-red-500 shadow-xl hover:scale-110 transition-transform"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Inventar Scenă */}
          {state.placedProducts.length > 0 && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 animate-in slide-in-from-left duration-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-black text-indigo-600 flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Layers size={14} /> Obiecte în Scenă
                </h2>
                <div className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                  Total: {totalPrice} lei
                </div>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {groupedProducts.map((group) => (
                  <div
                    key={group.product.id}
                    className={`flex items-center gap-4 p-3 rounded-2xl border transition-all cursor-pointer ${state.activeInstanceId && group.instances.includes(state.activeInstanceId)
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                      : 'border-gray-50 bg-gray-50/30 hover:bg-gray-50'
                      }`}
                    onClick={() => setState(prev => ({ ...prev, activeInstanceId: group.instances[group.instances.length - 1] }))}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center p-1 overflow-hidden shrink-0">
                      {group.product.image ? (
                        <img src={group.product.image} className="w-full h-full object-contain" alt={group.product.name} />
                      ) : (
                        <Box size={20} className="text-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[10px] font-black text-gray-900 break-words uppercase flex-1">{group.product.name}</p>
                        {group.count > 1 && (
                          <span className="bg-indigo-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md shrink-0">
                            x{group.count}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-bold text-indigo-600 mt-0.5">{group.product.price * group.count} lei</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveInstance(group.instances[group.instances.length - 1]);
                        }}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addProductToRoom(group.product);
                        }}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Placeholder for Add to Cart logic
                          alert(`Adăugat ${group.product.name} în coș!`);
                        }}
                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title={t.addToCart}
                      >
                        <ShoppingCart size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          )}



          {/* Catalog Produse */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-[500px]">
            <h2 className="text-xs font-black text-indigo-600 mb-4 flex items-center gap-2 uppercase tracking-[0.2em]">
              {t.step2}
            </h2>

            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Caută produse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 overflow-y-auto pr-2 custom-scrollbar flex-1 content-start p-2">
              {filteredCatalog.map(product => (
                <div
                  key={product.id}
                  onClick={() => addProductToRoom(product)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden border-2 transition-all p-2 bg-white flex flex-col items-center justify-between h-40 group border-gray-50 hover:border-indigo-200 hover:shadow-lg active:scale-95"
                >
                  <div className="flex-1 w-full flex items-center justify-center overflow-hidden pointer-events-none">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-[85%] max-h-[85%] object-contain drop-shadow-sm group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <Box size={32} className="text-gray-200" />
                    )}
                  </div>
                  <div className="w-full text-center mt-2 flex items-center justify-between px-1">
                    <p className="text-[9px] font-black text-gray-900 leading-tight break-words uppercase flex-1 line-clamp-2 md:line-clamp-1">{product.name}</p>
                    <Plus size={10} className="text-indigo-600 shrink-0 ml-1" />
                  </div>
                </div>
              ))}

              {filteredCatalog.length === 0 && (
                <div className="col-span-2 text-center py-10 text-gray-400 text-xs font-medium">
                  Nu am găsit produse.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Zona de Afișare Centrală */}
        <div className="lg:col-span-8 flex flex-col h-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
            <div className="px-8 pt-8 border-b border-gray-50 flex items-center justify-between bg-white/90 backdrop-blur-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  <Armchair className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 uppercase tracking-tighter text-sm">{t.studioTitle}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Multi-Object Real-Time Editor</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetScene}
                  className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-2 rounded-xl uppercase tracking-widest hover:bg-indigo-100 active:scale-95 transition-all"
                >
                  Reset
                </button>
                <button
                  onClick={handleDownloadScene}
                  className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-2 rounded-xl uppercase tracking-widest hover:bg-indigo-100 active:scale-95 transition-all"
                >
                  Download
                </button>
              </div>
            </div>

            <div
              ref={containerRef}
              className={`relative bg-gray-50/50 flex ${hasSceneImage ? 'items-start' : 'items-center'} justify-center overflow-hidden min-h-[380px] md:min-h-[520px]`}
              onClick={() => setState(prev => ({ ...prev, activeInstanceId: null }))}
            >
              <div className={`relative w-full flex ${hasSceneImage ? 'items-start' : 'items-center'} justify-center p-6 md:p-8`}>
                {!state.roomImage ? (
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#6366f1 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
                ) : (
                  <img
                    src={state.roomImage}
                    className="max-w-full max-h-full object-contain rounded-[2rem] shadow-2xl pointer-events-none select-none"
                    alt="Background"
                  />
                )}

                {isEmptyState && (
                  <div className="text-center p-12 relative z-10">
                    <ImageIcon className="text-indigo-100 w-16 h-16 mx-auto mb-4" />
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">{t.uploadRoom}</p>
                  </div>
                )}

                {state.placedProducts.map((placed) => {
                  const isActive = state.activeInstanceId === placed.instanceId;
                  const invScale = 1 / Math.max(0.01, placed.scale);

                  return (
                    <div
                      key={placed.instanceId}
                      className={`absolute ${isActive ? 'z-50' : 'z-40'}`}
                      style={{
                        left: `${placed.position.x}%`,
                        top: `${placed.position.y}%`,
                        transform: `translate(-50%, -50%) scale(${placed.scale})`,
                        width: '400px',
                        height: '400px',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setState(prev => ({ ...prev, activeInstanceId: placed.instanceId }));
                      }}
                    >
                      <div className={`relative w-full h-full transition-all rounded-3xl ${isActive ? 'bg-indigo-500/5 ring-4 ring-indigo-500 shadow-2xl' : 'hover:ring-2 hover:ring-indigo-300'}`}>

                        {/* @ts-ignore - model-viewer specific */}
                        <model-viewer
                          src={placed.product.glbModel}
                          alt={placed.product.name}
                          camera-controls={isActive ? true : undefined}
                          interaction-prompt="none"
                          shadow-intensity="1.5"
                          shadow-softness="1"
                          environment-image="neutral"
                          exposure="1"
                          camera-orbit={placed.cameraOrbit}
                          onCameraChange={(e: any) => handleCameraChange(e, placed.instanceId)}
                          style={{
                            width: '100%',
                            height: '100%',
                            cursor: isActive ? 'grab' : 'pointer',
                            background: 'transparent'
                          }}
                        ></model-viewer>

                        {isActive && (
                          <>
                            <button
                              className="bg-red-500 text-white hover:bg-red-600 active:scale-90 transition-all shadow-xl"
                              style={{
                                transform: `scale(${invScale})`,
                                width: '40px', height: '40px', borderRadius: '12px',
                                position: 'absolute', top: '-20px', left: '-20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveInstance(placed.instanceId);
                              }}
                            >
                              <X size={20} strokeWidth={3} className="m-auto" />
                            </button>

                            <div
                              className="bg-indigo-600 text-white hover:bg-indigo-700 cursor-move active:scale-95 transition-all shadow-xl"
                              style={{
                                transform: `scale(${invScale})`,
                                width: '40px', height: '40px', borderRadius: '12px',
                                position: 'absolute', top: '-20px', right: '-20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                              }}
                              onMouseDown={(e) => handleMouseDown(e, placed.instanceId, 'move')}
                            >
                              <Move size={20} strokeWidth={3} className="m-auto" />
                            </div>

                            <div
                              className="bg-indigo-600 text-white hover:bg-indigo-700 cursor-nwse-resize active:scale-95 transition-all shadow-xl"
                              style={{
                                transform: `scale(${invScale})`,
                                width: '40px', height: '40px', borderRadius: '12px',
                                position: 'absolute', bottom: '-20px', right: '-20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                              }}
                              onMouseDown={(e) => handleMouseDown(e, placed.instanceId, 'scale')}
                            >
                              <Maximize2 size={20} strokeWidth={3} className="m-auto" />
                            </div>

                            {/* Dimensions Badge */}
                            {placed.product.dimensions && (
                              <div
                                className="absolute -right-[140px] top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white/50 animate-in fade-in slide-in-from-left-4 duration-300 pointer-events-none select-none z-[1001]"
                                style={{ transform: `scale(${invScale})` }}
                              >
                                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-100 pb-1">{t.dimensions}</h4>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                    <p className="text-xs font-bold text-gray-700">L: {placed.product.dimensions.width} cm</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                    <p className="text-xs font-bold text-gray-700">H: {placed.product.dimensions.height} cm</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                    <p className="text-xs font-bold text-gray-700">A: {placed.product.dimensions.depth} cm</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div >
  );
};

export default RoomEditor;
