export type RadioProps = {
  options: {
    label: React.ReactNode;
    value: string;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};
