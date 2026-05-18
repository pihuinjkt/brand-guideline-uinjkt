import { Link } from "@tanstack/react-router";
import { SECTIONS } from "@/lib/sections";

export function SiteSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
      <div className="sticky top-16 px-6 py-10">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Bagian</p>
        <nav className="flex flex-col gap-1">
          {SECTIONS.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-baseline gap-3 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "group flex items-baseline gap-3 rounded-md px-2 py-2 text-sm bg-accent text-foreground" }}
            >
              <span className="font-mono text-xs">{s.number}</span>
              <span>{s.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
