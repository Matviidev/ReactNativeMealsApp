export const Colors = {
  background: "#24170f",
  surface: "#33231a",
  surfaceElevated: "#412d21",
  header: "#351401",
  primary: "#e2b497",
  onPrimary: "#351401",
  text: "#fbf3ec",
  textMuted: "#c7ad9b",
  border: "#4d3627",
  favorite: "#f5c451",
  ripple: "rgba(255, 255, 255, 0.15)",
  shadow: "#000000",
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const Radius = {
  sm: 6,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 26,
} as const;

export const Shadow = {
  card: {
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
} as const;

export const PRESSED_OPACITY = 0.7;
