'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFireAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';

export default function Sobre() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero da página */}
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o Coffee Shops Tia Rosa</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Conheça nossa história, valores e a equipe que trabalha com paixão para oferecer a melhor experiência em café.
                        </p>
                    </div>
                </div>

                {/* Nossa História */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-brown-900 mb-6">Nossa História</h2>
                                <p className="text-gray-600 mb-4">
                                    Fundado em 2010 por Maria Rosa, o Coffee Shops Tia Rosa surgiu de um sonho de oferecer um espaço onde as pessoas pudessem desfrutar de café de qualidade em um ambiente acolhedor e familiar.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Maria sempre foi apaixonada pela arte de preparar café. Após anos trabalhando em grandes cafeterias, ela decidiu abrir seu próprio espaço para implementar sua visão de um lugar que combinasse a qualidade dos grandes estabelecimentos com o calor humano de uma casa de família.
                                </p>
                                <p className="text-gray-600">
                                    Desde então, o Coffee Shops Tia Rosa se tornou um ponto de encontro querido na comunidade, conhecido não apenas por seus produtos de excelência, mas também pelo atendimento acolhedor e personalizado.
                                </p>
                            </div>

                            {/* Espaço para imagem da história/fundadora */}
                            <div className="bg-gray-200 h-[400px] rounded-lg relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span>Imagem da Nossa História</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nossos Valores */}
                <section className="py-16 bg-brown-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brown-900 mb-12 text-center">Nossos Valores</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <FaFireAlt className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Paixão</h3>
                                <p className="text-gray-600">
                                    Amamos o que fazemos e isso se reflete em cada xícara de café que servimos e em cada sorriso que damos aos nossos clientes.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <MdVerified className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Qualidade</h3>
                                <p className="text-gray-600">
                                    Selecionamos cuidadosamente cada grão de café e ingrediente usado em nossos produtos para garantir a excelência em tudo que oferecemos.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <BsPeopleFill className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Comunidade</h3>
                                <p className="text-gray-600">
                                    Acreditamos em criar um espaço de convivência que valoriza as relações humanas e fortalece os laços na comunidade local.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nossa Equipe */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brown-900 mb-12 text-center">Conheça Nossa Equipe</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Membro da equipe 1 */}
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                                    {/* Espaço para foto do membro */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span>Foto</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-brown-900">Maria Rosa</h3>
                                <p className="text-gray-600">Fundadora & Barista Chefe</p>
                            </div>

                            {/* Membro da equipe 2 */}
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                                    {/* Espaço para foto do membro */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span>Foto</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-brown-900">João Silva</h3>
                                <p className="text-gray-600">Gerente</p>
                            </div>

                            {/* Membro da equipe 3 */}
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                                    {/* Espaço para foto do membro */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span>Foto</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-brown-900">Ana Oliveira</h3>
                                <p className="text-gray-600">Confeiteira</p>
                            </div>

                            {/* Membro da equipe 4 */}
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                                    {/* Espaço para foto do membro */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span>Foto</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-brown-900">Carlos Santos</h3>
                                <p className="text-gray-600">Barista</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 