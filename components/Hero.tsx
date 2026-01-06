
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";
  
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black mb-8 border border-blue-100 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          EDUCAÇÃO FINANCEIRA PARA ANGOLA
        </div>
        
        <h1 className="text-5xl md:text-8xl font-[900] text-slate-900 leading-[1.05] mb-8 tracking-tighter">
          Domina o teu dinheiro <br />
          <span className="text-blue-600">em Angola.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Organização, ganhos digitais e investimentos explicados de forma simples para quem quer começar do zero.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 active:scale-95 flex items-center justify-center gap-3"
          >
            Começar Gratuitamente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
          <a href="#plataformas" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
            Ver Ferramentas
          </a>
        </div>
      </div>
    </section>
  );
};
