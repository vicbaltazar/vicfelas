import Window from "./Window";
import type { Project } from "@/data/projects";

const stackChip: Record<string, string> = {
  pink: "bg-[#ffe4ec] border-[#3d2b3f] shadow-[1.5px_1.5px_0px_#3d2b3f] text-[#3d2b3f] font-bold",
  sky: "bg-[#e2f5f8] border-[#3d2b3f] shadow-[1.5px_1.5px_0px_#3d2b3f] text-[#3d2b3f] font-bold",
  lime: "bg-[#eef7b8] border-[#3d2b3f] shadow-[1.5px_1.5px_0px_#3d2b3f] text-[#3d2b3f] font-bold",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Window
      title={project.fileName}
      accent={project.accent}
      className="transition-transform hover:-translate-y-1"
    >
      <h3 className="mb-2 inline-block border-2 border-[#3d2b3f] bg-[#fff3d6] px-2.5 py-1 font-mono text-sm sm:text-base font-bold text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#b84a6f] hover:underline"
          >
            ✿ {project.title} ↗
          </a>
        ) : (
          <span>✿ {project.title}</span>
        )}
      </h3>

      <p className="mt-2 border border-dashed border-[#c49bb3] bg-[#fffaf3] p-2.5 text-sm leading-relaxed text-[#3d2b3f]">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className={`border-[1.5px] px-2.5 py-0.5 font-mono text-[11px] ${
              stackChip[project.accent] ||
              "bg-[#fff3d6] border-[#3d2b3f] shadow-[1.5px_1.5px_0px_#3d2b3f] text-[#3d2b3f] font-bold"
            }`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </Window>
  );
}