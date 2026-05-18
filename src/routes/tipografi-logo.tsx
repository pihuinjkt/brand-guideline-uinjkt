import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { AssetFrame } from "@/components/asset-frame";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/tipografi-logo")({
  head: () => ({
    meta: [
      { title: "Tipografi Logo — Pedoman UIN Jakarta" },
      { name: "description", content: "Konstruksi wordmark dan tipografi logo UIN Jakarta." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionPage slug="/tipografi-logo">
      <PageHeader
        eyebrow="05 · Tipografi Logo"
        title="Anatomi wordmark."
        lead="Wordmark UIN Jakarta dibangun dari typeface khusus dengan jarak antar huruf dan ketebalan yang telah dikalibrasi. Tidak boleh diketik ulang."
      />
      <div className="mt-16 space-y-8">
        <AssetFrame label="Konstruksi Wordmark" ratio="aspect-[16/7]" />
        <div className="grid gap-8 md:grid-cols-2">
          <AssetFrame label="Skala & Proporsi" />
          <AssetFrame label="Jarak Optikal" />
        </div>
      </div>
    </SectionPage>
  );
}
