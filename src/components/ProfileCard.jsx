import React from 'react';

const ProfileCard = ({ nome, cargo, foto, habilidadesTecnicas, onClick }) => {
    return (
        <div 
        className="flex bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 p-4
        transition duration-300 hover:shadow-xl cursor-pointer
        dark:bg-gray-500"
        onClick={onClick} 
        >
            
            <div className="flex-shrink-0 w-28 h-28 mr-4">
                <img
                className="w-full h-full object-cover rounded-lg"
                src={foto}
                alt={`Foto de ${nome}`}
                />
            </div>
            
            <div className="flex flex-col flex-grow justify-center">
                <div className="mb-2">
                    <h3 className="text-lg font-bold tracking-tight text-gray-900 leading-tight dark:text-white">
                        {nome}
                    </h3>
                    
                    <span className="text-sm text-gray-600 leading-tight block dark:text-white">
                        {cargo}
                    </span>
                </div>
            <div>

            <p className="mb-1 text-xs font-semibold text-gray-700 dark:text-white">Skills Técnicas:</p>
            <div className="flex flex-wrap gap-1.5">
                {habilidadesTecnicas.slice(0, 4).map((skill, index) => (
                    <span
                    key={index}
                    className="px-2.5 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
                    >
                    {skill}
                    </span>
                ))}
                    {habilidadesTecnicas.length > 4 && (
                        <span className="px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                            +{habilidadesTecnicas.length - 4}
                        </span>
                    )}
            </div>
        </div>
    </div>
    </div>
    );
};

export default ProfileCard;