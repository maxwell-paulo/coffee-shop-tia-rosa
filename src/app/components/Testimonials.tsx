export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Ana Paula',
            role: 'Cliente Frequente',
            content: 'O café da Tia Rosa é simplesmente o melhor da cidade! O ambiente é acolhedor e o atendimento é sempre excelente. Meu lugar favorito para trabalhar remotamente.',
            avatar: '/images/avatar-1.jpg', // Espaço para imagem
        },
        {
            id: 2,
            name: 'Ricardo Oliveira',
            role: 'Empresário Local',
            content: 'Sempre trago meus clientes aqui para reuniões. O café é excepcional e os bolos são divinos. Um verdadeiro tesouro em nossa cidade!',
            avatar: '/images/avatar-2.jpg', // Espaço para imagem
        },
        {
            id: 3,
            name: 'Mariana Silva',
            role: 'Estudante',
            content: 'Descobri o Coffee Shops Tia Rosa durante a faculdade e virou meu refúgio para estudar. Wi-Fi rápido, cafezinho delicioso e preços justos!',
            avatar: '/images/avatar-3.jpg', // Espaço para imagem
        },
    ];

    return (
        <section className="py-16 bg-brown-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brown-900 mb-4">O Que Nossos Clientes Dizem</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A opinião de quem já experimentou nossa experiência é o que nos motiva a melhorar cada dia mais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                                    {/* Placeholder para avatar */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Avatar</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-brown-900">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                            <div className="mt-4 flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-amber-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 