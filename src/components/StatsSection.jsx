import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-sky-100 dark:bg-gray-700"> 
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 dark:text-white sm:grid-cols-4">
                    
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-cyan-700">+50</dt> 
                        <dd className="font-light text-gray-500 dark:text-white">Talentos cadastrados</dd>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-cyan-700">+300</dt>
                        <dd className="font-light text-gray-500 dark:text-white">Projetos desenvolvidos</dd>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-cyan-700">+50</dt>
                        <dd className="font-light text-gray-500 dark:text-white">Empresas parceiras</dd>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-cyan-700">4.8/5</dt>
                        <dd className="font-light text-gray-500 dark:text-white">Média de Satisfação</dd>
                    </div>
                    
                </dl>
            </div>
        </section>
    );
};

export default StatsSection;