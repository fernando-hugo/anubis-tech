"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, Terminal, ArrowRight, 
  Linkedin, Instagram, Github, Brain, Gauge, Cuboid, Mail
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- BACKGROUND DE CÓDIGO PULSANTE ---
const CodePulseBg = () => (
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden font-mono text-[10px] select-none">
    {Array.from({ length: 25 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -500 }}
        animate={{ y: [0, 1500] }}
        transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, ease: "linear" }}
        className="absolute text-amber-500/40 whitespace-nowrap"
        style={{ left: `${i * 4}%` }}
      >
        {Array.from({ length: 60 }).map(() => "01_ANUBIS_SYSTEM_FLUX_").join("<br/>")}
      </motion.div>
    ))}
  </div>
);

// --- LINHA DE CIRCUITO COM PULSO DE LUZ ---
const CircuitLine = () => (
  <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent pointer-events-none">
    <motion.div 
      animate={{ y: ["0%", "100%"], opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="w-full h-64 bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]"
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

  const WHATSAPP_LINK = "https://wa.me/5511962104871";
  const INSTA_LINK = "https://www.instagram.com/anubis.tec?igsh=MTZyajRydWdzZTdmNg==";

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
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Activity className="text-amber-500" size={24} />
          <span className="text-xl font-black tracking-[0.3em] uppercase italic text-white">
            ANUBIS<span className="text-amber-500 font-light ml-1 italic">TECH</span>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 italic">
              Engenharia de Software de Elite
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] mb-8 uppercase">
              <span className="text-white">Dominando o</span> <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mb-12 italic leading-relaxed">
              "Transformamos nichos complexos em ecossistemas de alta performance. Sua visão, nossa engenharia."
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" className="px-10 py-5 bg-amber-500 text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white transition-all shadow-2xl shadow-amber-500/20">
                Falar com Consultor
              </a>
              <a href={WHATSAPP_LINK} target="_blank" className="px-10 py-5 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white/5 transition-all italic">
                Desenvolver minha ideia
              </a>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-amber-500/10 blur-[150px] rounded-full animate-pulse scale-75" />
            <img src="/logo-3d.png" alt="Anubis Tech" className="relative z-10 w-full max-w-[550px] drop-shadow-[0_0_80px_rgba(245,158,11,0.3)]" />
          </motion.div>
        </div>
      </section>

      {/* ECOSSISTEMA (PILARES) */}
      <section className="relative py-32 bg-black/40 border-t border-white/5">
        <CircuitLine />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-40 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white">O Ecossistema</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 gap-64 relative z-10">
            {/* 1. ORTHOFLOW */}
            <PillarCard 
              title="ORTHOFLOW"
              tagline="Onde a precisão cirúrgica encontra a eficiência logística."
              desc="Muito além de um controle de estoque, o Orthoflow é o cérebro da distribuição de instrumentais e implantes ortopédicos. Automatizamos a escala técnica com base em habilidades reais e monitoramos o consumo cirúrgico em tempo real, eliminando desperdícios e garantindo que o cirurgião tenha exatamente o que precisa."
              keywords="Rastreabilidade Total • Otimização de Escala • OPME"
              icon={<Activity size={40} className="text-amber-500" />}
              side="left"
              link={WHATSAPP_LINK}
            />

            {/* 2. UNIFLOW */}
            <PillarCard 
              title="UNIFLOW"
              tagline="Onde a complexidade operacional se torna controle absoluto."
              desc="O motor de eficiência para operações que exigem rastreabilidade milimétrica. Uma solução universal que unifica o controle de unidades produzidas, gestão de fornecedores e comissionamento de equipes. Do lançamento de notas ao relatório estratégico, ele blinda a saúde do negócio."
              keywords="Rastreabilidade Unificada • Automação de Backoffice • Inteligência"
              icon={<Cuboid size={40} className="text-amber-500" />}
              side="right"
              link={WHATSAPP_LINK}
            />

            {/* 3. PSYCHFLOW */}
            <PillarCard 
              title="PSYCHFLOW"
              tagline="Tecnologia que entende pessoas para conectar propósitos."
              desc="A porta de entrada inteligente para a saúde mental. O Psychflow utiliza IA de ponta para realizar o acolhimento inicial, filtrando necessidades e conectando o paciente ao profissional ideal de forma humanizada. Otimizamos o tempo do especialista para o foco clínico."
              keywords="Triagem Humanizada • Conexão Assertiva • Agendamento AI"
              icon={<Brain size={40} className="text-amber-500" />}
              side="left"
              link={WHATSAPP_LINK}
            />

            {/* 4. CONTROLFLOW */}
            <PillarCard 
              title="CONTROLFLOW"
              tagline="Domínio total sobre o seu fluxo de caixa e performance."
              desc="Projetado para negócios de alto fluxo. O ControlFlow simplifica a gestão de ordens de serviço, automatiza o cálculo de margem líquida e entrega o lucro real (Net Profit) instantaneamente. Transformamos dados de atendimento em decisões estratégicas."
              keywords="Gestão de Caixa • Ticket Médio • Rentabilidade Real"
              icon={<Gauge size={40} className="text-amber-500" />}
              side="right"
              link={WHATSAPP_LINK}
            />
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="py-24 bg-black border-t border-amber-500/20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black italic tracking-widest text-amber-500 mb-2">ANUBIS TECH</h2>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 italic">CNPJ: 42.804.763/0001-35</p>
            <p className="text-slate-500 flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-widest italic">
              <Mail size={12} /> contato@anubistech.com.br
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href={INSTA_LINK} target="_blank" className="p-4 bg-white/5 rounded-full border border-white/5 hover:border-amber-500/40 hover:text-amber-500 transition-all group flex flex-col items-center gap-1">
              <Instagram size={22} /><span className="text-[7px] font-black uppercase tracking-widest text-slate-500 group-hover:text-amber-500">Instagram</span>
            </a>
            <a href="#" className="p-4 bg-white/5 rounded-full border border-white/5 hover:border-amber-500/40 hover:text-amber-500 transition-all group flex flex-col items-center gap-1">
              <Linkedin size={22} /><span className="text-[7px] font-black uppercase tracking-widest text-slate-500 group-hover:text-amber-500">Linkedin</span>
            </a>
            <a href="#" className="p-4 bg-white/5 rounded-full border border-white/5 hover:border-amber-500/40 hover:text-amber-500 transition-all group flex flex-col items-center gap-1">
              <Github size={22} /><span className="text-[7px] font-black uppercase tracking-widest text-slate-500 group-hover:text-amber-500">Github</span>
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-black/98 z-[300] flex flex-col items-center justify-center p-8 backdrop-blur-2xl">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-amber-500 hover:rotate-90 transition-transform"><X size={50} /></button>
            <div className="flex flex-col gap-12 text-center font-black italic text-5xl uppercase text-white tracking-tighter">
              {['Home', 'Soluções', 'Contato'].map(item => (
                <button key={item} onClick={() => { 
                  if(item==='Contato') window.location.href=WHATSAPP_LINK; 
                  setIsMenuOpen(false); 
                }} className="hover:text-amber-500 transition-all">{item}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function PillarCard({ title, tagline, desc, keywords, icon, side, link }: any) {
  const isLeft = side === "left";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
    >
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-6`}>
        <div className={`flex items-center gap-6 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl">{icon}</div>
          <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-xs tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-xl italic leading-relaxed">"{desc}"</p>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500/60">{keywords}</p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <a href={link} target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] hover:text-amber-500 transition-all">
            Consultar especialista <ArrowRight size={14}/>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center relative">
        <div className="absolute inset-0 bg-amber-500/5 blur-[80px] rounded-full animate-pulse" />
        <div className="w-80 h-80 border border-white/5 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] flex items-center justify-center backdrop-blur-3xl group hover:border-amber-500/40 transition-all duration-500 shadow-2xl">
          <div className="opacity-10 group-hover:opacity-40 transition-all scale-[4] rotate-12 group-hover:rotate-0">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}