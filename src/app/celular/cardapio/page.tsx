'use client';

import ProductCard from '../../components/ProductCard';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { padariaCategories } from '../../../data/padariaCategories';
import { useState } from 'react';

export default function Cardapio() {
    const categorias = padariaCategories;
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas');

    const categoriasFiltradas = categoriaSelecionada === 'todas'
        ? categorias
        : categorias.filter(categoria => categoria.id === categoriaSelecionada);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nosso Cardápio</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Desfrute dos nossos pães frescos preparados com ingredientes selecionados e muito carinho.
                        </p>
                    </div>
                </div>

                <div className="bg-white sticky top-0 z-40 shadow-md">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex justify-center">
                            <select
                                value={categoriaSelecionada}
                                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-brown-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            >
                                <option value="todas">Todas as Categorias</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {categoriasFiltradas.map((categoria) => (
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
                                        isMobile={true}
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
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Encomendas Especiais</h3>
                                <p className="text-gray-600 mb-4">
                                    Planejando um evento especial? A Padaria Tia Rosa oferece encomendas para:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Aniversários</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Casamentos</span>
                                    </li>
                                    <li className="flex items-center">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                                        <span>Eventos corporativos</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600 mt-4">
                                    Entre em contato para mais informações e encomendas.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Pedidos Online</h3>
                                <p className="text-gray-600 mb-4">
                                    Faça seu pedido online e receba em casa:
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
                                        <span>Site de pedidos online</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600 mt-4">
                                    Tempo médio de entrega: 30-45 minutos
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
} 