export enum TAB_ITEMS {
  DAILY = "daily",
  MEETING = "meeting",
}

export enum MEETING_FILTER {
  ALL = "all",
  TENTATIVE = "tentative",
  ACCEPTED = "accepted",
  DECLINED = "declined",
}

export interface TabConfig {
  key: TAB_ITEMS;
  label: string;
  icon: string;
  activeIcon: string;
}

export interface MeetingFilterConfig {
  key: MEETING_FILTER;
  label: string;
}

export const TAB_CONFIGS: TabConfig[] = [
  {
    key: TAB_ITEMS.DAILY,
    label: "Check List",
    icon: "/icons/check.png",
    activeIcon: "/icons/check-active.png",
  },
  {
    key: TAB_ITEMS.MEETING,
    label: "Meeting",
    icon: "/icons/message.png",
    activeIcon: "/icons/message-active.png",
  },
];

export const MEETING_FILTER_CONFIGS: MeetingFilterConfig[] = [
  { key: MEETING_FILTER.ALL, label: "전체" },
  { key: MEETING_FILTER.TENTATIVE, label: "미응답" },
  { key: MEETING_FILTER.ACCEPTED, label: "수락" },
  { key: MEETING_FILTER.DECLINED, label: "거절" },
];

export type TabsState = TAB_ITEMS;
export type MeetingFilterState = MEETING_FILTER;
