"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, CheckCircle2, Cpu, ShieldCheck, Zap, 
  Activity, Code2, Terminal, ArrowRight, 
  Stethoscope, LayoutGrid, MessageSquare, LineChart
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

// --- COMPONENTES AUXILIARES ---

const IntroSplash = () => {
  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
    >
      <video 
        autoPlay 
        muted 
        playsInline 
        onEnded={() => {}} // Lógica de término tratada no pai
        className="w-full h-full object-cover opacity-60"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
    </motion.div>
  );
};

const CircuitLine = () => (
  <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent">
    <motion.div 
      animate={{ y: ["0%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-full h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
    />
  </div>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  // Efeito de Tempo para a Intro
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Progress para animações de circuito
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="relative bg-[#020617] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      <AnimatePresence>
        {showIntro && <IntroSplash />}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-16 h-24 flex items-center justify-between backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-2">
          <Activity className="text-cyan-500" size={24} />
          <span className="text-xl font-black tracking-[0.3em] uppercase italic">
            ANUBIS<span className="text-cyan-500 font-light ml-1">TECH</span>
          </span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/10 transition-all border border-white/10"
        >
          <Menu size={20} className="text-cyan-400" />
        </button>
      </nav>

      {/* HERO SECTION - THE 3D CORE */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 6.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Engenharia de Software de Elite
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] mb-8 uppercase">
              Dominando o <br />
              <span className="text-cyan-500">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed">
              Transformamos nichos complexos em ecossistemas de alta performance. 
              Sua visão, nossa engenharia.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-cyan-500 hover:text-white transition-all shadow-2xl shadow-cyan-500/10 rounded-sm">
                Desenvolver Minha Ideia
              </button>
              <button className="px-10 py-5 border border-white/10 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white/5 transition-all rounded-sm">
                Área do Cliente
              </button>
            </div>
          </motion.div>

          {/* LOGO 3D FLUTUANTE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -30, 0] 
            }}
            transition={{ 
              opacity: { duration: 1, delay: 7 },
              scale: { duration: 1, delay: 7 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[150px] rounded-full scale-75 animate-pulse" />
            <img 
              src="/logo-3d.webp" 
              alt="Anubis Tech 3D" 
              className="relative z-10 w-full max-w-[550px] drop-shadow-[0_35px_35px_rgba(0,163,255,0.2)]"
            />
          </motion.div>
        </div>
      </section>

      {/* OS 4 PILARES - TRANSITION SECTION */}
      <section className="relative py-32 bg-black/40 border-t border-white/5">
        <CircuitLine />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4">O Ecossistema</h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">Arquiteturas que definem o mercado</p>
          </div>

          <div className="grid grid-cols-1 gap-40">
            
            {/* 1. ORTHOFLOW */}
            <PillarCard 
              title="ORTHOFLOW"
              tagline="PRECISÃO CIRÚRGICA. EFICIÊNCIA LOGÍSTICA."
              desc="O cérebro da distribuição de instrumentais e implantes. Automatizamos a escala técnica e monitoramos o estoque de OPME em tempo real, garantindo rastreabilidade total e eliminação de desperdícios."
              icon={<Stethoscope className="text-cyan-400" size={40} />}
              color="cyan"
              side="left"
            />

            {/* 2. UNIFLOW */}
            <PillarCard 
              title="UNIFLOW"
              tagline="INTELIGÊNCIA OPERACIONAL UNIFICADA."
              desc="O motor de eficiência universal. Do controle de unidades produzidas à gestão de faturamento e comissões. Uma solução robusta que unifica seu backoffice e blinda sua lucratividade."
              icon={<LayoutGrid className="text-blue-400" size={40} />}
              color="blue"
              side="right"
            />

            {/* 3. PSYCHFLOW */}
            <PillarCard 
              title="PSYCHFLOW"
              tagline="TECNOLOGIA QUE ENTENDE PESSOAS."
              desc="Acolhimento inteligente via IA. Realizamos a triagem e conexão assertiva entre pacientes e especialistas, otimizando o fluxo de clínicas e humanizando o primeiro contato através de tecnologia de ponta."
              icon={<MessageSquare className="text-purple-400" size={40} />}
              color="purple"
              side="left"
            />

            {/* 4. CONTROLFLOW */}
            <PillarCard 
              title="CONTROLFLOW"
              tagline="GESTÃO DE CAIXA E PERFORMANCE REAL."
              desc="Domínio total sobre o seu ponto de venda. Simplificamos ordens de serviço, automatizamos o cálculo de margem líquida e entregamos a saúde financeira do seu negócio na palma da mão."
              icon={<LineChart className="text-emerald-400" size={40} />}
              color="emerald"
              side="right"
            />

          </div>
        </div>
      </section>

      {/* FOOTER - THE TERMINAL STYLE */}
      <footer className="py-24 bg-[#01030a] border-t border-white/5 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Terminal className="text-cyan-500" size={18} />
              <span className="text-sm font-black uppercase tracking-[0.4em]">ANUBIS TECH</span>
            </div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest leading-loose">
              © 2026 • Engenharia de Software • Brasil <br />
              contato@anubistech.com.br
            </p>
          </div>
          <div className="flex gap-8">
            {['GitHub', 'LinkedIn', 'Instagram'].map(item => (
              <a key={item} href="#" className="text-slate-500 hover:text-cyan-400 text-[10px] font-black uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* MENU MODAL */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[200]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#020617] z-[210] p-16 flex flex-col border-l border-white/10">
              <button onClick={() => setIsMenuOpen(false)} className="self-end mb-24 text-white hover:rotate-90 transition-transform"><X size={40} strokeWidth={1} /></button>
              <div className="flex flex-col gap-10 text-right">
                {['Home', 'Serviços', 'Projetos', 'Contato'].map((item) => (
                  <button key={item} className="text-3xl font-black italic tracking-tighter hover:text-cyan-500 transition-colors uppercase">{item}</button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

// --- COMPONENTE DOS PILARES ---

function PillarCard({ title, tagline, desc, icon, color, side }: any) {
  const isLeft = side === "left";
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
    >
      <div className={`flex-1 space-y-6 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className={`flex items-center gap-4 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className={`p-4 bg-white/5 border border-white/10 rounded-2xl`}>{icon}</div>
          <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">{title}</h3>
        </div>
        <p className={`text-sm font-black tracking-[0.3em] text-${color}-500 uppercase`}>{tagline}</p>
        <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-xl italic">
          "{desc}"
        </p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] hover:text-cyan-400 transition-colors">
            Ver Especificações <ArrowRight size={14} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative flex justify-center">
        <div className={`absolute inset-0 bg-${color}-500/10 blur-[100px] rounded-full scale-75`} />
        <div className={`w-full max-w-[400px] aspect-square border border-white/5 bg-white/[0.02] rounded-[3rem] backdrop-blur-3xl flex items-center justify-center group hover:border-${color}-500/30 transition-all`}>
           <div className="text-white/10 group-hover:text-white/20 transition-all scale-[4] rotate-12">
             {icon}
           </div>
        </div>
      </div>
    </motion.div>
  );
}