import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  Colors,
  FontSize,
  PRESSED_OPACITY,
  Radius,
  Spacing,
} from "@/constants/theme";

type EmptyStateProps = {
  icon: SymbolViewProps["name"];
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

const ICON_SIZE = 56;

export function EmptyState({
  icon,
  title,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <SymbolView name={icon} size={ICON_SIZE} tintColor={Colors.primary} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionLabel && onAction ? (
        <Pressable
          accessibilityRole="button"
          onPress={onAction}
          style={({ pressed }) => [styles.action, pressed && styles.pressed]}
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
    padding: Spacing.xxl,
  },
  title: {
    marginTop: Spacing.lg,
    fontSize: FontSize.xl,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },
  message: {
    marginTop: Spacing.sm,
    fontSize: FontSize.md,
    lineHeight: 22,
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
  pressed: {
    opacity: PRESSED_OPACITY,
  },
  actionText: {
    fontSize: FontSize.md,
    fontWeight: "700",
    color: Colors.onPrimary,
  },
});
