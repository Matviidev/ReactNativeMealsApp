import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet } from "react-native";

import { Colors, PRESSED_OPACITY, Radius, Spacing } from "@/constants/theme";
import { InteractionState } from "@/types/interaction";

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
      style={({ pressed, hovered }: InteractionState) => [
        styles.button,
        hovered && styles.hovered,
        pressed && styles.pressed,
      ]}
    >
      <SymbolView name={icon} size={ICON_SIZE} tintColor={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: Spacing.xs,
    borderRadius: Radius.sm,
  },
  hovered: {
    backgroundColor: Colors.surfaceHover,
  },
  pressed: {
    opacity: PRESSED_OPACITY,
  },
});
