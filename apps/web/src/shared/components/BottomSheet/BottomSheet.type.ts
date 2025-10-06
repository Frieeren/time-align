export const BottomSheetRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const BottomSheetTheme = {
  light: "light",
  dark: "dark",
} as const;

type ValueOf<T> = T[keyof T];

export type BottomSheetRadius = ValueOf<typeof BottomSheetRadius>;
export type BottomSheetTheme = ValueOf<typeof BottomSheetTheme>;
export interface BottomSheetProps {
  /** 바텀시트의 열림/닫힘 상태를 제어합니다. */
  open?: boolean;
  /** 바텀시트가 닫힐 때 호출되는 콜백 함수입니다. */
  onClose?: () => void;
  /** 바텀시트의 모달리티를 제어합니다. true일 경우 외부 요소와의 상호작용을 비활성화하고 스크린 리더에는 바텀시트 콘텐츠만 보입니다. */
  locked?: boolean;
  /** 바텀시트 상단의 드래그 핸들을 표시할지 여부를 결정합니다. */
  showHandle?: boolean;
  /** true일 경우 핸들을 통해서만 드래그가 가능합니다. */
  handleOnly?: boolean;
  /** 바텀시트의 z-index 값을 설정합니다. */
  zIndex?: number;
  /** 바텀시트의 모서리 둥글기 정도를 설정합니다. */
  radius?: BottomSheetRadius;
  /** 바텀시트의 테마를 설정합니다. */
  theme?: BottomSheetTheme;
  /** 추가 CSS 클래스명을 적용합니다. */
  className?: string;
  /** 바텀시트 내부에 표시할 콘텐츠입니다. */
  content?: React.ReactNode;
}
