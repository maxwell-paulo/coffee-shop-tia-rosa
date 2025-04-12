'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import TeamMember from '../components/TeamMember';
import { FaFireAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';

import aboutUsPageImage from '../../assets/images/about-us-page.png';
import team1Image from '../../assets/images/team/team-1.png';
import team2Image from '../../assets/images/team/team-2.png';
import team3Image from '../../assets/images/team/team-3.png';
import team4Image from '../../assets/images/team/team-4.png';

export default function Sobre() {
    const teamMembers = [
        {
            id: 1,
            name: 'Maria Rosa',
            role: 'Fundadora & Barista Chefe',
            image: team1Image
        },
        {
            id: 2,
            name: 'João Silva',
            role: 'Gerente',
            image: team2Image
        },
        {
            id: 3,
            name: 'Ana Oliveira',
            role: 'Confeiteira',
            image: team3Image
        },
        {
            id: 4,
            name: 'Carlos Santos',
            role: 'Barista',
            image: team4Image
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o Coffee Shops Tia Rosa</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Conheça nossa história, valores e a equipe que trabalha com paixão para oferecer a melhor experiência em café.
                        </p>
                    </div>
                </div>

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

                            <div className="rounded-lg relative h-[500px] overflow-hidden bg-brown-100/20">
                                <Image
                                    src={aboutUsPageImage}
                                    alt="História do Coffee Shops Tia Rosa"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

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

                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brown-900 mb-12 text-center">Conheça Nossa Equipe</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <TeamMember
                                    key={member.id}
                                    name={member.name}
                                    role={member.role}
                                    image={member.image}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 