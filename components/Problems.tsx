
import React from 'react';

export const Problems: React.FC = () => {
  const pains = [
    { icon: "🧭", text: "Queres investir, mas não sabes por onde começar" },
    { icon: "🛡️", text: "Tens medo de golpes" },
    { icon: "💸", text: "Pouco dinheiro disponível" },
    { icon: "🤯", text: "Plataformas confusas" },
    { icon: "📝", text: "Falta orientação prática" }
  ];

  return (
    <section id="problema" className="py-20 bg-slate-50/50 px-6 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Estás a passar por isto?</h2>
          <p className="text-slate-500 font-medium text-lg">👉 O problema não és tu. Falta informação simples.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 group hover:border-blue-200 transition-all shadow-sm">
              <span className="text-3xl group-hover:scale-110 transition-transform">{p.icon}</span>
              <p className="font-bold text-slate-700 leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
