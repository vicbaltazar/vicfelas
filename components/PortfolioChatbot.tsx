"use client";

import { useState, useRef, useEffect } from "react";
import Window from "./Window";

type Message = {
  sender: "system" | "user";
  text: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    sender: "system",
    text: "Olá! Sou a GenIA, a assistente virtual do VitóriaOS. 🤖✨ Podes perguntar-me sobre os projetos da Vitória, as suas skills, experiência ou curiosidades (como o gato Chico Bento!).",
  },
];

export default function PortfolioChatbot() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages: Message[] = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulação de inteligência do bot baseada em palavras-chave
    setTimeout(() => {
      let botResponse = "Hmm, não tenho a certeza sobre isso! Mas podes enviar um email diretamente para vicbaltazar287@icloud.com ✉️";
      
      const query = userText.toLowerCase();

      if (query.includes("projeto") || query.includes("trabalho") || query.includes("mpb") || query.includes("amor doce")) {
        botResponse = "A Vitória desenvolveu vários projetos incríveis como a MPB-Dex (estilo Pokédex de MPB), o Amor Doce CRUD, e o Diário do Chico Bento! Podes ver todos na secção /projetos 🗂️.";
      } else if (query.includes("skill") || query.includes("tecnologia") || query.includes("stack") || query.includes("linguagem")) {
        botResponse = "A stack principal inclui React, Next.js, TypeScript, Node.js, Python e PostgreSQL. Vê todos os detalhes no terminal de skills acima 🖥️!";
      } else if (query.includes("chico") || query.includes("gato") || query.includes("pet")) {
        botResponse = "O Chico Bento é o gato da Vitória! Tem um blog dedicado a ele (Diário do Chico Bento) e supervisiona todo o código que ela escreve 🐈‍⬛💛.";
      } else if (query.includes("contato") || query.includes("email") || query.includes("github") || query.includes("estágio")) {
        botResponse = "A Vitória está disponível para oportunidades de estágio e projetos! Podes contactá-la pelo email vicbaltazar287@icloud.com ou através do GitHub github.com/vicbaltazar 🚀.";
      } else if (query.includes("olá") || query.includes("ola") || query.includes("oi")) {
        botResponse = "Olá! Como posso ajudar-te a conhecer melhor o portfólio da Vitória hoje? 🐸";
      }

      setMessages((prev) => [...prev, { sender: "system", text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <Window title="genia-chat.exe" accent="pink" className="border-4 border-black shadow-[8px_8px_0px_#000] bg-white">
      <div className="bg-black text-lime-400 p-2 border-2 border-black font-mono text-xs mb-3 shadow-[2px_2px_0px_#ffff00] flex justify-between items-center">
        <span>🤖 GenIA v1.0.0 (Terminal Mode)</span>
        <span className="animate-pulse bg-red-500 text-white px-1.5 py-0.5 text-[10px] font-bold">● ONLINE</span>
      </div>

      {/* Janela de Mensagens */}
      <div className="h-64 overflow-y-auto border-2 border-black bg-yellow-50 p-3 font-mono text-xs space-y-3 mb-3 shadow-inner">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <span className="text-[10px] text-gray-500 mb-0.5">
              {msg.sender === "user" ? "Tu" : "GenIA 🤖"}
            </span>
            <div
              className={`p-2.5 max-w-[85%] border-2 border-black shadow-[2px_2px_0px_#000] ${
                msg.sender === "user"
                  ? "bg-cyan-300 text-black font-bold"
                  : "bg-white text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-1 text-gray-500 font-mono text-xs italic bg-white p-2 border border-black w-fit">
            <span>GenIA está a pensar</span>
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Caixa de Input */}
      <form onSubmit={handleSend} className="flex gap-2">
        <div className="flex items-center bg-black text-lime-400 px-2 border-2 border-black font-mono text-xs">
          <span>&gt;</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunta algo sobre os projetos ou skills..."
          className="flex-1 border-2 border-black px-3 py-2 font-mono text-xs bg-white text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_#000]"
        />
        <button
          type="submit"
          className="border-2 border-black bg-lime-300 px-4 py-2 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_#000] hover:bg-pink-400 transition-all active:translate-y-0.5"
        >
          Enviar ↵
        </button>
      </form>
    </Window>
  );
}