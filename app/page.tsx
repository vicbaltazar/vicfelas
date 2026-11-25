import MenuBar from "@/components/MenuBar";
import Window from "@/components/Window";
import ProjectCard from "@/components/ProjectCard";
import SkillsTerminal from "@/components/SkillsTerminal";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import PokemonParty from "@/components/PokemonParty";
import Dock from "@/components/Dock";
import { projects } from "@/data/projects";

const stamps = [
  "♡ neocities vibes",
  "✿ pixel safari inspired",
  "🐈‍⬛ chico bento approved",
  "★ fullstack & frontend",
  "♪ mpb & pokemon",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#3d2b3f]">
      {/* Pequenos detalhes decorativos flutuantes discretos */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-3 top-24 z-20 hidden text-xl opacity-80 lg:block"
      >
        ✿
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-4 top-36 z-20 hidden text-xl opacity-80 lg:block"
      >
        ♡
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-28 left-4 z-20 hidden text-xl opacity-80 lg:block"
      >
        ★
      </div>

      <MenuBar />

      <main
        id="topo"
        className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6"
      >
        {/* HERO / SOBRE */}
        <div id="sobre" className="scroll-mt-24">
          <Window title="~/sobre.txt" accent="pink">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="border border-[#3d2b3f] bg-[#ffe4ec] px-2 py-0.5 font-bold text-[#3d2b3f]">
                    bem-vinda ao vitoria.os ♡
                  </span>
                  <span className="border border-dashed border-[#c49bb3] bg-[#fffaf3] px-2 py-0.5 text-[#6d5072]">
                    arquivo pessoal &amp; dev log
                  </span>
                </div>

                <h1 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-[#3d2b3f] sm:text-5xl">
                  Vitória Baltazar
                  <span className="ml-1.5 inline-block h-6 w-2 translate-y-0.5 animate-pulse bg-[#c96b8b] align-middle sm:h-8" />
                </h1>

                <p className="mt-2 inline-block border border-[#3d2b3f] bg-[#e2f5f8] px-2.5 py-1 font-mono text-xs sm:text-sm font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
                  VicFelas — Desenvolvedora FullStack &amp; Fã de Pokémon
                </p>

                <p className="mt-4 max-w-2xl border border-dashed border-[#c49bb3] bg-[#fffaf3] p-3.5 text-sm sm:text-base leading-relaxed text-[#3d2b3f]">
                  Aprendiz de ADM na Viação Sertanezina e estudante de Ciência da
                  Computação. Gosto de criar interfaces criativas, projetos
                  pessoais cheios de personalidade e código funcional — tudo sob a
                  supervisão atenta do meu gato Chico Bento e ouvindo MPB.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                  <span className="border-[1.5px] border-[#3d2b3f] bg-[#ffe4ec] px-3 py-1 font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
                    📍 Sertãozinho / Ribeirão Preto, SP
                  </span>
                  <span className="border-[1.5px] border-[#3d2b3f] bg-[#e2f5f8] px-3 py-1 font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
                    🎓 Ciência da Computação
                  </span>
                  <span className="border-[1.5px] border-[#3d2b3f] bg-[#eef7b8] px-3 py-1 font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
                    ✿ Aberta a oportunidades
                  </span>
                </div>
              </div>

              {/* Cartão lateral fofo estilo cantinho do Pixel Safari */}
              <aside className="w-full shrink-0 border-2 border-[#3d2b3f] bg-[#fffaf3] p-3 font-mono text-xs shadow-[inset_1px_1px_0px_#ffffff,3px_3px_0px_#3d2b3f] sm:w-52">
                <div className="mb-2 flex items-center justify-between border-b border-dashed border-[#c49bb3] pb-1.5 font-bold text-[#3d2b3f]">
                  <span>status.txt</span>
                  <span className="text-[#c96b8b]">● on</span>
                </div>

                <div className="flex items-center gap-2.5 border border-[#3d2b3f] bg-[#fffdf9] p-2">
                  <img
                    src="/cat52.gif"
                    alt="Pixel art de gatinho"
                    className="pixel-art h-10 w-10 shrink-0 object-contain"
                  />
                  <div className="leading-snug">
                    <p className="font-bold text-[#3d2b3f]">Chico Bento</p>
                    <p className="text-[11px] text-[#6d5072]">chefe de QA 🐈‍⬛</p>
                  </div>
                </div>

                <ul className="mt-2.5 space-y-1 text-[11px] text-[#3d2b3f]">
                  <li className="border border-dashed border-[#d8b4c8] bg-[#fffdf9] px-2 py-1">
                    <strong>mood:</strong> codando &amp; ouvindo MPB
                  </li>
                  <li className="border border-dashed border-[#d8b4c8] bg-[#fffdf9] px-2 py-1">
                    <strong>stack:</strong> Next.js, TS, Tailwind
                  </li>
                </ul>
              </aside>
            </div>

            {/* Faixa de stamps / selos retrô */}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-dashed border-[#c49bb3] pt-4 font-mono text-[11px]">
              {stamps.map((stamp) => (
                <span
                  key={stamp}
                  className="border border-[#3d2b3f] bg-[#fffdf9] px-2.5 py-0.5 font-semibold text-[#5d4360] shadow-[1.5px_1.5px_0px_#3d2b3f]"
                >
                  {stamp}
                </span>
              ))}
            </div>
          </Window>
        </div>

        {/* PROJETOS */}
        <div id="projetos" className="mt-10 scroll-mt-24">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-2 border-[#3d2b3f] bg-[#ffe4ec] px-3.5 py-2 shadow-[3px_3px_0px_#3d2b3f]">
            <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3d2b3f]">
              ✿ /projetos — vitrine de criações
            </h2>
            <span className="border border-[#3d2b3f] bg-[#fffdf9] px-2 py-0.5 font-mono text-[11px] font-bold text-[#3d2b3f]">
              {projects.length} projetos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills" className="mt-10 scroll-mt-24">
          <div className="mb-4 flex items-center justify-between border-2 border-[#3d2b3f] bg-[#eef7b8] px-3.5 py-2 shadow-[3px_3px_0px_#3d2b3f]">
            <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3d2b3f]">
              ★ /skills — caixinha de ferramentas
            </h2>
          </div>
          <SkillsTerminal />
        </div>

        {/* POKEMON PARTY */}
        <div id="pokemon" className="mt-10 scroll-mt-24">
          <div className="mb-4 flex items-center justify-between border-2 border-[#3d2b3f] bg-[#e2f5f8] px-3.5 py-2 shadow-[3px_3px_0px_#3d2b3f]">
            <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3d2b3f]">
              ♡ /favoritos — time pokémon
            </h2>
          </div>
          <PokemonParty />
        </div>

        {/* GENIA CHATBOT */}
        <div id="genia" className="mt-10 scroll-mt-24">
          <div className="mb-4 flex items-center justify-between border-2 border-[#3d2b3f] bg-[#ffe4ec] px-3.5 py-2 shadow-[3px_3px_0px_#3d2b3f]">
            <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3d2b3f]">
              ✿ /genia — assistente do sistema
            </h2>
          </div>
          <PortfolioChatbot />
        </div>

        {/* CONTATO */}
        <div id="contato" className="mt-10 scroll-mt-24">
          <Window title="contato.exe" accent="sky">
            <h2 className="inline-block border-2 border-[#3d2b3f] bg-[#eef7b8] px-2.5 py-1 font-mono text-base sm:text-lg font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
              vamos trocar uma ideia? ✉ ♡
            </h2>
            <p className="mt-3 max-w-lg border border-dashed border-[#c49bb3] bg-[#fffaf3] p-3 text-sm leading-relaxed text-[#3d2b3f]">
              Aberta a estágios, freelas, troca de ideias sobre front-end/full-stack
              ou conversas sobre Pokémon e MPB.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs sm:text-sm">
              <a
                href="mailto:vicbaltazar287@icloud.com"
                className="border-2 border-[#3d2b3f] bg-[#ffe4ec] px-4 py-2 font-bold text-[#3d2b3f] shadow-[3px_3px_0px_#3d2b3f] transition-all hover:-translate-y-0.5 hover:bg-[#ffd1e0] active:translate-y-0 active:shadow-none"
              >
                ✉ vicbaltazar287@icloud.com
              </a>
              <a
                href="https://github.com/vicbaltazar"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#3d2b3f] bg-[#e2f5f8] px-4 py-2 font-bold text-[#3d2b3f] shadow-[3px_3px_0px_#3d2b3f] transition-all hover:-translate-y-0.5 hover:bg-[#cbeff5] active:translate-y-0 active:shadow-none"
              >
                ⌥ github.com/vicbaltazar
              </a>
              <a
                href="https://vicfelas-five.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#3d2b3f] bg-[#eef7b8] px-4 py-2 font-bold text-[#3d2b3f] shadow-[3px_3px_0px_#3d2b3f] transition-all hover:-translate-y-0.5 hover:bg-[#e3f296] active:translate-y-0 active:shadow-none"
              >
                🔗 linktree
              </a>
            </div>
          </Window>
        </div>

        <Dock />

        <footer className="mt-14 border-2 border-[#3d2b3f] bg-[#fffdf9] p-4 text-center font-mono text-xs text-[#3d2b3f] shadow-[inset_1px_1px_0px_#ffffff,4px_4px_0px_#3d2b3f]">
          <p className="font-bold">
            VitóriaOS © {new Date().getFullYear()} — feito com carinho, Next.js &amp; estética indie web ♡
          </p>
          <p className="mt-1 text-[11px] text-[#6d5072]">
            melhor visualizado com um energético e o Chico Bento por perto 🐈‍⬛
          </p>
        </footer>
      </main>
    </div>
  );
}
