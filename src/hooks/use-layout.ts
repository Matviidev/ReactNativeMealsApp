import { useWindowDimensions } from "react-native";

import { Breakpoints, Layout } from "@/constants/theme";

export function useLayout() {
  const { width } = useWindowDimensions();
  const isTablet = width >= Breakpoints.tablet;
  const isDesktop = width >= Breakpoints.desktop;
  const availableWidth = isDesktop ? width - Layout.sidebarWidth : width;
  const contentWidth = Math.min(availableWidth, Layout.maxContentWidth);

  return { width, isTablet, isDesktop, contentWidth };
}

export function useGridColumns(minItemWidth: number, maxColumns: number) {
  const { contentWidth } = useLayout();
  const usableWidth = contentWidth - Layout.gutter * 2;

  return Math.max(1, Math.min(maxColumns, Math.floor(usableWidth / minItemWidth)));
}
