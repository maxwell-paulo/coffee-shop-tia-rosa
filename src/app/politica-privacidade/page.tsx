import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PoliticaPrivacidade() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero da página */}
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Detalhes sobre como tratamos os seus dados e respeitamos sua privacidade.
                        </p>
                    </div>
                </div>

                {/* Conteúdo da página */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg">
                                <p className="text-gray-600 mb-6">
                                    <strong>Última atualização:</strong> 10 de Abril de 2023
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Introdução</h2>
                                <p className="text-gray-600 mb-6">
                                    O Coffee Shops Tia Rosa valoriza a privacidade dos nossos clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você visita nosso site, utiliza nossos serviços ou interage conosco de qualquer forma.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Informações que Coletamos</h2>
                                <p className="text-gray-600 mb-4">Podemos coletar os seguintes tipos de informações:</p>
                                <ul className="text-gray-600 space-y-2 list-disc pl-6 mb-6">
                                    <li>Informações pessoais: nome, endereço de e-mail, número de telefone e endereço que você nos fornece voluntariamente, como ao preencher formulários em nosso site ou ao fazer reservas.</li>
                                    <li>Informações de pagamento: detalhes do cartão de crédito ou outras informações financeiras necessárias para processar transações.</li>
                                    <li>Informações de uso: dados sobre como você interage com nosso site, incluindo páginas visitadas, tempo gasto no site e preferências.</li>
                                    <li>Informações do dispositivo: tipo de dispositivo, sistema operacional, tipo de navegador e outras tecnologias usadas para acessar nosso site.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Como Usamos Suas Informações</h2>
                                <p className="text-gray-600 mb-4">Utilizamos suas informações para:</p>
                                <ul className="text-gray-600 space-y-2 list-disc pl-6 mb-6">
                                    <li>Fornecer, manter e melhorar nossos serviços e produtos.</li>
                                    <li>Processar transações e enviar comunicações relacionadas.</li>
                                    <li>Responder a suas perguntas, comentários ou solicitações.</li>
                                    <li>Personalizar sua experiência e fornecer conteúdo e ofertas que possam ser de seu interesse.</li>
                                    <li>Monitorar e analisar tendências, uso e atividades em nosso site.</li>
                                    <li>Detectar, prevenir e resolver problemas técnicos, fraudes ou atividades ilegais.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Compartilhamento de Informações</h2>
                                <p className="text-gray-600 mb-4">Podemos compartilhar suas informações pessoais com:</p>
                                <ul className="text-gray-600 space-y-2 list-disc pl-6 mb-6">
                                    <li>Fornecedores de serviços que nos auxiliam em nossas operações comerciais, como processamento de pagamentos, análise de dados, marketing por e-mail e suporte ao cliente.</li>
                                    <li>Autoridades governamentais, quando exigido por lei ou em resposta a processos legais válidos.</li>
                                    <li>Em caso de fusão, venda de ativos da empresa, financiamento ou aquisição, suas informações pessoais poderão ser transferidas como parte dessa transação.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Cookies e Tecnologias Semelhantes</h2>
                                <p className="text-gray-600 mb-6">
                                    Usamos cookies e tecnologias semelhantes para coletar informações sobre suas atividades em nosso site, lembrar suas preferências e personalizar sua experiência. Você pode configurar seu navegador para recusar todos ou alguns cookies ou alertá-lo quando sites definem ou acessam cookies.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Segurança de Dados</h2>
                                <p className="text-gray-600 mb-6">
                                    Implementamos medidas de segurança físicas, técnicas e administrativas para proteger suas informações contra acesso não autorizado e uso indevido. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta das suas informações.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Seus Direitos e Escolhas</h2>
                                <p className="text-gray-600 mb-4">Você tem o direito de:</p>
                                <ul className="text-gray-600 space-y-2 list-disc pl-6 mb-6">
                                    <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                                    <li>Optar por não receber comunicações de marketing.</li>
                                    <li>Solicitar uma cópia das informações pessoais que temos sobre você.</li>
                                    <li>Apresentar uma reclamação a uma autoridade de proteção de dados.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Alterações nesta Política</h2>
                                <p className="text-gray-600 mb-6">
                                    Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer alterações.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Contato</h2>
                                <p className="text-gray-600 mb-6">
                                    Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato conosco pelo e-mail: privacidade@tiarosa.com
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