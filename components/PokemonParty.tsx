import Window from "./Window";

const myTeam = [
  { name: "Oshawott", level: 100, type: "Água 💧", role: "O starter fofo que lidera os deploys" },
  { name: "Mimikyu", level: 95, type: "Fantasma/Fada 👻", role: "A disfarçar-se de programadora sênior" },
  { name: "Indeedee", level: 90, type: "Psíquico/Normal 🧠", role: "Organiza o caos da minha rotina" },
  { name: "Audino", level: 92, type: "Normal 💖", role: "Cura o cansaço após a gym e o trabalho" },
  { name: "Munchlax", level: 98, type: "Normal 🍔", role: "Representa a fome pós-treino e as panquecas" },
  { name: "Phantump", level: 88, type: "Fantasma/Planta 🌿", role: "Amante de florestas e calminha à noite" },
];

export default function PokemonParty() {
  return (
    <Window title="favoritos.pc" accent="pink">
      <div className="mb-3 flex items-center justify-between border-2 border-[#3d2b3f] bg-[#ffe4ec] px-3 py-2 font-mono text-xs text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]">
        <span className="font-bold">⭐ Equipa de Favoritos (VicFelas)</span>
        <span className="border border-[#3d2b3f] bg-[#fffdf9] px-1.5 py-0.5 text-[10px] font-bold text-[#b84a6f]">
          TOP FAVS ♡
        </span>
      </div>

      <p className="mb-4 border border-dashed border-[#c49bb3] bg-[#fffaf3] p-2 font-mono text-xs text-[#5d4360]">
        // Os meus Pokémon favoritos de todos os tempos, supervisionando o VitóriaOS.
      </p>

      <div className="grid grid-cols-1 gap-3 font-mono sm:grid-cols-2 lg:grid-cols-3">
        {myTeam.map((pokemon) => (
          <div
            key={pokemon.name}
            className="border-2 border-[#3d2b3f] bg-[#eef9fb] p-3 shadow-[inset_1px_1px_0px_#ffffff,3px_3px_0px_#3d2b3f] transition-transform hover:-translate-y-1 hover:bg-[#fff0f5]"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="border border-[#3d2b3f] bg-[#fffdf9] px-2 py-0.5 text-sm font-bold text-[#3d2b3f]">
                {pokemon.name}
              </span>
              <span className="border border-[#3d2b3f] bg-[#eef7b8] px-1.5 py-0.5 text-[10px] font-bold text-[#3d2b3f]">
                Lv.{pokemon.level}
              </span>
            </div>
            <p className="mb-1.5 text-[11px] font-bold text-[#5d4360]">
              {pokemon.type}
            </p>
            <p className="border border-dashed border-[#b695b8] bg-[#fffdf9] p-1.5 text-[11px] italic text-[#3d2b3f]">
              &quot;{pokemon.role}&quot;
            </p>
          </div>
        ))}
      </div>
    </Window>
  );
}