import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { AssetFrame } from "@/components/asset-frame";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/lambang-fakultas")({
  head: () => ({
    meta: [
      { title: "Lambang Fakultas — Pedoman UIN Jakarta" },
      { name: "description", content: "Sistem lambang untuk seluruh fakultas di UIN Syarif Hidayatullah Jakarta." },
    ],
  }),
  component: Page,
});

const FAKULTAS = [
  "Ilmu Tarbiyah dan Keguruan",
  "Adab dan Humaniora",
  "Ushuluddin",
  "Syariah dan Hukum",
  "Dakwah dan Ilmu Komunikasi",
  "Dirasat Islamiyah",
  "Psikologi",
  "Ekonomi dan Bisnis",
  "Sains dan Teknologi",
  "Kedokteran",
  "Ilmu Sosial dan Ilmu Politik",
  "Ilmu Kesehatan",
  "Sekolah Pascasarjana",
];

function Page() {
  return (
    <SectionPage slug="/lambang-fakultas">
      <PageHeader
        eyebrow="04 · Lambang Fakultas"
        title="Satu sistem, banyak identitas."
        lead="Setiap fakultas memiliki lambang yang dibangun di atas sistem visual yang sama agar tetap menyatu dengan identitas universitas."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FAKULTAS.map((f) => (
          <figure key={f} className="space-y-3">
            <AssetFrame label={f} ratio="aspect-square" />
            <figcaption className="text-sm">
              <span className="font-mono text-xs text-muted-foreground">Fakultas</span>
              <p className="mt-1">{f}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionPage>
  );
}
