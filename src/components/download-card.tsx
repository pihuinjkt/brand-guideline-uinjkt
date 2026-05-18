import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description?: string;
  format: string;
  size?: string;
};

export function DownloadCard({ title, description, format, size }: Props) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="rounded bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-foreground">
            {format}
          </span>
          {size && <span className="font-mono text-xs text-muted-foreground">{size}</span>}
        </div>
        <h3 className="mt-2 truncate font-medium">{title}</h3>
        {description && <p className="mt-1 truncate text-sm text-muted-foreground">{description}</p>}
      </div>
      <Button variant="outline" size="sm" disabled aria-label={`Unduh ${title}`}>
        <Download className="mr-2 h-4 w-4" />
        Unduh
      </Button>
    </article>
  );
}
