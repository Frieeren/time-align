interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({ label, style, onClick, disabled, className }: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: disabled ? "#B7B7B7" : "#3A8DFF",
        color: "white",
        borderRadius: "5px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        position: "relative",
        width: "100%",
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.32px" }}>{label}</span>
    </button>
  );
}
