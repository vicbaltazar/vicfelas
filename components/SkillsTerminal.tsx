import Window from "./Window";

const skillGroups = [
  {
    label: "linguagens",
    items: ["JavaScript", "TypeScript", "Java (básico)", "Python"],
  },
  {
    label: "front-end",
    items: ["HTML5", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "back-end",
    items: ["Node.js", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    label: "ferramentas",
    items: ["Git & GitHub", "Figma", "Power BI", "IntelliJ IDEA", "VS Code"],
  },
  {
    label: "sistemas operacionais",
    items: ["Windows 10/11", "Linux Mint (em aprendizado)", "IOS Mobile"],
  },
];

export default function SkillsTerminal() {
  return (
    <Window title="~/skills.sh" accent="lime" className="font-code">
      <div className="mb-4 flex items-center justify-between border-2 border-[#3d2b3f] bg-[#4a354d] px-3 py-2 font-mono text-xs text-[#eef7b8] shadow-[2px_2px_0px_#3d2b3f]">
        <div>
          <span className="font-bold text-[#ffb6c1]">vic@ribeiraopreto</span>
          <span className="mx-1 text-[#fffdf9]">:~$</span>
          <span>cat skills.sh</span>
        </div>
        <span className="text-[10px] text-[#b0e0e6]">[bash]</span>
      </div>

      <div className="space-y-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="border-2 border-[#3d2b3f] bg-[#fffaf3] p-3 shadow-[3px_3px_0px_#3d2b3f]"
          >
            <p className="mb-2 inline-block border border-[#3d2b3f] bg-[#eef7b8] px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-[#3d2b3f]">
              ★ {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-block border border-[#3d2b3f] bg-[#fffdf9] px-2 py-0.5 font-medium text-[#3d2b3f] shadow-[1.5px_1.5px_0px_#3d2b3f]"
                >
                  <span className="text-[#c96b8b]">&quot;</span>
                  {item}
                  <span className="text-[#c96b8b]">&quot;</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center border-2 border-[#3d2b3f] bg-[#4a354d] px-3 py-2 font-mono text-xs text-[#eef7b8] shadow-[2px_2px_0px_#3d2b3f]">
        <span className="font-bold text-[#ffb6c1]">vic@ribeiraopreto</span>
        <span className="mx-1 text-[#fffdf9]">:~$</span>
        <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-[#eef7b8] align-middle" />
      </div>
    </Window>
  );
}