
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-[11px] font-black text-blue-600 shadow-sm mb-8 animate-fade-in">
          EDUCAÇÃO FINANCEIRA EM ANGOLA 🇦🇴
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
          Teu kumbu, <br/>
          <span className="text-blue-600">sem estresse.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Aprende a ganhar, organizar e investir dinheiro de forma simples e segura. O guia certo para quem quer começar hoje.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/244900000000"
            className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-500/20 active:scale-95"
          >
            Começar no WhatsApp
          </a>
          <a 
            href="#problema"
            className="w-full sm:w-auto px-12 py-6 bg-slate-50 text-slate-600 rounded-[2rem] font-bold text-lg hover:bg-slate-100 transition-all"
          >
            Saber mais
          </a>
        </div>
      </div>
    </section>
  );
};
