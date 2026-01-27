"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle, CheckCircle2, Briefcase, Info, Cpu, ShieldCheck, Zap, Globe, Layers, Activity, ExternalLink, Code2, Database, Terminal, UserPlus, Target, MousePointer2, Smartphone } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/**
 * DAARKSTAR TEC - TOTAL CONSOLIDATED V8 (FULL PRODUCTION)
 * - Diagnóstico com captura de WhatsApp.
 * - Banco de Talentos integrado.
 * - Mantém toda a identidade visual e funções originais.
 */

const Counter = ({ target, label }: { target: number, label: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else { setCount(Math.floor(start)); }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div className="flex flex-col items-center md:items-start" ref={ref}>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl md:text-7xl font-black text-daarkPurple tabular-nums">{count}</span>
        <span className="text-daarkPurple font-bold">+</span>
      </div>
      <span className="text-[9px] tracking-[0.5em] text-gray-500 uppercase mt-4 font-bold">{label}</span>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [activeInfoModal, setActiveInfoModal] = useState<null | 'carreira' | 'sobre' | 'tecnologia'>(null);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [selectedVaga, setSelectedVaga] = useState("");
  const [isCareerFormOpen, setIsCareerFormOpen] = useState(false);

  const serviceDetails: { [key: string]: { icon: any, desc: string, highlight: string } } = {
    "REVOLUCIONE SEU FUTURO DIGITAL.": {
      icon: <Target className="text-daarkPurple" />,
      desc: "Análise completa de ecossistema digital. Ideal para empresas que buscam soberania e automação total de processos.",
      highlight: "Filtro de Escala"
    },
    "SISTEMAS INTELIGENTES": {
      icon: <Cpu className="text-daarkPurple" />,
      desc: "Engenharia focada em eliminar gargalos operacionais. Transformamos tarefas manuais em fluxos autônomos de alta performance.",
      highlight: "Engenharia de Back-end"
    },
    "LANDING PAGES ELITE": {
      icon: <MousePointer2 className="text-daarkPurple" />,
      desc: "Interfaces desenhadas para tráfego qualificado. Foco absoluto em taxa de conversão (CRO) e velocidade de carregamento sub-1s.",
      highlight: "Conversão de Alto Ticket"
    },
    "APLICATIVOS NATIVOS": {
      icon: <Smartphone className="text-daarkPurple" />,
      desc: "Sua regra de negócio na palma da mão do cliente. Apps fluidos, seguros e integrados ao seu banco de dados em tempo real.",
      highlight: "Estratégia Mobile"
    }
  };

  const projects = [
    { 
      title: "PsycheFlow", 
      category: "CLINIC MANAGEMENT", 
      impact: "AUTOMAÇÃO DE PRONTUÁRIOS & AGENDAMENTO", 
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      description: "Ecossistema completo para clínicas de psicologia focado em sigilo total.",
      tech: ["Next.js 15", "Supabase Auth", "AES-256", "n8n"],
      details: "Implementamos criptografia ponta-a-ponta e automação via n8n para lembretes via WhatsApp."
    },
    { 
      title: "FaturaPro", 
      category: "SISTEMA DE GESTÃO", 
      impact: "+200 HORAS ECONOMIZADAS/MÊS", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "ERP focado em automação financeira e emissão de notas em massa.",
      tech: ["Node.js", "PostgreSQL", "AWS Lambda"],
      details: "Centralizamos 15 canais de venda em uma única dashboard escalável."
    },
    { 
      title: "Lux Landing", 
      category: "HIGH TICKET LP", 
      impact: "22% AUMENTO EM CONVERSÃO", 
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      description: "Interface de alta conversão para produtos de luxo e consultorias premium.",
      tech: ["Framer Motion", "Three.js", "Vercel Edge"],
      details: "Psicologia das cores e tempos de carregamento inferiores a 1s."
    }
  ];

  const sections = [
    { id: "home", title: "REVOLUCIONE SEU FUTURO DIGITAL.", subtitle: '"Focamos na automação para você focar na expansão. O tempo é seu único ativo insubstituível."', bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000", button: "INICIAR DIAGNÓSTICO", showLogo: true },
    { id: "sistemas", title: "SISTEMAS INTELIGENTES", subtitle: "Engenharia de software sob medida que elimina o trabalho manual.", bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000", button: "SOLICITAR ENGENHARIA", showLogo: false },
    { id: "lps", title: "LANDING PAGES ELITE", subtitle: "Interfaces de alto padrão que convertem tráfego em clientes.", bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000", button: "PROJETAR CONVERSÃO", showLogo: false },
    { id: "apps", title: "APLICATIVOS NATIVOS", subtitle: "Sua regra de negócio em um ecossistema mobile fluido e seguro.", bg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000", button: "CONSTRUIR MEU APP", showLogo: false }
  ];

  // FUNÇÃO DE ENVIO DE DIAGNÓSTICO (VENDAS)
  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      servico: activeService,
      nome: formData.get("nome"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      gargalo: formData.get("gargalo"),
      investimento: formData.get("investimento"),
      urgencia: formData.get("urgencia"),
      origem: "Landing Page DaarkStar",
      data: new Date().toLocaleString('pt-BR')
    };

    try {
      const response = await fetch('https://fernandohugoferreira.app.n8n.cloud/webhook/lead-daarkstar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setIsLeadModalOpen(false);
        setIsSuccessModalOpen(true);
      } else { alert("Erro no envio do diagnóstico."); }
    } catch (error) { alert("Falha de rede."); }
  };

  // FUNÇÃO DE ENVIO DE CARREIRAS (BANCO DE TALENTOS) - ATUALIZADA PARA FORMULÁRIO INTEGRADO
  const handleCareerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      vaga: selectedVaga,
      nome: fd.get("nome"),
      email: fd.get("email"),
      whatsapp: fd.get("whatsapp"),
      linkedin: fd.get("linkedin"),
      github: fd.get("github"),
      tecnologias: fd.get("tecnologias"),
      origem: "Portal de Carreiras DaarkStar",
      data: new Date().toLocaleString('pt-BR')
    };

    try {
      const response = await fetch('https://fernandohugoferreira.app.n8n.cloud/webhook/lead-daarkstar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setIsCareerFormOpen(false);
        setActiveInfoModal(null);
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      alert("Erro ao conectar ao banco de talentos.");
    }
  };

  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory bg-daarkBg text-white selection:bg-daarkPurple scroll-smooth font-sans">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-8 md:px-12 h-24 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]">
        <div className="cursor-pointer group" onClick={() => window.location.href = '#'}>
          <span className="text-xl font-bold tracking-[0.3em] uppercase group-hover:text-daarkPurple transition-colors">
            DaarkStar <span className="font-extralight text-gray-500 italic">TEC</span>
          </span>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all">
          <Menu size={20} />
        </button>
      </nav>

      {/* SEÇÕES HERO */}
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="relative h-screen w-full snap-start flex flex-col items-center justify-center md:items-start md:justify-end md:pb-32 md:px-24 text-center md:text-left overflow-hidden">
          <div className="absolute inset-0 z-0"> 
            <img src={section.bg} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80" />
          </div>

          {section.showLogo && (
            <div className="absolute top-1/2 right-0 md:right-[2%] -translate-y-1/2 w-full md:w-1/2 flex flex-col items-center md:items-end pointer-events-none z-10">
              <motion.div initial={{ opacity: 0, scale: 0.9, x: 100 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 2.5 }} className="relative w-[320px] h-[320px] md:w-[650px] md:h-[650px]">
                <div className="absolute inset-0 bg-daarkPurple/20 blur-[150px] rounded-full animate-pulse" />
                <img src="/logo.png" alt="DaarkStar Logo" className="relative w-full h-full object-contain" />
              </motion.div>
            </div>
          )}

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="z-20 px-6 max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] uppercase italic">{section.title}</h2>
            <p className="text-lg md:text-2xl text-gray-400 mb-12 font-light tracking-widest max-w-2xl border-l-2 border-daarkPurple pl-6 italic">{section.subtitle}</p>
            <button onClick={() => { setActiveService(section.title); setIsLeadModalOpen(true); }} className="px-14 py-5 border border-white/30 font-bold text-[10px] tracking-[0.5em] hover:bg-white hover:text-black transition-all uppercase">
              {section.button}
            </button>
          </motion.div>
        </section>
      ))}

      {/* PORTFÓLIO */}
      <section className="relative min-h-screen w-full snap-start bg-daarkBg flex flex-col justify-center py-24 px-8 md:px-24 border-t border-white/5">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-4">Arquivo de Missões</h2>
          <div className="w-24 h-1 bg-daarkPurple" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group relative h-[550px] overflow-hidden border border-white/5 bg-zinc-950">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-daarkPurple text-[9px] font-bold tracking-[0.4em] uppercase mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-black text-white mb-2 uppercase italic">{project.title}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-daarkCyan text-[10px] font-bold tracking-widest mb-6 uppercase">{project.impact}</p>
                  <button onClick={() => setActiveProject(project)} className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white hover:text-daarkPurple transition-colors border-b border-white/20 pb-1">
                    <ExternalLink size={14} /> Detalhes Técnicos
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL DETALHES PROJETO */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)} className="absolute inset-0 bg-black/98 backdrop-blur-xl" />
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative bg-[#0a0a0a] border border-white/10 p-10 md:p-16 w-full max-w-5xl shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setActiveProject(null)} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"><X size={30} /></button>
              <div className="grid md:grid-cols-2 gap-12 text-white">
                <div className="space-y-8">
                  <h3 className="text-5xl font-black tracking-tighter uppercase italic">{activeProject.title}</h3>
                  <p className="text-gray-400 text-sm leading-loose uppercase tracking-widest italic">{activeProject.description}</p>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2"><Terminal size={16} className="text-daarkPurple" /> Arquitetura</h4>
                    <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-wider">{activeProject.details}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t: string) => (
                      <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 text-[9px] tracking-widest uppercase text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-8 flex flex-col justify-center">
                  <img src={activeProject.image} alt={activeProject.title} className="w-full aspect-video object-cover border border-white/10" />
                  <button onClick={() => { setActiveProject(null); setIsLeadModalOpen(true); }} className="w-full py-5 bg-white text-black font-black text-[10px] tracking-[0.5em] hover:bg-daarkPurple hover:text-white transition-all uppercase">Solicitar Sistema Similar</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="relative snap-start h-screen bg-[#030303] flex flex-col justify-center px-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-b border-white/5 pb-20">
          <Counter target={47} label="DIAGNÓSTICOS EXECUTADOS" />
          <Counter target={12} label="SISTEMAS EM OPERAÇÃO" />
          <Counter target={100} label="EFICIÊNCIA GARANTIDA %" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl gap-20 text-white">
          <div className="space-y-6">
            <span className="text-2xl font-bold tracking-[0.3em] uppercase">DaarkStar <span className="text-daarkPurple">TEC</span></span>
            <p className="text-[10px] text-gray-500 tracking-[0.2em] leading-loose uppercase italic font-light">Engenharia Digital para quem não tem tempo a perder.</p>
          </div>
          <div className="flex flex-col gap-4">
             {['sobre', 'tecnologia', 'carreira'].map(m => (
              <button key={m} onClick={() => setActiveInfoModal(m as any)} className="text-xs tracking-[0.3em] text-gray-400 hover:text-white transition-colors uppercase text-left">{m}</button>
            ))}
          </div>
          <div className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">
             <p className="text-white mb-2 uppercase font-bold">SÃO PAULO - BRASIL</p>
             <p>CONTATO@DAARKSTAR.COM.BR</p>
          </div>
        </div>
      </footer>

      {/* MENU MODAL */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-zinc-950 z-[110] p-16 flex flex-col border-l border-white/5">
              <button onClick={() => setIsMenuOpen(false)} className="self-end mb-24 text-white hover:rotate-90 transition-transform"><X size={40} strokeWidth={1} /></button>
              <div className="flex flex-col gap-12 text-2xl font-bold tracking-[0.4em] uppercase text-right">
                <button onClick={() => { setIsMenuOpen(false); setTimeout(() => setActiveInfoModal('carreira'), 300); }} className="hover:text-daarkPurple text-white uppercase transition-colors">CARREIRA</button>
                <button onClick={() => { setIsMenuOpen(false); setTimeout(() => setActiveInfoModal('sobre'), 300); }} className="hover:text-daarkPurple text-white uppercase transition-colors">SOBRE NÓS</button>
                <button onClick={() => { setIsMenuOpen(false); setTimeout(() => setActiveInfoModal('tecnologia'), 300); }} className="hover:text-daarkPurple text-daarkPurple uppercase transition-colors">TECNOLOGIA</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* INFO MODALS */}
      <AnimatePresence>
        {activeInfoModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveInfoModal(null)} className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-zinc-950 border border-white/10 p-12 max-w-5xl w-full shadow-2xl rounded-sm max-h-[90vh] overflow-y-auto">
              <button onClick={() => setActiveInfoModal(null)} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"><X size={24} /></button>
              
              {activeInfoModal === 'sobre' && (
                <div className="space-y-12 text-white">
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-daarkPurple italic">O Manifesto DaarkStar</h3>
                  <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6 italic">
                      <p className="text-gray-300 text-sm leading-loose uppercase tracking-[0.2em] font-light border-l-2 border-daarkPurple pl-8">
                        "Não entregamos apenas código. Entregamos liberdade operacional. Na DaarkStar TEC, entendemos que o maior inimigo do crescimento não é a concorrência, mas o trabalho repetitivo e o design medíocre."
                      </p>
                      <p className="text-gray-500 text-[10px] leading-loose uppercase tracking-widest font-bold">Acreditamos na soberania digital. Sua empresa deve possuir sistemas que trabalham enquanto você escala.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 uppercase tracking-widest">
                        {[
                        { t: "Segurança Enterprise", d: "Criptografia de nível militar em cada transação de dados.", i: <ShieldCheck className="text-daarkPurple"/> },
                        { t: "Performance de Guerra", d: "Sistemas otimizados para carregamento instantâneo.", i: <Zap className="text-daarkPurple"/> },
                        { t: "Presença Digital Soberana", d: "Sua marca com autoridade visual indiscutível.", i: <Globe className="text-daarkPurple"/> }
                      ].map(item => (
                        <div key={item.t} className="flex gap-6 items-start">
                          <div className="mt-1">{item.i}</div>
                          <div><h4 className="text-xs font-bold mb-2">{item.t}</h4><p className="text-[10px] text-gray-500">{item.d}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeInfoModal === 'tecnologia' && (
                <div className="space-y-12 text-white">
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-daarkPurple italic">The Engine (Stack)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { t: 'Next.js 15+', d: 'Framework de ponta para SSR e performance brutal.', i: <Zap size={24}/> },
                      { t: 'n8n Intelligence', d: 'Engine de automação que conecta seu negócio ao mundo.', i: <Layers size={24}/> },
                      { t: 'React 19 Core', d: 'Arquitetura de componentes imersivos e ultra-fluidos.', i: <Activity size={24}/> },
                      { t: 'Tailwind 4.0', d: 'Estética customizada com zero overhead de CSS.', i: <Cpu size={24}/> },
                      { t: 'Supabase / Firebase', d: 'Infraestrutura de dados global e segura.', i: <ShieldCheck size={24}/> },
                      { t: 'AI Integration', d: 'Modelos LLM customizados para seu fluxo operacional.', i: <Globe size={24}/> }
                    ].map(item => (
                      <div key={item.t} className="p-8 border border-white/5 bg-white/[0.02] rounded-md hover:border-daarkPurple/50 transition-all uppercase tracking-widest">
                        <div className="text-daarkPurple mb-4">{item.i}</div>
                        <h4 className="font-bold text-xs mb-3">{item.t}</h4>
                        <p className="text-[10px] text-gray-500 leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeInfoModal === 'carreira' && (
                <div className="space-y-12 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-daarkPurple italic">Join the Elite</h3>
                    <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold italic">Status: Recrutamento Ativo</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { v: "FullStack Engineer (Next.js)", d: "Domínio em React, TypeScript e microserviços.", r: "Resiliência técnica e foco em performance brutal." },
                      { v: "Automation Specialist (n8n)", d: "Expert em APIs e construção de workflows complexos.", r: "Mindset analítico para eliminação de tarefas manuais." }
                    ].map(vaga => (
                      <div key={vaga.v} className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group uppercase tracking-widest">
                        <h4 className="text-lg font-bold mb-4 group-hover:text-daarkPurple transition-colors">{vaga.v}</h4>
                        <p className="text-[10px] text-gray-400 mb-4 leading-loose">{vaga.d}</p>
                        <p className="text-[9px] text-gray-600 mb-8 italic">{vaga.r}</p>
                        <button onClick={() => { setSelectedVaga(vaga.v); setIsCareerFormOpen(true); }} className="flex items-center gap-3 text-[10px] font-black hover:gap-6 transition-all">Candidatar-se <Zap size={14} className="text-daarkPurple" /></button>
                      </div>
                    ))}
                    {/* BANCO DE TALENTOS */}
                    <div className="p-8 border border-daarkPurple/30 bg-daarkPurple/5 hover:bg-daarkPurple/10 transition-all group uppercase tracking-widest md:col-span-2">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                          <h4 className="text-xl font-bold mb-2 italic">Não encontrou sua vaga?</h4>
                          <p className="text-[10px] text-gray-400 leading-loose">Envie seus dados para nosso Banco de Talentos. Analisamos perfis excepcionais constantemente.</p>
                        </div>
                        <button onClick={() => { setSelectedVaga("BANCO DE TALENTOS"); setIsCareerFormOpen(true); }} className="px-8 py-4 bg-white text-black font-black text-[10px] tracking-[0.4em] hover:bg-daarkPurple hover:text-white transition-all whitespace-nowrap">ENTRAR NO RADAR</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* NOVO MODAL: FORMULÁRIO DE CARREIRA INTEGRADO */}
      <AnimatePresence>
        {isCareerFormOpen && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCareerFormOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative bg-zinc-950 border border-daarkPurple/30 p-10 md:p-16 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <button onClick={() => setIsCareerFormOpen(false)} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"><X size={30} /></button>
              <div className="mb-10">
                <span className="text-daarkPurple text-[9px] tracking-[0.5em] font-black uppercase italic">Protocolo de Recrutamento</span>
                <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mt-2 italic">Candidatura: {selectedVaga}</h3>
              </div>
              <form onSubmit={handleCareerSubmit} className="space-y-6">
                <input name="nome" required placeholder="NOME COMPLETO" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="email" required type="email" placeholder="E-MAIL" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                  <input name="whatsapp" required placeholder="WHATSAPP (DDD)" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                </div>
                <input name="linkedin" required placeholder="LINKEDIN URL" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest focus:border-daarkPurple outline-none text-white transition-all" />
                <input name="github" required placeholder="GITHUB URL" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest focus:border-daarkPurple outline-none text-white transition-all" />
                <textarea name="tecnologias" required placeholder="PRINCIPAIS TECNOLOGIAS E FRAMEWORKS QUE DOMINA" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest focus:border-daarkPurple outline-none uppercase text-white transition-all min-h-[80px]" />
                <button type="submit" className="w-full py-6 bg-white text-black font-black text-[11px] tracking-[0.6em] hover:bg-daarkPurple hover:text-white transition-all duration-700 uppercase">SUBMETER PROTOCOLO</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LEAD MODAL (DIAGNÓSTICO) */}
      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsLeadModalOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative bg-zinc-950 border border-white/10 p-10 md:p-16 w-full max-w-3xl shadow-2xl max-h-[95vh] overflow-y-auto">
              <button onClick={() => setIsLeadModalOpen(false)} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"><X size={30} /></button>
              
              <div className="mb-12 text-white">
                <div className="flex items-center gap-4 mb-6">
                  {serviceDetails[activeService]?.icon}
                  <span className="text-daarkPurple text-[10px] tracking-[0.5em] font-black uppercase italic">{serviceDetails[activeService]?.highlight || "Diagnóstico de Elite"}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 italic">{activeService}</h3>
                <p className="text-gray-400 text-xs tracking-widest uppercase italic leading-loose border-l border-white/10 pl-6">{serviceDetails[activeService]?.desc || "Análise de viabilidade técnica imediata."}</p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[8px] tracking-[0.3em] text-gray-600 font-bold uppercase">Identificação</label>
                    <input name="nome" required type="text" placeholder="NOME COMPLETO" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-[0.2em] focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] tracking-[0.3em] text-gray-600 font-bold uppercase">E-mail Corporativo</label>
                    <input name="email" required type="email" placeholder="E-MAIL" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-[0.2em] focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                  </div>
                </div>

                {/* NOVO CAMPO: WHATSAPP */}
                <div className="space-y-1">
                  <label className="text-[8px] tracking-[0.3em] text-gray-600 font-bold uppercase">WhatsApp para contato</label>
                  <input name="whatsapp" required type="tel" placeholder="DDD + NÚMERO (EX: 11999999999)" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-[0.2em] focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                </div>

                <div className="space-y-1">
                  <label className="text-[8px] tracking-[0.3em] text-gray-600 font-bold uppercase">Mapeamento de Gargalo</label>
                  <textarea name="gargalo" required rows={2} placeholder="QUAL TAREFA MANUAL CONSOME MAIS TEMPO DA SUA EQUIPE?" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-[0.2em] focus:border-daarkPurple outline-none uppercase text-white transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-1">
                    <label className="text-[8px] tracking-[0.3em] text-gray-600 font-bold uppercase">Escopo de Investimento</label>
                    <select name="investimento" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-[0.2em] outline-none uppercase text-white cursor-pointer transition-all">
                      <option className="bg-zinc-950">Não definido</option>
                      <option className="bg-zinc-950">INVESTIMENTO: 1k - 2k</option>
                      <option className="bg-zinc-950">INVESTIMENTO: 3k - 5k</option>
                      <option className="bg-zinc-950">INVESTIMENTO: 6k - 10k</option>
                      <option className="bg-zinc-950">INVESTIMENTO: 10k+</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] tracking-[0.3em] text-gray-600 font-bold uppercase">Urgência de Deploy</label>
                    <select name="urgencia" className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-[0.2em] outline-none uppercase text-white cursor-pointer transition-all">
                      <option className="bg-zinc-950">PRIORIDADE: IMEDIATA</option>
                      <option className="bg-zinc-950">PRIORIDADE: 60 DIAS</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full py-6 bg-white text-black font-black text-[11px] tracking-[0.6em] hover:bg-daarkPurple hover:text-white transition-all duration-700 uppercase shadow-xl">ENVIAR PARA ANÁLISE</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSuccessModalOpen(false)} className="absolute inset-0 bg-black/98 backdrop-blur-3xl" />
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-black border border-daarkPurple/40 p-16 text-center max-w-lg shadow-[0_0_100px_rgba(138,5,255,0.2)]">
              <CheckCircle2 size={60} className="text-daarkPurple mx-auto mb-8" />
              <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tighter">Protocolo Recebido</h3>
              <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase leading-loose mb-12">Nossa inteligência está processando sua solicitação. Aguarde contato em até 24h.</p>
              <button onClick={() => setIsSuccessModalOpen(false)} className="w-full py-4 border border-white/10 text-[10px] font-bold tracking-[0.5em] hover:bg-white hover:text-black transition-all uppercase">Fechar Terminal</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}