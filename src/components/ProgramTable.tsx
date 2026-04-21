import { Clock } from "lucide-react";
import type { CpsdProgram } from "@/data/cpsdPrograms";

interface ProgramTableProps {
  programs: CpsdProgram[];
}

export function ProgramTable({ programs }: ProgramTableProps) {
  if (programs.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">
        No programs match the selected filter.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-card border border-border rounded-2xl">
      <table className="w-full text-left">
        <thead className="bg-muted/40 border-b border-border">
          <tr className="text-xs uppercase tracking-wider text-muted-foreground">
            <th className="px-6 py-4 font-semibold">Program</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Type</th>
            <th className="px-6 py-4 font-semibold">Duration</th>
            <th className="px-6 py-4 font-semibold">Highlights</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {programs.map((p) => (
            <tr key={p.id} className="hover:bg-muted/20 transition-colors">
              <td className="px-6 py-5 align-top">
                <div className="font-[family-name:var(--font-heading)] font-semibold text-foreground">
                  {p.title}
                </div>
                <p className="text-muted-foreground text-sm mt-1 max-w-xs">{p.objectives}</p>
              </td>
              <td className="px-6 py-5 align-top">
                <span className="inline-flex items-center rounded-full bg-gold/10 text-gold-dark text-xs font-medium px-2.5 py-1">
                  {p.category}
                </span>
              </td>
              <td className="px-6 py-5 align-top text-sm text-foreground">{p.type}</td>
              <td className="px-6 py-5 align-top">
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {p.duration}
                </span>
              </td>
              <td className="px-6 py-5 align-top">
                <ul className="flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs bg-muted text-muted-foreground rounded px-2 py-0.5"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
