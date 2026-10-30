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
      className="sticky bottom-4 z-40 mx-auto mt-16 flex w-fit gap-2 rounded-xl border-4 border-black bg-yellow-300 px-3 py-2.5 shadow-[6px_6px_0px_#000] backdrop-blur transition-transform hover:scale-105"
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          title={item.label}
          className="grid h-12 w-12 place-items-center rounded-lg border-2 border-black bg-white text-xl shadow-[3px_3px_0px_#000] transition-all hover:-translate-y-2 hover:bg-pink-400 hover:shadow-[4px_6px_0px_#000] focus-visible:-translate-y-2 focus-visible:bg-cyan-400 focus-visible:outline-none"
        >
          <span aria-hidden className="transform hover:rotate-12 transition-transform">{item.icon}</span>
          <span className="sr-only">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}