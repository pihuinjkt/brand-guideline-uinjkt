import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { AssetFrame } from "@/components/asset-frame";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/segel-akademik")({
  head: () => ({
    meta: [
      { title: "Segel Akademik — Pedoman UIN Jakarta" },
      { name: "description", content: "Lambang resmi untuk dokumen akademik, ijazah, dan keperluan formal." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionPage slug="/segel-akademik">
      <PageHeader
        eyebrow="02 · Segel Akademik"
        title="Lambang formal universitas."
        lead="Segel akademik dipakai pada dokumen resmi seperti ijazah, transkrip, dan surat keputusan. Penggunaannya dibatasi dan diatur ketat."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <AssetFrame label="Segel — Versi Standar" />
        <AssetFrame label="Segel — Versi Monokrom" tone="dark" />
      </div>
      <section className="mt-16">
        <h2 className="font-display text-2xl">Aturan penggunaan</h2>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          <li>— Hanya untuk dokumen akademik resmi yang disahkan rektorat.</li>
          <li>— Tidak boleh diubah warna, dimensi, atau orientasinya.</li>
          <li>— Ukuran minimum cetak 20 mm pada media cetak.</li>
        </ul>
      </section>
    </SectionPage>
  );
}
