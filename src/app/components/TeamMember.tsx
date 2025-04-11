import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TeamMemberProps {
    name: string;
    role: string;
    image?: StaticImageData | string; // Aceita tanto StaticImageData quanto string
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
    return (
        <div className="text-center">
            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                {image ? (
                    <Image
                        src={image}
                        alt={`Foto de ${name}`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>Foto</span>
                    </div>
                )}
            </div>
            <h3 className="text-xl font-bold text-brown-900">{name}</h3>
            <p className="text-gray-600">{role}</p>
        </div>
    );
} 