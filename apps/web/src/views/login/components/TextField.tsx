"use client";

import { useId, useState } from "react";

interface TextFieldProps {
  type: "text" | "password";
  label: string;
  validate?: (value: string) => boolean;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  error?: string;
}

export function TextField({
  type,
  label,
  validate,
  onChange,
  value,
  className,
  style,
  required,
  disabled,
  readonly,
  placeholder,
  error,
}: TextFieldProps) {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const hasValidationError = validate ? !validate(value || "") : false;
  const displayError = hasValidationError ? error : "";

  const getBorderColor = () => {
    if (hasValidationError) return "#E52929"; // 에러 상태
    if (isFocused) return "#3A8DFF"; // focus 상태
    return "#E3E8EF";
  };

  return (
    <div style={{ position: "relative" }}>
      <label
        style={{
          color: "#111",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.24px",
          marginBottom: "2px",
        }}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={className}
        onChange={onChange ? (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value) : undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "43px",
          borderBottom: `1px solid ${getBorderColor()}`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "#111",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.28px",
          outline: "none",
          transition: "border-color 0.2s ease-in-out",
          ...style,
        }}
      />
      <span
        style={{
          color: "#E52929",
          position: "absolute",
          bottom: "-24px",
          left: "0",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.24px",
        }}
      >
        {displayError}
      </span>
    </div>
  );
}
