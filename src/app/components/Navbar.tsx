'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-brown-900 text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="font-bold text-xl md:text-2xl">Coffee Shops Tia Rosa</div>
                </Link>

                {/* Menu para desktop */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-amber-300 transition-colors">
                        Início
                    </Link>
                    <Link href="/sobre" className="hover:text-amber-300 transition-colors">
                        Sobre Nós
                    </Link>
                    <Link href="/cardapio" className="hover:text-amber-300 transition-colors">
                        Cardápio
                    </Link>
                    <Link href="/contato" className="hover:text-amber-300 transition-colors">
                        Contato
                    </Link>
                </div>

                {/* Botão do menu mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="md:hidden pt-4 pb-2 px-6 bg-brown-800 absolute left-0 right-0 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-amber-300 transition-colors py-2">
                            Início
                        </Link>
                        <Link href="/sobre" className="hover:text-amber-300 transition-colors py-2">
                            Sobre Nós
                        </Link>
                        <Link href="/cardapio" className="hover:text-amber-300 transition-colors py-2">
                            Cardápio
                        </Link>
                        <Link href="/contato" className="hover:text-amber-300 transition-colors py-2">
                            Contato
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
} 