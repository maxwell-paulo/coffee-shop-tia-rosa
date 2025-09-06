import paoFrances from '../assets/images/celular/products/paes/pao-frances.png'
import paoFermentacaoNatural from '../assets/images/celular/products/paes/pao-fermentacao-natural.png'
import bagueteArtesanal from '../assets/images/celular/products/paes/baguete-artesanal.png'
import paoIntegral from '../assets/images/celular/products/paes/pao-integral-multigraos.png'
import focacciaAlecrim from '../assets/images/celular/products/paes/foccacia-de-alecrim.png'
import broaMilho from '../assets/images/celular/products/paes/broa-de-milho.png'

import croissantManteiga from '../assets/images/celular/products/folhados/croissant-de-manteiga.png'
import painAuChocolat from '../assets/images/celular/products/folhados/pain-au-chocolat.png'
import folhadoQueijoPresunto from '../assets/images/celular/products/folhados/folhado-de-presunto-e-queijo.png'
import palmier from '../assets/images/celular/products/folhados/palmier.png'

import boloChocolate from '../assets/images/celular/products/doces/bolo-de-chocolate-caseiro.png'
import boloCenoura from '../assets/images/celular/products/doces/bolo-de-cenoura-com-chocolate.png'
import sonhoCreme from '../assets/images/celular/products/doces/sonho-de-creme.png'
import pastelNata from '../assets/images/celular/products/doces/pastel-de-nata.png'
import quindim from '../assets/images/celular/products/doces/quindim.png'

import paoQueijo from '../assets/images/celular/products/salgados/pao-de-queijo.png'
import coxinhaFrango from '../assets/images/celular/products/salgados/coxinha-de-frango.png'
import empadaPalmito from '../assets/images/celular/products/salgados/empada-de-palmito.png'
import esfihaCarne from '../assets/images/celular/products/salgados/esfiha-de-carne.png'
import quiche from '../assets/images/celular/products/salgados/quiche-de-queijo.png'
import sanduicheNatural from '../assets/images/celular/products/salgados/sanduiche-natural.png'
import mistoQuente from '../assets/images/celular/products/salgados/misto-quente-na-chapa.png'

import cafeCoado from '../assets/images/celular/products/bebidas/cafe-coado-da-casa.png'
import cafeComLeite from '../assets/images/celular/products/bebidas/cafe-com-leite.png'
import cappuccino from '../assets/images/celular/products/bebidas/cappuccino.png'
import chocolateQuente from '../assets/images/celular/products/bebidas/chocolate-quente.png'
import sucoNatural from '../assets/images/celular/products/bebidas/suco-natural.png'
import chaGelado from '../assets/images/celular/products/bebidas/cha-gelado.png'
import agua from '../assets/images/celular/products/bebidas/agua-mineral.png'

