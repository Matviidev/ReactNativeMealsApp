import { ReactElement } from "react";
import { FlatList, StyleSheet } from "react-native";

import { MealItem } from "@/components/meals-list/meal-item";
import { Spacing } from "@/constants/theme";
import { Meal } from "@/types/meal";

type MealsListProps = {
  meals: Meal[];
  emptyState?: ReactElement;
};

export function MealsList({ meals, emptyState }: MealsListProps) {
  return (
    <FlatList
      data={meals}
      keyExtractor={(meal) => meal.id}
      renderItem={({ item }) => <MealItem meal={item} />}
      contentContainerStyle={styles.content}
      ListEmptyComponent={emptyState}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: Spacing.lg,
  },
});
