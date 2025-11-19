import React, { useState } from 'react';

const filterCategories = [
    { key: 'all', label: 'Todos os Filtros' },
    { key: 'area', label: 'Área' },
    { key: 'localizacao', label: 'Cidade' },
    { key: 'cargo', label: 'Cargo' },
    { key: 'habilidadesTecnicas', label: 'Skills' },
];

const TalentosSearchBar = ({ onSearch }) => {
    const [selectedFilter, setSelectedFilter] = useState(filterCategories[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        setIsDropdownOpen(false); 
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(selectedFilter.key, searchTerm);
    };

    return (
        <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto px-4 sm:px-0 mt-8 mb-12">
            <div className="flex shadow-lg rounded-lg">
                <button
                    id="dropdown-button"
                    type="button"
                    className="inline-flex items-center shrink-0 z-10 text-sky-700 bg-gray-100
                    border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200
                    font-medium rounded-l-lg text-sm px-4 py-2.5 focus:outline-none relative
                    dark:bg-gray-700 dark:text-white dark:border-gray-400"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
                    {selectedFilter.label}
                    <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
                </button>
                
                {isDropdownOpen && (
                    <div className="absolute mt-12 z-20 bg-white border border-gray-200 rounded-lg shadow-xl w-44 dark:bg-gray-700">
                        <ul className="p-2 text-sm text-gray-700 font-medium" aria-labelledby="dropdown-button">
                            {filterCategories.map((filter) => (
                                <li key={filter.key}>
                                    <a
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); handleFilterSelect(filter); }}
                                        className={`block p-2 rounded-md ${selectedFilter.key === filter.key ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-700 dark:text-white'}`}
                                    >
                                        {filter.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <input 
                    type="search"
                    id="search-dropdown"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-3 py-2.5 bg-white border border-gray-300 text-gray-900
                    text-sm focus:ring-sky-500 focus:border-sky-500
                    block w-full placeholder:text-gray-400
                    dark:bg-gray-700 dark:text-white"
                    placeholder={`Buscar por ${selectedFilter.label}...`}
                    required
                />

                <button 
                    type="submit" 
                    className="inline-flex items-center text-white
                    bg-sky-700 hover:bg-sky-500 box-border border border-transparent
                    focus:ring-4 focus:ring-sky-300 shadow-sm font-medium rounded-r-lg text-sm px-4 py-2.5 focus:outline-none
                    dark:bg-gray-900 dark:text-white"
                >
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                    Buscar
                </button>
            </div>
        </form>
    );
};

export default TalentosSearchBar;