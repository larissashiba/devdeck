import React from 'react';
import ContactForm from '../components/ContactForm';

const Contato = () => {
    return (
    <div className="bg-sky-200 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-screen-md mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Nos Contate!</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
                Adoraríamos te ouvir! Por favor, preencha o formulário abaixo com quaisquer dúvidas, perguntas, feedback ou ideias sobre o nosso site.
            </p>
        <ContactForm />
        </div>
    </div>
    );
};

export default Contato;