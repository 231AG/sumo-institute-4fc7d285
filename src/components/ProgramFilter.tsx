interface ProgramFilterProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  allLabel?: string;
}

export function ProgramFilter<T extends string>({
  options,
  active,
  onChange,
  allLabel = "All",
}: ProgramFilterProps<T>) {
  const items = [allLabel as T, ...options];
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((opt) => {
        const isActive = active === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              isActive
                ? "gold-gradient text-secondary border-transparent"
                : "bg-transparent text-muted-foreground border-border hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
