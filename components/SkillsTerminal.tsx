import Window from "./Window";

const skillGroups = [
  {
    label: "linguagens",
    items: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    label: "front-end",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "back-end",
    items: ["Node.js", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    label: "ferramentas",
    items: ["Git & GitHub", "Figma", "Power BI", "Linux"],
  },
];

export default function SkillsTerminal() {
  return (
    <Window title="~/skills.sh" accent="lime" className="font-code">
      <p className="text-xs text-mauve-soft">
        <span className="text-lime-glow bg-ink-plum/90 px-1 rounded-sm">
          vic@sertaozinho
        </span>
        <span className="mx-1">:~$</span> cat skills.sh
      </p>
      <div className="mt-3 space-y-3">
        {skillGroups.map((group) => (
          <p key={group.label} className="text-xs sm:text-sm leading-relaxed">
            <span className="text-mauve-soft"># {group.label}</span>
            <br />
            <span className="text-ink-plum">
              {group.items.map((item, i) => (
                <span key={item}>
                  <span className="text-pink-petal">&quot;</span>
                  {item}
                  <span className="text-pink-petal">&quot;</span>
                  {i < group.items.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </p>
        ))}
      </div>
      <p className="mt-4 text-xs text-mauve-soft">
        <span className="text-lime-glow bg-ink-plum/90 px-1 rounded-sm">
          vic@sertaozinho
        </span>
        <span className="mx-1">:~$</span>
        <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-ink-plum align-middle" />
      </p>
    </Window>
  );
}
