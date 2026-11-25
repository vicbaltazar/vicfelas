const items = [
  { icon: "🏠", label: "Início", href: "#topo" },
  { icon: "👤", label: "Sobre", href: "#sobre" },
  { icon: "🗂️", label: "Projetos", href: "#projetos" },
  { icon: "🖥️", label: "Skills", href: "#skills" },
  { icon: "✉️", label: "Contato", href: "#contato" },
  { icon: "🐈‍⬛", label: "Chico Bento", href: "#sobre" },
  { icon: "🤖", label: "GenIA", href: "#genia" },
  { icon: "⚡", label: "Pokémon", href: "#pokemon" },
];

export default function Dock() {
  return (
    <nav
      aria-label="Navegação rápida"
      className="sticky bottom-4 z-40 mx-auto mt-16 flex w-fit max-w-[95vw] flex-wrap justify-center gap-2 border-2 border-[#3d2b3f] bg-[#fff0f5]/95 px-3 py-2.5 shadow-[inset_2px_2px_0px_#ffffff,4px_4px_0px_#3d2b3f] backdrop-blur-sm"
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          title={item.label}
          className="group relative grid h-11 w-11 place-items-center border-2 border-[#3d2b3f] bg-[#fffdf9] text-lg shadow-[inset_1px_1px_0px_#ffffff,2px_2px_0px_#3d2b3f] transition-all hover:-translate-y-1.5 hover:bg-[#e6f6f8] hover:shadow-[2px_4px_0px_#3d2b3f] focus-visible:-translate-y-1.5 focus-visible:bg-[#ffe8ef] focus-visible:outline-none active:translate-y-0 active:shadow-none"
        >
          <span aria-hidden className="transition-transform group-hover:scale-110">
            {item.icon}
          </span>
          <span className="sr-only">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}