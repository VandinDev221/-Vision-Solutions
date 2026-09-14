interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-line px-6 pb-14 pt-32 sm:px-10 lg:pt-40 xl:px-20">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl text-display-2 font-semibold text-ink">{title}</h1>
        {description && (
          <p className="mt-5 max-w-lg text-body-lg text-ink-dim">{description}</p>
        )}
      </div>
    </header>
  );
}
