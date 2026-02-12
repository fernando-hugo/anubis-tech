"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, Terminal, ArrowRight, 
  Linkedin, Instagram, Github, Brain, Gauge, Cuboid, Code2
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";

// --- BACKGROUND DE CÓDIGO PULSANTE ---
const CodePulseBg = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-mono text-[10px] leading-none select-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -100 }}
        animate={{ y: [0, 1000] }}
        transition={{ duration: Math.random() * 20 + 10, repeat: Infinity, ease: "linear" }}
        className="absolute whitespace-nowrap"
        style={{ left: `${i * 5}%` }}
      >
        {Array.from({ length: 50 }).map(() => "01 ANUBIS_TECH_SYSTEM_FLUX_ ").join("<br/>")}
      </motion.div>
    ))}
  </div>
);

// --- LINHA DE CIRCUITO COM PULSO DE LUZ ---
const CircuitLine = () => (
  <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/5 pointer-events-none">
    <motion.div 
      animate={{ 
        y: ["0%", "100%"],
        opacity: [0, 1, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-64 bg-gradient-to-b from-transparent via-amber-500 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.8)]"
    />
  </div>
);

const IntroSplash = () => (
  <motion.div 
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
  >
    <video autoPlay muted playsInline className="w-full h-full object-cover opacity-60">
      <source src="/intro.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
  </motion.div>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="relative bg-[#020308] text-white selection:bg-amber-500/30 font-sans overflow-x-hidden">
      
      <AnimatePresence>{showIntro && <IntroSplash />}</AnimatePresence>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-amber-500 z-[110] origin-left" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-16 h-24 flex items-center justify-between backdrop-blur-md border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-2">
          <Activity className="text-amber-500" size={24} />
          <span className="text-xl font-black tracking-[0.3em] uppercase italic">
            ANUBIS<span className="text-amber-500 font-light ml-1">TECH</span>
          </span>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="p-3 bg-white/5 rounded-full hover:bg-amber-500/10 transition-all border border-white/10">
          <Menu size={20} className="text-amber-500" />
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <CodePulseBg />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={!showIntro ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Engenharia de Software de Elite
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] mb-8 uppercase">
              <span className="text-white">Dominando o</span> <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mb-12 italic leading-relaxed">
              "Transformamos nichos complexos em ecossistemas de alta performance. Sua visão, nossa engenharia."
            </p>
            <button className="group relative px-10 py-5 bg-amber-500 text-black font-black uppercase text-[10px] tracking-[0.4em] overflow-hidden transition-all">
              <span className="relative z-10">Falar com Consultor</span>
              <motion.div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-amber-500/10 blur-[120px] rounded-full animate-pulse" />
            <img src="/logo-3d.png" alt="Anubis Tech" className="relative z-10 w-full max-w-[500px] drop-shadow-[0_0_60px_rgba(245,158,11,0.3)]" />
          </motion.div>
        </div>
      </section>

      {/* ECOSSISTEMA COM CIRCUITOS */}
      <section className="relative py-32 bg-black/40 border-t border-white/5">
        <CircuitLine />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white">O Ecossistema</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 gap-56">
            <PillarCard 
              title="ORTHOFLOW"
              tagline="PRECISÃO CIRÚRGICA."
              desc="Automatização de escala e estoque OPME em tempo real."
              icon={<Activity className="text-amber-500" size={40} />}
              side="left"
            />
            <PillarCard 
              title="UNIFLOW"
              tagline="UNIFICAÇÃO ESTRATÉGICA."
              desc="Integração total de faturamento e backoffice corporativo."
              icon={<Cuboid className="text-amber-500" size={40} />}
              side="right"
            />
            <PillarCard 
              title="PSYCHFLOW"
              tagline="IA APLICADA À MENTE."
              desc="Triagem inteligente e humanizada para clínicas de psicologia."
              icon={<Brain className="text-amber-500" size={40} />}
              side="left"
            />
            <PillarCard 
              title="CONTROLFLOW"
              tagline="DOMÍNIO FINANCEIRO."
              desc="Saúde financeira e margem líquida na palma da mão."
              icon={<Gauge className="text-amber-500" size={40} />}
              side="right"
            />
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="py-24 bg-[#010205] border-t border-amber-500/20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black italic tracking-widest text-amber-500 mb-2 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">ANUBIS TECH</h2>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">CNPJ: 42.804.763/0001-35</p>
            <p className="text-slate-600 text-[10px] tracking-widest uppercase italic">The Future of Software Engineering • Brasil</p>
          </div>
          
          <div className="flex gap-10">
            {[ { icon: <Linkedin />, name: 'Linkedin' }, { icon: <Instagram />, name: 'Instagram' }, { icon: <Github />, name: 'Github' } ].map((social) => (
              <a key={social.name} href="#" className="flex flex-col items-center gap-2 group">
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-all border border-white/5 group-hover:border-amber-500/30">
                  {social.icon}
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 group-hover:text-amber-500">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/98 z-[300] flex flex-col items-center justify-center p-8 backdrop-blur-2xl">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-amber-500"><X size={50} /></button>
            <div className="flex flex-col gap-12 text-center font-black italic text-5xl uppercase tracking-tighter">
              {['Home', 'Soluções', 'Área do Cliente', 'Contato'].map(item => (
                <button key={item} className="hover:text-amber-500 transition-all">{item}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function PillarCard({ title, tagline, desc, icon, side }: any) {
  const isLeft = side === "left";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32 relative`}
    >
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-6`}>
        <div className={`flex items-center gap-6 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.1)]">{icon}</div>
          <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-xs tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-xl italic max-w-xl leading-relaxed">"{desc}"</p>
      </div>
      
      <div className="flex-1 flex justify-center relative">
        <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full animate-pulse" />
        <div className="w-80 h-80 border border-white/5 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] flex items-center justify-center backdrop-blur-3xl group hover:border-amber-500/40 transition-all duration-500">
          <div className="opacity-10 group-hover:opacity-40 transition-all scale-[4] rotate-12 group-hover:rotate-0">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}