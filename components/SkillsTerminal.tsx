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
  }
];

export default function SkillsTerminal() {
  return (
    <Window 
      title="~/skills.sh" 
      accent="lime" 
      className="font-code border-4 border-black shadow-[6px_6px_0px_#000] bg-white"
    >
      <div className="bg-black text-lime-400 p-2 border-2 border-black font-mono text-xs mb-4 shadow-[2px_2px_0px_#ffff00]">
        <span className="text-pink-400 font-bold">
          vic@ribeiraopreto
        </span>
        <span className="mx-1 text-white">:~$</span> cat skills.sh
      </div>

      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="border-2 border-black bg-yellow-50 p-2.5 shadow-[3px_3px_0px_#000]">
            <p className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider bg-lime-300 px-2 py-0.5 border border-black inline-block mb-2">
              # {group.label}
            </p>
            <p className="text-xs sm:text-sm leading-relaxed font-mono">
              <span className="text-black font-bold">
                {group.items.map((item, i) => (
                  <span key={item} className="inline-block bg-white border border-black px-1.5 py-0.5 m-0.5 shadow-[1px_1px_0px_#000]">
                    <span className="text-pink-600">&quot;</span>
                    {item}
                    <span className="text-pink-600">&quot;</span>
                    {i < group.items.length - 1 ? "" : ""}
                  </span>
                ))}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-black text-lime-400 p-2 border-2 border-black font-mono text-xs flex items-center shadow-[2px_2px_0px_#ffff00]">
        <span className="text-pink-400 font-bold">
          vic@ribeiraopreto
        </span>
        <span className="mx-1 text-white">:~$</span>
        <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-lime-400 align-middle" />
      </div>
    </Window>
  );
}