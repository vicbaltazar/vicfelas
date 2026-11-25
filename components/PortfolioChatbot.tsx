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

    setTimeout(() => {
      let botResponse =
        "Hmm, não tenho a certeza sobre isso! Mas podes enviar um email diretamente para vicbaltazar287@icloud.com ✉️";

      const query = userText.toLowerCase();

      if (
        query.includes("projeto") ||
        query.includes("trabalho") ||
        query.includes("mpb") ||
        query.includes("amor doce")
      ) {
        botResponse =
          "A Vitória desenvolveu vários projetos incríveis como a MPB-Dex (estilo Pokédex de MPB), o Amor Doce CRUD, e o Diário do Chico Bento! Podes ver todos na secção /projetos 🗂️.";
      } else if (
        query.includes("skill") ||
        query.includes("tecnologia") ||
        query.includes("stack") ||
        query.includes("linguagem")
      ) {
        botResponse =
          "A stack principal inclui React, Next.js, TypeScript, Node.js, Python e PostgreSQL. Vê todos os detalhes no terminal de skills acima 🖥️!";
      } else if (
        query.includes("chico") ||
        query.includes("gato") ||
        query.includes("pet")
      ) {
        botResponse =
          "O Chico Bento é o gato da Vitória! Tem um blog dedicado a ele (Diário do Chico Bento) e supervisiona todo o código que ela escreve 🐈‍⬛💛.";
      } else if (
        query.includes("contato") ||
        query.includes("email") ||
        query.includes("github") ||
        query.includes("estágio")
      ) {
        botResponse =
          "A Vitória está disponível para oportunidades de estágio e projetos! Podes contactá-la pelo email vicbaltazar287@icloud.com ou através do GitHub github.com/vicbaltazar 🚀.";
      } else if (
        query.includes("olá") ||
        query.includes("ola") ||
        query.includes("oi")
      ) {
        botResponse =
          "Olá! Como posso ajudar-te a conhecer melhor o portfólio da Vitória hoje? 🐸";
      }

      setMessages((prev) => [...prev, { sender: "system", text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <Window title="genia-chat.exe" accent="pink">
      <div className="mb-3 flex items-center justify-between border-2 border-[#3d2b3f] bg-[#4a354d] px-3 py-2 font-mono text-xs text-[#fffdf9] shadow-[2px_2px_0px_#3d2b3f]">
        <span>🤖 GenIA v1.0.0 (Pixel Chat)</span>
        <span className="animate-pulse border border-[#3d2b3f] bg-[#eef7b8] px-1.5 py-0.5 text-[10px] font-bold text-[#3d2b3f]">
          ● ONLINE
        </span>
      </div>

      {/* Janela de Mensagens */}
      <div className="mb-3 h-64 space-y-3 overflow-y-auto border-2 border-[#3d2b3f] bg-[#fffaf3] p-3 font-mono text-xs shadow-[inset_2px_2px_0px_#f0e2ec]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              msg.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            <span className="mb-0.5 text-[10px] text-[#7c5d80]">
              {msg.sender === "user" ? "Tu ♡" : "GenIA 🤖"}
            </span>
            <div
              className={`max-w-[85%] border-2 border-[#3d2b3f] p-2.5 shadow-[2px_2px_0px_#3d2b3f] ${
                msg.sender === "user"
                  ? "bg-[#e2f5f8] font-bold text-[#3d2b3f]"
                  : "bg-[#fffdf9] text-[#3d2b3f]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex w-fit items-center gap-1 border border-dashed border-[#c49bb3] bg-[#fffdf9] p-2 font-mono text-xs italic text-[#7c5d80]">
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
        <div className="flex items-center border-2 border-[#3d2b3f] bg-[#ffe4ec] px-2.5 font-mono text-xs font-bold text-[#3d2b3f]">
          <span>&gt;</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunta algo sobre os projetos ou skills..."
          className="flex-1 border-2 border-[#3d2b3f] bg-[#fffdf9] px-3 py-2 font-mono text-xs text-[#3d2b3f] shadow-[inset_1px_1px_0px_#f0e2ec] focus:bg-[#fff8fb] focus:outline-none"
        />
        <button
          type="submit"
          className="border-2 border-[#3d2b3f] bg-[#eef7b8] px-4 py-2 font-mono text-xs font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f] transition-all hover:bg-[#ffe4ec] active:translate-y-0.5 active:shadow-none"
        >
          Enviar ↵
        </button>
      </form>
    </Window>
  );
}