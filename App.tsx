import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Rules from './components/Rules';
import Plan from './components/Plan';
import Risk from './components/Risk';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Team />
        <Rules />
        <Plan />
        <Risk />
      </main>
      <Footer />
    </div>
  );
};

export default App;