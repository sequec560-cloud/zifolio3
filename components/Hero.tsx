
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";
  
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[700px] bg-gradient-to-b from-blue-100/30 to-transparent rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black mb-10 border border-blue-100 shadow-sm animate-fade-in tracking-[0.2em] uppercase">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          Educação Financeira Simples • Angola
        </div>
        
        <h1 className="text-5xl md:text-[110px] font-[900] text-slate-900 leading-[0.9] mb-10 tracking-tighter animate-fade-in">
          Aprende a <span className="text-blue-600">ganhar</span> <br className="hidden md:block" />
          e investir o teu dinheiro.
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 mb-14 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
          O guia prático para dominares as finanças digitais. Do zero absoluto ao teu primeiro cartão VISA internacional, tudo a partir de Angola.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-12 py-7 bg-blue-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 active:scale-95 flex items-center justify-center gap-3"
          >
            Começar Grátis
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
          <a href="#plataformas" className="w-full sm:w-auto px-12 py-7 bg-white text-slate-900 border border-slate-200 rounded-[2.5rem] font-black text-xl hover:bg-slate-50 transition-all shadow-sm">
            Ver Plataformas
          </a>
        </div>
        
        <div className="mt-24 flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 items-center">
           <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=040" alt="Binance" className="h-10 md:h-12 object-contain" />
           <img src="https://faucetpay.io/assets/img/icon.png" alt="FaucetPay" className="h-10 md:h-12 object-contain" />
           <div className="flex items-center gap-3 font-black text-2xl text-slate-900">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-base">R</div>
              RedotPay
           </div>
        </div>
      </div>
    </section>
  );
};
