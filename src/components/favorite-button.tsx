import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, Text } from "react-native";

import { FAVORITE_ICON, NOT_FAVORITE_ICON } from "@/constants/icons";
import {
  Colors,
  Fonts,
  FontSize,
  PRESSED_SCALE,
  Radius,
  Spacing,
} from "@/constants/theme";
import { InteractionState } from "@/types/interaction";

type FavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
};

const ICON_SIZE = 18;

export function FavoriteButton({ isFavorite, onPress }: FavoriteButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: isFavorite }}
      onPress={onPress}
      style={({ pressed, hovered }: InteractionState) => [
        styles.button,
        isFavorite && styles.active,
        hovered && (isFavorite ? styles.activeHovered : styles.hovered),
        pressed && styles.pressed,
      ]}
    >
      <SymbolView
        name={isFavorite ? FAVORITE_ICON : NOT_FAVORITE_ICON}
        size={ICON_SIZE}
        tintColor={isFavorite ? Colors.onPrimary : Colors.text}
      />
      <Text style={[styles.label, isFavorite && styles.activeLabel]}>
        {isFavorite ? "Saved to favorites" : "Save to favorites"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    backgroundColor: Colors.surface,
  },
  hovered: {
    backgroundColor: Colors.surfaceHover,
  },
  active: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  activeHovered: {
    opacity: 0.9,
  },
  pressed: {
    transform: [{ scale: PRESSED_SCALE }],
  },
  label: {
    fontFamily: Fonts.semibold,
    fontSize: FontSize.sm,
    color: Colors.text,
  },
  activeLabel: {
    color: Colors.onPrimary,
  },
});
