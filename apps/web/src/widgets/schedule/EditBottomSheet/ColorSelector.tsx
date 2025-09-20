import Image from "next/image";
import { css } from "styled-system/css";

const COLORS = ["#FF6363", "#FFA463", "#FFC963", "#A7D859", "#5960D8", "#B322D0"];

export function ColorSelector() {
  return (
    <div
      className={css({
        width: "100%",
        px: "24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "4px",
        })}
      >
        <Image src="/icons/edit-palette.svg" alt="palette icon" width={18} height={18} />
        <p
          className={css({
            color: "#000",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.28px",
          })}
        >
          색상
        </p>
      </div>
      <div
        className={css({
          width: "210px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        })}
      >
        {COLORS.map(color => (
          <ColorSelectorItem key={color} color={color} />
        ))}
        <CustomColorSelectorItem />
      </div>
    </div>
  );
}

function ColorSelectorItem({ color }: { color: string }) {
  return (
    <button
      type="button"
      className={css({
        width: "22px",
        height: "22px",
        borderRadius: "50%",
      })}
      style={{ backgroundColor: color }}
    />
  );
}

function CustomColorSelectorItem() {
  return (
    <button
      type="button"
      className={css({
        width: "22px",
        height: "22px",
      })}
    >
      <Image src="/icons/edit-colors.svg" alt="colors icon" width={22} height={22} />
    </button>
  );
}
