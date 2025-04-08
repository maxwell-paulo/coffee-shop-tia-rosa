import Link from 'next/link';

export default function AboutUs() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Espaço para imagem do Coffee Shop */}
                    <div className="bg-gray-200 h-[400px] rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span>Imagem do Café</span>
                        </div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Grãos Selecionados</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Receitas Exclusivas</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Ambiente Familiar</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Wi-Fi Gratuito</span>
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