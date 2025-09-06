import Link from 'next/link';
import ProductCard from './ProductCard';
import { getCoffeeShopFeaturedProducts } from '../../data/coffeeShopCategories';
import { getPadariaFeaturedProducts } from '../../data/padariaCategories';

export default function FeaturedProducts({ isMobile }: { isMobile?: boolean }) {
    const featuredProducts = getCoffeeShopFeaturedProducts();
    const padariaFeaturedProducts = getPadariaFeaturedProducts();

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brown-900 mb-4">
                        {isMobile ? "Nossos Pães em Destaque" : "Nossos Produtos em Destaque"}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {isMobile ? (
                            "Experimente nossos pães frescos feitos diariamente com ingredientes selecionados e muito carinho, tradição que só a Padaria Tia Rosa oferece."
                        ) : (
                            "Experimente nossas delícias feitas com ingredientes selecionados e muito carinho, tradição que só o Coffee Shops Tia Rosa oferece."
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {isMobile ? padariaFeaturedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    )) : featuredProducts.map((product) => (
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
                        {isMobile ? "Comprar Online" : "Ver Cardápio Completo"}
                    </Link>
                </div>
            </div>
        </section>
    );
} 