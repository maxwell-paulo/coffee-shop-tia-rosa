import Link from 'next/link';
import Image from 'next/image';

import logo from '../../assets/images/logos/logo.png';

export default function ContactCTA({ isMobile = false }: { isMobile?: boolean }) {

    return (
        <section className="py-20 bg-amber-500 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="relative w-16 h-16 bg-white rounded-full p-2">
                            <Image
                                src={logo}
                                alt={isMobile ? "Padaria Tia Rosa" : "Coffee Shops Tia Rosa"}
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {isMobile ? "Venha Experimentar os Melhores Pães da Região" : "Venha Experimentar o Melhor Café da Região"}
                    </h2>
                    <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                        {isMobile ? (
                            "Faça seu pedido online ou venha nos visitar para experimentar nossos pães frescos. Estamos ansiosos para proporcionar o melhor sabor caseiro para você!"
                        ) : (
                            "Agende uma visita ou faça uma encomenda especial para seu evento. Estamos ansiosos para proporcionar uma experiência única para você!"
                        )}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href={isMobile ? "/celular/cardapio" : "/contato"}
                            className="px-8 py-3 rounded-full bg-brown-900 text-white font-medium hover:bg-brown-800 transition-colors">
                            {isMobile ? "Comprar Online" : "Entre em Contato"}
                        </Link>
                        <a href="tel:+551112345678"
                            className="px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
                            (11) 1234-5678
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-24 h-24 bg-amber-300 rounded-full opacity-40 transform translate-x-12 translate-y-8"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-300 rounded-full opacity-40 transform -translate-x-12 -translate-y-12"></div>
        </section>
    );
} 