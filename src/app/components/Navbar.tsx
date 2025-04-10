'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

// Importing logos
import logoImage from '../../assets/images/logos/logo.png';
import logoText from '../../assets/images/logos/texto.png';

// Importando ícones do react-icons
import { HiSun, HiMoon } from 'react-icons/hi';
import { HiMiniXMark, HiBars3 } from 'react-icons/hi2';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-brown-900 text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative w-12 h-12">
                        <Image
                            src={logoImage}
                            alt="Logo Coffee Shops Tia Rosa"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="relative w-48 h-12 hidden sm:block">
                        <Image
                            src={logoText}
                            alt="Coffee Shops Tia Rosa"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
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

                    {/* Seletor de tema - apenas ícone */}
                    <button
                        onClick={toggleTheme}
                        className="hover:text-amber-300 transition-colors"
                        aria-label={theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
                    >
                        {theme === 'light' ? (
                            <HiSun className="w-5 h-5" />
                        ) : (
                            <HiMoon className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Botão do menu mobile */}
                <div className="md:hidden flex items-center">
                    {/* Seletor de tema para mobile - apenas ícone */}
                    <button
                        onClick={toggleTheme}
                        className="mr-4 hover:text-amber-300 transition-colors"
                        aria-label={theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
                    >
                        {theme === 'dark' ? (
                            <HiSun className="w-5 h-5" />
                        ) : (
                            <HiMoon className="w-5 h-5" />
                        )}
                    </button>

                    <button
                        className="focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <HiMiniXMark className="w-6 h-6" />
                        ) : (
                            <HiBars3 className="w-6 h-6" />
                        )}
                    </button>
                </div>
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