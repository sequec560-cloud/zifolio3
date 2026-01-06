
import React from 'react';

export const Solution: React.FC = () => {
  const learningItems = [
    { title: "Geração de Renda", desc: "Métodos reais para ganhar as tuas primeiras criptos sem gastar nada.", icon: "💰" },
    { title: "Cripto Economia", desc: "Como comprar e vender USDT em Angola de forma segura no P2P.", icon: "₿" },
    { title: "Gestão VISA", desc: "Ativação e uso do cartão RedotPay para compras internacionais.", icon: "💳" },
    { title: "Mentalidade", desc: "Domina a psicologia do dinheiro para nunca mais ficar sem Kwanza.", icon: "🧠" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 bg-white rounded-[3.5rem] p-10 md:p-16 border border-slate-100 soft-shadow">
            <h2 className="text-4xl md:text-6xl font-[900] text-slate-900 mb-8 leading-[1.05] tracking-tighter">
              Não é sorte. <br />
              É <span className="text-blue-600">Educação.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              O Zifolio é o teu mentor digital. Ensinamos-te a navegar no sistema financeiro moderno, usando ferramentas que as escolas não ensinam.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-4 p-5 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">✓</div>
                  <p className="text-emerald-900 font-bold">Acesso Vitalício ao Grupo de Suporte</p>
               </div>
               <div className="flex items-center gap-4 p-5 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">★</div>
                  <p className="text-blue-900 font-bold">Conteúdo focado na realidade de Angola</p>
               </div>
            </div>
          </div>
          
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningItems.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 bento-card flex flex-col items-start gap-4">
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-[900] text-slate-900 text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
