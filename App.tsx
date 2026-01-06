
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { Platforms } from './components/Platforms';
import { SpecialOffer } from './components/SpecialOffer';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        
        {/* Pain points - Fast reading */}
        <Problems />

        {/* The core offer - Checklist style */}
        <Solution />

        {/* Trust markers - Platforms */}
        <Platforms />

        {/* Specific Help - Conversion focused */}
        <SpecialOffer />
        
        {/* Final CTA - Scrolly conversion */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Começa hoje.</h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              O primeiro passo é simples. Clica no botão abaixo e fala connosco no WhatsApp.
            </p>
            <a 
              href="https://wa.me/244900000000?text=Olá! Quero começar minha jornada financeira com o Zifolio."
              className="inline-flex items-center gap-4 w-full sm:w-auto justify-center px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 active:scale-95"
            >
              COMEÇAR AGORA NO WHATSAPP
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
