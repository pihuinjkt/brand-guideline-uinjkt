import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { DownloadCard } from "@/components/download-card";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/pusat-unduhan")({
  head: () => ({
    meta: [
      { title: "Pusat Unduhan — Pedoman UIN Jakarta" },
      { name: "description", content: "Unduh logo, panduan PDF, templat dokumen, dan font resmi UIN Jakarta." },
    ],
  }),
  component: Page,
});

const groups = [
  {
    title: "Logo",
    items: [
      { title: "Signature Logo — Berwarna", format: "SVG", size: "24 KB" },
      { title: "Signature Logo — Monokrom", format: "PNG", size: "180 KB" },
      { title: "Paket Logo Vektor", format: "AI", size: "1.2 MB" },
    ],
  },
  {
    title: "Panduan",
    items: [{ title: "Brand Guideline UIN Jakarta", format: "PDF", size: "8.4 MB", description: "Versi lengkap pedoman identitas." }],
  },
  {
    title: "Templat",
    items: [
      { title: "Kop Surat Resmi", format: "DOCX", size: "120 KB" },
      { title: "Presentasi Akademik", format: "PPTX", size: "3.1 MB" },
      { title: "Kartu Nama", format: "AI", size: "0.6 MB" },
    ],
  },
  {
    title: "Font",
    items: [
      { title: "Fraunces — Display", format: "OTF", size: "1.4 MB" },
      { title: "Inter — Teks", format: "OTF", size: "0.9 MB" },
    ],
  },
];

function Page() {
  return (
    <SectionPage slug="/pusat-unduhan">
      <PageHeader
        eyebrow="01 · Pusat Unduhan"
        title="Aset siap unduh."
        lead="Semua berkas resmi yang dibutuhkan untuk menerapkan identitas UIN Jakarta — dari logo, panduan, templat dokumen, hingga font."
      />
      <div className="mt-16 space-y-16">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="mb-6 font-display text-2xl">{g.title}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {g.items.map((it) => (
                <DownloadCard key={it.title} {...it} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionPage>
  );
}
