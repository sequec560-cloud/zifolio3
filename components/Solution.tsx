
import React from 'react';

export const Solution: React.FC = () => {
  const learningItems = [
    "Educação financeira básica",
    "Como ganhar dinheiro digital",
    "Criptomoedas para iniciantes",
    "Plataformas seguras",
    "Passo a passo simples"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* O que é o Zifolio */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">O que é o Zifolio</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-slate-600 font-medium leading-relaxed">
            <p>O <strong className="text-blue-600">Zifolio</strong> ajuda-te a entender dinheiro sem termos complicados e a começar com pouco.</p>
            <p>Usamos plataformas que funcionam em Angola para te ajudar a evitar erros comuns.</p>
            <p className="pt-4 text-slate-900 font-black uppercase tracking-widest text-sm">Sem promessas. Apenas educação + orientação real.</p>
          </div>
        </div>

        {/* O que vais aprender */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 soft-shadow">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">O que vais aprender</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-50">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-slate-800 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
