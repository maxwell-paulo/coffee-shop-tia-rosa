# Coffee Shop Tia Rosa - Documentação do Projeto

![Logo do Coffee Shop Tia Rosa]
*[Imagem: Inserir logo do Coffee Shop Tia Rosa aqui]*

## 📋 Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Objetivos](#objetivos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Hospedagem](#hospedagem)
- [Como Executar o Projeto Localmente](#como-executar-o-projeto-localmente)
- [Considerações Finais](#considerações-finais)

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Construção de Front-End, ministrada pelo Professor Mestre William Almeida. A proposta visa aplicar os conhecimentos teóricos e práticos adquiridos ao longo do curso, desenvolvendo uma solução real para um problema específico.

O Coffee Shop Tia Rosa foi escolhido como caso de estudo para este trabalho. O projeto foi desenvolvido como solução para uma situação-problema enfrentada pela empresa. Maria, a nova diretora do estabelecimento, identificou diversos desafios, como:

- Falta de informações online sobre a empresa e seus produtos
- Ausência de descrições detalhadas dos produtos
- Divulgação e exposição digital insuficientes

Para solucionar estes problemas, desenvolvemos um site moderno, intuitivo e responsivo que atende às necessidades dos clientes e colaboradores do Coffee Shop Tia Rosa, melhorando a presença digital da empresa e facilitando o acesso às informações sobre seus produtos e serviços.

### Contexto Acadêmico

Esta verificação de aprendizagem tem como propósito demonstrar a capacidade de aplicar os conceitos e tecnologias estudados na disciplina em um cenário real de negócios. O projeto foi avaliado considerando:

- Aplicação prática dos conhecimentos teóricos
- Desenvolvimento de interface intuitiva
- Implementação de boas práticas de desenvolvimento
- Documentação completa do processo
- Hospedagem e disponibilização do site

## 🎯 Objetivos

### Objetivo Geral
- Desenvolver um site completo para o Coffee Shop Tia Rosa

### Objetivos Específicos
1. Aplicar conhecimentos adquiridos na disciplina
2. Criar um layout intuitivo e de fácil navegação
3. Realizar a hospedagem do site em ambiente de produção
4. Desenvolver conteúdo adequado e relevante para o negócio

## 💻 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando um conjunto de tecnologias modernas:

- **Next.js**: Framework React para renderização do lado do servidor
- **TypeScript**: Linguagem de programação tipada
- **Tailwind CSS**: Framework CSS para estilização
- **React Icons**: Biblioteca de ícones
- **Vercel**: Plataforma para hospedagem e deploy

### Por que essas tecnologias?

- **Next.js**: Escolhido pela facilidade de desenvolvimento, otimização de desempenho e SEO, renderização do lado do servidor, e geração de páginas estáticas.
- **TypeScript**: Utilizado para adicionar tipagem estática ao JavaScript, melhorando a manutenção e prevenindo erros durante o desenvolvimento.
- **Tailwind CSS**: Selecionado pela facilidade de customização, rapidez no desenvolvimento e responsividade.
- **Vercel**: Plataforma ideal para hospedagem de aplicações Next.js, com integração contínua e entrega contínua (CI/CD).

![Tecnologias Utilizadas]
*[Imagem: Inserir imagem das tecnologias utilizadas]*

## 🏗️ Estrutura do Projeto

O projeto foi estruturado seguindo as melhores práticas de organização de código e arquitetura:

```
coffee-shop-tia-rosa/
├── src/
│   ├── app/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── cardapio/     # Página de cardápio
│   │   ├── sobre/        # Página sobre a empresa
│   │   ├── contato/      # Página de contato
│   │   └── ...           # Outras páginas
│   ├── assets/
│   │   └── images/       # Imagens do projeto
│   └── ...
├── public/               # Arquivos públicos
├── package.json          # Dependências do projeto
└── ...
```

## ✨ Funcionalidades Implementadas

### Página Inicial
- Banner principal destacando a essência do Coffee Shop Tia Rosa
- Seção de produtos em destaque
- Informações sobre horário de funcionamento, Wi-Fi gratuito e ambiente acolhedor
- Seção "Sobre Nós" com a história do estabelecimento
- Depoimentos de clientes
- Call-to-action para contato

![Página Inicial]
*[Imagem: Captura de tela da página inicial]*

### Cardápio
- Categorias de produtos: Cafés, Doces, Salgados, Bebidas
- Descrições detalhadas de cada produto
- Preços atualizados
- Imagens de alta qualidade

![Cardápio]
*[Imagem: Captura de tela da página de cardápio]*

### Sobre Nós
- História do Coffee Shop Tia Rosa
- Valores da empresa
- Equipe
- Diferencial competitivo

### Contato
- Formulário de contato
- Informações de localização
- Mapa de localização
- Horário de funcionamento
- Redes sociais

## 🚀 Processo de Desenvolvimento

### 1. Planejamento e Pesquisa
Iniciei o projeto com uma fase de planejamento e pesquisa, analisando os requisitos e definindo as funcionalidades necessárias. Realizei uma pesquisa de mercado para entender as melhores práticas em sites de cafeterias.

![Planejamento]
*[Imagem: Captura de tela do planejamento, como wireframes ou esboços]*

### 2. Configuração do Ambiente
Configurei o ambiente de desenvolvimento utilizando:
```bash
npx create-next-app@latest coffee-shop-tia-rosa --typescript --tailwind
```

### 3. Estruturação do Projeto
Organizei a estrutura de pastas seguindo as convenções do Next.js 13+ com App Router.

### 4. Desenvolvimento dos Componentes
Desenvolvi cada componente de forma isolada, garantindo a reusabilidade e manutenção do código.

Exemplo do componente Hero:
```tsx
export default function Hero() {
    return (
        <div className="relative bg-brown-800 overflow-hidden">
            <div className="relative h-[500px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 to-brown-900/30"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                Café Especial com <span className="text-amber-300">Toque Caseiro</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 mb-8">
                                Venha descobrir o melhor café da região com o aconchego único que só o Coffee Shops Tia Rosa oferece.
                            </p>
                            <!-- Botões de ação -->
                        </div>
                        <!-- Imagem -->
                    </div>
                </div>
            </div>
            <!-- Informações adicionais -->
        </div>
    );
}
```

### 5. Implementação das Páginas
Criei as páginas do site utilizando os componentes desenvolvidos anteriormente.

Exemplo da estrutura da página principal:
```tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <AboutUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
```

### 6. Estilização
Utilizei o Tailwind CSS para a estilização do site, garantindo responsividade e uma experiência de usuário agradável em todos os dispositivos.

### 7. Testes e Ajustes
Realizei testes em diferentes dispositivos e navegadores, ajustando o layout e funcionalidades conforme necessário.

![Testes]
*[Imagem: Captura de tela mostrando o site em diferentes dispositivos]*

### 8. Otimização
Otimizei as imagens e o código para garantir o melhor desempenho possível.

## 🌐 Hospedagem

O site foi hospedado na plataforma Vercel, seguindo estes passos:

1. Criação de uma conta na Vercel
2. Conexão com o repositório Git
3. Configuração das variáveis de ambiente
4. Deploy automático a partir da branch principal

URL: [inserir URL do site hospedado]

![Deploy na Vercel]
*[Imagem: Captura de tela do painel da Vercel após o deploy]*

## ▶️ Como Executar o Projeto Localmente

Para executar o projeto em seu ambiente local, siga estas etapas:

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Navegue até a pasta do projeto:
```bash
cd coffee-shop-tia-rosa
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🎓 Considerações Finais

O desenvolvimento deste projeto permitiu aplicar os conhecimentos adquiridos na disciplina, criando uma solução real para um problema empresarial. O site do Coffee Shop Tia Rosa não apenas melhora a presença digital da empresa, mas também proporciona uma melhor experiência para os clientes, com informações detalhadas sobre produtos e serviços.

Os desafios enfrentados durante o desenvolvimento, como a implementação de um design responsivo e a otimização de desempenho, foram superados com sucesso graças às tecnologias escolhidas e à aplicação das melhores práticas de desenvolvimento web.

O resultado final é um site moderno, intuitivo e funcional que atende plenamente aos objetivos estabelecidos no início do projeto.

### Aprendizados
- Desenvolvimento com Next.js e App Router
- Estilização eficiente com Tailwind CSS
- Otimização de imagens e desempenho
- Deployment e hospedagem na Vercel
- Desenvolvimento de interfaces responsivas

![Resultado Final]
*[Imagem: Captura de tela mostrando o resultado final do projeto]*
