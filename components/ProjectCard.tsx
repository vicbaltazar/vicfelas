import Window from "./Window";
import type { Project } from "@/data/projects";

const stackChip: Record<string, string> = {
  pink: "bg-pink-400 border-black shadow-[2px_2px_0px_#000] text-black font-bold",
  sky: "bg-cyan-400 border-black shadow-[2px_2px_0px_#000] text-black font-bold",
  lime: "bg-lime-300 border-black shadow-[2px_2px_0px_#000] text-black font-bold",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Window 
      title={project.fileName} 
      accent={project.accent} 
      className="border-4 border-black shadow-[6px_6px_0px_#000] bg-white transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
    >
      <h3 className="font-mono text-base font-black text-black bg-yellow-200 px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0px_#000] mb-2">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {project.title} ↗
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed font-bold text-black bg-gray-50 p-2 border border-black">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className={`rounded-none border-2 px-2.5 py-0.5 font-mono text-[11px] ${stackChip[project.accent] || "bg-yellow-100 border-black shadow-[2px_2px_0px_#000] text-black font-bold"}`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </Window>
  );
}