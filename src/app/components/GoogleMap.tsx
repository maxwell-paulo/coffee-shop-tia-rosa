import React from 'react';

interface GoogleMapProps {
    title?: string;
    subtitle?: string;
}

export default function GoogleMap({ title, subtitle }: GoogleMapProps) {
    const latitude = -25.363;
    const longitude = -131.044;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                {title && (
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brown-900 mb-4">{title}</h2>
                        {subtitle && (
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641063.385384106!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzQ2LjgiUyAxMzHCsDAyJzM4LjQiVw!5e0!3m2!1spt-BR!2sbr!4v1624924416052!5m2!1spt-BR!2sbr`}
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-hidden="false"
                        tabIndex={0}
                    ></iframe>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>Estamos em um local único no meio do oceano! (Esta é apenas uma demonstração)</p>
                </div>
            </div>
        </section>
    );
} 