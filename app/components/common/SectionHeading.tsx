export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow?: string; title: string; description?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-600">{eyebrow}</p> : null}
      <h2 className="page-title text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-neutral-600">{description}</p> : null}
    </div>
  );
}
