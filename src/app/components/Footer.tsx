'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import logoImage from '../../assets/images/logos/logo.png';
import logoText from '../../assets/images/logos/texto.png';

export default function Footer({ isMobile }: { isMobile: boolean }) {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className={`bg-brown-900 text-white py-10 ${isMobile ? 'pb-24' : ''}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="relative w-10 h-10 mr-3">
                                <Image
                                    src={logoImage}
                                    alt={isMobile ? "Logo Padaria Tia Rosa" : "Logo Coffee Shops Tia Rosa"}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-40 h-10">
                                <Image
                                    src={logoText}
                                    alt={isMobile ? "Padaria Tia Rosa" : "Coffee Shops Tia Rosa"}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm opacity-75 mb-4">
                            {isMobile ? (
                                "Oferecendo os melhores pães frescos e sabor caseiro desde 2010. Venha nos visitar e descobrir porque somos a padaria preferida da região."
                            ) : (
                                "Oferecendo o melhor café e experiência desde 2010. Venha nos visitar e descobrir porque somos o café preferido da região."
                            )}
                        </p>
                        <div className="flex space-x-4">
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
                            {isMobile ? (
                                <>
                                    <li>Segunda - Sexta: 6:00 - 19:00</li>
                                    <li>Sábado: 6:00 - 20:00</li>
                                    <li>Domingo: 7:00 - 17:00</li>
                                </>
                            ) : (
                                <>
                                    <li>Segunda - Sexta: 7:00 - 20:00</li>
                                    <li>Sábado: 8:00 - 22:00</li>
                                    <li>Domingo: 9:00 - 18:00</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <ul className="text-sm opacity-75 space-y-2">
                            {isMobile ? (
                                <>
                                    <li>Rua da Padaria, 123</li>
                                    <li>Bairro Aroma, Cidade</li>
                                    <li>Tel: (11) 1234-5678</li>
                                    <li>Email: pedidos@tiarosa.com</li>
                                </>
                            ) : (
                                <>
                                    <li>Rua do Café, 123</li>
                                    <li>Bairro Aroma, Cidade</li>
                                    <li>Tel: (11) 1234-5678</li>
                                    <li>Email: contato@tiarosa.com</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-75">
                    <p>&copy; {currentYear || '2023'} {isMobile ? 'Padaria' : 'Coffee Shops'} Tia Rosa. Todos os direitos reservados.</p>
                    <div className="mt-2">
                        <Link href={isMobile ? "/celular/politica-privacidade" : "/politica-privacidade"} className="hover:text-amber-300 transition-colors">
                            Política de Privacidade
                        </Link>
                        <span className="mx-2">|</span>
                        <Link href={isMobile ? "/celular/termos" : "/termos"} className="hover:text-amber-300 transition-colors">
                            Termos de Uso
                        </Link>
                    </div>
                    <div className="mt-4 p-3 bg-brown-800/50 rounded-md">
                        <p className="text-amber-200 font-medium mb-1">Aviso: Trabalho Acadêmico</p>
                        <p className="text-xs">
                            Este website foi desenvolvido exclusivamente para fins acadêmicos. Todas as informações,
                            imagens e conteúdos apresentados são fictícios e não possuem valor comercial.
                            Não é permitida a reprodução ou utilização deste material para fins comerciais
                            ou de marketing sem autorização prévia.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 