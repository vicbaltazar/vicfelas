import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  accent?: "pink" | "sky" | "lime";
  id?: string;
};

const accentHeader: Record<string, string> = {
  pink: "bg-pink-400",
  sky: "bg-cyan-400",
  lime: "bg-lime-300",
};

export default function Window({
  title,
  children,
  className = "",
  accent = "pink",
  id,
}: WindowProps) {
  return (
    <section
      id={id}
      className={`group border-4 border-black bg-white shadow-[8px_8px_0px_#000] transition-all duration-200 ${className}`}
    >
      {/* Barra de título estilo OS retro / brutalista */}
      <div className={`flex items-center gap-2 border-b-4 border-black ${accentHeader[accent]} px-3 py-2.5`}>
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-none bg-red-500 border-2 border-black shadow-[1px_1px_0px_#000]" />
          <span className="h-3 w-3 rounded-none bg-yellow-300 border-2 border-black shadow-[1px_1px_0px_#000]" />
          <span className="h-3 w-3 rounded-none bg-green-400 border-2 border-black shadow-[1px_1px_0px_#000]" />
        </span>
        <p className="ml-1 font-mono text-xs font-black tracking-tight text-black uppercase bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
          {title}
        </p>
        <span className="ml-auto font-mono text-xs font-bold bg-black text-white px-1.5 py-0.5 border border-black">
          [X]
        </span>
      </div>
      <div className="p-4 sm:p-6 bg-yellow-50/50">{children}</div>
    </section>
  );
}