import Image from "next/image";
import { css } from "styled-system/css";

export function TimeSelector() {
  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      })}
    >
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
          <Image src="/icons/edit-clock.svg" alt="clock icon" width={18} height={18} />
          <p
            className={css({
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "-0.28px",
            })}
          >
            시작
          </p>
        </div>
        <div
          className={css({
            width: "210px",
            height: "42px",
            border: "1px solid #EFF2F5",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          Time Selector
        </div>
      </div>
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
          <div
            className={css({
              width: "18px",
              height: "18px",
            })}
          />
          <p
            className={css({
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "-0.28px",
            })}
          >
            종료
          </p>
        </div>
        <div
          className={css({
            width: "210px",
            height: "42px",
            border: "1px solid #EFF2F5",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          Time Selector
        </div>
      </div>
    </div>
  );
}
