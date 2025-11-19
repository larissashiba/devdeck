import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
    return (
        <nav className="sticky top-0 
                        bg-white dark:bg-gray-900 
                        px-4 lg:px-6 py-2.5 
                        shadow-md dark:shadow-lg dark:shadow-gray-800/50 
                        z-50 transition-colors duration-300"> 
            
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"> 
                <Link to="/" className="flex items-center">
                    <img src={logo}
                        className="h-auto sm:h-9"
                        alt="DevDeck Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap 
                    text-cyan-700 dark:text-gray-100">DevDeck</span>
                </Link> 
                
                <div className="flex items-center lg:order-2 space-x-3"> 

                    <Link 
                        to="/cadastro" 
                        className="text-cyan-800 dark:text-cyan-400 
                        font-medium text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
                        focus:outline-none 
                        hover:bg-gray-100 dark:hover:bg-gray-800 
                        rounded-lg transition duration-150"
                    >
                        Cadastre-se
                    </Link>
                    <DarkModeToggle />

                </div> 

                <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-cyan-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-cyan-500 lg:p-0 transition duration-150">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/talentos" className="block py-2 pr-4 pl-3 text-cyan-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-cyan-500 lg:p-0 transition duration-150">
                                Talentos
                            </Link>
                        </li>
                        <li>
                            <Link to="/contato" className="block py-2 pr-4 pl-3 text-cyan-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-cyan-500 lg:p-0 transition duration-150">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;