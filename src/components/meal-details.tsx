import { SymbolView, SymbolViewProps } from "expo-symbols";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { Colors, Fonts, FontSize, Radius, Spacing } from "@/constants/theme";
import { Affordability, Complexity, Meal } from "@/types/meal";

type MealDetailsProps = {
  meal: Pick<Meal, "duration" | "complexity" | "affordability">;
  style?: StyleProp<ViewStyle>;
};

const COMPLEXITY_LABELS: Record<Complexity, string> = {
  simple: "Simple",
  challenging: "Challenging",
  hard: "Hard",
};

const AFFORDABILITY_LABELS: Record<Affordability, string> = {
  affordable: "Affordable",
  pricey: "Pricey",
  luxurious: "Luxurious",
};

const ICON_SIZE = 14;

export function MealDetails({ meal, style }: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <DetailChip
        icon={{ ios: "clock", android: "schedule", web: "schedule" }}
        label={`${meal.duration} min`}
      />
      <DetailChip
        icon={{ ios: "chart.bar", android: "bar_chart", web: "bar_chart" }}
        label={COMPLEXITY_LABELS[meal.complexity]}
      />
      <DetailChip
        icon={{
          ios: "dollarsign.circle",
          android: "payments",
          web: "payments",
        }}
        label={AFFORDABILITY_LABELS[meal.affordability]}
      />
    </View>
  );
}

type DetailChipProps = {
  icon: SymbolViewProps["name"];
  label: string;
};

function DetailChip({ icon, label }: DetailChipProps) {
  return (
    <View style={styles.chip}>
      <SymbolView name={icon} size={ICON_SIZE} tintColor={Colors.primary} />
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.sm,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
    paddingHorizontal: Spacing.sm + Spacing.xs,
    paddingVertical: Spacing.xs + 2,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceElevated,
  },
  chipText: {
    fontFamily: Fonts.medium,
    fontSize: FontSize.xs,
    color: Colors.textMuted,
  },
});
