"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { HiShoppingCart } from 'react-icons/hi2';
import { useCartStore } from '../../store/useCartStore';

export interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string | StaticImageData;
    isMobile?: boolean;
}

export default function ProductCard({
    id,
    name,
    description,
    price,
    imageUrl,
    isMobile = false,
}: ProductCardProps) {
    const { addItem, increase, decrease, removeItem, items } = useCartStore();
    const currentQuantity = items.find((i) => i.id === id)?.quantity ?? 0;
    const resolvedImageUrl = typeof imageUrl === 'string' ? imageUrl : imageUrl.src;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className={`bg-gray-200 relative ${isMobile ? 'h-48' : 'h-64'}`}>
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span>Imagem do Produto</span>
                    </div>
                )}
            </div>
            <div className={isMobile ? 'p-4' : 'p-6'}>
                <h3 className={`font-bold text-brown-900 mb-2 ${isMobile ? 'text-base' : 'text-lg'}`}>{name}</h3>
                <p className={`text-gray-600 mb-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>{description}</p>
                <div className="flex items-center justify-between">
                    <span className={`font-bold text-brown-800 ${isMobile ? 'text-sm' : 'text-base'}`}>{price}</span>
                    {isMobile && (
                        currentQuantity > 0 ? (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decrease(id)}
                                    aria-label="Diminuir"
                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    −
                                </button>
                                <span className="w-6 text-center text-sm font-medium">{currentQuantity}</span>
                                <button
                                    onClick={() => increase(id)}
                                    aria-label="Aumentar"
                                    className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => removeItem(id)}
                                    aria-label="Remover"
                                    className="ml-1 p-2 text-red-500 hover:text-red-700"
                                >
                                    ×
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => addItem({ id, name, price, imageUrl: resolvedImageUrl })}
                                className="bg-amber-500 text-white px-3 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2"
                            >
                                <HiShoppingCart className="w-4 h-4" />
                                <span className="text-sm font-medium">Adicionar</span>
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
} 