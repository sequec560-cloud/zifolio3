
import React from 'react';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-blue-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Queres ajuda direta?</h2>
            <h3 className="text-blue-600 font-extrabold text-xl mb-6 uppercase tracking-tight">Configuração Financeira Inicial</h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "Orientação personalizada",
                "Criação de contas passo a passo",
                "Checklist de segurança exclusiva",
                "Suporte direto no WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-2/5 w-full">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-blue-100 text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Mentoria Rápida</span>
              <p className="text-slate-500 text-sm mb-6 font-medium">Reserva a tua sessão de 30 minutos agora.</p>
              <a 
                href="https://wa.me/244900000000?text=Quero a Configuração Financeira Inicial!"
                className="block w-full py-4 bg-slate-900 text-white rounded-xl font-black hover:bg-slate-800 transition-all"
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
