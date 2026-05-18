import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SECTIONS } from "@/lib/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedoman Merek — UIN Syarif Hidayatullah Jakarta" },
      { name: "description", content: "Sistem identitas visual UIN Jakarta: logo, lambang fakultas, warna, tipografi, dan unduhan." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="px-6 py-16 md:py-24">
      <section className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Pedoman Identitas Visual · 2026
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
          Satu identitas, <span className="text-brand">satu suara</span> untuk UIN Jakarta.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Pedoman ini mengatur penggunaan lambang, warna, dan tipografi resmi
          UIN Syarif Hidayatullah Jakarta — dirancang agar setiap penerapan
          tetap konsisten, akademik, dan bermartabat.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/pusat-unduhan"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Pusat Unduhan
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/signature-logo"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-accent"
          >
            Mulai dari logo
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-5xl">
        <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl">Isi pedoman</h2>
          <span className="font-mono text-xs text-muted-foreground">07 BAGIAN</span>
        </div>
        <ul className="divide-y divide-border">
          {SECTIONS.map((s) => (
            <li key={s.to}>
              <Link to={s.to} className="group grid grid-cols-12 items-baseline gap-4 py-6 hover:bg-accent/40">
                <span className="col-span-1 font-mono text-xs text-muted-foreground">{s.number}</span>
                <span className="col-span-4 font-display text-2xl group-hover:text-brand">{s.title}</span>
                <span className="col-span-6 text-sm text-muted-foreground">{s.blurb}</span>
                <ArrowUpRight className="col-span-1 h-4 w-4 justify-self-end text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
