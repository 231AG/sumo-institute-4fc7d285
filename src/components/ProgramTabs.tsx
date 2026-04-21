import { useState, type ReactNode } from "react";

interface Tab<T extends string> {
  value: T;
  label: string;
  count?: number;
}

interface ProgramTabsProps<T extends string> {
  tabs: readonly Tab<T>[];
  defaultValue?: T;
  children: (active: T) => ReactNode;
}

export function ProgramTabs<T extends string>({
  tabs,
  defaultValue,
  children,
}: ProgramTabsProps<T>) {
  const [active, setActive] = useState<T>(defaultValue ?? tabs[0].value);

  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap gap-2 border-b border-border mb-8"
      >
        {tabs.map((t) => {
          const isActive = active === t.value;
          return (
            <button
              key={t.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.value)}
              className={`relative px-5 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-gold-dark"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {typeof t.count === "number" && (
                <span className="ml-2 text-xs text-muted-foreground">
                  ({t.count})
                </span>
              )}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 gold-gradient rounded-full" />
              )}
            </button>
          );
        })}
      </div>
      <div>{children(active)}</div>
    </div>
  );
}
