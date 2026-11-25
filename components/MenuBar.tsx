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
    <header className="sticky top-0 z-40 border-b-2 border-[#3d2b3f] bg-[repeating-linear-gradient(90deg,#ffd6e0,#ffd6e0_12px,#fff0f5_12px,#fff0f5_24px)] shadow-[0px_3px_0px_#3d2b3f]">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-2.5 sm:gap-6">
        <span className="flex items-center gap-1.5 border-2 border-[#3d2b3f] bg-[#fffdf9] px-2.5 py-1 font-mono text-xs sm:text-sm font-bold tracking-tight text-[#3d2b3f] shadow-[inset_1px_1px_0px_#ffffff,2px_2px_0px_#3d2b3f]">
          <img
            src="/cat52.gif"
            alt=""
            aria-hidden="true"
            className="pixel-art h-4 w-4 object-contain"
          />
          <span>VitóriaOS</span>
          <span className="text-[#c96b8b]">♡</span>
        </span>

        <nav className="hidden sm:flex items-center gap-2 font-mono text-xs font-bold text-[#3d2b3f]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-2 border-[#3d2b3f] bg-[#fffdf9] px-2.5 py-1 shadow-[inset_1px_1px_0px_#ffffff,2px_2px_0px_#3d2b3f] transition-all hover:bg-[#e6f6f8] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              ✿ {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 font-mono text-xs font-bold text-[#3d2b3f]">
          <span
            aria-hidden
            className="hidden sm:inline-flex items-center gap-1 border-2 border-[#3d2b3f] bg-[#eef7b8] px-2 py-0.5 shadow-[inset_1px_1px_0px_#ffffff,2px_2px_0px_#3d2b3f]"
          >
            <span>🔋</span>
            <span>100%</span>
          </span>
          <span
            suppressHydrationWarning
            className="border-2 border-[#3d2b3f] bg-[#fffdf9] px-2.5 py-1 shadow-[inset_1px_1px_0px_#ffffff,2px_2px_0px_#3d2b3f]"
          >
            🕒 {time}
          </span>
        </div>
      </div>

      {/* mobile nav */}
      <nav className="flex sm:hidden items-center gap-2 overflow-x-auto border-t-2 border-[#3d2b3f] bg-[#fffaf3] px-4 py-2 font-mono text-xs font-bold text-[#3d2b3f]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap border-2 border-[#3d2b3f] bg-[#ffe8ef] px-2.5 py-1 shadow-[2px_2px_0px_#3d2b3f]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}