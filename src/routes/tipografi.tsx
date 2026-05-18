import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/tipografi")({
  head: () => ({
    meta: [
      { title: "Tipografi — Pedoman UIN Jakarta" },
      { name: "description", content: "Typeface, skala tipe, dan pasangan font resmi UIN Jakarta." },
    ],
  }),
  component: Page,
});

const SCALE = [
  { token: "Display", size: "72 / 1.02", className: "text-[72px] leading-[1.02] font-display font-semibold" },
  { token: "H1", size: "48 / 1.05", className: "text-5xl leading-[1.05] font-display font-semibold" },
  { token: "H2", size: "32 / 1.15", className: "text-3xl leading-tight font-display font-medium" },
  { token: "H3", size: "22 / 1.3", className: "text-[22px] leading-snug font-display font-medium" },
  { token: "Body", size: "16 / 1.6", className: "text-base leading-relaxed" },
  { token: "Caption", size: "12 / 1.4", className: "text-xs leading-snug text-muted-foreground" },
];

function Page() {
  return (
    <SectionPage slug="/tipografi">
      <PageHeader
        eyebrow="07 · Tipografi"
        title="Suara visual yang akademik."
        lead="Pasangan typeface menggabungkan keluwesan serif untuk judul dan keterbacaan grotesk untuk teks panjang."
      />

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Display · Serif</p>
          <p className="mt-4 font-display text-7xl font-semibold leading-none">Aa</p>
          <p className="mt-4 text-lg">Fraunces</p>
          <p className="text-sm text-muted-foreground">Untuk judul, kutipan, dan momen ekspresif.</p>
        </article>
        <article className="rounded-lg border border-border bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Teks · Grotesk</p>
          <p className="mt-4 font-sans text-7xl font-semibold leading-none">Aa</p>
          <p className="mt-4 text-lg">Inter</p>
          <p className="text-sm text-muted-foreground">Untuk paragraf, antarmuka, dan dokumen panjang.</p>
        </article>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl">Skala tipe</h2>
        <div className="divide-y divide-border rounded-lg border border-border">
          {SCALE.map((s) => (
            <div key={s.token} className="grid grid-cols-12 items-baseline gap-4 p-6">
              <div className="col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <p>{s.token}</p>
                <p className="mt-1 normal-case tracking-normal">{s.size}</p>
              </div>
              <p className={`col-span-9 truncate ${s.className}`}>Pedoman Identitas</p>
            </div>
          ))}
        </div>
      </section>
    </SectionPage>
  );
}
