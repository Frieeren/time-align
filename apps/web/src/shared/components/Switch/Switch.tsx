import * as SwitchBase from "@radix-ui/react-switch";
import { forwardRef } from "react";
import { css } from "../../../../styled-system/css";
import type { SwitchProps } from "./Switch.type";

const SWITCH_WIDTH_PX = 52;
const SWITCH_HEIGHT_PX = 32;
const SWITCH_THUMB_WIDTH_PX = 28;
const SWITCH_THUMB_HEIGHT_PX = 28;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, defaultValue = false, onChange, disabled = false, value }, ref) => {
    return (
      <SwitchBase.Root
        ref={ref}
        defaultChecked={defaultValue}
        onCheckedChange={onChange}
        checked={value}
        className={
          css({
            width: `${SWITCH_WIDTH_PX}px`,
            height: `${SWITCH_HEIGHT_PX}px`,
            backgroundColor: "#B7C2D0",
            borderRadius: `${SWITCH_HEIGHT_PX / 2}px`,
            position: "relative",
            '&[data-state="checked"]': {
              backgroundColor: "#3A8DFF",
            },
          }) + (className ? ` ${className}` : "")
        }
        data-frieeren-component="Switch"
        disabled={disabled}
        aria-disabled={disabled}
      >
        <SwitchBase.Thumb
          className={css({
            display: "block",
            width: `${SWITCH_THUMB_WIDTH_PX}px`,
            height: `${SWITCH_THUMB_HEIGHT_PX}px`,
            backgroundColor: "#FFFFFF",
            borderRadius: `${SWITCH_THUMB_HEIGHT_PX / 2}px`,
            transition: "transform 100ms",
            transform: "translateX(2px)",
            willChange: "transform",
            "[data-state=checked] &": {
              transform: `translateX(${SWITCH_WIDTH_PX - SWITCH_THUMB_WIDTH_PX - 2}px)`,
            },
          })}
        />
      </SwitchBase.Root>
    );
  }
);

Switch.displayName = "Switch";
