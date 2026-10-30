import { Href, usePathname, useRouter } from "expo-router";
import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  Colors,
  Fonts,
  FontSize,
  PRESSED_OPACITY,
  Radius,
  Spacing,
} from "@/constants/theme";
import { selectFavoriteIds } from "@/store/favorites-slice";
import { useAppSelector } from "@/store/store";
import { InteractionState } from "@/types/interaction";

type NavItem = {
  href: Href;
  label: string;
  icon: SymbolViewProps["name"];
  isActive: (pathname: string) => boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Categories",
    icon: { ios: "square.grid.2x2", android: "grid_view", web: "grid_view" },
    isActive: (pathname) =>
      pathname === "/" || pathname.startsWith("/meals-overview"),
  },
  {
    href: "/favorites",
    label: "Favorites",
    icon: { ios: "star.fill", android: "star", web: "star" },
    isActive: (pathname) => pathname === "/favorites",
  },
];

const ICON_SIZE = 20;
const LOGO_SIZE = 36;

type NavMenuProps = {
  onNavigate?: () => void;
};

export function NavMenu({ onNavigate }: NavMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const favoriteCount = useAppSelector(selectFavoriteIds).length;

  function handlePress(href: Href) {
    router.navigate(href);
    onNavigate?.();
  }

  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <View style={styles.logo}>
          <SymbolView
            name={{ ios: "fork.knife", android: "restaurant", web: "restaurant" }}
            size={ICON_SIZE}
            tintColor={Colors.onPrimary}
          />
        </View>
        <View>
          <Text style={styles.brandName}>Meals</Text>
          <Text style={styles.brandTagline}>Recipes for every mood</Text>
        </View>
      </View>
      <Text style={styles.sectionLabel}>Browse</Text>
      <View style={styles.items}>
        {NAV_ITEMS.map((item) => {
          const active = item.isActive(pathname);
          const badge = item.href === "/favorites" ? favoriteCount : 0;

          return (
            <Pressable
              key={item.label}
              accessibilityRole="link"
              accessibilityState={{ selected: active }}
              onPress={() => handlePress(item.href)}
              style={({ pressed, hovered }: InteractionState) => [
                styles.item,
                hovered && styles.itemHovered,
                active && styles.itemActive,
                pressed && styles.itemPressed,
              ]}
            >
              <SymbolView
                name={item.icon}
                size={ICON_SIZE}
                tintColor={active ? Colors.primary : Colors.textMuted}
              />
              <Text style={[styles.itemLabel, active && styles.itemLabelActive]}>
                {item.label}
              </Text>
              {badge > 0 ? (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badge}</Text>
                </View>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.lg,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
    paddingHorizontal: Spacing.sm,
    marginBottom: Spacing.xxl,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: Radius.md,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  brandName: {
    fontFamily: Fonts.extrabold,
    fontSize: FontSize.lg,
    letterSpacing: -0.3,
    color: Colors.text,
  },
  brandTagline: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.xs,
    color: Colors.textSubtle,
  },
  sectionLabel: {
    paddingHorizontal: Spacing.sm,
    marginBottom: Spacing.sm,
    fontFamily: Fonts.semibold,
    fontSize: FontSize.xs,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: Colors.textSubtle,
  },
  items: {
    gap: Spacing.xs,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
    borderRadius: Radius.sm,
  },
  itemHovered: {
    backgroundColor: Colors.surfaceHover,
  },
  itemActive: {
    backgroundColor: Colors.primaryMuted,
  },
  itemPressed: {
    opacity: PRESSED_OPACITY,
  },
  itemLabel: {
    flex: 1,
    fontFamily: Fonts.medium,
    fontSize: FontSize.sm,
    color: Colors.textMuted,
  },
  itemLabelActive: {
    fontFamily: Fonts.semibold,
    color: Colors.text,
  },
  badge: {
    minWidth: 22,
    paddingHorizontal: Spacing.xs + 2,
    paddingVertical: 2,
    borderRadius: Radius.pill,
    alignItems: "center",
    backgroundColor: Colors.surfaceElevated,
  },
  badgeText: {
    fontFamily: Fonts.semibold,
    fontSize: FontSize.xs,
    color: Colors.text,
  },
});
