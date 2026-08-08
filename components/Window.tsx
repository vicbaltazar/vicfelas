import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  accent?: "pink" | "sky" | "lime";
  id?: string;
};

const accentDot: Record<string, string> = {
  pink: "bg-pink-petal",
  sky: "bg-sky-powder",
  lime: "bg-lime-glow",
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
      className={`group border-2 border-ink-plum bg-cream shadow-window hover:shadow-window-hover transition-shadow duration-200 ${className}`}
    >
      <div className="flex items-center gap-2 border-b-2 border-ink-plum bg-white/60 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pink-petal border border-ink-plum/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-powder border border-ink-plum/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-glow border border-ink-plum/40" />
        </span>
        <p className="ml-1 font-mono text-xs tracking-tight text-ink-plum/80">
          {title}
        </p>
        <span
          className={`ml-auto h-1.5 w-1.5 rounded-full ${accentDot[accent]}`}
        />
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
}
