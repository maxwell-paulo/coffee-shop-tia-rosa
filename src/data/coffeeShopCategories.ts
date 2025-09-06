import cafeEspecial from '../assets/images/products/cafes/cafe-especial.png';
import cafeComLeite from '../assets/images/products/cafes/cafe-com-leite-premium.png';
import cappuccino from '../assets/images/products/cafes/cappuccino-tradicional.png';
import mocha from '../assets/images/products/cafes/mocha.png';

import boloChocolate from '../assets/images/products/doces/bolo-de-choclate-caseiro.png';
import cheesecake from '../assets/images/products/doces/cheesecake-frutas-vermelhas.png';
import pudim from '../assets/images/products/doces/pudim-de-leite.png';
import brownie from '../assets/images/products/doces/brownie-com-sorvete.png';

import sanduicheNatural from '../assets/images/products/salgados/sanduiche-natural.png';
import quiche from '../assets/images/products/salgados/quiche-de-queijo.png';
import paoQueijo from '../assets/images/products/salgados/pao-de-queijo.png';
import tortaFrango from '../assets/images/products/salgados/torta-de-frango.png';

import sucoNatural from '../assets/images/products/bebidas/suco-natural.png';
import chaGelado from '../assets/images/products/bebidas/cha-gelado.png';
import agua from '../assets/images/products/bebidas/agua-mineral.png';
import chocolateQuente from '../assets/images/products/bebidas/chocolate-quente.png';

export const coffeeShopCategories = [
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

export const coffeeShopFeaturedProductIds = [1, 2, 3, 9];

export const getCoffeeShopFeaturedProducts = () => {
    const allProducts = coffeeShopCategories.flatMap(categoria => categoria.produtos);
    return coffeeShopFeaturedProductIds.map(id => {
        const produto = allProducts.find(p => p.id === id);
        if (!produto) {
            throw new Error(`Produto com ID ${id} não encontrado`);
        }
        return {
            id: produto.id,
            name: produto.nome,
            description: produto.descricao,
            price: produto.preco,
            imageUrl: produto.imagem,
        };
    });
};
