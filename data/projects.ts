export type Project = {
  id: string;
  title: string;
  fileName: string;
  description: string;
  stack: string[];
  accent: "pink" | "sky" | "lime";
  href?: string;
};

export const projects: Project[] = [
  {
    id: "mpb-dex",
    title: "MPB-Dex",
    fileName: "mpb-dex.app",
    description:
      "Catálogo estilo Pokédex para artistas e álbuns de MPB, com fichas navegáveis e busca por época e estilo.",
    stack: ["React", "Node.js", "PostgreSQL"],
    accent: "pink",
  },
  {
    id: "amor-doce-crud",
    title: "Amor Doce CRUD",
    fileName: "amor-doce.crud",
    description:
      "Sistema de cadastro completo (criar, ler, atualizar, remover) inspirado no jogo Amor Doce, praticando operações de banco de dados do zero.",
    stack: ["JavaScript", "SQLite"],
    accent: "sky",
  },
  {
    id: "sistema-bancario-pokemon",
    title: "Sistema Bancário Pokémon",
    fileName: "banco-pkmn.exe",
    description:
      "Simulador de operações bancárias (depósito, saque, extrato) usando Pokémon como tema para tornar a lógica de back-end mais divertida de estudar.",
    stack: ["Python"],
    accent: "lime",
  },
  {
    id: "powerbi-pokemon-dashboard",
    title: "Power BI Pokémon Dashboard",
    fileName: "dashboard-pkmn.pbix",
    description:
      "Painel interativo cruzando estatísticas, tipos e gerações de Pokémon para praticar modelagem de dados e storytelling visual.",
    stack: ["Power BI", "DAX"],
    accent: "sky",
  },
  {
    id: "3d-gallery",
    title: "3D Gallery",
    fileName: "galeria-3d.app",
    description:
      "Galeria virtual com navegação em espaço tridimensional para expor projetos e ilustrações de um jeito mais imersivo que uma grade comum.",
    stack: ["JavaScript", "Three.js"],
    accent: "pink",
  },
  {
    id: "unirota",
    title: "UniRota",
    fileName: "unirota.site",
    description:
      "Landing page para um sistema de transporte universitário, com foco em clareza de horários e rotas para quem depende do van escolar.",
    stack: ["React", "Tailwind CSS"],
    accent: "lime",
  },
];
