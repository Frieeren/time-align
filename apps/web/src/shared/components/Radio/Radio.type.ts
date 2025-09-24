import type { ReactNode } from "react";

export type RadioProps = {
  options: {
    label: ReactNode;
    value: string;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};
