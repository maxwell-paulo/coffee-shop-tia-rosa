import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Paixão</h3>
                                <p className="text-gray-600">
                                    Amamos o que fazemos e isso se reflete em cada xícara de café que servimos e em cada sorriso que damos aos nossos clientes.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Qualidade</h3>
                                <p className="text-gray-600">
                                    Selecionamos cuidadosamente cada grão de café e ingrediente usado em nossos produtos para garantir a excelência em tudo que oferecemos.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
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