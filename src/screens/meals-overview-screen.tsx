import { Stack, useLocalSearchParams } from "expo-router";

import { EmptyState } from "@/components/empty-state";
import { MealsList } from "@/components/meals-list/meals-list";
import { getCategoryById, getMealsByCategory } from "@/data/queries";

export function MealsOverviewScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  const category = getCategoryById(categoryId);
  const meals = getMealsByCategory(categoryId);

  return (
    <>
      <Stack.Screen options={{ title: category?.title ?? "Meals" }} />
      <MealsList
        meals={meals}
        emptyState={
          <EmptyState
            icon={{
              ios: "fork.knife",
              android: "restaurant",
              web: "restaurant",
            }}
            title="No meals here yet"
            message="This category doesn't have any recipes yet. Check back soon."
          />
        }
      />
    </>
  );
}
