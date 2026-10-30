import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors, FontSize, Spacing } from "@/constants/theme";

export function Subtitle({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
    paddingBottom: Spacing.sm,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  subtitle: {
    color: Colors.primary,
    fontSize: FontSize.lg,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
