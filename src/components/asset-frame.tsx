import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  ratio?: string;
  tone?: "light" | "dark";
};

export function AssetFrame({ label, ratio = "aspect-[4/3]", tone = "light" }: Props) {
  return (
    <div
      data-asset-placeholder
      className={`flex ${ratio} items-center justify-center rounded-lg border border-dashed border-border ${
        tone === "dark" ? "bg-foreground text-background" : "bg-surface"
      }`}
    >
      <div className="flex flex-col items-center gap-2 opacity-60">
        <ImageIcon className="h-8 w-8" />
        <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
      </div>
    </div>
  );
}
