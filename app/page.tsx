"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, ArrowRight, Instagram, Github, 
  Brain, Gauge, Cuboid, Mail, Cpu, ShieldCheck, Send
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- ANIMAÇÃO DE FLUXO HORIZONTAL (DATA STREAM) ---
const HorizontalStreamText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 1.8, ease: [0.45, 0.05, 0.55, 0.95] }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

const MatrixRain = () => (
  <div className="fixed inset-0 opacity-[0.12] pointer-events-none overflow-hidden font-mono text-[10px] md:text-[14px] select-none z-0">
    {Array.from({ length: 40 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -1200 }}
        animate={{ y: [0, 2400] }}
        transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, ease: "linear" }}
        className="absolute text-amber-500 font-bold whitespace-nowrap"
        style={{ left: `${i * 2.5}%`, writingMode: 'vertical-rl' }}
      >
        {Array.from({ length: 40 }).map(() => "0101101_ANUBIS_SYSTEM_ACTIVE_").join(" ")}
      </motion.div>
    ))}
  </div>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', idea: '' });

  const WHATSAPP_NUMBER = "5511962104871";
  const GITHUB_LINK = "https://github.com/fernando-hugo";
  const INSTA_LINK = "https://www.instagram.com/anubis.tec?igsh=MTZyajRydWdzZTdmNg==";

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Fernando, meu nome é ${formData.name}. Tenho um projeto para o nicho/ideia: ${formData.idea}. Meu contato é ${formData.phone}. Vamos conversar?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setIsProjectModalOpen(false);
  };

  return (
    <main className="relative bg-[#010206] text-white font-sans overflow-x-hidden">
      
      {/* INTRO SPLASH - CORREÇÃO DE MARCA (SEM CORTES) */}
      <AnimatePresence>{showIntro && (
        <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden">
          <video autoPlay muted playsInline className="w-full h-full object-contain md:object-cover opacity-80">
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}</AnimatePresence>

      <MatrixRain />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] px-6 md:px-20 h-24 flex items-center justify-between backdrop-blur-2xl border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Activity className="text-amber-500" size={26} />
          <span className="text-xl md:text-2xl font-black tracking-[0.4em] uppercase italic text-white">ANUBIS<span className="text-amber-500 font-light ml-1">TECH</span></span>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-black uppercase text-[9px] tracking-[0.3em] italic">
          <button onClick={() => setIsAboutOpen(true)} className="hover:text-amber-500 transition-all border-b border-transparent hover:border-amber-500 pb-1">Sobre Nós</button>
          <button onClick={() => setIsProjectModalOpen(true)} className="bg-white/5 border border-white/10 px-5 py-3 hover:bg-amber-500 hover:text-black transition-all">Projeto Customizado</button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="bg-amber-500 text-black px-6 py-3 shadow-[0_0_20px_rgba(245,158,11,0.3)]">Fale Conosco</a>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-4"><Menu size={28} className="text-amber-500" /></button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 px-6 z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={!showIntro ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] italic">Engineering de Elite</span>
            <h1 className="text-5xl md:text-8xl xl:text-9xl font-black italic tracking-tighter leading-[0.9] uppercase">
              Dominando o <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent italic">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-xl italic leading-relaxed">"Transformamos nichos complexos em ecossistemas de alta performance."</p>
          </motion.div>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full scale-125" />
            <img src="/logo-3d.png" alt="Anubis Tech" className="w-[75%] md:w-full max-w-[450px] lg:max-w-[1100px] h-auto drop-shadow-2xl relative z-10" />
          </motion.div>
        </div>
      </section>

      {/* OS 4 PILARES - TEXTO INTEGRAL RESTAURADO */}
      <section className="relative py-32 md:py-60 z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 space-y-32 md:space-y-[400px]">
          
          <PillarCard 
            title="ORTHOFLOW" 
            tagline="Onde a precisão cirúrgica encontra a eficiência logística." 
            desc="Muito além de um controle de estoque, o Orthoflow é o cérebro da distribuição de instrumentais e implantes ortopédicos. Automatizamos a escala técnica com base em habilidades reais e monitoramos o consumo cirúrgico em tempo real, eliminando desperdícios e garantindo que o cirurgião tenha exatamente o que precisa, quando precisa." 
            keywords="Rastreabilidade Total • Otimização de Escala • Visibilidade de Estoque (OPME)" 
            icon={<Activity size={50} />} side="left" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />

          <PillarCard 
            title="UNIFLOW" 
            tagline="Onde a complexidade operacional se torna controle absoluto." 
            desc="O Uniflow é o motor de eficiência para operações que exigem rastreabilidade milimétrica. Uma solução universal que unifica o controle de unidades produzidas, a gestão de fornecedores externos e o comissionamento de equipes em uma interface única e inquebrável. Do lançamento de notas fiscais aos relatórios estratégicos, ele elimina gargalos e blinda a saúde financeira do negócio com dados em tempo real." 
            keywords="Rastreabilidade Unificada • Automação de Backoffice • Inteligência de Processos" 
            icon={<Cuboid size={50} />} side="right" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />

          <PillarCard 
            title="PSYCHFLOW" 
            tagline="Tecnologia que entende pessoas para conectar propósitos." 
            desc="A porta de entrada inteligente para a saúde mental. O Psychflow utiliza IA de ponta para realizar o acolhimento inicial, filtrando necessidades e conectando o paciente ao profissional ideal de forma humanizada. Reduzimos a barreira do primeiro contato e otimizamos o tempo do especialista para que o foco seja exclusivamente o atendimento clínico e a jornada do paciente." 
            keywords="Triagem Humanizada • Conexão Assertiva • Agendamento Inteligente (AI)" 
            icon={<Brain size={50} />} side="left" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />

          <PillarCard 
            title="CONTROLFLOW" 
            tagline="Domínio total sobre o seu fluxo de caixa e performance de balcão." 
            desc="Projetado para negócios de alto fluxo que exigem agilidade e precisão financeira. O ControlFlow simplifica a gestão de ordens de serviço, automatiza o cálculo de margem líquida e entrega o lucro real (Net Profit) instantaneamente. Uma solução robusta que transforma dados de atendimento em decisões estratégicas para maximizar o ticket médio e o controle de caixa." 
            keywords="Gestão de Fluxo de Caixa • Ticket Médio • Rentabilidade Real (Bottom Line)" 
            icon={<Gauge size={50} />} side="right" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:h-28 flex items-center bg-black border-t-2 border-amber-500/30 px-8 relative z-10 text-[9px] font-black uppercase tracking-widest text-slate-500">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 items-center">
            <span className="text-amber-500">ANUBIS TECH © 2026</span>
            <span>CNPJ: 42.804.763/0001-35</span>
          </div>
          <div className="flex gap-8">
            <a href={INSTA_LINK} target="_blank" className="hover:text-amber-500">Instagram</a>
            <a href={GITHUB_LINK} target="_blank" className="hover:text-amber-500">Github</a>
          </div>
        </div>
      </footer>

      {/* MODAL SOBRE NÓS */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[700] flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl bg-black/90">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#05060a] border border-amber-500/40 p-8 md:p-14 max-w-4xl w-full relative">
              <button onClick={() => setIsAboutOpen(false)} className="absolute top-6 right-6 text-amber-500"><X size={32} /></button>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-8">Nossa História</h3>
              <p className="text-lg md:text-2xl text-slate-300 italic leading-relaxed">
                <HorizontalStreamText text={`"A Anubis Tech não nasceu para ser apenas mais uma empresa de software. Sob a visão estratégica de Fernando H. Ferreira, unimos décadas de expertise técnica, tecnologias avançadas de IA com uma obsessão por soberania operacional. Não entregamos apenas linhas de código; entregamos a arquitetura que sustenta nichos de alta complexidade onde outros falham."`} />
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL CONSULTORIA */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[700] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95">
            <div className="bg-[#05060a] border border-amber-500/40 p-8 md:p-12 w-full max-w-lg shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white">Consultoria Técnica</h3>
                <button onClick={() => setIsProjectModalOpen(false)} className="text-amber-500"><X size={30} /></button>
              </div>
              <form onSubmit={handleProjectSubmit} className="space-y-5">
                <input required placeholder="Seu Nome" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-amber-500 text-white italic" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="WhatsApp" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-amber-500 text-white italic" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <textarea required placeholder="Descreva seu Nicho / Ideia" className="w-full bg-white/5 border border-white/10 p-4 h-32 outline-none focus:border-amber-500 text-white italic resize-none" onChange={(e) => setFormData({...formData, idea: e.target.value})} />
                <button type="submit" className="w-full bg-amber-500 text-black font-black uppercase py-5 flex items-center justify-center gap-3 hover:bg-white transition-all text-[10px] tracking-widest shadow-xl">Solicitar Engenharia <Send size={16}/></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30 }} className="fixed inset-0 bg-black z-[600] flex flex-col p-8">
            <div className="flex justify-between items-center mb-16">
              <Activity className="text-amber-500" size={32} />
              <button onClick={() => setIsMenuOpen(false)} className="text-amber-500"><X size={45} /></button>
            </div>
            <div className="flex flex-col gap-10 text-4xl font-black italic uppercase text-white">
              <button onClick={() => { setIsAboutOpen(true); setIsMenuOpen(false); }} className="text-left">Sobre Nós</button>
              <button onClick={() => { setIsProjectModalOpen(true); setIsMenuOpen(false); }} className="text-left">Novo Projeto</button>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-amber-500">Fale Conosco</a>
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
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-6 md:space-y-10`}>
        <div className={`flex items-center gap-6 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-5 md:p-8 bg-amber-500 text-black rounded-2xl md:rounded-3xl shadow-xl">{icon}</div>
          <h3 className="text-4xl md:text-7xl xl:text-8xl font-black italic tracking-tighter text-white uppercase leading-none">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-sm md:text-lg tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-lg md:text-2xl italic leading-relaxed font-light">"{desc}"</p>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500/50">{keywords}</p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <a href={link} target="_blank" className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-white hover:text-amber-500 transition-all border-b-2 border-amber-500/20 pb-2">Engenharia de Solução <ArrowRight size={18}/></a>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 justify-center relative group">
        <div className="absolute inset-0 bg-amber-500/5 blur-[80px] rounded-full group-hover:bg-amber-500/10 transition-all" />
        <div className="w-[450px] h-[450px] border-2 border-white/10 bg-white/[0.03] rounded-[5rem] flex items-center justify-center backdrop-blur-3xl group-hover:border-amber-500/50 transition-all duration-700">
          <div className="opacity-10 group-hover:opacity-40 transition-all scale-[5] rotate-12 group-hover:rotate-0 text-amber-500">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}