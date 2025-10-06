"use client";

import { SwitchCase } from "@/shared/utils/SwitchCase";
import { Drawer } from "vaul";
import * as styles from "./BottomSheet.style";
import type { BottomSheetProps } from "./BottomSheet.type";

export const BottomSheet = ({
  open,
  onClose,
  locked = true,
  showHandle = true,
  handleOnly = false,
  radius,
  theme = "light",
  zIndex = 1,
  className,
  content,
}: BottomSheetProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose} modal={locked} handleOnly={handleOnly}>
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} data-frieeren-component="BottomSheetOverlay" style={{ zIndex }} />
        <Drawer.Content
          className={`${styles.drawerContent({ radius, theme })} ${className || ""}`}
          data-frieeren-component="BottomSheet"
          style={{ zIndex }}
        >
          <SwitchCase
            value={String(showHandle)}
            caseBy={{
              true: (
                <div className={styles.drawerHandle}>
                  <Drawer.Handle style={{ width: 36 }} />
                </div>
              ),
            }}
          />
          <div className={styles.drawerContentInner}>{content}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
