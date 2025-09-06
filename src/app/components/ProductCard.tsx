import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { HiShoppingCart } from 'react-icons/hi2';

export interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string | StaticImageData;
    isMobile?: boolean;
}

export default function ProductCard({
    name,
    description,
    price,
    imageUrl,
    isMobile = false,
}: ProductCardProps) {
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
                        <button className="bg-amber-500 text-white px-3 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2">
                            <HiShoppingCart className="w-4 h-4" />
                            <span className="text-sm font-medium">Adicionar</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
} 