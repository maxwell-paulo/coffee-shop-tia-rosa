import Link from 'next/link';

export default function FeaturedProducts() {
    const featuredProducts = [
        {
            id: 1,
            name: 'Café Especial Tia Rosa',
            description: 'Nosso café especial, torrado artesanalmente com grãos selecionados.',
            price: 'R$ 12,90',
            imageUrl: '/images/cafe-especial.jpg', // Espaço para imagem
        },
        {
            id: 2,
            name: 'Bolo de Chocolate Caseiro',
            description: 'Delicioso bolo de chocolate com cobertura especial e muito amor.',
            price: 'R$ 9,50',
            imageUrl: '/images/bolo-chocolate.jpg', // Espaço para imagem
        },
        {
            id: 3,
            name: 'Café com Leite Premium',
            description: 'Café com leite cremoso preparado com nossa mistura especial.',
            price: 'R$ 8,90',
            imageUrl: '/images/cafe-com-leite.jpg', // Espaço para imagem
        },
        {
            id: 4,
            name: 'Sanduíche Natural',
            description: 'Sanduíche com ingredientes frescos e temperos especiais da Tia Rosa.',
            price: 'R$ 14,50',
            imageUrl: '/images/sanduiche-natural.jpg', // Espaço para imagem
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brown-900 mb-4">Nossos Produtos em Destaque</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Experimente nossas delícias feitas com ingredientes selecionados e muito carinho, tradição que só o Coffee Shops Tia Rosa oferece.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-200 relative">
                                {/* Placeholder para imagem do produto */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span>Imagem do Produto</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-brown-900 text-lg mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-xl">{product.price}</span>
                                    <button className="px-4 py-1 bg-amber-500 text-white rounded-full hover:bg-amber-400 transition-colors">
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link href="/cardapio"
                        className="inline-block px-6 py-3 rounded-full bg-brown-800 text-white font-medium hover:bg-brown-700 transition-colors">
                        Ver Cardápio Completo
                    </Link>
                </div>
            </div>
        </section>
    );
} 