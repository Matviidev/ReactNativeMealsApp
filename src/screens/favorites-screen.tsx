import { useRouter } from "expo-router";

import { EmptyState } from "@/components/empty-state";
import { MealsList } from "@/components/meals-list/meals-list";
import { PageHeader } from "@/components/page-header";
import { PageTitle } from "@/components/page-title";
import { getMealsByIds } from "@/data/queries";
import { useLayout } from "@/hooks/use-layout";
import { selectFavoriteIds } from "@/store/favorites-slice";
import { useAppSelector } from "@/store/store";

export function FavoritesScreen() {
  const router = useRouter();
  const { isTablet } = useLayout();
  const favoriteIds = useAppSelector(selectFavoriteIds);
  const favoriteMeals = getMealsByIds(favoriteIds);

  return (
    <>
      <PageTitle title="Favorites" />
      <MealsList
        meals={favoriteMeals}
        header={
          isTablet ? (
            <PageHeader
              eyebrow="Your collection"
              title="Favorites"
              subtitle={`${favoriteMeals.length} saved ${favoriteMeals.length === 1 ? "recipe" : "recipes"}`}
            />
          ) : undefined
        }
        emptyState={
          <EmptyState
            icon={{ ios: "star", android: "star", web: "star" }}
            title="No favorites yet"
            message="Save any recipe with the star button and it will show up here."
            actionLabel="Browse categories"
            onAction={() => router.navigate("/")}
          />
        }
      />
    </>
  );
}
