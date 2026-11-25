import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  accent?: "pink" | "sky" | "lime";
  id?: string;
};

const accentStyles: Record<
  "pink" | "sky" | "lime",
  {
    headerBg: string;
    badgeBg: string;
    icon: string;
  }
> = {
  pink: {
    headerBg:
      "bg-[repeating-linear-gradient(-45deg,#ffd6e0,#ffd6e0_8px,#fff0f5_8px,#fff0f5_16px)]",
    badgeBg: "bg-[#fff8fb]",
    icon: "♡",
  },
  sky: {
    headerBg:
      "bg-[repeating-linear-gradient(-45deg,#cdeff5,#cdeff5_8px,#eefaff_8px,#eefaff_16px)]",
    badgeBg: "bg-[#f5fcff]",
    icon: "★",
  },
  lime: {
    headerBg:
      "bg-[repeating-linear-gradient(-45deg,#e5f299,#e5f299_8px,#f7fce0_8px,#f7fce0_16px)]",
    badgeBg: "bg-[#fcfff0]",
    icon: "✿",
  },
};

export default function Window({
  title,
  children,
  className = "",
  accent = "pink",
  id,
}: WindowProps) {
  const currentAccent = accentStyles[accent] ?? accentStyles.pink;

  return (
    <section
      id={id}
      className={`group border-2 border-[#3d2b3f] bg-[#fffdf9] shadow-[inset_2px_2px_0px_#ffffff,inset_-2px_-2px_0px_#f3e5f5,5px_5px_0px_#3d2b3f] transition-all duration-150 ${className}`}
    >
      {/* Barra de título estilo Pixel Safari / Old Web */}
      <div
        className={`flex items-center gap-2 border-b-2 border-[#3d2b3f] ${currentAccent.headerBg} px-3 py-2`}
      >
        {/* Botões retrô estilo OS clássico */}
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 border-2 border-[#3d2b3f] bg-[#ffb6c1] shadow-[inset_1px_1px_0px_#ffffff]" />
          <span className="h-3 w-3 border-2 border-[#3d2b3f] bg-[#dde874] shadow-[inset_1px_1px_0px_#ffffff]" />
          <span className="h-3 w-3 border-2 border-[#3d2b3f] bg-[#b0e0e6] shadow-[inset_1px_1px_0px_#ffffff]" />
        </span>

        {/* Etiqueta do título com ícone pixel/kaomoji */}
        <p
          className={`ml-1 flex items-center gap-1.5 border-2 border-[#3d2b3f] ${currentAccent.badgeBg} px-2.5 py-0.5 font-mono text-xs font-bold tracking-tight text-[#3d2b3f] shadow-[2px_2px_0px_#3d2b3f]`}
        >
          <span className="text-[11px] leading-none">{currentAccent.icon}</span>
          <span>{title}</span>
        </p>

        {/* Controles da janela estilo Windows 98 / Neocities */}
        <div className="ml-auto flex items-center gap-1">
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center border-2 border-[#3d2b3f] bg-[#fffdf9] font-mono text-[10px] font-bold text-[#3d2b3f] shadow-[inset_1px_1px_0px_#ffffff]"
          >
            _
          </span>
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center border-2 border-[#3d2b3f] bg-[#ffb6c1] font-mono text-[10px] font-bold text-[#3d2b3f] shadow-[inset_1px_1px_0px_#ffffff]"
          >
            ×
          </span>
        </div>
      </div>

      {/* Área interna com borda pontilhada sutil */}
      <div className="bg-[#fffaf3]/90 p-4 sm:p-6">
        <div className="border border-dashed border-[#d8b4c8] bg-[#fffdf9]/80 p-3 sm:p-4">
          {children}
        </div>
      </div>
    </section>
  );
}