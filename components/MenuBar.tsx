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
    <header className="sticky top-0 z-40 border-b-2 border-ink-plum bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-2.5 sm:gap-6">
        <span className="font-mono text-sm font-bold tracking-tight text-ink-plum">
          VitóriaOS
        </span>
        <nav className="hidden sm:flex items-center gap-5 font-mono text-xs text-ink-plum/70">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink-plum underline decoration-lime-glow decoration-2 underline-offset-4 hover:decoration-pink-petal"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 font-mono text-xs text-ink-plum/70">
          <span aria-hidden className="hidden sm:inline">
            🔋 100%
          </span>
          <span suppressHydrationWarning>{time}</span>
        </div>
      </div>
      {/* mobile nav */}
      <nav className="flex sm:hidden items-center gap-4 overflow-x-auto border-t border-ink-plum/20 px-4 py-2 font-mono text-xs text-ink-plum/70">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
