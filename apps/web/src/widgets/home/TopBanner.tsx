import Image from "next/image";
import { css } from "styled-system/css";

export function TopBanner() {
  return (
    <div
      className={css({
        width: "100%",
        bg: "#3A8DFF",
        display: "flex",
        flexDirection: "column",
        px: "20px",
        py: "12px",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          gap: "8px",
        })}
      >
        <Image
          src="/icons/search.png"
          alt="search"
          width={20}
          height={20}
          className={css({
            cursor: "pointer",
          })}
        />
        <Image
          src="/icons/bell.png"
          alt="bell"
          width={20}
          height={20}
          className={css({
            cursor: "pointer",
          })}
        />
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          pr: "10px",
          pt: "14px",
          pb: "40px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          })}
        >
          <p
            className={css({
              fontSize: "16px",
              fontWeight: "bold",
              lineHeight: "1.4",
              color: "white",
            })}
          >
            반가워요, 나원님
          </p>
          <p
            className={css({
              fontSize: "18px",
              lineHeight: "1.21",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "-0.36px",
              mt: "8px",
            })}
          >
            오늘도 행복한 하루 보내세요!
          </p>
          <div
            className={css({
              borderRadius: "4px",
              bg: "#C2DCFF",
              py: "5px",
              px: "8px",
              mt: "18px",
            })}
          >
            <p
              className={css({
                fontSize: "14px",
                lineHeight: "1.4",
                fontWeight: "bold",
                letterSpacing: "-0.2px",
                color: "#3A8DFF",
              })}
            >
              은행 서비스 프로젝트 마감일 : D-14
            </p>
          </div>
        </div>
        <Image src="/sample.png" alt="sample" width={132} height={124} />
      </div>
    </div>
  );
}
