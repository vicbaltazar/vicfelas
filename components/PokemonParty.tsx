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
    <Window title="favoritos.pc" accent="pink" className="border-4 border-black shadow-[8px_8px_0px_#000] bg-white">
      <div className="bg-black text-yellow-300 p-2 border-2 border-black font-mono text-xs mb-4 shadow-[2px_2px_0px_#ff007f] flex justify-between items-center">
        <span>⭐ Equipa de Favoritos (VicFelas)</span>
        <span className="bg-pink-500 text-white px-1.5 py-0.5 text-[10px] font-bold border border-black">TOP FAVS</span>
      </div>

      <p className="font-mono text-xs text-black mb-4 font-bold bg-yellow-100 p-2 border border-black">
        // Os meus Pokémon favoritos de todos os tempos, supervisionando o VitóriaOS.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono">
        {myTeam.map((pokemon) => (
          <div 
            key={pokemon.name} 
            className="border-2 border-black bg-cyan-100 p-3 shadow-[3px_3px_0px_#000] transition-transform hover:-translate-y-1 hover:bg-lime-200"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-sm bg-white px-1.5 border border-black">
                {pokemon.name}
              </span>
              <span className="text-[10px] bg-black text-white px-1 font-bold">
                Lv.{pokemon.level}
              </span>
            </div>
            <p className="text-[11px] text-gray-800 font-bold mb-1">
              {pokemon.type}
            </p>
            <p className="text-[11px] bg-white/80 p-1 border border-black italic">
              &quot;{pokemon.role}&quot;
            </p>
          </div>
        ))}
      </div>
    </Window>
  );
}