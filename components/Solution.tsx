
import React from 'react';

export const Solution: React.FC = () => {
  const learningItems = [
    { title: "Geração de Renda", desc: "Métodos reais para ganhar cripto grátis diariamente.", icon: "💰" },
    { title: "Cripto Economia", desc: "Como comprar e vender USDT no mercado P2P angolano.", icon: "₿" },
    { title: "Gestão VISA", desc: "Configuração do cartão RedotPay para pagamentos globais.", icon: "💳" },
    { title: "Estratégia", desc: "Planos de poupança para vencer a inflação do Kwanza.", icon: "📈" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 bg-white rounded-[4rem] p-12 md:p-20 border border-slate-100 soft-shadow">
            <h2 className="text-5xl md:text-6xl font-[900] text-slate-900 mb-8 leading-[1] tracking-tighter">
              Aprende a <br />
              <span className="text-blue-600">começar certo.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
              O Zifolio não é uma plataforma de investimento. É uma escola de liberdade. Ensinamos-te a usar as ferramentas certas para protegeres o teu esforço.
            </p>
            <div className="space-y-5">
               <div className="flex items-center gap-5 p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 group hover:bg-emerald-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg text-xl">✓</div>
                  <div>
                    <p className="text-emerald-900 font-black">Suporte via WhatsApp</p>
                    <p className="text-emerald-700/70 text-sm font-bold uppercase tracking-tight">Estamos juntos no processo</p>
                  </div>
               </div>
               <div className="flex items-center gap-5 p-6 bg-blue-50 rounded-[2rem] border border-blue-100 group hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg text-xl">★</div>
                  <div>
                    <p className="text-blue-900 font-black">Conteúdo Angolano</p>
                    <p className="text-blue-700/70 text-sm font-bold uppercase tracking-tight">Focado na nossa realidade</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {learningItems.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 bento-card flex flex-col items-start gap-5">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-[900] text-slate-900 text-xl mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-base font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
