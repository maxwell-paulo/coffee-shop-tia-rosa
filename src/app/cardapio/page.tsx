import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import cafeEspecial from '../../assets/images/products/cafes/cafe-especial.png';
import cafeComLeite from '../../assets/images/products/cafes/cafe-com-leite-premium.png';
import cappuccino from '../../assets/images/products/cafes/cappuccino-tradicional.png';
import mocha from '../../assets/images/products/cafes/mocha.png';

import boloChocolate from '../../assets/images/products/doces/bolo-de-choclate-caseiro.png';
import cheesecake from '../../assets/images/products/doces/cheesecake-frutas-vermelhas.png';
import pudim from '../../assets/images/products/doces/pudim-de-leite.png';
import brownie from '../../assets/images/products/doces/brownie-com-sorvete.png';

import sanduicheNatural from '../../assets/images/products/salgados/sanduiche-natural.png';
import quiche from '../../assets/images/products/salgados/quiche-de-queijo.png';
import paoQueijo from '../../assets/images/products/salgados/pao-de-queijo.png';
import tortaFrango from '../../assets/images/products/salgados/torta-de-frango.png';

import sucoNatural from '../../assets/images/products/bebidas/suco-natural.png';
import chaGelado from '../../assets/images/products/bebidas/cha-gelado.png';
import agua from '../../assets/images/products/bebidas/agua-mineral.png';
import chocolateQuente from '../../assets/images/products/bebidas/chocolate-quente.png';

export default function Cardapio() {
    const categorias = [
        {
            id: 'cafes',
            nome: 'Cafés',
            descricao: 'Nossos cafés são preparados com grãos selecionados, torrados artesanalmente para extrair o melhor sabor e aroma.',
            produtos: [
                { id: 1, nome: 'Café Especial Tia Rosa', descricao: 'Nosso café especial, torrado artesanalmente com grãos selecionados.', preco: 'R$ 12,90', imagem: cafeEspecial },
                { id: 2, nome: 'Café com Leite Premium', descricao: 'Café com leite cremoso preparado com nossa mistura especial.', preco: 'R$ 8,90', imagem: cafeComLeite },
                { id: 3, nome: 'Cappuccino Tradicional', descricao: 'Café espresso com leite vaporizado e espuma de leite.', preco: 'R$ 9,50', imagem: cappuccino },
                { id: 4, nome: 'Mocha', descricao: 'Café espresso com chocolate e leite vaporizado.', preco: 'R$ 10,90', imagem: mocha },
            ]
        },
        {
            id: 'doces',
            nome: 'Doces & Bolos',
            descricao: 'Nossos doces e bolos são feitos diariamente, utilizando ingredientes frescos e receitas tradicionais.',
            produtos: [
                { id: 5, nome: 'Bolo de Chocolate Caseiro', descricao: 'Delicioso bolo de chocolate com cobertura especial e muito amor.', preco: 'R$ 9,50', imagem: boloChocolate },
                { id: 6, nome: 'Cheesecake de Frutas Vermelhas', descricao: 'Cheesecake cremoso com geleia de frutas vermelhas caseira.', preco: 'R$ 12,50', imagem: cheesecake },
                { id: 7, nome: 'Pudim de Leite', descricao: 'Pudim de leite tradicional com calda de caramelo.', preco: 'R$ 8,00', imagem: pudim },
                { id: 8, nome: 'Brownie com Sorvete', descricao: 'Brownie quentinho servido com sorvete de creme e calda de chocolate.', preco: 'R$ 14,90', imagem: brownie },
            ]
        },
        {
            id: 'salgados',
            nome: 'Salgados & Lanches',
            descricao: 'Opções salgadas perfeitas para um lanche rápido ou para acompanhar seu café favorito.',
            produtos: [
                { id: 9, nome: 'Sanduíche Natural', descricao: 'Sanduíche com ingredientes frescos e temperos especiais da Tia Rosa.', preco: 'R$ 14,50', imagem: sanduicheNatural },
                { id: 10, nome: 'Quiche de Queijo', descricao: 'Quiche de queijo com massa crocante e recheio cremoso.', preco: 'R$ 10,90', imagem: quiche },
                { id: 11, nome: 'Pão de Queijo', descricao: 'Tradicional pão de queijo mineiro, quentinho e macio.', preco: 'R$ 6,50', imagem: paoQueijo },
                { id: 12, nome: 'Torta de Frango', descricao: 'Torta de frango com catupiry, milho e ervilhas.', preco: 'R$ 9,90', imagem: tortaFrango },
            ]
        },
        {
            id: 'bebidas',
            nome: 'Outras Bebidas',
            descricao: 'Além dos nossos cafés, oferecemos uma variedade de bebidas refrescantes e saudáveis.',
            produtos: [
                { id: 13, nome: 'Suco Natural', descricao: 'Suco de frutas frescas. Escolha entre laranja, abacaxi, morango ou uva.', preco: 'R$ 8,90', imagem: sucoNatural },
                { id: 14, nome: 'Chá Gelado', descricao: 'Chá gelado com limão e hortelã.', preco: 'R$ 7,50', imagem: chaGelado },
                { id: 15, nome: 'Água Mineral', descricao: 'Água mineral com ou sem gás.', preco: 'R$ 4,50', imagem: agua },
                { id: 16, nome: 'Chocolate Quente', descricao: 'Chocolate quente cremoso com chantilly.', preco: 'R$ 11,90', imagem: chocolateQuente },
            ]
        },
    ];

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