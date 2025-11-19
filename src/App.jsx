import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-100 dark:bg-gray-700">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;