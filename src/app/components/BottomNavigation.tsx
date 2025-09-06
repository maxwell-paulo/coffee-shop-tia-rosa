'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HiHome,
    HiInformationCircle,
    HiShoppingBag,
    HiPhone,
    HiShoppingCart
} from 'react-icons/hi2';

export default function BottomNavigation() {
    const pathname = usePathname();

    const navItems = [
        {
            href: '/celular',
            icon: HiHome,
            label: 'Início',
            isActive: pathname === '/celular'
        },
        {
            href: '/celular/sobre',
            icon: HiInformationCircle,
            label: 'Sobre',
            isActive: pathname === '/celular/sobre'
        },
        {
            href: '/celular/cardapio',
            icon: HiShoppingBag,
            label: 'Cardápio',
            isActive: pathname === '/celular/cardapio'
        },
        {
            href: '/celular/carrinho',
            icon: HiShoppingCart,
            label: 'Carrinho',
            isActive: pathname === '/celular/carrinho'
        },
        {
            href: '/celular/contato',
            icon: HiPhone,
            label: 'Contato',
            isActive: pathname === '/celular/contato'
        }
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
            <div className="flex justify-around items-center py-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${item.isActive
                                ? 'text-amber-600 bg-amber-50'
                                : 'text-gray-600 hover:text-amber-600'
                                }`}
                        >
                            <Icon className={`w-6 h-6 mb-1 ${item.isActive ? 'text-amber-600' : 'text-gray-500'}`} />
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
