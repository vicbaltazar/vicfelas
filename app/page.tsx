import MenuBar from "@/components/MenuBar";
import Window from "@/components/Window";
import ProjectCard from "@/components/ProjectCard";
import SkillsTerminal from "@/components/SkillsTerminal";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import PokemonParty from "@/components/PokemonParty";
import Dock from "@/components/Dock";
import { projects } from "@/data/projects";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#ff00ff] via-[#ffff00] to-[#00ffcc] bg-[length:400%_400%] animate-gradientBG overflow-x-hidden relative p-2 sm:p-6">

      <div className="absolute top-12 left-4 text-4xl animate-bounce z-20 pointer-events-none">🐸</div>
      <div className="absolute top-28 right-6 text-5xl rotate-12 z-20 pointer-events-none">✨🐬</div>
      <div className="absolute top-1/3 left-2 text-4xl -rotate-12 z-20 pointer-events-none">🐱🐾</div>
      <div className="absolute top-1/2 right-4 text-4xl rotate-45 z-20 pointer-events-none">⚡</div>
      <div className="absolute bottom-1/4 left-6 text-4xl -rotate-6 z-20 pointer-events-none">🎵🎸</div>
      <div className="absolute bottom-10 right-10 text-5xl rotate-12 z-20 pointer-events-none">👾</div>

      <MenuBar />

      <main id="topo" className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 relative z-10">
        
        {/* HERO / SOBRE */}
        <div id="sobre" className="scroll-mt-20 transform -rotate-1 transition-transform hover:rotate-0">
          <Window title="~/sobre.txt (URGENTE)" accent="pink" className="animate-float border-4 border-black shadow-[8px_8px_0px_#000]">
            <p className="font-mono text-xs text-mauve-soft bg-yellow-200 px-2 py-0.5 inline-block border border-black">
              janela 1 de 999 — ALTO TEOR DE CAOS E POKÉMON
            </p>
            <h1 className="mt-3 font-mono text-4xl font-extrabold leading-tight text-ink-plum sm:text-5xl drop-shadow-[3px_3px_0px_#ff007f]">
              Vitória Baltazar
              <span className="ml-1 inline-block h-7 w-2.5 translate-y-1 animate-blink bg-lime-400 align-middle sm:h-8" />
            </h1>
            <p className="mt-1 font-mono text-sm font-bold bg-cyan-300 px-2 py-1 inline-block border border-black text-black">
              VicFelas — Desenvolvedora FullStack & Mestre Pokémon
            </p>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed font-bold text-black bg-white/80 p-3 border-2 border-dashed border-black">
              Aprendiz de ADM na Viação Sertanezina e estudante de Ciências da
              Computação. Construo código com a mesma energia de quem treina um time de Pokémon e ouve MPB no talo (com a supervisão do gato Chico Bento).
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
              <span className="rounded-none border-2 border-black bg-pink-400 px-3 py-1 font-bold shadow-[3px_3px_0px_#000]">
                Ribeirão Preto, SP 📍
              </span>
              <span className="rounded-none border-2 border-black bg-cyan-400 px-3 py-1 font-bold shadow-[3px_3px_0px_#000]">
                Estácio — Ciência da Computação 🎓
              </span>
              <span className="rounded-none border-2 border-black bg-lime-300 px-3 py-1 font-bold shadow-[3px_3px_0px_#000]">
                Disponível para estágios 🚀
              </span>
            </div>
          </Window>
        </div>

        {/* PROJETOS */}
        <div id="projetos" className="scroll-mt-20 mt-12 transform rotate-1">
          <div className="mb-4 flex items-baseline justify-between bg-black text-white p-2 border-2 border-yellow-300 shadow-[4px_4px_0px_#ffff00]">
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest">
              /projetos (Os Brabos)
            </h2>
            <span className="font-mono text-xs text-yellow-300">
              {projects.length} itens na matrix
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={project.id} className={`transform ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills" className="scroll-mt-20 mt-12 transform -rotate-1">
          <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest bg-pink-500 text-white p-2 border-2 border-black shadow-[4px_4px_0px_#000]">
            /skills (Poderes Mágicos)
          </h2>
          <SkillsTerminal />
        </div>

        {/* POKEMON PARTY */}
        <div id="pokemon" className="scroll-mt-20 mt-12 transform rotate-1">
          <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest bg-yellow-300 text-black p-2 border-2 border-black shadow-[4px_4px_0px_#000]">
            /favoritos (Equipa Pokémon)
          </h2>
          <PokemonParty />
        </div>

        {/* GENIA CHATBOT */}
        <div id="genia" className="scroll-mt-20 mt-12 transform -rotate-1">
          <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest bg-cyan-400 text-black p-2 border-2 border-black shadow-[4px_4px_0px_#000]">
            /genia (Assistente Virtual)
          </h2>
          <PortfolioChatbot />
        </div>

        {/* CONTATO */}
        <div id="contato" className="scroll-mt-20 mt-12 transform rotate-1">
          <Window title="contato.exe" accent="sky" className="border-4 border-black shadow-[8px_8px_0px_#ff007f] bg-yellow-100">
            <h2 className="font-mono text-lg font-bold text-black bg-lime-300 p-1 border border-black inline-block">
              vamos trocar uma ideia? 📞💥
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed font-bold text-black">
              Aberta a estágios, parcerias em TI ou debates sobre qual a melhor região de Pokémon.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 font-mono text-sm">
              <a
                href="mailto:vicbaltazar287@icloud.com"
                className="rounded-none border-2 border-black bg-pink-400 px-4 py-2 font-bold text-black shadow-[4px_4px_0px_#000] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
              >
                ✉ vicbaltazar287@icloud.com
              </a>
              <a
                href="https://github.com/vicbaltazar"
                target="_blank"
                rel="noreferrer"
                className="rounded-none border-2 border-black bg-cyan-400 px-4 py-2 font-bold text-black shadow-[4px_4px_0px_#000] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
              >
                ⌥ github.com/vicbaltazar
              </a>
              <a
                href="https://vicfelas-five.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-none border-2 border-black bg-lime-300 px-4 py-2 font-bold text-black shadow-[4px_4px_0px_#000] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
              >
                🔗 linktree
              </a>
            </div>
          </Window>
        </div>

        <Dock />

        <footer className="mt-16 text-center font-mono text-xs bg-black text-lime-300 p-4 border-2 border-yellow-300 shadow-[4px_4px_0px_#ffff00]">
          VitóriaOS © {new Date().getFullYear()} — Feito com puro caos, Next.js e muita energia 🐸✨
        </footer>
      </main>
    </div>
  );
}