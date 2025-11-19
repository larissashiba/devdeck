import React, { useState } from 'react';
import logo from '../assets/logo.png';

const validateCNPJ = (cnpj) => {
    const cleanedCNPJ = cnpj.replace(/[^\d]+/g, '');
    return cleanedCNPJ.length === 14;
};

const StarRating = ({ rating, onRatingChange }) => {
    return (
        <div className="flex justify-center space-x-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => onRatingChange(star)}
                    className={`text-2xl transition-colors ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
                    }`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};


const ProfileDetailModal = ({ isOpen, onClose, profile }) => {
    
    if (!isOpen || !profile) return null;

    const [showMessageForm, setShowMessageForm] = useState(false);
    const [showRecommendForm, setShowRecommendForm] = useState(false);
    
    const [messageFormData, setMessageFormData] = useState({
        nomeEmpresa: '',
        cnpj: '',
        projeto: ''
    });
    const [cnpjError, setCnpjError] = useState('');

    const [recommendFormData, setRecommendFormData] = useState({
        rating: 0,
        projetoRealizado: ''
    });

    const handleRecommendClick = () => {
        setShowRecommendForm(true);
        setShowMessageForm(false);
    };

    const handleSendMessageClick = () => {
        setShowMessageForm(true);
        setShowRecommendForm(false);
    };

    const handleMessageInputChange = (e) => {
        const { name, value } = e.target;
        setMessageFormData({ ...messageFormData, [name]: value });
        if (name === 'cnpj') setCnpjError('');
    };

    const handleRecommendInputChange = (e) => {
        const { name, value } = e.target;
        setRecommendFormData({ ...recommendFormData, [name]: value });
    };

    const handleRatingChange = (newRating) => {
        setRecommendFormData({ ...recommendFormData, rating: newRating });
    };

    const handleSendMessageSubmit = (e) => {
        e.preventDefault();
        
        if (!validateCNPJ(messageFormData.cnpj)) {
            setCnpjError('Por favor, insira um CNPJ válido com 14 dígitos.');
            return;
        }

        alert(`Mensagem Enviada!
                Nome da Empresa: ${messageFormData.nomeEmpresa}
                CNPJ: ${messageFormData.cnpj}
                Projeto: ${messageFormData.projeto}
                (Ação a ser integrada com serviço de backend/email)`);
        
            setMessageFormData({ nomeEmpresa: '', cnpj: '', projeto: '' });
            setShowMessageForm(false);
        };
    
    const handleRecommendSubmit = (e) => {
        e.preventDefault();

        if (recommendFormData.rating === 0) {
            alert('Por favor, selecione uma avaliação de 1 a 5 estrelas.');
            return;
        }

        alert(`Recomendação Enviada!
                Profissional: ${profile.nome}
                Avaliação: ${recommendFormData.rating} estrelas.
                Projeto Realizado: ${recommendFormData.projetoRealizado}
                (Ação a ser integrada com backend)`);

        setRecommendFormData({ rating: 0, projetoRealizado: '' });
        setShowRecommendForm(false);
    };

    let modalContent;

    if (showMessageForm) {
        modalContent = (
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Enviar Proposta de Projeto para {profile.nome}</h4>
                <form onSubmit={handleSendMessageSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-gray-700">Nome da Empresa</label>
                        <input
                            type="text"
                            name="nomeEmpresa"
                            id="nomeEmpresa"
                            value={messageFormData.nomeEmpresa}
                            onChange={handleMessageInputChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-700 focus:ring-sky-700 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ (apenas números)</label>
                        <input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            value={messageFormData.cnpj}
                            onChange={handleMessageInputChange}
                            required
                            maxLength="14"
                            className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm p-2 border ${cnpjError ? 'border-red-500' : 'border-gray-300 focus:border-sky-700 focus:ring-sky-700'}`}
                        />
                        {cnpjError && <p className="mt-1 text-xs text-red-500">{cnpjError}</p>}
                    </div>
                    <div>
                        <label htmlFor="projeto" className="block text-sm font-medium text-gray-700">Descreva o Projeto que Deseja Realizar</label>
                        <textarea
                            name="projeto"
                            id="projeto"
                            rows="4"
                            value={messageFormData.projeto}
                            onChange={handleMessageInputChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-700 focus:ring-sky-700 sm:text-sm p-2 border"
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setShowMessageForm(false)}
                            className="px-3.5 py-1.5 text-gray-700 bg-gray-200 font-semibold rounded-lg hover:bg-gray-300 transition text-xs"
                        >
                            Voltar
                        </button>
                        <button
                            type="submit"
                            className="px-3.5 py-1.5 bg-sky-700 text-white font-semibold rounded-lg shadow-md hover:bg-sky-900 transition text-xs"
                        >
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        );
    } else if (showRecommendForm) {
        modalContent = (
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Recomendar {profile.nome}</h4>
                <form onSubmit={handleRecommendSubmit} className="space-y-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Avalie a qualidade do trabalho de {profile.nome}:</p>
                        <StarRating rating={recommendFormData.rating} onRatingChange={handleRatingChange} />
                    </div>
                    
                    <div>
                        <label htmlFor="projetoRealizado" className="block text-sm font-medium text-gray-700">Descreva o Projeto que você realizou com {profile.nome}</label>
                        <textarea
                            name="projetoRealizado"
                            id="projetoRealizado"
                            rows="4"
                            value={recommendFormData.projetoRealizado}
                            onChange={handleRecommendInputChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-700 focus:ring-sky-700 sm:text-sm p-2 border"
                        ></textarea>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setShowRecommendForm(false)}
                            className="px-3.5 py-1.5 text-gray-700 bg-gray-200 font-semibold rounded-lg hover:bg-gray-300 transition text-xs"
                        >
                            Voltar
                        </button>
                        <button
                            type="submit"
                            className="px-3.5 py-1.5 bg-sky-700 text-white font-semibold rounded-lg shadow-md hover:bg-sky-900 transition text-xs"
                        >
                            Recomendar
                        </button>
                    </div>
                </form>
            </div>
        );
    } else {
        modalContent = (
            <div className="space-y-6">
                
                <div className="text-center pb-3 border-b border-gray-100">
                    <p className="text-lg font-semibold text-gray-800">{profile.cargo}</p>
                    <p className="text-xs text-gray-500">{profile.localizacao}</p>
                </div>

                <section>
                    <h3 className="text-md font-bold pb-2 mb-3 text-gray-800">Histórico e Skills</h3>
                    <ol className="relative border-l border-gray-300 ml-3">
                        {profile.experiencias && profile.experiencias.map((exp, index) => (
                            <li key={`exp-${index}`} className="mb-6 ml-6">
                                <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-sky-500 rounded-full -left-1 ring-6 ring-white"></span>
                                <h4 className="font-semibold text-sm text-gray-800">Experiência: {exp.cargo}</h4>
                                <p className="text-gray-600 text-xs">{exp.empresa} ({exp.inicio} - {exp.fim})</p>
                                <p className="text-xs text-gray-500 mt-0.5">{exp.descricao}</p>
                            </li>
                        ))}

                        {profile.formacao && profile.formacao.map((item, index) => (
                            <li key={`form-${index}`} className="mb-6 ml-6">
                                <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-sky-500 rounded-full -left-1 ring-6 ring-white"></span>
                                <h4 className="font-semibold text-sm text-gray-800">Formação: {item.curso}</h4>
                                <span className="text-xs text-gray-600">
                                    {item.instituicao} ({item.ano})
                                </span>
                            </li>
                        ))}
                        

                        {profile.habilidadesTecnicas && profile.habilidadesTecnicas.length > 0 && (
                            <li className="mb-6 ml-6">
                                <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-sky-500 rounded-full -left-1 ring-6 ring-white"></span>
                                <h4 className="font-semibold text-sm text-gray-800 mb-2">Habilidades Técnicas</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {profile.habilidadesTecnicas.map((skill, index) => (
                                        <span key={index} className="px-2.5 py-1 text-xs font-medium text-white bg-sky-700 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        )}
                        

                        {(profile.softSkills && profile.softSkills.length > 0) || (profile.areaInteresses && profile.areaInteresses.length > 0) ? (
                            <li className="mb-6 ml-6">
                                <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-sky-500 rounded-full -left-1 ring-6 ring-white"></span> 
                                <h4 className="font-semibold text-sm text-gray-800 mb-2">Soft Skills & Interesses</h4>
                                
                                {profile.softSkills && profile.softSkills.length > 0 && (
                                    <div className="mb-3">
                                        <p className="font-medium text-xs text-gray-700 mb-1">Soft Skills:</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {profile.softSkills.map((skill, index) => (
                                                <span key={index} className="px-2.5 py-1 text-xs font-medium text-white bg-sky-700 rounded-full"> {/* CORRIGIDO: bg-sky-700 */}
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {profile.areaInteresses && profile.areaInteresses.length > 0 && (
                                    <div>
                                        <p className="font-medium text-xs text-gray-700 mb-1">Áreas de Interesse:</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {profile.areaInteresses.map((interesse, index) => (
                                                <span key={index} className="px-2.5 py-1 text-xs font-medium text-white bg-sky-700 rounded-full"> {/* CORRIGIDO: bg-sky-700 */}
                                                    {interesse}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ) : null}
                    </ol>
                </section>

                <div className="flex justify-end space-x-3 border-t border-gray-100 pt-4">
                    <button
                        onClick={handleRecommendClick}
                        className="px-3.5 py-1.5 bg-sky-700 text-white font-semibold rounded-lg shadow-md hover:bg-sky-900 transition text-xs"
                    >
                        Recomendar
                    </button>
                    <button
                        onClick={handleSendMessageClick}
                        className="px-3.5 py-1.5 bg-sky-700 text-white font-semibold rounded-lg shadow-md hover:bg-sky-900 transition text-xs"
                    >
                        Enviar Mensagem
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center py-6">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-cyan-700">
                <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                DevDeck
            </a>
            
            <div className="bg-white rounded-lg shadow-2xl w-125 max-h-[75vh] overflow-y-auto mx-4 p-6 transform transition-all"> 
                
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3"> 
                    <h2 className="text-xl font-bold text-gray-900">{profile.nome}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-900 transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {modalContent}
                
            </div>
        </div>
    );
};

export default ProfileDetailModal;