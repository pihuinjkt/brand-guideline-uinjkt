import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { AssetFrame } from "@/components/asset-frame";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/signature-logo")({
  head: () => ({
    meta: [
      { title: "Signature Logo — Pedoman UIN Jakarta" },
      { name: "description", content: "Logo utama UIN Jakarta, varian, dan ruang aman penggunaan." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionPage slug="/signature-logo">
      <PageHeader
        eyebrow="03 · Signature Logo"
        title="Identitas utama UIN Jakarta."
        lead="Signature logo adalah representasi visual paling utama. Ia membawa nama institusi dalam komposisi yang sudah disetujui dan tidak boleh dirakit ulang."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <AssetFrame label="Logo Horisontal" />
        <AssetFrame label="Logo Vertikal" />
        <AssetFrame label="Versi Putih" tone="dark" />
        <AssetFrame label="Versi Monokrom" />
      </div>
      <section className="mt-16">
        <h2 className="font-display text-2xl">Ruang aman & ukuran minimum</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Pertahankan ruang aman setara tinggi huruf "U" pada wordmark di setiap sisi.
          Ukuran minimum: 32 px pada layar, 15 mm pada cetakan.
        </p>
      </section>
    </SectionPage>
  );
}
