import { Stack, useLocalSearchParams } from "expo-router";

import { EmptyState } from "@/components/empty-state";
import { MealsList } from "@/components/meals-list/meals-list";
import { PageHeader } from "@/components/page-header";
import { PageTitle } from "@/components/page-title";
import { getCategoryById, getMealsByCategory } from "@/data/queries";
import { useLayout } from "@/hooks/use-layout";

export function MealsOverviewScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const { isTablet } = useLayout();

  const category = getCategoryById(categoryId);
  const meals = getMealsByCategory(categoryId);
  const title = category?.title ?? "Meals";

  return (
    <>
      <PageTitle title={title} />
      <Stack.Screen options={{ title }} />
      <MealsList
        meals={meals}
        header={
          isTablet ? (
            <PageHeader
              eyebrow="Category"
              title={title}
              subtitle={`${meals.length} ${meals.length === 1 ? "recipe" : "recipes"} to explore`}
            />
          ) : undefined
        }
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
