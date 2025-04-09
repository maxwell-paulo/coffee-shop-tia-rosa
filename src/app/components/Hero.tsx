import Link from 'next/link';
// Importando ícones do react-icons
import { HiOutlineClock, HiOutlineWifi, HiOutlineFaceSmile } from 'react-icons/hi2';

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
                            <HiOutlineClock className="w-6 h-6 mb-2" />
                            <span className="font-medium">Aberto Todos os Dias</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <HiOutlineWifi className="w-6 h-6 mb-2" />
                            <span className="font-medium">Wi-Fi Gratuito</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <HiOutlineFaceSmile className="w-6 h-6 mb-2" />
                            <span className="font-medium">Ambiente Acolhedor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 