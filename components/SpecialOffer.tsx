
import React from 'react';

export const SpecialOffer: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-blue-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-blue-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Queres ajuda direta?</h2>
            <h3 className="text-blue-600 font-extrabold text-xl mb-6 uppercase tracking-tight">Configuração Financeira Inicial</h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "Criação de contas assistida",
                "Orientação personalizada",
                "Checklist de segurança",
                "Suporte via WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white flex-shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-8 items-center">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tempo</span>
                <span className="font-bold text-slate-900">30 minutos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investimento</span>
                <span className="font-bold text-slate-900">Valor acessível</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 w-full">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-blue-100 text-center">
              <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">Garante o teu futuro com passos guiados por quem já faz.</p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                QUERO AJUDA AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
