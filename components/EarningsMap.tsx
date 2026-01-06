
import React from 'react';

export const EarningsMap: React.FC = () => {
  const roadmap = [
    {
      step: "01",
      title: "Ganhos Iniciais",
      desc: "Usa o FaucetPay para acumular as tuas primeiras frações de dólar sem investir nada.",
      icon: "🖱️",
      tag: "Risco Zero"
    },
    {
      step: "02",
      title: "Consolidação",
      desc: "Envia os teus ganhos para a Binance e converte para USDT (Dólar Digital).",
      icon: "🔄",
      tag: "Segurança"
    },
    {
      step: "03",
      title: "Liberdade",
      desc: "Usa o RedotPay para gastar os teus ganhos em qualquer loja ou serviço em Angola.",
      icon: "💳",
      tag: "Uso Real"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-[900] text-slate-900 mb-4 tracking-tight">O Ciclo do Sucesso</h2>
          <p className="text-slate-500 font-medium">Como nós ensinamos a construir o teu portfólio digital.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roadmap.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <div className="absolute top-8 right-8 text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{item.step}</div>
              
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                {item.tag}
              </span>
              
              <h4 className="text-2xl font-black text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
