import React, { useState } from 'react';
import logo from '../assets/logo.png';

const CriarCadastro = () => {
    const [userType, setUserType] = useState('talento'); 
    
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpfOuCnpj: '',
    });
    
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validateCpf = (cpf) => cpf.replace(/[^\d]/g, '').length === 11;
    const validateCnpj = (cnpj) => cnpj.replace(/[^\d]/g, '').length === 14;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
        setFormData(prev => ({ ...prev, cpfOuCnpj: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nome, email, cpfOuCnpj } = formData;
        
        if (!nome || !email || !cpfOuCnpj || !agreedToTerms) {
            alert('Por favor, preencha todos os campos obrigatórios e aceite os termos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (userType === 'talento' && !validateCpf(cpfOuCnpj)) {
            alert('Por favor, insira um CPF válido (11 dígitos).');
            return;
        }

        if (userType === 'empresa' && !validateCnpj(cpfOuCnpj)) {
            alert('Por favor, insira um CNPJ válido (14 dígitos).');
            return;
        }
        
        alert(`Pré-Cadastro de ${userType === 'talento' ? 'Talento' : 'Empresa'} enviado com sucesso! 
Nome: ${nome}
E-mail: ${email}
Documento: ${cpfOuCnpj}

Aguarde o e-mail para continuar o cadastro.`);

        setFormData({ nome: '', email: '', cpfOuCnpj: '' });
        setAgreedToTerms(false);
    };

    return (
        <div className="min-h-screen 
                        bg-sky-200 dark:bg-gray-700
                        flex flex-col justify-center items-center py-8 sm:px-5 lg:px-7 
                        transition-colors duration-300">
            
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <img className="w-10 h-10" src={logo} alt="Devdeck Logo" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">DevDeck</h2>
                </div>
            </div>

            <div className="mt-8 
                            bg-white dark:bg-[#1F2937] 
                            p-8 shadow-2xl rounded-xl w-full sm:max-w-md 
                            transition-colors duration-300">
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">Pré-Cadastro de Conta</h3>
                
                <div className="bg-yellow-100 dark:bg-yellow-700 border-l-4 border-yellow-400 p-4 mb-6 rounded-md">
                    <p className="text-sm text-yellow-800 dark:text-yellow-100">
                        ⚠️ **Aviso:** Este é apenas um **pré-cadastro**. As próximas etapas de validação e a criação da senha serão enviadas para o seu e-mail.
                    </p>
                </div>
                
                <div className="mb-6 flex space-x-2 p-1 bg-gray-200 dark:bg-[#374151] rounded-lg">
                    <button
                        onClick={() => handleUserTypeChange('talento')}
                        className={`w-1/2 py-2 text-sm font-medium rounded-lg transition-colors ${
                            userType === 'talento' ? 'bg-sky-700 text-white shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#4B5563]'
                        }`}
                    >
                        Sou Talento (CPF)
                    </button>
                    <button
                        onClick={() => handleUserTypeChange('empresa')}
                        className={`w-1/2 py-2 text-sm font-medium rounded-lg transition-colors ${
                            userType === 'empresa' ? 'bg-sky-700 text-white shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#4B5563]'
                        }`}
                    >
                        Sou Empresa (CNPJ)
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Completo / Razão Social</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            required
                            placeholder={userType === 'talento' ? 'Seu nome' : 'Nome da Empresa'}
                            className="
                            mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 
                            bg-gray-50 dark:bg-[#374151] 
                            text-gray-900 dark:text-white 
                            p-2.5 placeholder-gray-400 dark:placeholder-gray-400 
                            focus:ring-sky-700 focus:border-sky-700 sm:text-sm"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="nome@exemplo.com"
                            className="
                            mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 
                            bg-gray-50 dark:bg-[#374151] 
                            text-gray-900 dark:text-white 
                            p-2.5 placeholder-gray-400 dark:placeholder-gray-400 
                            focus:ring-sky-700 focus:border-sky-700 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="cpfOuCnpj" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {userType === 'talento' ? 'CPF' : 'CNPJ'} (Apenas números)
                        </label>
                        <input
                            type="text"
                            name="cpfOuCnpj"
                            id="cpfOuCnpj"
                            value={formData.cpfOuCnpj}
                            onChange={handleInputChange}
                            required
                            maxLength={userType === 'talento' ? 11 : 14}
                            placeholder={userType === 'talento' ? 'Ex: 12345678900' : 'Ex: 12345678000190'}
                            className="
                            mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 
                            bg-gray-50 dark:bg-[#374151] 
                            text-gray-900 dark:text-white 
                            p-2.5 placeholder-gray-400 dark:placeholder-gray-400 
                            focus:ring-sky-700 focus:border-sky-700 sm:text-sm"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            required
                            className="h-4 w-4 text-sky-600 border-gray-300 dark:border-gray-600 rounded focus:ring-sky-500 dark:focus:ring-sky-600"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-400">
                            Eu aceito os <a href="#" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500 font-medium">Termos e Condições</a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="
                            w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg 
                            shadow-sm text-sm font-medium text-white 
                            bg-sky-700 hover:bg-sky-800 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700 
                            transition"
                        >
                            Realizar Pré-Cadastro
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CriarCadastro;