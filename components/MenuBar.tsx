"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

export default function MenuBar() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const t = setInterval(update, 1000 * 30);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-yellow-300 shadow-[0px_4px_0px_#000] backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:gap-6">
        <span className="font-mono text-sm font-black tracking-tight text-black bg-pink-400 px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] rotate-[-1deg]">
          VitóriaOS 🐸
        </span>
        <nav className="hidden sm:flex items-center gap-4 font-mono text-xs font-bold text-black">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-2 border-transparent px-2 py-1 transition-all hover:bg-cyan-300 hover:border-black hover:shadow-[2px_2px_0px_#000] hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 font-mono text-xs font-bold text-black">
          <span aria-hidden className="hidden sm:inline bg-lime-300 px-2 py-0.5 border-2 border-black">
            🔋 100%
          </span>
          <span suppressHydrationWarning className="bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
            {time}
          </span>
        </div>
      </div>
      {/* mobile nav */}
      <nav className="flex sm:hidden items-center gap-3 overflow-x-auto border-t-2 border-black px-4 py-2 font-mono text-xs font-bold text-black bg-white">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="whitespace-nowrap bg-pink-200 px-2 py-1 border border-black shadow-[2px_2px_0px_#000]">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}