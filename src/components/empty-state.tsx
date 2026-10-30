import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  Colors,
  Fonts,
  FontSize,
  PRESSED_SCALE,
  Radius,
  Spacing,
} from "@/constants/theme";
import { InteractionState } from "@/types/interaction";

type EmptyStateProps = {
  icon: SymbolViewProps["name"];
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

const ICON_SIZE = 32;
const ICON_CONTAINER_SIZE = 72;
const MAX_WIDTH = 420;

export function EmptyState({
  icon,
  title,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SymbolView name={icon} size={ICON_SIZE} tintColor={Colors.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionLabel && onAction ? (
        <Pressable
          accessibilityRole="button"
          onPress={onAction}
          style={({ pressed, hovered }: InteractionState) => [
            styles.action,
            hovered && styles.actionHovered,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.actionText}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    maxWidth: MAX_WIDTH,
    padding: Spacing.xxl,
  },
  iconContainer: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: Radius.xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryMuted,
  },
  title: {
    marginTop: Spacing.xl,
    fontFamily: Fonts.bold,
    fontSize: FontSize.xl,
    letterSpacing: -0.3,
    color: Colors.text,
    textAlign: "center",
  },
  message: {
    marginTop: Spacing.sm,
    fontFamily: Fonts.regular,
    fontSize: FontSize.md,
    lineHeight: 24,
    color: Colors.textMuted,
    textAlign: "center",
  },
  action: {
    marginTop: Spacing.xl,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary,
  },
  actionHovered: {
    opacity: 0.9,
  },
  pressed: {
    transform: [{ scale: PRESSED_SCALE }],
  },
  actionText: {
    fontFamily: Fonts.semibold,
    fontSize: FontSize.md,
    color: Colors.onPrimary,
  },
});
