"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles } from "lucide-react";

export default function AnubisChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Boas-vindas à IA premium da Anubis Tech. Qual é o seu nome?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = `sessao_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(id);
  }, []);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]); // Scroll automático ao carregar [cite: 2026-03-05]

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;

    setMessages(prev => [...prev, { role: "user", text: userText }]);
    setInput("");
    setIsLoading(true); // Início do feedback visual [cite: 2026-03-05]

    try {
      // Fernando: Lembre-se de trocar por sua URL da Vercel no deploy final [cite: 2026-03-05]
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          message: userText
        }),
      });

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        { role: "bot", text: data.response }
      ]);

    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: "bot", text: "SISTEMA_OFFLINE: Reconectando com o núcleo Anubis..." }
      ]);
    } finally {
      setIsLoading(false); // Fim do feedback visual [cite: 2026-03-05]
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150] flex flex-col items-end">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 p-2 pl-6 rounded-full shadow-xl text-black"
      >
        <span className="text-sm font-bold">Assistente IA</span>
        <div className="bg-black p-3 rounded-full text-amber-500">
          {isOpen ? <X size={20} /> : <Bot size={20} />}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="absolute bottom-24 right-0 w-[480px] h-[700px] bg-[#020308] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center gap-4 bg-white/5">
              <div className="p-3 bg-amber-500 rounded-xl text-black">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Anubis Core IA</h4>
                <p className="text-xs text-amber-500 font-medium">Online</p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-amber-500/5"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-base ${
                      m.role === "user"
                        ? "bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20"
                        : "bg-white/10 text-white border border-white/5"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* INDICADOR DE DIGITANDO [cite: 2026-03-05] */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-4 rounded-2xl border border-white/5 flex items-center gap-2">
                    <span className="text-sm italic text-amber-500/80">Anubis está digitando</span>
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-white/5 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSendMessage()
                }
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-base text-white outline-none focus:border-amber-500/50 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="p-3 bg-amber-500 rounded-xl text-black hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}