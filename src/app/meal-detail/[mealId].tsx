import { MEALS } from "@/data/dummy-data";
import { MealDetailScreen } from "@/screens/meal-detail-screen";

export function generateStaticParams() {
  return MEALS.map((meal) => ({ mealId: meal.id }));
}

export default MealDetailScreen;
