import ProjectCard from "@/components/ProjectCard";
import SkillsTerminal from "@/components/SkillsTerminal";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import PokemonParty from "@/components/PokemonParty";
import { projects } from "@/data/projects";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Pokémon", href: "#pokemon" },
  { label: "GenIA", href: "#genia" },
  { label: "Contato", href: "#contato" },
];

const quickButtons = [
  { label: "GitHub", href: "https://github.com/vicbaltazar" },
  { label: "Linktree", href: "https://vicfelas-five.vercel.app/" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Pokémon", href: "#pokemon" },
  { label: "Contato", href: "#contato" },
];

const miniStamps = [
  { text: "VitóriaOS", bg: "bg-[#ffd6e4] text-[#8f294b]" },
  { text: "Next.js 14", bg: "bg-[#d9f3ff] text-[#1e4e68]" },
  { text: "Chico Bento 🐈‍⬛", bg: "bg-[#fff3c4] text-[#6b4f12]" },
  { text: "MPB Lover ♪", bg: "bg-[#e7f7c8] text-[#3a5414]" },
  { text: "Pixel Art ♡", bg: "bg-[#f3dcff] text-[#582873]" },
  { text: "Best on PC", bg: "bg-[#ffe2d1] text-[#733617]" },
];

export default function Home() {
  return (
    <div
      id="topo"
      className="min-h-screen px-2 py-0 sm:px-4"
      style={{
        backgroundColor: "#fff5f8",
        backgroundImage: 'url("/bg-kittens.jpeg")',
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "480px auto",
      }}
    >
      
      <div className="safari-shell mx-auto min-h-screen max-w-[820px]">
        <header className="relative overflow-hidden border-b-2 border-[#f48fb1] bg-[linear-gradient(135deg,#ffd6e7_0%,#fff4d2_48%,#d2f3f8_100%)] px-4 py-7 text-center">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-3">
            <img
              src="/cat52.gif"
              alt="Gatinho pixel art"
              className="pixel-art h-11 w-11 object-contain"
            />
            <h1 className="safari-title-shadow font-mono text-3xl font-extrabold tracking-tight text-[#b83b62] sm:text-5xl">
              vitória<span className="text-[#4a8fa3]">OS</span>
            </h1>
            <img
              src="/cat52.gif"
              alt="Gatinho pixel art"
              className="pixel-art h-11 w-11 -scale-x-100 object-contain"
            />
          </div>
          <p className="mt-1 font-mono text-[11px] font-bold tracking-widest text-[#7d4963] uppercase">
            ★ personal web archive &amp; fullstack portfolio ★
          </p>
        </header>

        <nav
          aria-label="Menu principal"
          className="safari-navbar sticky top-0 z-30 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-3 py-1.5 font-mono text-xs font-bold text-white"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-1.5 py-0.5 [text-shadow:1px_1px_0px_#a62c52] hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <main className="px-4 py-6 sm:px-7">
          <section id="sobre" className="scroll-mt-14 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🌸</span>
              <h2 className="font-mono text-xl font-extrabold text-[#c94a72] sm:text-2xl [text-shadow:1px_1px_0px_#ffd6e4]">
                Welcome to Vitória&apos;s Portfolio!
              </h2>
              <span className="text-lg">🌸</span>
            </div>

            <p className="mt-1.5 font-mono text-xs font-bold text-[#5e3a4d]">
              ˖⁺‧₊˚✦ Desenvolvedora FullStack &amp; Estudante de Ciência da Computação ✦˚₊‧⁺˖
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-[13px] leading-relaxed text-[#4a2c3d]">
              Olá! Eu sou a <strong>Vitória Baltazar (VicFelas)</strong>, aprendiz de ADM na
              Viação Sertanezina e graduanda em Ciência da Computação. Este é o meu cantinho
              na web, onde reúno meus projetos em React, Next.js, TypeScript e Python,
              supervisionados pelo meu gato <strong>Chico Bento</strong> e ao som de muita MPB.
            </p>

            <p className="mt-1 font-mono text-[10px] italic text-[#8a5c73]">
              Feito com carinho em Sertãozinho / Ribeirão Preto, SP • Melhor visualizado com cafézinho ☕
            </p>

            <div className="mx-auto mt-4 max-w-xl border border-[#8fa858] bg-[#eef8c8] px-3 py-1.5 font-mono text-[11px] font-bold text-[#3f5219] shadow-[1px_1px_0px_#ffffff_inset]">
              ⚠️ Este portfólio contém alta dose de pixel art, Pokémon e MPB. Explore à vontade! ✿
            </div>

            <div className="mt-4">
              <p className="mb-2 font-mono text-[11px] text-[#6e465b]">
                Navegue rápido pelas seções e links:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs font-bold">
                {quickButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target={btn.href.startsWith("http") ? "_blank" : undefined}
                    rel={btn.href.startsWith("http") ? "noreferrer" : undefined}
                    className="safari-pill-btn px-3 py-1"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
          
          <section className="safari-lace-box mt-6 p-4 sm:p-5">
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
              <div className="flex flex-col items-center gap-2.5 text-center md:col-span-4">
                <div className="w-full border border-[#d69b27] bg-[repeating-linear-gradient(-45deg,#ffe066,#ffe066_8px,#4a2c3d_8px,#4a2c3d_16px)] p-1">
                  <div className="bg-[#fffdf5] px-2 py-0.5 font-mono text-[11px] font-extrabold text-[#4a2c3d]">
                    🚧 Sempre em evolução!
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 font-mono text-[10px] font-bold">
                  <span className="border border-[#f48fb1] bg-[#ffe4ec] px-2 py-0.5 text-[#8f294b]">
                    FullStack Dev
                  </span>
                  <span className="border border-[#81d4fa] bg-[#e1f5fe] px-2 py-0.5 text-[#1c5470]">
                    CC Student
                  </span>
                  <span className="border border-[#ce93d8] bg-[#f3e5f5] px-2 py-0.5 text-[#5b246b]">
                    Estágio TI
                  </span>
                </div>

                <div className="w-full rounded-lg border-2 border-dotted border-[#f48fb1] bg-[#fff5f9] p-2 font-mono">
                  <p className="text-[10px] font-bold text-[#b83b62]">
                    VitóriaOS já recebeu...
                  </p>
                  <div className="my-1 inline-flex gap-0.5 border border-[#4a2c3d] bg-[#2b1823] px-1.5 py-0.5 text-xs font-bold tracking-widest text-[#ff9ebb]">
                    <span>0</span>
                    <span>0</span>
                    <span>2</span>
                    <span>0</span>
                    <span>2</span>
                    <span>6</span>
                  </div>
                  <p className="text-[10px] text-[#7d4963]">
                    visitas desde 2026! Wow ♡
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center md:col-span-4">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[#f48fb1] bg-[#fff5f9]">
                  <img
                    src="/cat52.gif"
                    alt="Chico Bento Pixel Mascot"
                    className="pixel-art h-16 w-16 object-contain"
                  />
                </div>
                <span className="mt-2 border border-[#f48fb1] bg-[#ffe4ec] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#8f294b]">
                  Chico Bento • Chefe de QA 🐾
                </span>
              </div>

              <div className="md:col-span-4">
                <div className="safari-sticky-note p-3 font-mono text-[11px] text-[#4a3e12]">
                  <p className="mb-1 border-b border-[#c9be6b] pb-1 font-extrabold">
                    💡 Você sabia?
                  </p>
                  <p className="leading-snug">
                    Este site foi construído em Next.js e TypeScript inspirado na
                    estética clássica do Neocities! Novos projetos e experimentos são
                    adicionados constantemente.
                  </p>
                  <label className="mt-2 flex items-center gap-1.5 text-[10px] text-[#6b5d24]">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-[#f4729b]"
                    />
                    <span>Modo fofura ativado</span>
                  </label>
                </div>
              </div>
            </div>

            <div id="projetos" className="mt-7 scroll-mt-14 border-t-2 border-dashed border-[#f8bbd0] pt-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-mono text-sm font-extrabold text-[#b83b62]">
                  ✿ Meus Projetos ({projects.length})
                </h3>
                <span className="font-mono text-[11px] text-[#7d4963]">
                  clique para ver no GitHub ↗
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            <div id="skills" className="mt-7 scroll-mt-14 border-t-2 border-dashed border-[#f8bbd0] pt-5">
              <h3 className="mb-3 font-mono text-sm font-extrabold text-[#b83b62]">
                ★ Stack &amp; Ferramentas
              </h3>
              <SkillsTerminal />
            </div>

            <div id="pokemon" className="mt-7 scroll-mt-14 border-t-2 border-dashed border-[#f8bbd0] pt-5">
              <h3 className="mb-3 font-mono text-sm font-extrabold text-[#b83b62]">
                ♡ Equipa Pokémon Favorita
              </h3>
              <PokemonParty />
            </div>

            <div id="genia" className="mt-7 scroll-mt-14 border-t-2 border-dashed border-[#f8bbd0] pt-5">
              <h3 className="mb-3 font-mono text-sm font-extrabold text-[#b83b62]">
                🤖 Fale com a GenIA
              </h3>
              <PortfolioChatbot />
            </div>

            <div
              id="contato"
              className="mt-7 scroll-mt-14 border-t-2 border-dashed border-[#f8bbd0] pt-5 text-center"
            >
              <h3 className="font-mono text-sm font-extrabold text-[#b83b62]">
                ✉ Vamos conversar?
              </h3>
              <p className="mx-auto mt-1 max-w-md font-mono text-xs text-[#5e3a4d]">
                Aberta a oportunidades de estágio em TI, projetos web ou papo sobre Pokémon e MPB!
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 font-mono text-xs font-bold">
                <a
                  href="mailto:vicbaltazar287@icloud.com"
                  className="safari-pill-btn px-3.5 py-1.5"
                >
                  ✉ vicbaltazar287@icloud.com
                </a>
                <a
                  href="https://github.com/vicbaltazar"
                  target="_blank"
                  rel="noreferrer"
                  className="safari-pill-btn px-3.5 py-1.5"
                >
                  ⌥ github.com/vicbaltazar
                </a>
                <a
                  href="https://vicfelas-five.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="safari-pill-btn px-3.5 py-1.5"
                >
                  🔗 linktree
                </a>
              </div>
            </div>
          </section>

          <footer className="mt-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {miniStamps.map((stamp) => (
                <span
                  key={stamp.text}
                  className={`inline-flex h-[31px] w-[88px] items-center justify-center border border-[#4a2c3d] px-1 font-mono text-[9px] font-extrabold leading-none shadow-[1px_1px_0px_#ffffff_inset] ${stamp.bg}`}
                >
                  {stamp.text}
                </span>
              ))}
            </div>

            <p className="mt-3 font-mono text-[11px] text-[#7d4963]">
              VitóriaOS © {new Date().getFullYear()} • inspirado na estética Pixel Safari / Neocities ♡
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
