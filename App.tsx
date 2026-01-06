
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { Platforms } from './components/Platforms';
import { Steps } from './components/Steps';
import { SpecialOffer } from './components/SpecialOffer';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Platforms />
        <Steps />
        <SpecialOffer />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
