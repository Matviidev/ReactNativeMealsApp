import { StyleSheet, Text, View } from "react-native";

import { Colors, FontSize, Radius, Spacing } from "@/constants/theme";
import { Meal } from "@/types/meal";

type DietaryFlag = keyof Pick<
  Meal,
  "isVegan" | "isVegetarian" | "isGlutenFree" | "isLactoseFree"
>;

const DIETARY_LABELS: Record<DietaryFlag, string> = {
  isVegan: "Vegan",
  isVegetarian: "Vegetarian",
  isGlutenFree: "Gluten-free",
  isLactoseFree: "Lactose-free",
};

const DIETARY_FLAGS = Object.keys(DIETARY_LABELS) as DietaryFlag[];

type DietaryBadgesProps = {
  meal: Meal;
};

export function DietaryBadges({ meal }: DietaryBadgesProps) {
  const activeFlags = DIETARY_FLAGS.filter((flag) => meal[flag]);

  if (activeFlags.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {activeFlags.map((flag) => (
        <View key={flag} style={styles.badge}>
          <Text style={styles.badgeText}>{DIETARY_LABELS[flag]}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: Spacing.sm,
  },
  badge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: "600",
    color: Colors.primary,
  },
});
