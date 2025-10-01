import { useCallback, useMemo, useState } from "react";
import * as styles from "./Toast.stlye";
import type { ToastPosition, ToastType } from "./Toast.type";

/** between the toasts spacing */
const GAP = 8;

export const useToastStack = (toasts: ToastType[]) => {
  const [heights, setHeights] = useState<Record<string, number>>({});

  const updateHeight = useCallback((id: string, height: number) => {
    setHeights(prev => ({
      ...prev,
      [id]: height,
    }));
  }, []);

  const groupedToasts = useMemo(() => {
    const groups: Record<ToastPosition, ToastType[]> = {
      "top-left": [],
      "top-right": [],
      "top-center": [],
      "bottom-left": [],
      "bottom-right": [],
      "bottom-center": [],
    };

    for (const toast of toasts) {
      const position = toast.position;
      groups[position].push(toast);
    }

    return groups;
  }, [toasts]);

  const getToasterProps = useCallback(
    (toast: ToastType, index: number, position: ToastPosition) => {
      const positionToasts = groupedToasts[position];
      const offset = positionToasts.slice(0, index).reduce((total, t) => total + (heights[t.id] || 0) + GAP, 0);

      const translateY = `${offset * (position.includes("top") ? 1 : -1)}px`;
      const translateX = position.includes("center") ? "-50%" : "0";

      return {
        ref: (el: HTMLDivElement | null) => {
          if (el) {
            const height = el.getBoundingClientRect().height;
            if (heights[toast.id] !== height) {
              updateHeight(toast.id, height);
            }
          }
        },
        style: {
          transform: `translate(${translateX}, ${translateY})`,
          transition: "transform 0.23s cubic-bezier(0.21, 1.02, 0.73, 1)",
        },
        className: styles.toastWrapper({ position }),
      };
    },
    [heights, groupedToasts, updateHeight]
  );

  return {
    getToasterProps,
    groupedToasts,
  };
};
