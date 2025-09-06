import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { coffeeShopCategories } from '../../data/coffeeShopCategories';

export default function Cardapio() {
    const categorias = coffeeShopCategories;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nosso Cardápio</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Desfrute das nossas delícias preparadas com ingredientes selecionados e muito carinho.
                        </p>
                    </div>
                </div>

                <div className="bg-white sticky top-16 z-40 shadow-md">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar">
                            {categorias.map((categoria) => (
                                <a
                                    key={categoria.id}
                                    href={`#${categoria.id}`}
                                    className="text-brown-900 whitespace-nowrap hover:text-amber-500 transition-colors font-medium"
                                >
                                    {categoria.nome}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {categorias.map((categoria) => (
                    <section key={categoria.id} id={categoria.id} className="py-16 border-b border-gray-100 last:border-0">
                        <div className="container mx-auto px-6">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-brown-900 mb-4">{categoria.nome}</h2>
                                <p className="text-gray-600 max-w-3xl">{categoria.descricao}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {categoria.produtos.map((produto) => (
                                    <ProductCard
                                        key={produto.id}
                                        id={produto.id}
                                        name={produto.nome}
                                        description={produto.descricao}
                                        price={produto.preco}
                                        imageUrl={produto.imagem}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                <section className="py-16 bg-brown-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Informações Dietéticas</h3>
                                <p className="text-gray-600 mb-4">
                                    Oferecemos opções para diversas necessidades alimentares. Pergunte sobre nossos itens:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Sem glúten</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Sem lactose</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Vegano</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Vegetariano</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Reservas e Eventos</h3>
                                <p className="text-gray-600 mb-4">
                                    Planejando um evento especial? O Coffee Shops Tia Rosa oferece espaço para:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Reuniões de trabalho</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Aniversários</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Eventos corporativos</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600 mt-4">
                                    Entre em contato para mais informações e reservas.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Pedidos para Viagem</h3>
                                <p className="text-gray-600 mb-4">
                                    Sem tempo para sentar? Você pode fazer seu pedido para viagem:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Pelo telefone: (11) 1234-5678</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Pelo WhatsApp</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Aplicativos de entrega</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600 mt-4">
                                    Tempo médio de preparo: 15-20 minutos
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 