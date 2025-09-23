import type * as TabsBase from "@radix-ui/react-tabs";
import type { ReactNode, RefObject } from "react";

interface TabItem {
  value: string;
  label: ReactNode;
}

export interface UseTabsIndicatorProps {
  listRef: RefObject<HTMLDivElement | null>;
}

export interface TabsProps extends Omit<TabsBase.TabsProps, "children" | "dir"> {
  width?: string;
  tabItems: TabItem[];
}
