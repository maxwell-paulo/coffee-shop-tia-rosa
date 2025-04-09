import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-brown-800 overflow-hidden">
            {/* Espaço para imagem de fundo de café */}
            <div className="relative h-[500px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 to-brown-900/30"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Café Especial com <span className="text-amber-300">Toque Caseiro</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-8">
                            Venha descobrir o melhor café da região com o aconchego único que só o Coffee Shops Tia Rosa oferece.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/cardapio"
                                className="px-6 py-3 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors">
                                Ver Nosso Cardápio
                            </Link>
                            <Link href="/contato"
                                className="px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
                                Entre em Contato
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Faixa de destaque abaixo do hero */}
            <div className="bg-amber-500 py-4">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Aberto Todos os Dias</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                            </svg>
                            <span className="font-medium">Wi-Fi Gratuito</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                            <span className="font-medium">Ambiente Acolhedor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 