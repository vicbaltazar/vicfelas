import MenuBar from "@/components/MenuBar";
import Window from "@/components/Window";
import ProjectCard from "@/components/ProjectCard";
import SkillsTerminal from "@/components/SkillsTerminal";
import Dock from "@/components/Dock";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <MenuBar />

      <main id="topo" className="mx-auto max-w-5xl px-4 pb-8 pt-10 sm:px-6">
        {/* HERO / SOBRE */}
        <div id="sobre" className="scroll-mt-20">
          <Window title="~/sobre.txt" accent="pink" className="animate-float">
            <p className="font-mono text-xs text-mauve-soft">
              janela 1 de 1 — última modificação: hoje
            </p>
            <h1 className="mt-3 font-mono text-3xl font-bold leading-tight text-ink-plum sm:text-4xl">
              Vitória Baltazar
              <span className="ml-1 inline-block h-7 w-2.5 translate-y-1 animate-blink bg-pink-petal align-middle sm:h-8" />
            </h1>
            <p className="mt-1 font-mono text-sm text-mauve-soft">
              VicFelas — desenvolvedora full stack
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-plum/85 sm:text-base">
              Aprendiz de TI na Viação Sertanezina e estudante de Ciências da
              Computação, construindo projetos que misturam lógica de
              back-end com temas que eu realmente gosto — de Pokémon a MPB.
              Curto interface com cara de sistema antigo, mas em tom pastel:
              menos CRT preto e verde, mais disquete cor-de-rosa.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
              <span className="rounded-full border border-ink-plum bg-pink-petal/50 px-3 py-1">
                Sertãozinho, SP
              </span>
              <span className="rounded-full border border-ink-plum bg-sky-powder/50 px-3 py-1">
                Estácio — Ciência da Computação
              </span>
              <span className="rounded-full border border-ink-plum bg-lime-glow/50 px-3 py-1">
                disponível para oportunidades
              </span>
            </div>
          </Window>
        </div>

        {/* PROJETOS */}
        <div id="projetos" className="scroll-mt-20 mt-10">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-ink-plum/70">
              /projetos
            </h2>
            <span className="font-mono text-xs text-mauve-soft">
              {projects.length} itens
            </span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills" className="scroll-mt-20 mt-10">
          <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-ink-plum/70">
            /skills
          </h2>
          <SkillsTerminal />
        </div>

        {/* CONTATO */}
        <div id="contato" className="scroll-mt-20 mt-10">
          <Window title="contato.exe" accent="sky">
            <h2 className="font-mono text-lg font-bold text-ink-plum">
              vamos trocar uma ideia?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-plum/80">
              Aberta a estágios, projetos em parceria ou só uma conversa sobre
              dev, tarô ou NCT.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 font-mono text-sm">
              <a
                href="mailto:vicfelas@gmail.com"
                className="rounded-lg border-2 border-ink-plum bg-pink-petal px-4 py-2 font-bold text-ink-plum shadow-window transition-transform hover:-translate-y-0.5 hover:shadow-window-hover"
              >
                ✉ vicfelas@gmail.com
              </a>
              <a
                href="https://github.com/vicbaltazar"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-ink-plum bg-sky-powder px-4 py-2 font-bold text-ink-plum shadow-window transition-transform hover:-translate-y-0.5 hover:shadow-window-hover"
              >
                ⌥ github.com/vicbaltazar
              </a>
            </div>
          </Window>
        </div>

        <Dock />

        <footer className="mt-10 text-center font-mono text-[11px] text-mauve-soft">
          VitóriaOS © {new Date().getFullYear()} — feito com Next.js e café
          gelado
        </footer>
      </main>
    </>
  );
}
