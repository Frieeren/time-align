import type { ProjectChipColor } from "@/model/DailySchedule";
import { css } from "styled-system/css";

const PROJECT_CHIP_COLORS: Record<ProjectChipColor, { color: string; bg: string }> = {
  "#FFA600": {
    color: "#FFA600",
    bg: "#FFEFD2",
  },
  "#9053F8": {
    color: "#9053F8",
    bg: "#F7E9FF",
  },
};

type ProjectChipProps = {
  color: ProjectChipColor;
  project: string;
};

export function ProjectChip({ color, project }: ProjectChipProps) {
  const chipStyle = PROJECT_CHIP_COLORS[color];

  return (
    <div
      className={css({
        height: "26px",
        borderRadius: "9999px",
        py: "6px",
        px: "8px",
      })}
      style={{
        color: chipStyle.color,
        backgroundColor: chipStyle.bg,
      }}
    >
      <p
        className={css({
          fontSize: "10px",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        })}
      >
        {project}
      </p>
    </div>
  );
}
