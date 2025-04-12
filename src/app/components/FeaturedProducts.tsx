import Link from 'next/link';
import ProductCard from './ProductCard';

// Importando imagens
import cafeEspecial from '../../assets/images/products/cafes/cafe-especial.png';
import boloChocolate from '../../assets/images/products/doces/bolo-de-choclate-caseiro.png';
import cafeComLeite from '../../assets/images/products/cafes/cafe-com-leite-premium.png';
import sanduicheNatural from '../../assets/images/products/salgados/sanduiche-natural.png';

export default function FeaturedProducts() {
    const featuredProducts = [
        {
            id: 1,
            name: 'Café Especial Tia Rosa',
            description: 'Nosso café especial, torrado artesanalmente com grãos selecionados.',
            price: 'R$ 12,90',
            imageUrl: cafeEspecial,
        },
        {
            id: 2,
            name: 'Bolo de Chocolate Caseiro',
            description: 'Delicioso bolo de chocolate com cobertura especial e muito amor.',
            price: 'R$ 9,50',
            imageUrl: boloChocolate,
        },
        {
            id: 3,
            name: 'Café com Leite Premium',
            description: 'Café com leite cremoso preparado com nossa mistura especial.',
            price: 'R$ 8,90',
            imageUrl: cafeComLeite,
        },
        {
            id: 4,
            name: 'Sanduíche Natural',
            description: 'Sanduíche com ingredientes frescos e temperos especiais da Tia Rosa.',
            price: 'R$ 14,50',
            imageUrl: sanduicheNatural,
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
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
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