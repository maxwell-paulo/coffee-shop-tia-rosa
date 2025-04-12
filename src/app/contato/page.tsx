'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        assunto: 'Informações',
    });
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnviando(true);
        setTimeout(() => {
            setEnviando(false);
            setEnviado(true);
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                mensagem: '',
                assunto: 'Informações',
            });
            setTimeout(() => {
                setEnviado(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="bg-brown-800 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
                        <p className="text-lg max-w-3xl text-white/80">
                            Estamos sempre à disposição para ouvir você. Entre em contato conosco para fazer um pedido, reservar uma mesa ou simplesmente dizer olá!
                        </p>
                    </div>
                </div>

                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-brown-900 mb-6">Envie-nos uma mensagem</h2>
                                <p className="text-gray-600 mb-8">
                                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                                </p>

                                {enviado && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                        <strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome completo</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="assunto" className="block text-gray-700 font-medium mb-2">Assunto</label>
                                        <select
                                            id="assunto"
                                            name="assunto"
                                            value={formData.assunto}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                                        >
                                            <option value="Informações">Informações gerais</option>
                                            <option value="Reservas">Reservas</option>
                                            <option value="Eventos">Eventos privados</option>
                                            <option value="Feedback">Comentários e sugestões</option>
                                            <option value="Outros">Outros</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            value={formData.mensagem}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-brown-800 text-white rounded-full hover:bg-brown-700 transition-colors w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                        disabled={enviando}
                                    >
                                        {enviando ? 'Enviando...' : 'Enviar mensagem'}
                                    </button>
                                </form>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-brown-900 mb-6">Informações de contato</h2>
                                <p className="text-gray-600 mb-8">
                                    Você também pode nos visitar, ligar ou enviar um e-mail diretamente.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                                            <MdLocationOn className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-brown-900">Endereço</h3>
                                            <p className="text-gray-600">Rua do Café, 123</p>
                                            <p className="text-gray-600">Bairro Aroma, Cidade - Estado</p>
                                            <p className="text-gray-600">CEP: 00000-000</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                                            <MdPhone className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-brown-900">Telefone</h3>
                                            <p className="text-gray-600">(11) 1234-5678</p>
                                            <p className="text-gray-600">(11) 98765-4321 (WhatsApp)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                                            <MdEmail className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-brown-900">Email</h3>
                                            <p className="text-gray-600">contato@tiarosa.com</p>
                                            <p className="text-gray-600">eventos@tiarosa.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                                            <MdAccessTime className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-brown-900">Horário de Funcionamento</h3>
                                            <p className="text-gray-600">Segunda - Sexta: 7:00 - 20:00</p>
                                            <p className="text-gray-600">Sábado: 8:00 - 22:00</p>
                                            <p className="text-gray-600">Domingo: 9:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-lg font-bold text-brown-900 mb-4">Siga-nos nas redes sociais</h3>
                                    <div className="flex space-x-4">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-brown-800 p-3 rounded-full text-white hover:bg-brown-700 transition-colors">
                                            <FaFacebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-brown-800 p-3 rounded-full text-white hover:bg-brown-700 transition-colors">
                                            <FaInstagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-brown-800 p-3 rounded-full text-white hover:bg-brown-700 transition-colors">
                                            <FaTwitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap
                    title="Nossa Localização"
                    subtitle="Estamos localizados em uma região central, de fácil acesso e com estacionamento próximo."
                />

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-brown-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Como Chegar</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>A 5 minutos a pé da estação de metrô Central</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Linhas de ônibus 123, 456 e 789</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Estacionamento pago disponível na rua</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-brown-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Acessibilidade</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Estabelecimento com entrada adaptada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Banheiros acessíveis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Menu em Braille disponível</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-brown-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-brown-900 mb-4">Estacionamento</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Estacionamento público a 50m</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Vagas para clientes (validamos seu ticket)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AiOutlineCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                                        <span>Bicicletário gratuito no local</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 