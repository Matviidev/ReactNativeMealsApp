import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet } from "react-native";

import { PRESSED_OPACITY, Spacing } from "@/constants/theme";

type IconButtonProps = {
  icon: SymbolViewProps["name"];
  color: string;
  accessibilityLabel: string;
  onPress: () => void;
};

const ICON_SIZE = 24;

export function IconButton({
  icon,
  color,
  accessibilityLabel,
  onPress,
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      hitSlop={Spacing.sm}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <SymbolView name={icon} size={ICON_SIZE} tintColor={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: PRESSED_OPACITY,
  },
});
