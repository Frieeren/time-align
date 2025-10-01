"use client";

import { useIsMounted } from "@/shared/hooks/useIsMounted";
import { SwitchCase } from "@/shared/utils/SwitchCase";
import { Fragment, useEffect, useMemo, useState } from "react";
import * as styles from "./Toast.stlye";
import type { ToastPosition, ToastProps, ToastType } from "./Toast.type";
import ErrorIcon from "./assets/toast-error.svg";
import SuccessIcon from "./assets/toast-success.svg";
import WarningIcon from "./assets/toast-warning.svg";
import { useToastStack } from "./useToastStack";
import "./Toast.Animation.css";

export const Toaster = ({ toasts }: { toasts: ToastType[] }) => {
  const { getToasterProps, groupedToasts } = useToastStack(toasts);

  return (
    <Fragment>
      {(Object.entries(groupedToasts) as [ToastPosition, ToastType[]][]).map(
        ([position, positionToasts]) =>
          positionToasts.length > 0 && (
            <div key={position} className={styles.toasterContent}>
              {positionToasts.map((toast, idx) => {
                const toasterProps = getToasterProps(toast, idx, position as ToastPosition);

                return (
                  <div key={toast.id} {...toasterProps}>
                    <Toast {...toast} />
                  </div>
                );
              })}
            </div>
          )
      )}
    </Fragment>
  );
};

export const Toast = ({ ...toast }: ToastProps) => {
  const { width, type, action, position, offset, duration, style, message, buttonText, onAction } = toast;

  const isMounted = useIsMounted();
  const [visible, setVisible] = useState(false);
  const isTop = position?.includes("top");
  const positionClass = isTop ? "top" : "bottom";

  const offsetStyle = useMemo(() => {
    const offsetValue = offset;

    return isTop ? { top: `${offsetValue}px` } : { bottom: `${offsetValue}px` };
  }, [isTop, offset]);

  useEffect(() => {
    const animation = isMounted
      ? requestAnimationFrame(() => {
          setVisible(true);
        })
      : null;

    const timer = setTimeout(
      () => {
        setVisible(false);
      },
      duration ? duration - 500 : 300
    );

    return () => {
      if (animation !== null) {
        cancelAnimationFrame(animation);
      }
      clearTimeout(timer);
    };
  }, [isMounted, duration]);

  return (
    <div
      data-frieeren-component="Toast"
      className={styles.toastContent({
        position: positionClass as "top" | "bottom",
        visible: visible,
      })}
      style={{
        width: width,
        visibility: visible ? "visible" : "hidden",
        ...offsetStyle,
        ...style,
      }}
    >
      <div className={styles.toastTypeMessage}>
        <div className={styles.toastTypeIcon} data-toast-type={type}>
          <SwitchCase
            value={type || "default"}
            caseBy={{
              success: <SuccessIcon />,
              warning: <WarningIcon />,
              error: <ErrorIcon />,
            }}
            defaultComponent={null}
          />
        </div>
        <div className={styles.toastMessage}>{message}</div>
      </div>

      <SwitchCase
        value={action || "default"}
        caseBy={{
          "icon-link": (
            <button type="button" className={styles.toastActionLink} onClick={onAction}>
              링크→
            </button>
          ),
          "icon-button": (
            <button type="button" className={styles.toastActionButton} onClick={onAction}>
              {buttonText}
            </button>
          ),
        }}
        defaultComponent={null}
      />
    </div>
  );
};
