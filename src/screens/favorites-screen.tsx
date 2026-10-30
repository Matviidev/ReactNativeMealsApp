import { useRouter } from "expo-router";

import { EmptyState } from "@/components/empty-state";
import { MealsList } from "@/components/meals-list/meals-list";
import { getMealsByIds } from "@/data/queries";
import { selectFavoriteIds } from "@/store/favorites-slice";
import { useAppSelector } from "@/store/store";

export function FavoritesScreen() {
  const router = useRouter();
  const favoriteIds = useAppSelector(selectFavoriteIds);
  const favoriteMeals = getMealsByIds(favoriteIds);

  return (
    <MealsList
      meals={favoriteMeals}
      emptyState={
        <EmptyState
          icon={{ ios: "star", android: "star", web: "star" }}
          title="No favorites yet"
          message="Tap the star on any meal to save it here for later."
          actionLabel="Browse categories"
          onAction={() => router.navigate("/")}
        />
      }
    />
  );
}
