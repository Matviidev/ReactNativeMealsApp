import { StyleSheet, Text, View } from "react-native";

import { Colors, Fonts, FontSize, Spacing } from "@/constants/theme";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <View style={styles.container}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text accessibilityRole="header" style={styles.title}>
        {title}
      </Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
    gap: Spacing.sm,
  },
  eyebrow: {
    fontFamily: Fonts.semibold,
    fontSize: FontSize.xs,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: Colors.primary,
  },
  title: {
    fontFamily: Fonts.extrabold,
    fontSize: FontSize.display,
    lineHeight: 44,
    letterSpacing: -0.8,
    color: Colors.text,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.md,
    lineHeight: 24,
    color: Colors.textMuted,
  },
});
