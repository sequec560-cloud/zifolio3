
import React, { useState, useEffect } from 'react';
import { ChatBot } from './components/ChatBot';

const ZIFOLIO_WHATSAPP = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const affiliateLinks = [
    {
      name: "Binance",
      description: "A maior corretora do mundo. Ideal para guardar e investir em dólares digitais (USDT).",
      link: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_004HP7KLU9",
      icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=040",
      color: "bg-yellow-50"
    },
    {
      name: "RedotPay",
      description: "Cartão VISA digital que funciona em Angola. Paga Netflix, Spotify e compras online.",
      link: "https://url.hk/i/pt/z68kp",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/14/66/44146607-4e6f-7988-874e-6e27339890f5/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.jpg",
      color: "bg-red-50"
    },
    {
      name: "FaucetPay",
      description: "Começa a ganhar pequenas frações de cripto grátis. Ideal para quem tem zero capital.",
      link: "https://faucetpay.io/?r=3535317",
      icon: "https://faucetpay.io/assets/img/icon.png",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">Z</div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">ZIFOLIO</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={ZIFOLIO_WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:block text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors">
              Comunidade
            </a>
            <a href={ZIFOLIO_WHATSAPP} target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
              Começar Grátis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-bounce">
            <span>🇦🇴</span> Educação Financeira para Angola
          </div>
          <h1 className="text-5xl md:text-7xl font-[800] text-slate-900 leading-[1.1] tracking-tight mb-8">
            Aprende a ganhar e <br />
            <span className="text-blue-600">gerir o teu dinheiro.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Educação financeira simples e direta. Do zero aos primeiros ganhos digitais, sem promessas falsas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={ZIFOLIO_WHATSAPP} className="px-8 py-5 cta-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 transition-all active:scale-95">
              Entrar na Comunidade WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Affiliate Platforms */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Plataformas que Recomendamos</h2>
            <p className="text-slate-500 font-medium">As ferramentas essenciais para a tua liberdade financeira e compras online.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {affiliateLinks.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer" className="bento-card group block p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-3 shadow-inner`}>
                  <img src={p.icon} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  {p.name}
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {p.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Bento */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-blue-600 rounded-[3rem] p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all"></div>
              <h3 className="text-3xl font-black mb-4 relative z-10">O que vais aprender</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3 font-bold text-blue-50">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">✓</div>
                  Organização financeira básica e poupança
                </li>
                <li className="flex items-center gap-3 font-bold text-blue-50">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">✓</div>
                  Como ganhar e guardar em Dólar através de Cripto
                </li>
                <li className="flex items-center gap-3 font-bold text-blue-50">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">✓</div>
                  Pagamentos internacionais e cartões digitais
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-between">
              <div>
                <span className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4 block">Mentoria</span>
                <h3 className="text-2xl font-black mb-4 leading-tight">Precisas de ajuda direta?</h3>
              </div>
              <a href={ZIFOLIO_WHATSAPP} className="bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-center hover:bg-blue-50 transition-colors">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">Z</div>
                <span className="text-xl font-black text-slate-900 tracking-tighter">ZIFOLIO</span>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Transformando a educação financeira em algo simples para todos os angolanos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Acesso</h4>
                <ul className="space-y-2 text-sm font-medium text-slate-500">
                  <li><a href={ZIFOLIO_WHATSAPP} className="hover:text-blue-600">Comunidade</a></li>
                  <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Informação</h4>
                <ul className="space-y-2 text-sm font-medium text-slate-500">
                  <li><a href="#" className="hover:text-blue-600">Sobre nós</a></li>
                  <li><a href="#" className="hover:text-blue-600">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-50 text-center md:text-left">
            <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">
              ZIFOLIO &copy; {new Date().getFullYear()} • UM PRODUTO DIBUCO BRAND • EDUCAÇÃO E TECNOLOGIA.
            </p>
          </div>
        </div>
      </footer>

      {/* Intelligent AI Assistant & Support */}
      <ChatBot />
    </div>
  );
};

export default App;
