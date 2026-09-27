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
    href: "https://github.com/vicbaltazar/mpb-dex"
  },
  {
    id: "amor-doce-crud",
    title: "Amor Doce CRUD",
    fileName: "amor-doce.crud",
    description:
      "Sistema de cadastro completo (criar, ler, atualizar, remover) inspirado no jogo Amor Doce, praticando operações de banco de dados do zero.",
    stack: ["JavaScript", "SQLite"],
    accent: "sky",
    href: "https://github.com/vicbaltazar/amor-doce-crud"
  },
  {
    id: "sistema-bancario-pokemon",
    title: "Sistema Bancário Pokémon",
    fileName: "banco-pkmn.exe",
    description:
      "Simulador de operações bancárias (depósito, saque, extrato) usando Pokémon como tema para tornar a lógica de back-end mais divertida de estudar.",
    stack: ["Python"],
    accent: "lime",
    href: "https://github.com/vicbaltazar/sistema-bancario-pokemon"
  },
    {
    id: "convite-pra-sair",
    title: "Convite pra Sair 💌",
    fileName: "convite.love",
    description:
      "Convite interativo em HTML/CSS/JS puro, estilo boot de terminal + polaroids com memes do casal, terminando em confete quando o 'sim' é aceito.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    accent: "pink",
    href: "https://github.com/vicbaltazar/convite-pra-sair",
  },
  {
    id: "diario-do-chico-bento",
    title: "Diário do Chico Bento",
    fileName: "diario-chico.blog",
    description:
      "Blog em Next.js dedicado às aventuras do meu gato Chico Bento, com diário de posts, galeria de fotos e uma página conhecendo ele melhor.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "sky",
    href: "https://github.com/vicbaltazar/diario-chico-bento",
  },
  {
    id: "unirota",
    title: "UniRota",
    fileName: "unirota.site",
    description:
      "Landing page para um sistema de transporte universitário, com foco em clareza de horários e rotas para quem depende do van escolar.",
    stack: ["JSON"],
    accent: "lime",
    href: "https://github.com/vicbaltazar/Cadastro_universitario"
  },
];
