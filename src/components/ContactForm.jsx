import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    };

    return (
    <form onSubmit={handleSubmit} className="min-h-screen-20 space-y-14">
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Seu e-mail
            </label>
            
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
            dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@outlook.com"
            required
            />
        </div>
        <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Assunto
            </label>
            <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 
            rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
            dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Deixe-nos saber como podemos ajudar você"
            required
            />
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Sua Mensagem
            </label>
            <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Insira sua mensagem aqui..."
            ></textarea>
        </div>

        <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300
        dark:text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
            Enviar Mensagem
        </button>
        </form>
    );
};

export default ContactForm;