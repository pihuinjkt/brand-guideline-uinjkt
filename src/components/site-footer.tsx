export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} UIN Syarif Hidayatullah Jakarta. Pedoman Identitas Merek.</p>
        <p className="font-mono text-xs">v1.0 · Diperbarui Mei 2026</p>
      </div>
    </footer>
  );
}
