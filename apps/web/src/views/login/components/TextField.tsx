"use client";

import Image from "next/image";
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
  useValidationStatus?: boolean;
  useResetButton?: boolean;
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
  useValidationStatus = false,
  useResetButton = false,
}: TextFieldProps) {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const currentValue = value || "";
  const hasValidationError = validate ? !validate(currentValue) : false;
  const hasValidationSuccess = validate && currentValue.length > 0 ? validate(currentValue) : false;
  const displayError = hasValidationError ? error : "";

  const getBorderColor = () => {
    if (hasValidationError) return "#E52929"; // 에러 상태
    if (isFocused) return "#3A8DFF"; // focus 상태
    return "#E3E8EF";
  };

  const getInputType = () => {
    if (type === "password") {
      return isPasswordVisible ? "text" : "password";
    }
    return type;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
      <div style={{ position: "relative" }}>
        <input
          id={id}
          type={getInputType()}
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
        <div
          style={{
            position: "absolute",
            right: "6px",
            top: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
            gap: "4px",
          }}
        >
          {...[
            type === "password" && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/icons/components/eye.png"
                  alt={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
                  width={20}
                  height={20}
                />
              </button>
            ),
            value && useValidationStatus && (
              <Image
                src={
                  hasValidationSuccess ? "/icons/components/check-active.png" : "/icons/components/check-inactive.png"
                }
                alt="유효성 검사 통과"
                width={20}
                height={20}
              />
            ),
            value && useResetButton && (
              <button type="button" onClick={() => onChange?.("")} aria-label="초기화" style={{ cursor: "pointer" }}>
                <Image src="/icons/components/reset.png" alt="초기화" width={20} height={20} />
              </button>
            ),
          ]}
        </div>
      </div>

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
