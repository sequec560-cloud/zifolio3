
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";
  
  return (
    <section className="relative pt-24 pb-16 md:pt-44 md:pb-28 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-2xl text-[10px] md:text-xs font-[900] mb-8 border border-blue-100 shadow-sm animate-fade-in tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Educação Financeira para Angola
        </div>
        
        <h1 className="text-5xl md:text-[100px] font-[900] text-slate-900 leading-[0.95] mb-8 tracking-tighter">
          Aprende a <span className="text-blue-600">ganhar</span> <br className="hidden md:block" />
          e investir o teu dinheiro.
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          O guia prático e simples para dominares as finanças digitais em Angola. Do zero absoluto ao teu primeiro investimento.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-10 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 active:scale-95 flex items-center justify-center gap-3"
          >
            Começar Gratuitamente
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
          <a href="#plataformas" className="w-full sm:w-auto px-10 py-6 bg-white text-slate-900 border border-slate-200 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all shadow-sm">
            Ver Ferramentas
          </a>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=040" alt="Binance" className="h-8 md:h-10 object-contain" />
           <img src="https://faucetpay.io/assets/img/icon.png" alt="FaucetPay" className="h-8 md:h-10 object-contain" />
           <div className="flex items-center gap-2 font-black text-xl text-slate-900">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">R</div>
              RedotPay
           </div>
        </div>
      </div>
    </section>
  );
};
