import { CATEGORIES, MEALS } from "@/data/dummy-data";

export function getCategoryById(categoryId: string) {
  return CATEGORIES.find((category) => category.id === categoryId);
}

export function getMealById(mealId: string) {
  return MEALS.find((meal) => meal.id === mealId);
}

export function getMealsByCategory(categoryId: string) {
  return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
}

export function getMealsByIds(mealIds: readonly string[]) {
  return MEALS.filter((meal) => mealIds.includes(meal.id));
}
