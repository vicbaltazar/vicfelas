import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  accent?: "pink" | "sky" | "lime";
  id?: string;
};

const accentBar: Record<"pink" | "sky" | "lime", string> = {
  pink: "bg-[linear-gradient(180deg,#ffb6c9_0%,#f4729b_100%)] text-white [text-shadow:1px_1px_0px_#a62c52]",
  sky: "bg-[linear-gradient(180deg,#bae6fd_0%,#7dd3fc_100%)] text-[#2a4359]",
  lime: "bg-[linear-gradient(180deg,#e9f59b_0%,#cde068_100%)] text-[#3b4718]",
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
      className={`border-2 border-[#f48fb1] bg-[#fffdfd] shadow-[0_2px_0_#f8bbd0] ${className}`}
    >
      {/* Barra compacta estilo Old Web */}
      <div
        className={`flex items-center justify-between border-b-2 border-[#f48fb1] px-3 py-1.5 font-mono text-xs font-bold ${accentBar[accent]}`}
      >
        <span className="flex items-center gap-1.5">
          <span>✿</span>
          <span>{title}</span>
        </span>
        <span className="border border-white/70 bg-white/30 px-1.5 text-[10px]">
          ♡
        </span>
      </div>

      <div className="p-3.5 sm:p-4">{children}</div>
    </section>
  );
}