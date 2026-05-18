import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/sections";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight">UIN Jakarta</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Brand</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-sm text-foreground" }}>
            Beranda
          </Link>
          <Link to="/pusat-unduhan" className="text-sm text-muted-foreground hover:text-foreground" activeProps={{ className: "text-sm text-foreground" }}>
            Pusat Unduhan
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Buka menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="font-display text-lg">Pedoman Merek</SheetTitle>
            <nav className="mt-8 flex flex-col">
              {SECTIONS.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="flex items-baseline gap-3 border-b border-border py-3 text-sm hover:text-brand"
                >
                  <span className="font-mono text-xs text-muted-foreground">{s.number}</span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
