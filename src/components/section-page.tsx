import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SECTIONS } from "@/lib/sections";

export function SectionPage({ slug, children }: { slug: string; children: ReactNode }) {
  const idx = SECTIONS.findIndex((s) => s.to === slug);
  const next = SECTIONS[(idx + 1) % SECTIONS.length];
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {children}
      <div className="mt-24 border-t border-border pt-8">
        <Link
          to={next.to}
          className="group flex items-center justify-between gap-4 rounded-lg p-4 hover:bg-accent"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Selanjutnya · {next.number}</p>
            <p className="mt-1 font-display text-2xl">{next.title}</p>
          </div>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
