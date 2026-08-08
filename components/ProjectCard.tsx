import Window from "./Window";
import type { Project } from "@/data/projects";

const stackChip: Record<string, string> = {
  pink: "bg-pink-petal/40 border-pink-petal",
  sky: "bg-sky-powder/40 border-sky-powder",
  lime: "bg-lime-glow/40 border-lime-glow",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Window title={project.fileName} accent={project.accent}>
      <h3 className="font-mono text-base font-bold text-ink-plum">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-plum/80">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className={`rounded-full border px-2 py-0.5 font-mono text-[11px] text-ink-plum/80 ${stackChip[project.accent]}`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </Window>
  );
}
