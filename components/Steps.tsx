
import React from 'react';

export const Steps: React.FC = () => {
  const steps = [
    {
      title: "Diagnóstico",
      desc: "Analisamos a tua saúde financeira atual sem julgamentos.",
      icon: "🔍",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Blindagem",
      desc: "Limpamos as dívidas e criamos a tua reserva de emergência.",
      icon: "🛡️",
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Expansão",
      desc: "Colocamos o capital a trabalhar em ativos globais seguros.",
      icon: "🚀",
      color: "bg-slate-900 text-white"
    }
  ];

  return (
    <section id="passos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4">O Caminho da Paz</h2>
          <p className="text-slate-500">Um método testado, desenhado para passos firmes.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-100 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-slate-50 soft-shadow group hover:border-blue-100 transition-all">
              <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
