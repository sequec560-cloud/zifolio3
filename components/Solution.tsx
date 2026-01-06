
import React from 'react';

export const Solution: React.FC = () => {
  const items = [
    "Dinheiro do zero",
    "Cripto para iniciantes",
    "Plataformas seguras",
    "Passo a passo simples",
    "Orientação real",
    "Sem promessas fáceis"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 soft-shadow text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">O Zifolio ensina</h2>
          <p className="text-slate-500 mb-12 text-lg">Aprende o que realmente importa para a tua realidade.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-50">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
