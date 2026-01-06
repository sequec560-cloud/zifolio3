
import React from 'react';

export const Problems: React.FC = () => {
  const pains = [
    { icon: "🧭", text: "Não sabes por onde começar" },
    { icon: "🛡️", text: "Tens medo de golpes" },
    { icon: "💸", text: "Tens pouco dinheiro" },
    { icon: "🤯", text: "Muita confusão e termos difíceis" }
  ];

  return (
    <section id="problema" className="py-20 bg-slate-50/50 px-6 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Estás a passar por isto?</h2>
          <p className="text-slate-500 font-medium">O problema não és tu. Falta informação simples.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-all">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{p.icon}</span>
              <p className="font-bold text-slate-700 leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
