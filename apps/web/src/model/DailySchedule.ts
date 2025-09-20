export type ProjectChipColor = "#FFA600" | "#9053F8";

export interface DailySchedule {
  status: "progress" | "completed" | "closed";
  date: Date;
  title: string;
  project: string;
  startTime: string;
  endTime: string;
  participants: string[];
  color: ProjectChipColor;
}
