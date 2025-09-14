type ScheduleStatus = "progress" | "completed" | "closed";
export type AttendanceStatus = "tentative" | "accepted" | "declined";

export interface MeetingSchedule {
  status: ScheduleStatus;
  attendanceStatus: AttendanceStatus;
  date: Date;
  title: string;
  project: string;
  startTime: string;
  endTime: string;
  participants: string[];
}
