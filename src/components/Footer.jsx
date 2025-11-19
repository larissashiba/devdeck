import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 w-full px-3 lg:px-5 py-4 mt-auto transition-colors duration-300">
            <div className="mx-auto max-w-screen-xl sm:flex sm:items-center sm:justify-between">
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
                    &copy; 2025{" "}
                    
                    <Link 
                    to="/" 
                    className="hover:underline"
                    >
                    <span className="text-cyan-700 dark:text-cyan-500">DevDeck.com</span>
                    </Link>

                    <span className="ml-1">| Todos os direitos reservados.</span>
                </p>

                <div className="flex justify-center items-center space-x-1">
                    <a
                    href="https://github.com/larissashiba"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tooltip-target="tooltip-github"
                    className="inline-flex justify-center p-2 text-gray-500 dark:text-gray-400 rounded-lg cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-500"
                    >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span className="sr-only">Github</span>
                    </a>

                    <a
                    href="https://www.instagram.com/larixba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center p-2 text-gray-500 dark:text-gray-400 rounded-lg cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-500"
                    >
                    <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                    />
                    </svg>
                    <span className="sr-only">Instagram</span>
                    </a>

                    <div
                        id="tooltip-github"
                        role="tooltip"
                        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                    >
                        Star us on GitHub
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}