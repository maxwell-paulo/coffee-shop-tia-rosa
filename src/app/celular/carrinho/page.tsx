"use client";

import { useState } from 'react';
import { HiShoppingCart, HiTrash, HiMinus, HiPlus } from 'react-icons/hi2';
import { useCartStore, parsePriceToNumber, CartItem } from '../../../store/useCartStore';

export default function Carrinho() {
    const { items, increase, decrease, removeItem, clear } = useCartStore();
    const [showModal, setShowModal] = useState(false);

    const subtotal = items.reduce((total: number, item: CartItem) => {
        return total + parsePriceToNumber(item.price) * item.quantity;
    }, 0);

    const taxaEntrega = 5.0;
    const total = subtotal + taxaEntrega;

    return (
        <>
            <div className="bg-brown-800 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex items-center">
                        <HiShoppingCart className="w-8 h-8 mr-3" />
                        <h1 className="text-3xl font-bold">Meu Carrinho</h1>
                    </div>
                    <p className="text-white/80 mt-2">Revise seus itens antes de finalizar o pedido</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {items.length > 0 ? (
                    <>
                        <div className="space-y-4 mb-8">
                            {items.map((item: CartItem) => (
                                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row sm:items-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg sm:mr-4 overflow-hidden flex items-center justify-center">
                                        {item.imageUrl ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <HiShoppingCart className="w-8 h-8 text-gray-400" />
                                        )}
                                    </div>

                                    <div className="flex-grow mt-3 sm:mt-0">
                                        <h3 className="font-semibold text-brown-900">{item.name}</h3>
                                        <p className="text-amber-600 font-medium">{item.price}</p>
                                    </div>

                                    <div className="flex items-center justify-between sm:justify-start sm:space-x-3 w-full sm:w-auto mt-3 sm:mt-0">
                                        <button
                                            onClick={() => decrease(item.id)}
                                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                        >
                                            <HiMinus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => increase(item.id)}
                                            className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
                                        >
                                            <HiPlus className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="ml-2 sm:ml-4 p-2 text-red-500 hover:text-red-700 transition-colors"
                                        >
                                            <HiTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h2 className="text-xl font-bold text-brown-900 mb-4">Resumo do Pedido</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxa de entrega:</span>
                                    <span>R$ {taxaEntrega.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                                    <span>Total:</span>
                                    <span className="text-amber-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors"
                        >
                            Finalizar Pedido
                        </button>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <HiShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-600 mb-2">Seu carrinho está vazio</h2>
                        <p className="text-gray-500 mb-6">Adicione alguns pães deliciosos ao seu carrinho!</p>
                        <a
                            href="/celular/cardapio"
                            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                        >
                            Ver Cardápio
                        </a>
                    </div>
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h3 className="text-xl font-bold text-brown-900 mb-2">Confirmar Pedido</h3>
                        <p className="text-gray-600 mb-4">Seu pedido será preparado com carinho pela Padaria Tia Rosa.</p>
                        <div className="bg-brown-50 rounded-lg p-4 mb-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span>Subtotal</span>
                                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Taxa de entrega</span>
                                <span>R$ {taxaEntrega.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="flex justify-between font-semibold border-t pt-2">
                                <span>Total</span>
                                <span className="text-amber-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50"
                            >
                                Voltar
                            </button>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    clear();
                                    alert('Pedido confirmado! Obrigado pela preferência.');
                                }}
                                className="flex-1 bg-amber-500 text-white rounded-lg px-4 py-3 hover:bg-amber-600"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
