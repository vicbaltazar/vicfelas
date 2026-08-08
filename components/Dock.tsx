const items = [
  { icon: "🏠", label: "Início", href: "#topo" },
  { icon: "👤", label: "Sobre", href: "#sobre" },
  { icon: "🗂️", label: "Projetos", href: "#projetos" },
  { icon: "🖥️", label: "Skills", href: "#skills" },
  { icon: "✉️", label: "Contato", href: "#contato" },
  { icon: "🐈‍⬛", label: "Chico Bento", href: "#sobre" },
];

export default function Dock() {
  return (
    <nav
      aria-label="Navegação rápida"
      className="sticky bottom-4 z-40 mx-auto mt-16 flex w-fit gap-1.5 rounded-2xl border-2 border-ink-plum bg-cream/95 px-2.5 py-2 shadow-dock backdrop-blur"
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          title={item.label}
          className="grid h-10 w-10 place-items-center rounded-xl text-lg transition-transform hover:-translate-y-1.5 hover:bg-pink-petal/40 focus-visible:-translate-y-1.5 focus-visible:bg-sky-powder/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-plum"
        >
          <span aria-hidden>{item.icon}</span>
          <span className="sr-only">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
