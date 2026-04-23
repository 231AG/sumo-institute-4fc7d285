import { Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { CpsdProgram } from "@/data/cpsdPrograms";

interface ProgramTableProps {
  programs: CpsdProgram[];
}

export function ProgramTable({ programs }: ProgramTableProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const visiblePrograms = programs.slice(0, visibleCount);
  const hasMore = programs.length > visibleCount;

  if (programs.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">
        No programs found. Try adjusting your filters.
      </div>
    );
  }

  return (
    <>
      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {visiblePrograms.map((p) => (
          <div key={p.id} className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {p.objectives}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center rounded-full bg-gold/10 text-gold-dark text-xs font-medium px-2.5 py-1">
                {p.category}
              </span>
              <span className="text-sm text-muted-foreground">{p.type}</span>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {p.duration}
              </span>
            </div>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium text-sm"
            >
              Apply for this program →
            </Link>
          </div>
        ))}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-gold text-secondary font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition-all"
            >
              Load More Programs
            </button>
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-card border border-border rounded-2xl">
        <table className="w-full text-left">
          <thead className="bg-muted/40 border-b border-border sticky top-0">
            <tr className="text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-4 font-semibold">Program</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Duration</th>
              <th className="px-6 py-4 font-semibold">Highlights</th>
              <th className="px-6 py-4 font-semibold w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visiblePrograms.map((p) => {
              const isExpanded = expandedRow === p.id;
              return (
                <>
                  <tr
                    key={p.id}
                    className="hover:bg-muted/20 transition-colors cursor-pointer"
                    onClick={() => toggleRow(p.id)}
                  >
                    <td className="px-6 py-5 align-top">
                      <div className="font-[family-name:var(--font-heading)] font-semibold text-foreground">
                        {p.title}
                      </div>
                      <p className="text-muted-foreground text-sm mt-1 max-w-xs line-clamp-1">
                        {p.objectives}
                      </p>
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
                        {p.highlights.slice(0, 2).map((h) => (
                          <li
                            key={h}
                            className="text-xs bg-muted text-muted-foreground rounded px-2 py-0.5"
                          >
                            {h}
                          </li>
                        ))}
                        {p.highlights.length > 2 && (
                          <li className="text-xs text-muted-foreground">
                            +{p.highlights.length - 2} more
                          </li>
                        )}
                      </ul>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 bg-muted/10">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Objectives</h4>
                            <p className="text-muted-foreground text-sm">{p.objectives}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Highlights</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {p.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            to="/admissions"
                            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium text-sm"
                          >
                            Apply for this program →
                          </Link>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
        {hasMore && (
          <div className="p-6 text-center border-t border-border">
            <button
              onClick={loadMore}
              className="bg-gold text-secondary font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition-all"
            >
              Load More Programs
            </button>
          </div>
        )}
      </div>
    </>
  );
}
