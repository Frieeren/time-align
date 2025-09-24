import * as RadioGroupBase from "@radix-ui/react-radio-group";
import { css } from "../../../../styled-system/css";
import type { RadioProps } from "./Radio.type";

export function Radio({ options, defaultValue, onChange, disabled = false }: RadioProps) {
  return (
    <RadioGroupBase.Root
      defaultValue={defaultValue}
      onValueChange={onChange}
      disabled={disabled}
      className={css({
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "8px",
      })}
    >
      {options.map(option => (
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          })}
          key={option.value}
        >
          <RadioGroupBase.Item
            className={css({
              margin: "11px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "1px solid #B7C2D0",
              cursor: "pointer",
              position: "relative",
              flexShrink: 0,
              _hover: { borderColor: "#3A8DFF" },
              '&[data-state="checked"]': { borderColor: "#3A8DFF" },
              "&[data-disabled]": { borderColor: "#B7C2D0", cursor: "not-allowed" },
            })}
            value={option.value}
            id={`radio-${option.value}`}
          >
            <div
              className={css({
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "transparent",
                "[data-state=checked] &": { backgroundColor: "#3A8DFF" },
                "[data-disabled] &": { backgroundColor: "#B7C2D0" },
              })}
            />
            <RadioGroupBase.Indicator />
          </RadioGroupBase.Item>
          <label
            className={css({
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              userSelect: "none",
              '&[aria-disabled="true"]': { opacity: 0.5, cursor: "not-allowed" },
            })}
            aria-disabled={disabled}
            htmlFor={`radio-${option.value}`}
          >
            <div className={css({ flex: 1 })}>{option.label}</div>
          </label>
        </div>
      ))}
    </RadioGroupBase.Root>
  );
}
