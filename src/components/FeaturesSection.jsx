import React from 'react';
import { User, Filter, Shield, MessageSquare, HelpCircle, FileText } from 'lucide-react';

const featuresData = [
    {
        iconComponent: User, 
        title: "Perfis Completos e Reais",
        description: "Perfís completos com informações pessoais e acadêmicas, experiências e habilidades técnicas, com informações verificadas."
    },
    {
        iconComponent: Filter, 
        title: "Ecossistema Tech Dedicado", 
        description: "Ambiente pensado para exclusivamente para as áreas envolvendo tecnologia, com Filtros inteligentes para encontrar o perfil ideal para o seu projeto."
    },
    {
        iconComponent: Shield, 
        title: "Segurança da Plataforma",
        description: "Garantimos um ambiente seguro para empresas e profissionais."
    },
    {
        iconComponent: MessageSquare,
        title: "Comunicação Direta",
        description: "Comunicação integrada, onde você poderá tirar dúvidas contatando algum dos talentos diretamente."
    },
    {
        iconComponent: HelpCircle, 
        title: "Ajuda e Suporte",
        description: "Suporte dedicado para qualquer necessidade, em caso de dúvidas, basta nos contatar."
    },
    {
        iconComponent: FileText,
        title: "Contratação sem burocracia",
        description: "Liberdade para negociar valores, verificar disponibilidade e prazos conforme suas preferências e necessidades."
    }
];


const FeaturesSection = () => {
    const primaryColorClasses = 'text-cyan-700 dark:text-white'; 
    const bgColorClasses = 'bg-cyan-100 dark:bg-gray-700';

    return (
        <section className="bg-sky-100 dark:bg-gray-700 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-8 mb-8">
            <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Sua ponte para o futuro do mercado Tech.
                </h2>
                <p className="text-gray-600 sm:text-xl dark:text-white">
                    Somos uma plataforma que conecta empresas a profissionais de tecnologia especializados em serviços freelance.
                    Aqui, talentos ganham visibilidade e empresas contratam com rapidez e segurança.
                    Nosso objetivo é criar um ambiente onde a tecnologia encontra as pessoas que fazem tudo acontecer.
                </p>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {featuresData.map((feature, index) => {
                    const IconComponent = feature.iconComponent;

                    return (
                        <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 dark:bg-gray-700 dark:text-white">
                            <div className={`flex justify-center items-center mb-4 w-12 h-12 rounded-full ${bgColorClasses} lg:h-14 lg:w-14 ring-4 ring-cyan-200`}>
                                <IconComponent 
                                    className={`w-6 h-6 ${primaryColorClasses} lg:w-8 lg:h-8`} 
                                    aria-hidden="true" 
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-extrabold text-gray-800 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 dark:text-white">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturesSection;
