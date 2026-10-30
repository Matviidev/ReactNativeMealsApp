import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  Colors,
  Fonts,
  FontSize,
  HOVER_LIFT,
  PRESSED_SCALE,
  Radius,
  Shadow,
  Spacing,
} from "@/constants/theme";
import { Category } from "@/types/category";
import { InteractionState } from "@/types/interaction";

type CategoryGridTileProps = {
  category: Category;
  mealCount: number;
  onPress: () => void;
};

const SWATCH_SIZE = 44;
const ICON_SIZE = 22;
const ARROW_SIZE = 18;

export function CategoryGridTile({
  category,
  mealCount,
  onPress,
}: CategoryGridTileProps) {
  const countLabel = `${mealCount} ${mealCount === 1 ? "recipe" : "recipes"}`;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${category.title}, ${countLabel}`}
      android_ripple={{ color: Colors.ripple }}
      onPress={onPress}
      style={({ pressed, hovered }: InteractionState) => [
        styles.tile,
        hovered && [styles.hovered, { borderColor: `${category.color}80` }],
        pressed && styles.pressed,
      ]}
    >
      {({ hovered }: InteractionState) => (
        <>
          <View
            style={[
              styles.glow,
              { backgroundColor: category.color },
              hovered && styles.glowHovered,
            ]}
          />
          <View style={styles.topRow}>
            <View
              style={[
                styles.swatch,
                {
                  backgroundColor: `${category.color}24`,
                  borderColor: `${category.color}59`,
                },
              ]}
            >
              <SymbolView
                name={{
                  ios: "fork.knife",
                  android: "restaurant",
                  web: "restaurant",
                }}
                size={ICON_SIZE}
                tintColor={category.color}
              />
            </View>
            <SymbolView
              name={{
                ios: "arrow.up.right",
                android: "arrow_outward",
                web: "arrow_outward",
              }}
              size={ARROW_SIZE}
              tintColor={hovered ? Colors.text : Colors.textSubtle}
            />
          </View>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {category.title}
            </Text>
            <Text style={styles.count}>{countLabel}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    height: 156,
    padding: Spacing.lg,
    justifyContent: "space-between",
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    overflow: "hidden",
    ...Shadow.card,
  },
  hovered: {
    backgroundColor: Colors.surfaceElevated,
    transform: [{ translateY: HOVER_LIFT }],
    ...Shadow.cardHover,
  },
  pressed: {
    transform: [{ scale: PRESSED_SCALE }],
  },
  glow: {
    position: "absolute",
    top: -60,
    right: -60,
    width: 140,
    height: 140,
    borderRadius: 70,
    opacity: 0.08,
  },
  glowHovered: {
    opacity: 0.16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  swatch: {
    width: SWATCH_SIZE,
    height: SWATCH_SIZE,
    borderRadius: Radius.md,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSize.lg,
    letterSpacing: -0.2,
    color: Colors.text,
  },
  count: {
    marginTop: Spacing.xs,
    fontFamily: Fonts.medium,
    fontSize: FontSize.sm,
    color: Colors.textMuted,
  },
});
