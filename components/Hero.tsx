
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";
  
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-black text-blue-600 mb-4 tracking-tight uppercase">
          ZIFOLIO
        </h1>
        
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
          Educação Financeira <br className="hidden md:block" />
          Simples para <span className="text-blue-600">Começar Certo.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Aprenda a organizar, ganhar e investir dinheiro em Angola, de forma clara e segura.
        </p>
        
        <div className="flex flex-col gap-4 justify-center items-center">
          <a 
            href={whatsappLink}
            className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-500/20 active:scale-95"
          >
            COMEÇAR AGORA NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};
