import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Talentos from '../pages/Talentos';
import Cadastro from '../pages/Cadastro';

const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/talentos" element={<Talentos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<h1 className="text-4xl text-red-600 p-8">404 - Página Não Encontrada</h1>} />
    </Routes>
    );
};

export default AppRoutes;