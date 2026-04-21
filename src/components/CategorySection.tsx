import type { ShortCourseCategory } from "@/data/shortCourses";
import { ProgramCard } from "./ProgramCard";

interface CategorySectionProps {
  data: ShortCourseCategory;
}

export function CategorySection({ data }: CategorySectionProps) {
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
          {data.category}
        </h3>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {data.programs.length} {data.programs.length === 1 ? "course" : "courses"}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.programs.map((c) => (
          <ProgramCard key={c.title} course={c} />
        ))}
      </div>
    </div>
  );
}
