'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '../../store/useCartStore';
import {
    HiHome,
    HiInformationCircle,
    HiShoppingBag,
    HiPhone,
    HiShoppingCart
} from 'react-icons/hi2';

export default function BottomNavigation() {
    const pathname = usePathname();
    const itemsCount = useCartStore((state) => state.items.reduce((acc, i) => acc + i.quantity, 0));

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
                            <div className="relative">
                                <Icon className={`w-6 h-6 mb-1 ${item.isActive ? 'text-amber-600' : 'text-gray-500'}`} />
                                {item.href === '/celular/carrinho' && itemsCount > 0 && (
                                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center text-[10px] leading-none font-bold px-1.5 py-0.5 rounded-full bg-amber-500 text-white min-w-[18px]">
                                        {itemsCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
