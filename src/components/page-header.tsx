type Props = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <header className="border-b border-border pb-12">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lead}</p>
    </header>
  );
}
