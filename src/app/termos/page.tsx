import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Termos() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de Uso</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Leia atentamente os termos que regem o uso do nosso site e serviços.
                        </p>
                    </div>
                </div>

                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg">
                                <p className="text-gray-600 mb-6">
                                    <strong>Última atualização:</strong> 10 de Abril de 2023
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Aceitação dos Termos</h2>
                                <p className="text-gray-600 mb-6">
                                    Ao acessar ou usar o site do Coffee Shops Tia Rosa, você concorda em ficar vinculado a estes Termos de Uso. Se você não concordar com algum aspecto destes termos, solicitamos que não utilize nosso site ou serviços.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Uso do Site</h2>
                                <p className="text-gray-600 mb-6">
                                    Você concorda em usar o site apenas para propósitos legais e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro. Tal restrição ou inibição inclui, sem limitação, conduta que seja ilegal ou que possa assediar ou causar angústia ou inconveniência a qualquer pessoa, além da transmissão de conteúdo obsceno ou ofensivo.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Propriedade Intelectual</h2>
                                <p className="text-gray-600 mb-6">
                                    Todo o conteúdo, incluindo texto, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade do Coffee Shops Tia Rosa ou de seus fornecedores de conteúdo e está protegido por leis internacionais de direitos autorais. A composição e layout do site também são propriedade exclusiva do Coffee Shops Tia Rosa e estão igualmente protegidos por leis internacionais de direitos autorais.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Conteúdo do Usuário</h2>
                                <p className="text-gray-600 mb-6">
                                    Ao enviar, postar ou exibir conteúdo em nosso site (como avaliações, comentários, feedback, etc.), você concede ao Coffee Shops Tia Rosa uma licença não exclusiva, isenta de royalties, perpétua, irrevogável e totalmente sublicenciável para usar, reproduzir, modificar, adaptar, publicar, traduzir, criar trabalhos derivados, distribuir e exibir esse conteúdo em todo o mundo em qualquer mídia.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Reservas e Pedidos</h2>
                                <p className="text-gray-600 mb-6">
                                    Ao fazer uma reserva ou pedido através do nosso site, você confirma que todas as informações fornecidas são verdadeiras e precisas. Reservamo-nos o direito de recusar ou cancelar qualquer reserva ou pedido, a nosso critério exclusivo, se suspeitarmos de fraude, erro ou outra atividade suspeita.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Cancelamentos e Reembolsos</h2>
                                <p className="text-gray-600 mb-6">
                                    As políticas de cancelamento e reembolso para reservas e pedidos estão sujeitas às nossas políticas em vigor no momento da reserva ou pedido. Recomendamos que você revise essas políticas antes de fazer uma reserva ou pedido.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Limitação de Responsabilidade</h2>
                                <p className="text-gray-600 mb-6">
                                    O Coffee Shops Tia Rosa não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar nosso site ou serviços. Isto inclui, mas não se limita a, danos por perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Links para Sites de Terceiros</h2>
                                <p className="text-gray-600 mb-6">
                                    Nosso site pode conter links para sites de terceiros que não são de propriedade ou controlados pelo Coffee Shops Tia Rosa. Não temos controle e não assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros. Você reconhece e concorda que o Coffee Shops Tia Rosa não será responsável, direta ou indiretamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou confiança em qualquer conteúdo, produtos ou serviços disponíveis em ou através de tais sites.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Modificações</h2>
                                <p className="text-gray-600 mb-6">
                                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Se fizermos alterações, atualizaremos a data da &quot;Última atualização&quot; no início destes Termos. Seu uso contínuo do site após a publicação de quaisquer alterações constitui sua aceitação desses novos termos.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Lei Aplicável</h2>
                                <p className="text-gray-600 mb-6">
                                    Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem dar efeito a quaisquer princípios de conflitos de leis.
                                </p>

                                <h2 className="text-2xl font-bold text-brown-900 mt-8 mb-4">Contato</h2>
                                <p className="text-gray-600 mb-6">
                                    Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco em termos@tiarosa.com
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