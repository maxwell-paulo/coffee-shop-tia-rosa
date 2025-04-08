import Link from 'next/link';

export default function ContactCTA() {
    return (
        <section className="py-20 bg-amber-500 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-6">
                        Venha Experimentar o Melhor Café da Região
                    </h2>
                    <p className="text-brown-800 text-lg mb-8 max-w-2xl mx-auto">
                        Agende uma visita ou faça uma encomenda especial para seu evento.
                        Estamos ansiosos para proporcionar uma experiência única para você!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contato"
                            className="px-8 py-3 rounded-full bg-brown-900 text-white font-medium hover:bg-brown-800 transition-colors">
                            Entre em Contato
                        </Link>
                        <a href="tel:+551112345678"
                            className="px-8 py-3 rounded-full bg-transparent border-2 border-brown-900 text-brown-900 font-medium hover:bg-brown-900/10 transition-colors">
                            (11) 1234-5678
                        </a>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-amber-300 rounded-full opacity-40 transform translate-x-12 translate-y-8"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-300 rounded-full opacity-40 transform -translate-x-12 -translate-y-12"></div>
        </section>
    );
} 