export const padariaCategories = [
    {
        id: 'paes',
        nome: 'Pães Artesanais',
        descricao: 'Pães fresquinhos assados ao longo do dia, com farinhas selecionadas e cuidado de padaria.',
        produtos: [
            { id: 1, nome: 'Pão Francês (pãozinho)', descricao: 'Crosta crocante e miolo macio, assado várias vezes ao dia.', preco: 'R$ 1,50', imagem: paoFrances },
            { id: 2, nome: 'Pão de Fermentação Natural', descricao: 'Fermentação lenta de 24h, casca dourada e sabor marcante.', preco: 'R$ 22,90', imagem: paoFermentacaoNatural },
            { id: 3, nome: 'Baguete Artesanal', descricao: 'Alongada, aerada e perfeita para sanduíches.', preco: 'R$ 9,90', imagem: bagueteArtesanal },
            { id: 4, nome: 'Pão Integral Multigrãos', descricao: 'Massa macia com mix de sementes e grãos.', preco: 'R$ 18,90', imagem: paoIntegral },
            { id: 5, nome: 'Focaccia de Alecrim', descricao: 'Alta, macia e regada com azeite extra virgem e sal.', preco: 'R$ 16,90', imagem: focacciaAlecrim },
            { id: 6, nome: 'Broa de Milho', descricao: 'Tradicional, levemente adocicada e perfumada.', preco: 'R$ 7,90', imagem: broaMilho },
        ]
    },
    {
        id: 'folhados',
        nome: 'Folhados & Viennoiserie',
        descricao: 'Massa amanteigada, muitas dobras e aquele dourado irresistível.',
        produtos: [
            { id: 7, nome: 'Croissant de Manteiga', descricao: 'Camadas leves e crocantes, feito com manteiga de qualidade.', preco: 'R$ 8,90', imagem: croissantManteiga },
            { id: 8, nome: 'Pain au Chocolat', descricao: 'Folhado com chocolate meio amargo.', preco: 'R$ 10,90', imagem: painAuChocolat },
            { id: 9, nome: 'Folhado de Presunto e Queijo', descricao: 'Recheio cremoso e massa super crocante.', preco: 'R$ 11,90', imagem: folhadoQueijoPresunto },
            { id: 10, nome: 'Palmier', descricao: 'Clássico folhado caramelizado.', preco: 'R$ 6,90', imagem: palmier },
        ]
    },
    {
        id: 'doces',
        nome: 'Doces & Bolos',
        descricao: 'Receitas afetivas da Tia Rosa, feitas diariamente com ingredientes frescos.',
        produtos: [
            { id: 11, nome: 'Bolo de Chocolate Caseiro', descricao: 'Delicioso bolo de chocolate com cobertura especial e muito amor.', preco: 'R$ 9,50', imagem: boloChocolate },
            { id: 12, nome: 'Bolo de Cenoura com Chocolate', descricao: 'Fofinho, com cobertura cremosa de chocolate.', preco: 'R$ 8,90', imagem: boloCenoura },
            { id: 13, nome: 'Sonho de Creme', descricao: 'Massa leve, recheio de creme e açúcar de confeiteiro.', preco: 'R$ 7,50', imagem: sonhoCreme },
            { id: 14, nome: 'Pastel de Nata', descricao: 'Tradicional português, massa folhada e creme aveludado.', preco: 'R$ 6,50', imagem: pastelNata },
            { id: 15, nome: 'Quindim', descricao: 'Clássico brasileiro com coco e gemas selecionadas.', preco: 'R$ 6,90', imagem: quindim },
        ]
    },
    {
        id: 'salgados',
        nome: 'Salgados & Lanches',
        descricao: 'Para o lanche de todo dia, com aquele capricho de padaria.',
        produtos: [
            { id: 16, nome: 'Pão de Queijo', descricao: 'Tradicional pão de queijo mineiro, quentinho e macio.', preco: 'R$ 6,50', imagem: paoQueijo },
            { id: 17, nome: 'Coxinha de Frango', descricao: 'Massa macia e recheio suculento de frango.', preco: 'R$ 8,90', imagem: coxinhaFrango },
            { id: 18, nome: 'Empada de Palmito', descricao: 'Massa amanteigada com recheio cremoso de palmito.', preco: 'R$ 7,90', imagem: empadaPalmito },
            { id: 19, nome: 'Esfiha de Carne', descricao: 'Aberta, tempero da casa.', preco: 'R$ 7,50', imagem: esfihaCarne },
            { id: 20, nome: 'Quiche de Queijo', descricao: 'Massa crocante e recheio cremoso.', preco: 'R$ 10,90', imagem: quiche },
            { id: 21, nome: 'Sanduíche Natural', descricao: 'Pão integral com folhas, peito de peru e queijo.', preco: 'R$ 14,50', imagem: sanduicheNatural },
            { id: 22, nome: 'Misto Quente na Chapa', descricao: 'Pão francês, queijo e presunto, bem quentinho.', preco: 'R$ 9,90', imagem: mistoQuente },
        ]
    },
    {
        id: 'bebidas',
        nome: 'Bebidas (Cafés & Outras)',
        descricao: 'Para acompanhar seus pães e quitutes.',
        produtos: [
            { id: 23, nome: 'Café Coado da Casa', descricao: 'Blend exclusivo da Tia Rosa preparado no coador.', preco: 'R$ 7,90', imagem: cafeCoado },
            { id: 24, nome: 'Café com Leite', descricao: 'Nosso clássico cremoso.', preco: 'R$ 8,90', imagem: cafeComLeite },
            { id: 25, nome: 'Cappuccino', descricao: 'Espresso, leite vaporizado e espuma.', preco: 'R$ 9,50', imagem: cappuccino },
            { id: 26, nome: 'Chocolate Quente', descricao: 'Cremoso e reconfortante.', preco: 'R$ 11,90', imagem: chocolateQuente },
            { id: 27, nome: 'Suco Natural', descricao: 'Laranja, abacaxi, morango ou uva.', preco: 'R$ 8,90', imagem: sucoNatural },
            { id: 28, nome: 'Chá Gelado', descricao: 'Com limão e hortelã.', preco: 'R$ 7,50', imagem: chaGelado },
            { id: 29, nome: 'Água Mineral', descricao: 'Com ou sem gás.', preco: 'R$ 4,50', imagem: agua },
        ]
    },
];

export const padariaFeaturedProductIds = [1, 7, 11, 16];

export const getPadariaFeaturedProducts = () => {
    const allProducts = padariaCategories.flatMap(categoria => categoria.produtos);
    return padariaFeaturedProductIds.map(id => {
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
