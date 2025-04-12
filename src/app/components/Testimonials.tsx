import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

import logo from '../../assets/images/logos/logo.png';
import avatar1 from '../../assets/images/testimonials/avatar-1.png';
import avatar2 from '../../assets/images/testimonials/avatar-2.png';
import avatar3 from '../../assets/images/testimonials/avatar-3.png';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Ana Paula',
            role: 'Cliente Frequente',
            content: 'O café da Tia Rosa é simplesmente o melhor da cidade! O ambiente é acolhedor e o atendimento é sempre excelente. Meu lugar favorito para trabalhar remotamente.',
            avatar: avatar1,
        },
        {
            id: 2,
            name: 'Ricardo Oliveira',
            role: 'Empresário Local',
            content: 'Sempre trago meus clientes aqui para reuniões. O café é excepcional e os bolos são divinos. Um verdadeiro tesouro em nossa cidade!',
            avatar: avatar2,
        },
        {
            id: 3,
            name: 'Mariana Silva',
            role: 'Estudante',
            content: 'Descobri o Coffee Shops Tia Rosa durante a faculdade e virou meu refúgio para estudar. Wi-Fi rápido, cafezinho delicioso e preços justos!',
            avatar: avatar3,
        },
    ];

    return (
        <section className="py-16 bg-brown-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="relative w-12 h-12 bg-amber-100 rounded-full p-2">
                            <Image
                                src={logo}
                                alt="Coffee Shops Tia Rosa"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-brown-900 mb-4">O Que Nossos Clientes Dizem</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A opinião de quem já experimentou nossa experiência é o que nos motiva a melhorar cada dia mais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`Avatar de ${testimonial.name}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brown-900">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                            <div className="mt-4 flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className="w-5 h-5 text-amber-500"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 