type Props = {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  textOnLight?: boolean;
};

export function Swatch({ name, hex, rgb, cmyk, textOnLight = false }: Props) {
  return (
    <article className="overflow-hidden rounded-lg border border-border">
      <div
        className="flex h-40 items-end p-5"
        style={{ backgroundColor: hex, color: textOnLight ? "#111" : "#fff" }}
      >
        <span className="font-display text-xl font-semibold">{name}</span>
      </div>
      <dl className="grid grid-cols-3 gap-2 bg-card p-4 font-mono text-xs">
        <div><dt className="text-muted-foreground">HEX</dt><dd>{hex}</dd></div>
        <div><dt className="text-muted-foreground">RGB</dt><dd>{rgb}</dd></div>
        <div><dt className="text-muted-foreground">CMYK</dt><dd>{cmyk}</dd></div>
      </dl>
    </article>
  );
}
