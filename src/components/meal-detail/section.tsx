import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { Colors, Fonts, FontSize, Radius, Spacing } from "@/constants/theme";

type SectionProps = PropsWithChildren<{
  title: string;
  meta?: string;
  style?: StyleProp<ViewStyle>;
}>;

export function Section({ title, meta, style, children }: SectionProps) {
  return (
    <View style={[styles.section, style]}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        {meta ? <Text style={styles.meta}>{meta}</Text> : null}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: Spacing.xl,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: Spacing.md,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSize.lg,
    letterSpacing: -0.2,
    color: Colors.text,
  },
  meta: {
    fontFamily: Fonts.medium,
    fontSize: FontSize.sm,
    color: Colors.textSubtle,
  },
});
