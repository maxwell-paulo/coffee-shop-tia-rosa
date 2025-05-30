import Link from 'next/link';
import Image from 'next/image';

import aboutUsImage from '../../assets/images/about-us.png';

import { PiCoffeeBeanFill } from "react-icons/pi";
import { MdPeople } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";


export default function AboutUs() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg relative h-[400px] overflow-hidden">
                        <Image
                            src={aboutUsImage}
                            alt="Sobre o Coffee Shops Tia Rosa"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-brown-900 mb-6">
                            Nossa História
                        </h2>
                        <p className="text-gray-600 mb-6">
                            O Coffee Shops Tia Rosa nasceu do sonho de Maria, nossa fundadora, que sempre acreditou que um bom café poderia transformar o dia das pessoas. Desde 2010, temos nos dedicado a oferecer não apenas bebidas e alimentos de qualidade, mas uma experiência completa aos nossos clientes.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Nosso diferencial está no atendimento personalizado e no ambiente acolhedor, onde cada cliente é tratado como parte da nossa família. Utilizamos ingredientes selecionados e receitas tradicionais que passam de geração em geração.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center">
                                <PiCoffeeBeanFill className="w-5 h-5 text-amber-500 mr-2" />
                                <span className="text-gray-700 feature-text">Grãos Selecionados</span>
                            </div>
                            <div className="flex items-center">
                                <RiFileListLine className="w-5 h-5 text-amber-500 mr-2" />
                                <span className="text-gray-700 feature-text">Receitas Exclusivas</span>
                            </div>
                            <div className="flex items-center">
                                <MdPeople className="w-5 h-5 text-amber-500 mr-2" />
                                <span className="text-gray-700 feature-text">Ambiente Familiar</span>
                            </div>
                            <div className="flex items-center">
                                <FaWifi className="w-5 h-5 text-amber-500 mr-2" />
                                <span className="text-gray-700 feature-text">Wi-Fi Gratuito</span>
                            </div>
                        </div>
                        <Link href="/sobre"
                            className="inline-block px-6 py-3 rounded-full bg-brown-800 text-white font-medium hover:bg-brown-700 transition-colors">
                            Conheça Nossa História
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 