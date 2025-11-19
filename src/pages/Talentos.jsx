import React, { useState } from 'react';
import profilesData from '../assets/profiles.json'; 
import ProfileCard from '../components/ProfileCard';
import TalentosSearchBar from '../components/TalentosSearchBar';
import ProfileDetailModal from '../components/ProfileDetailModal';

const Talentos = () => {
    const initialData = Array.isArray(profilesData) ? profilesData : [];
    const [filteredProfiles, setFilteredProfiles] = useState(initialData);
    const [allProfiles] = useState(initialData); 

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleSearch = (filterKey, searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

        if (!lowerCaseSearchTerm || filterKey === 'all') {
            setFilteredProfiles(allProfiles);
            return;
        }

        const newFilteredProfiles = allProfiles.filter(profile => {
            const value = profile[filterKey];

            if (!value) return false;

            if (Array.isArray(value)) {
                return value.some(item => String(item).toLowerCase().includes(lowerCaseSearchTerm));
            } else if (typeof value === 'string') {
                return value.toLowerCase().includes(lowerCaseSearchTerm);
            }
            return false;
        });

        setFilteredProfiles(newFilteredProfiles);
    };

    const openModal = (profile) => {
        setSelectedProfile(profile);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProfile(null);
    };

    return (
        <section className="bg-sky-100 py-12 dark:bg-gray-700"> 
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                
                <div className="mx-auto max-w-screen-sm text-center mb-4">
                    <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Conheça os nossos Talentos!
                    </h2>
                </div> 

                <TalentosSearchBar onSearch={handleSearch} />
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProfiles.length > 0 ? (
                        filteredProfiles.map((profile) => (
                            <ProfileCard
                                key={profile.id} 
                                nome={profile.nome}
                                cargo={profile.cargo}
                                foto={profile.foto}
                                habilidadesTecnicas={profile.habilidadesTecnicas}
                                onClick={() => openModal(profile)} 
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg text-gray-600">
                            Nenhum talento encontrado com os critérios de busca.
                        </p>
                    )}
                </div>

            </div>
            
            <ProfileDetailModal
                isOpen={isModalOpen}
                onClose={closeModal}
                profile={selectedProfile}
            />
            
        </section>
    );
};

export default Talentos;