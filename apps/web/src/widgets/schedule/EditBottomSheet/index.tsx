"use client";

import { Spacer } from "@/shared/components/Spacer";
import { ProjectSelector } from "@/widgets/schedule/EditBottomSheet/ProjectSelector";
import { Tabs } from "@/widgets/schedule/EditBottomSheet/Tabs";
import { css } from "styled-system/css";
import { ColorSelector } from "./ColorSelector";
import { EditBottomSheetCta } from "./EditBottomSheetCta";
import { EditBottomSheetDivider } from "./EditBottomSheetDivider";
import { ManagerSelector } from "./ManagerSelector";
import { MemoTextField } from "./MemoTextField";
import { TimeSelector } from "./TimeSelector";

export function EditBottomSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div>EditBottomSheet</div>
    // <BottomSheet open={open} onClose={onClose} radius="small" zIndex={100}>
    //   <div
    //     className={css({
    //       display: "flex",
    //       flexDirection: "column",
    //       minHeight: "calc(100vh * 0.75)",
    //       overflowX: "hidden",
    //     })}
    //   >
    //     <input
    //       className={css({
    //         width: "100%",
    //         height: "49px",
    //         px: "24px",
    //         py: "12px",
    //         borderBottom: "1px solid #F8F8F8",
    //         fontSize: "18px",
    //         fontWeight: "600",
    //         caretColor: "#3A8DFF",
    //         outline: "none",
    //         border: "none",
    //       })}
    //       placeholder="일정 제목"
    //     />
    //     <Spacer height={24} />
    //     <Tabs />
    //     <Spacer height={24} />
    //     <ProjectSelector />
    //     <Spacer height={24} />
    //     <TimeSelector />
    //     <Spacer height={24} />
    //     <ManagerSelector />
    //     <Spacer height={24} />
    //     <ColorSelector />
    //     <Spacer height={18} />
    //     <EditBottomSheetDivider />
    //     <Spacer height={18} />
    //     <MemoTextField />
    //     <Spacer height={18} />
    //     <EditBottomSheetCta />
    //     <Spacer height={24} />
    //   </div>
    // </BottomSheet>
  );
}
