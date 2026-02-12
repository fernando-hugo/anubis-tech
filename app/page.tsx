"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, ArrowRight, 
  Instagram, Github, Brain, Gauge, Cuboid, Mail, Cpu, ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- EFEITO DE TEXTO DECODIFICADO (MATRIX REVEAL) ---
const DecryptText = ({ text }: { text: string }) => {
  const [displayChars, setDisplayChars] = useState(text);
  const chars = "01$#@%&*<>[]{}";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayChars(prev => 
        prev.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayChars}</span>;
};

const MatrixRain = () => (
  <div className="fixed inset-0 opacity-[0.15] pointer-events-none overflow-hidden font-mono text-[14px] select-none z-0">
    {Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -1200 }}
        animate={{ y: [0, 2400] }}
        transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, ease: "linear" }}
        className="absolute text-amber-500 font-bold whitespace-nowrap"
        style={{ left: `${i * 2}%`, writingMode: 'vertical-rl' }}
      >
        {Array.from({ length: 40 }).map(() => "0101101_ANUBIS_SYSTEM_ACTIVE_FLUX_").join(" ")}
      </motion.div>
    ))}
  </div>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const containerRef = useRef(null);

  const WHATSAPP_LINK = "https://wa.me/5511962104871";
  const GITHUB_LINK = "https://github.com/fernando-hugo";
  const INSTA_LINK = "https://www.instagram.com/anubis.tec?igsh=MTZyajRydWdzZTdmNg==";

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="relative bg-[#010206] text-white selection:bg-amber-500/30 font-sans overflow-x-hidden">
      
      <AnimatePresence>{showIntro && (
        <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black flex items-center justify-center">
          <video autoPlay muted playsInline className="w-full h-full object-cover opacity-70"><source src="/intro.mp4" type="video/mp4" /></video>
        </motion.div>
      )}</AnimatePresence>

      <MatrixRain />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-amber-500 z-[110] origin-left shadow-[0_0_15px_rgba(245,158,11,1)]" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-20 h-24 flex items-center justify-between backdrop-blur-2xl border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Activity className="text-amber-500" size={28} />
          <span className="text-2xl font-black tracking-[0.4em] uppercase italic">ANUBIS<span className="text-amber-500 font-light ml-1">TECH</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 font-black uppercase text-[10px] tracking-[0.3em] italic">
          <button onClick={() => setIsAboutOpen(true)} className="hover:text-amber-500 transition-all border-b border-transparent hover:border-amber-500/50 pb-1">Sobre Nós</button>
          <a href={WHATSAPP_LINK} target="_blank" className="bg-amber-500 text-black px-6 py-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">Fale Conosco</a>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-4 bg-white/5 rounded-full"><Menu size={24} className="text-amber-500" /></button>
      </nav>

      {/* HERO SECTION - GRID EQUILIBRADO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={!showIntro ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.5 }} className="text-left space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] italic">Engineering de Elite</span>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
              <span className="text-white drop-shadow-2xl">Dominando o</span> <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-xl italic leading-relaxed">"Transformamos nichos complexos em ecossistemas de alta performance."</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={!showIntro ? { opacity: 1, scale: 1, y: [0, -30, 0] } : {}} transition={{ duration: 1.5, delay: 0.5, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-amber-500/10 blur-[150px] rounded-full animate-pulse scale-125" />
            <img src="/logo-3d.png" alt="Anubis Tech" className="w-full max-w-[850px] xl:max-w-[1100px] h-auto drop-shadow-[0_0_150px_rgba(245,158,11,0.5)] relative z-10" />
          </motion.div>
        </div>
      </section>

      {/* PILARES COM DESCRIÇÕES FIÉIS */}
      <section className="relative py-60 z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 space-y-[400px]">
          <PillarCard 
            title="ORTHOFLOW" 
            tagline="Onde a precisão cirúrgica encontra a eficiência logística." 
            desc="Muito além de um controle de estoque, o Orthoflow é o cérebro da distribuição de instrumentais e implantes ortopédicos. Automatizamos a escala técnica com base em habilidades reais e monitoramos o consumo cirúrgico em tempo real, eliminando desperdícios e garantindo que o cirurgião tenha exatamente o que precisa, quando precisa." 
            keywords="Rastreabilidade Total • Otimização de Escala • Visibilidade de Estoque (OPME)" 
            icon={<Activity size={60} />} side="left" link={WHATSAPP_LINK} 
          />
          <PillarCard 
            title="UNIFLOW" 
            tagline="Onde a complexidade operacional se torna controle absoluto." 
            desc="O Uniflow é o motor de eficiência para operações que exigem rastreabilidade milimétrica. Uma solução universal que unifica o controle de unidades produzidas, a gestão de fornecedores externos e o comissionamento de equipes em uma interface única. Do lançamento de notas fiscais aos relatórios estratégicos, ele elimina gargalos e blinda a saúde financeira do negócio com dados em tempo real." 
            keywords="Rastreabilidade Unificada • Automação de Backoffice • Inteligência de Processos" 
            icon={<Cuboid size={60} />} side="right" link={WHATSAPP_LINK} 
          />
          <PillarCard 
            title="PSYCHFLOW" 
            tagline="Tecnologia que entende pessoas para conectar propósitos." 
            desc="A porta de entrada inteligente para a saúde mental. O Psychflow utiliza IA de ponta para realizar o acolhimento inicial, filtrando necessidades e conectando o paciente ao profissional ideal de forma humanizada. Reduzimos a barreira do primeiro contato e otimizamos o tempo do especialista para que o foco seja exclusivamente o atendimento clínico e a jornada do paciente." 
            keywords="Triagem Humanizada • Conexão Assertiva • Agendamento Inteligente (AI)" 
            icon={<Brain size={60} />} side="left" link={WHATSAPP_LINK} 
          />
          <PillarCard 
            title="CONTROLFLOW" 
            tagline="Domínio total sobre o seu fluxo de caixa e performance de balcão." 
            desc="Projetado para negócios de alto fluxo que exigem agilidade e precisão financeira. O ControlFlow simplifica a gestão de ordens de serviço, automatiza o cálculo de margem líquida e entrega o lucro real (Net Profit) instantaneamente. Uma solução robusta que transforma dados de atendimento em decisões estratégicas para maximizar o ticket médio e o controle de caixa." 
            keywords="Gestão de Fluxo de Caixa • Ticket Médio • Rentabilidade Real (Bottom Line)" 
            icon={<Gauge size={60} />} side="right" link={WHATSAPP_LINK} 
          />
        </div>
      </section>

      {/* RODAPÉ SLIM (2.5CM) */}
      <footer className="h-28 flex items-center bg-black border-t-2 border-amber-500/30 px-8 relative z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black italic text-amber-500 tracking-widest uppercase">ANUBIS TECH</h2>
            <span className="hidden md:block w-px h-4 bg-white/20"></span>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">CNPJ: 42.804.763/0001-35</p>
          </div>
          <div className="flex items-center gap-8">
            <a href={INSTA_LINK} target="_blank" className="text-slate-500 hover:text-amber-500 transition-all flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><Instagram size={14} /> Instagram</a>
            <a href={GITHUB_LINK} target="_blank" className="text-slate-500 hover:text-amber-500 transition-all flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><Github size={14} /> Github</a>
          </div>
        </div>
      </footer>

      {/* MODAL SOBRE NÓS COM EFEITO EPICO DE REVEAL */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/85">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="bg-[#05060a] border border-amber-500/40 p-12 max-w-4xl relative overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.3)]">
              {/* EFEITO SCANNER */}
              <motion.div animate={{ y: [0, 500] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20 z-0" />
              
              <button onClick={() => setIsAboutOpen(false)} className="absolute top-6 right-6 text-amber-500/50 hover:text-amber-500 transition-all"><X size={30} /></button>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4 text-amber-500">
                  <Cpu size={24} className="animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="font-mono text-[10px] tracking-[0.6em] uppercase">Auth_Identity_Verified</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">Nossa História</h3>
                
                <div className="text-xl md:text-2xl text-slate-300 italic leading-relaxed font-light">
                  <DecryptText text={`"A Anubis Tech não nasceu para ser apenas mais uma empresa de software. Sob a visão estratégica de Fernando H. Ferreira, unimos décadas de expertise técnica, tecnologias avançadas de IA com uma obsessão por soberania operacional. Não entregamos apenas linhas de código; entregamos a arquitetura que sustenta nichos de alta complexidade onde outros falham."`} />
                </div>

                <div className="flex gap-4 pt-4 items-center">
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                  <ShieldCheck size={20} className="text-amber-500" />
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>{isMenuOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-black/98 z-[300] flex flex-col items-center justify-center p-8 backdrop-blur-2xl">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-amber-500"><X size={60} /></button>
          <div className="flex flex-col gap-12 text-center font-black italic text-6xl uppercase text-white">
            <button onClick={() => { setIsAboutOpen(true); setIsMenuOpen(false); }} className="hover:text-amber-500 transition-all">Sobre Nós</button>
            <a href={WHATSAPP_LINK} target="_blank" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-500 transition-all">Contato</a>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </main>
  );
}

function PillarCard({ title, tagline, desc, keywords, icon, side, link }: any) {
  const isLeft = side === "left";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-150px" }} 
      transition={{ duration: 1.2 }}
      className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 relative`}
    >
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-10`}>
        <div className={`flex items-center gap-8 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-8 bg-amber-500 text-black rounded-3xl">{icon}</div>
          <h3 className="text-7xl md:text-[6rem] font-black italic tracking-tighter text-white uppercase leading-none">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-lg tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-3xl italic leading-relaxed">"{desc}"</p>
        <p className="text-xs font-black uppercase tracking-[0.6em] text-amber-500/50">{keywords}</p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <a href={link} target="_blank" className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.5em] text-white hover:text-amber-500 transition-all border-b-2 border-amber-500/20 pb-4">Engenharia de Solução <ArrowRight size={20}/></a>
        </div>
      </div>
      <div className="flex-1 flex justify-center relative">
        <div className="w-[500px] h-[500px] border-2 border-white/10 bg-white/[0.03] rounded-[5rem] flex items-center justify-center backdrop-blur-3xl shadow-[0_0_100px_rgba(245,158,11,0.15)] group hover:border-amber-500/50 transition-all duration-700">
          <div className="opacity-10 group-hover:opacity-60 transition-all scale-[6] rotate-12 group-hover:rotate-0 text-amber-500">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}  