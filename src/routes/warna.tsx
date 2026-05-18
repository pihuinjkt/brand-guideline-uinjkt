import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Swatch } from "@/components/swatch";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/warna")({
  head: () => ({
    meta: [
      { title: "Warna — Pedoman UIN Jakarta" },
      { name: "description", content: "Palet warna primer dan sekunder dengan nilai HEX, RGB, dan CMYK." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionPage slug="/warna">
      <PageHeader
        eyebrow="06 · Warna"
        title="Palet identitas."
        lead="Warna primer membawa kehadiran institusi; warna sekunder mendukung hierarki dan keterbacaan. Nilai-nilai berikut adalah placeholder hingga palet resmi disematkan."
      />

      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl">Primer</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Swatch name="UIN Biru" hex="#1B3A6B" rgb="27, 58, 107" cmyk="100, 80, 30, 20" />
          <Swatch name="UIN Emas" hex="#C9A24A" rgb="201, 162, 74" cmyk="20, 35, 80, 5" textOnLight />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl">Sekunder</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          <Swatch name="Krem" hex="#F4EFE3" rgb="244, 239, 227" cmyk="3, 5, 10, 0" textOnLight />
          <Swatch name="Hijau" hex="#1F5F3F" rgb="31, 95, 63" cmyk="80, 30, 90, 30" />
          <Swatch name="Merah Bata" hex="#8B2E1F" rgb="139, 46, 31" cmyk="25, 90, 95, 25" />
          <Swatch name="Arang" hex="#1A1A1A" rgb="26, 26, 26" cmyk="0, 0, 0, 95" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl">Rasio penggunaan</h2>
        <div className="flex h-12 overflow-hidden rounded-md text-xs font-medium text-white">
          <div style={{ background: "#1B3A6B", flex: 6 }} className="flex items-center justify-center">60% Biru</div>
          <div style={{ background: "#F4EFE3", flex: 3, color: "#111" }} className="flex items-center justify-center">30% Krem</div>
          <div style={{ background: "#C9A24A", flex: 1 }} className="flex items-center justify-center">10% Emas</div>
        </div>
      </section>
    </SectionPage>
  );
}
