import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string | StaticImageData;
}

export default function ProductCard({
    name,
    description,
    price,
    imageUrl,
}: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 relative">
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
            <div className="p-6">
                <h3 className="font-bold text-brown-900 text-lg mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-brown-800">{price}</span>
                </div>
            </div>
        </div>
    );
} 