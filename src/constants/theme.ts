export const Colors = {
  background: "#120d0a",
  surface: "#1c1511",
  surfaceElevated: "#261d17",
  surfaceHover: "#2e231c",
  header: "#17110d",
  primary: "#f59e5b",
  primaryMuted: "rgba(245, 158, 91, 0.14)",
  onPrimary: "#1f1007",
  text: "#f8f1ea",
  textMuted: "#b8a597",
  textSubtle: "#8c7a6d",
  border: "#2e231c",
  borderStrong: "#45362b",
  favorite: "#fbbf24",
  ripple: "rgba(255, 255, 255, 0.12)",
} as const;

export const Fonts = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extrabold: "Inter_800ExtraBold",
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
  display: 36,
} as const;

export const Shadow = {
  card: {
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.25)",
  },
  cardHover: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4), 0 16px 32px rgba(0, 0, 0, 0.35)",
  },
} as const;

export const Breakpoints = {
  tablet: 768,
  desktop: 1024,
} as const;

export const Layout = {
  maxContentWidth: 1200,
  maxReadableWidth: 1040,
  sidebarWidth: 264,
  gutter: Spacing.lg,
} as const;

export const HOVER_LIFT = -3;
export const PRESSED_SCALE = 0.98;
export const PRESSED_OPACITY = 0.7;
