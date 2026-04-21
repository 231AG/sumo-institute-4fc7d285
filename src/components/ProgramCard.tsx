import { Clock, Users } from "lucide-react";
import type { ShortCourse } from "@/data/shortCourses";

interface ProgramCardProps {
  course: ShortCourse;
}

export function ProgramCard({ course }: ProgramCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-gold/30 transition-all flex flex-col">
      <h4 className="font-[family-name:var(--font-heading)] font-bold text-foreground">
        {course.title}
      </h4>
      <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-1">
        <Clock className="w-3.5 h-3.5" /> {course.duration}
      </span>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
          Course Content
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {course.content.map((item) => (
            <li
              key={item}
              className="text-xs bg-muted text-muted-foreground rounded px-2 py-0.5"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-start gap-2 text-sm text-muted-foreground">
        <Users className="w-4 h-4 text-gold shrink-0 mt-0.5" />
        <span>{course.targetAudience}</span>
      </div>
    </div>
  );
}
