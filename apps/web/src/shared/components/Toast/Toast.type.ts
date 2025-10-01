export type ToastTypes = "default" | "success" | "error" | "warning";
export type ToastActionTypes = "default" | "icon-link" | "icon-button";

export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export interface ToastOptions {
  type: ToastTypes;
  action: ToastActionTypes;
  offset: number;
  message: string;
  duration: number;
  position: ToastPosition;
  width?: string;
  radius?: number;
  style?: React.CSSProperties;
  buttonText?: string;
  onAction?: () => void;
  /** 로깅 */
  logParams?: Record<string, string>;
}

export interface ToastType extends ToastOptions {
  id: string;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  options?: Partial<ToastOptions>;
}

export interface ToastContextValue {
  add: (toast: Partial<ToastOptions>) => string;
  remove: (id: string) => void;
}

export interface ToastProps extends Partial<ToastOptions> {
  children?: React.ReactNode;
}
