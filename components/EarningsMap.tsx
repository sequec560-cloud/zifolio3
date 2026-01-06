
import React from 'react';

export const EarningsMap: React.FC = () => {
  const roadmap = [
    {
      step: "01",
      title: "Ganhos Iniciais",
      desc: "Usa o FaucetPay para acumular as tuas primeiras frações de dólar (Satoshi) sem investir um único Kwanza.",
      icon: "🖱️",
      tag: "Zero Risco"
    },
    {
      step: "02",
      title: "Câmbio e Custódia",
      desc: "Envia os teus ganhos para a Binance e converte para USDT (Dólar Digital) de forma segura.",
      icon: "🔄",
      tag: "Crescimento"
    },
    {
      step: "03",
      title: "Poder de Compra",
      desc: "Usa o RedotPay para gastar os teus dólares em qualquer loja online ou serviço internacional.",
      icon: "💳",
      tag: "Uso Real"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-5 tracking-tight">O Caminho Prático</h2>
          <p className="text-slate-500 font-medium text-lg">Ensinamos o ciclo completo da economia digital em Angola.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roadmap.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm relative group hover:shadow-2xl transition-all duration-500">
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <div className="absolute top-10 right-10 text-5xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">{item.step}</div>
              
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
                {item.tag}
              </span>
              
              <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
