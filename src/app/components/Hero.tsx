import Link from 'next/link';
import Image from 'next/image';

import heroImage from '../../assets/images/section-hero.png';
import heroImageMobile from "../../assets/images/celular/mobile-section-hero.png"

import { HiOutlineClock, HiOutlineWifi, HiOutlineFaceSmile } from 'react-icons/hi2';

export default function Hero({ isMobile }: { isMobile?: boolean }) {
    return (
        <div className="relative bg-brown-800 overflow-hidden">
            <div className="relative h-[500px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 to-brown-900/30"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className={isMobile ? "text-center" : ""}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {isMobile ? (
                                    <>Pão Fresco com <span className="text-amber-300">Sabor Caseiro</span></>
                                ) : (
                                    <>Café Especial com <span className="text-amber-300">Toque Caseiro</span></>
                                )}
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 mb-8">
                                {isMobile ? (
                                    "Venha descobrir os melhores pães da região com o sabor único que só a Padaria Tia Rosa oferece."
                                ) : (
                                    "Venha descobrir o melhor café da região com o aconchego único que só o Coffee Shops Tia Rosa oferece."
                                )}
                            </p>
                            <div className={`flex gap-4 ${isMobile ? "justify-center flex-wrap" : "flex-wrap"}`}>
                                <Link href="/cardapio"
                                    className="px-6 py-3 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors">
                                    {isMobile ? "Comprar Online" : "Ver Nosso Cardápio"}
                                </Link>
                                <Link href="/contato"
                                    className="px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
                                    Entre em Contato
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block relative h-[400px]">
                            <Image
                                src={isMobile ? heroImageMobile : heroImage}
                                alt="Coffee Shop Tia Rosa"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

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