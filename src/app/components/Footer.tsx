'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Importando ícones do react-icons
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className="bg-brown-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Coffee Shops Tia Rosa</h3>
                        <p className="text-sm opacity-75 mb-4">
                            Oferecendo o melhor café e experiência desde 2010. Venha nos visitar e descobrir porque somos o café preferido da região.
                        </p>
                        <div className="flex space-x-4">
                            {/* Ícones de redes sociais utilizando react-icons */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Horário de Funcionamento</h3>
                        <ul className="text-sm opacity-75 space-y-2">
                            <li>Segunda - Sexta: 7:00 - 20:00</li>
                            <li>Sábado: 8:00 - 22:00</li>
                            <li>Domingo: 9:00 - 18:00</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <ul className="text-sm opacity-75 space-y-2">
                            <li>Rua do Café, 123</li>
                            <li>Bairro Aroma, Cidade</li>
                            <li>Tel: (11) 1234-5678</li>
                            <li>Email: contato@tiarosa.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-75">
                    <p>&copy; {currentYear || '2023'} Coffee Shops Tia Rosa. Todos os direitos reservados.</p>
                    <div className="mt-2">
                        <Link href="/politica-privacidade" className="hover:text-amber-300 transition-colors">
                            Política de Privacidade
                        </Link>
                        <span className="mx-2">|</span>
                        <Link href="/termos" className="hover:text-amber-300 transition-colors">
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 