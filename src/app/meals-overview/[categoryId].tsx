import { CATEGORIES } from "@/data/dummy-data";
import { MealsOverviewScreen } from "@/screens/meals-overview-screen";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ categoryId: category.id }));
}

export default MealsOverviewScreen;
