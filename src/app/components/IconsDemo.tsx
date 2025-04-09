'use client';

import { useState } from 'react';

// Font Awesome Icons
import { FaCoffee, FaUtensils, FaCookie, FaCar, FaHome, FaUser, FaCalendar, FaClock } from 'react-icons/fa';

// Heroicons
import {
    HiOutlineShoppingCart,
    HiOutlineHeart,
    HiOutlineStar,
    HiOutlinePhone
} from 'react-icons/hi2';

// Material Design Icons
import { MdEmail, MdLocationOn, MdFavorite, MdCoffee } from 'react-icons/md';

// Bootstrap Icons
import { BsFillCartFill, BsBookmark, BsCalendar, BsPhone } from 'react-icons/bs';

type IconSet = {
    name: string;
    icons: Array<{
        icon: React.ReactNode;
        name: string;
    }>;
};

export default function IconsDemo() {
    const [activeSet, setActiveSet] = useState<string>('fontAwesome');

    const iconSets: Record<string, IconSet> = {
        fontAwesome: {
            name: 'Font Awesome',
            icons: [
                { icon: <FaCoffee size={24} />, name: 'FaCoffee' },
                { icon: <FaUtensils size={24} />, name: 'FaUtensils' },
                { icon: <FaCookie size={24} />, name: 'FaCookie' },
                { icon: <FaCar size={24} />, name: 'FaCar' },
                { icon: <FaHome size={24} />, name: 'FaHome' },
                { icon: <FaUser size={24} />, name: 'FaUser' },
                { icon: <FaCalendar size={24} />, name: 'FaCalendar' },
                { icon: <FaClock size={24} />, name: 'FaClock' },
            ],
        },
        heroIcons: {
            name: 'Hero Icons',
            icons: [
                { icon: <HiOutlineShoppingCart size={24} />, name: 'HiOutlineShoppingCart' },
                { icon: <HiOutlineHeart size={24} />, name: 'HiOutlineHeart' },
                { icon: <HiOutlineStar size={24} />, name: 'HiOutlineStar' },
                { icon: <HiOutlinePhone size={24} />, name: 'HiOutlinePhone' },
            ],
        },
        materialDesign: {
            name: 'Material Design',
            icons: [
                { icon: <MdEmail size={24} />, name: 'MdEmail' },
                { icon: <MdLocationOn size={24} />, name: 'MdLocationOn' },
                { icon: <MdFavorite size={24} />, name: 'MdFavorite' },
                { icon: <MdCoffee size={24} />, name: 'MdCoffee' },
            ],
        },
        bootstrap: {
            name: 'Bootstrap Icons',
            icons: [
                { icon: <BsFillCartFill size={24} />, name: 'BsFillCartFill' },
                { icon: <BsBookmark size={24} />, name: 'BsBookmark' },
                { icon: <BsCalendar size={24} />, name: 'BsCalendar' },
                { icon: <BsPhone size={24} />, name: 'BsPhone' },
            ],
        },
    };

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-brown-900 mb-8">
                    Demonstração de Ícones React
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                    Abaixo estão alguns exemplos dos diferentes conjuntos de ícones disponíveis na biblioteca react-icons.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {Object.keys(iconSets).map((setKey) => (
                        <button
                            key={setKey}
                            onClick={() => setActiveSet(setKey)}
                            className={`px-4 py-2 rounded-full ${activeSet === setKey
                                ? 'bg-brown-800 text-white'
                                : 'bg-white text-brown-800 border border-brown-200'
                                } transition-colors`}
                        >
                            {iconSets[setKey].name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {iconSets[activeSet].icons.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 border border-gray-200 rounded-lg"
                        >
                            <div className="mb-4 text-amber-500">{item.icon}</div>
                            <span className="text-sm text-gray-600">{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-500 text-sm">
                        Para ver mais ícones disponíveis, visite a{' '}
                        <a
                            href="https://react-icons.github.io/react-icons/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-500 hover:underline"
                        >
                            documentação do react-icons
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
} 