import React from 'react';
import { Link } from 'react-router-dom';
import home1 from '../assets/home1.png'; 

const HeroSection = ({ home1 }) => { 
    return (
        <section className="bg-sky-100 dark:bg-gray-700 min-h-[600px] relative"> 
            <div className="grid max-w-screen-xl h-full px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl dark:text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Conectando Empresas a <span className="text-cyan-700">Talentos Tech</span> que fazem acontecer!
                    </h1>
                    
                    <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
                        A evolução tecnológica acontece quando profissionais capacitados se conectam a empresas com visão inovadora. Foi para construir essa ponte que a DevDeck nasceu...
                        Aqui, você se conecta aos talentos do FUTURO — profissionais que dominam o código, criam soluções inteligentes e expandem os limites do que é possível.<br/>
                    </p>
                    <h2 className="text-gray-800 mb-8 dark:text-white">Tem um projeto em mente e quer levar sua empresa ao próximo nível?</h2> 

                    <Link 
                        to="/talentos" 
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300"
                    >
                        Conheça nossos talentos!
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>

                    <Link 
                        to="/contato"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center
                        text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100
                        dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Fale com a gente
                    </Link> 
                </div>
                
                <div className="hidden lg:block absolute right-36 top-[38%] -translate-y-1/2">
                    <img
                        src={home1}
                        alt="Conectando empresas a talentos tech"
                        className="w-[650px] h-auto max-w-full object-contain"
                    />
                </div> 
            </div>
        </section>
    );
};

export default HeroSection;