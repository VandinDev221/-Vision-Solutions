interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-line px-5 pb-12 pt-28 sm:px-6 lg:pt-32 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-2xl text-display-2 font-semibold text-ink">{title}</h1>
        {description && (
          <p className="mt-4 max-w-lg text-body-lg text-ink-dim">{description}</p>
        )}
      </div>
    </header>
  );
}
