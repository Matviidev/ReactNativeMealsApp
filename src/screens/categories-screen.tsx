import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

import { CategoryGridTile } from "@/components/category-grid-tile";
import { Spacing } from "@/constants/theme";
import { CATEGORIES } from "@/data/dummy-data";
import { getMealsByCategory } from "@/data/queries";

const GRID_COLUMNS = 2;

export function CategoriesScreen() {
  const router = useRouter();

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      numColumns={GRID_COLUMNS}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <CategoryGridTile
          category={item}
          mealCount={getMealsByCategory(item.id).length}
          onPress={() =>
            router.push({
              pathname: "/meals-overview/[categoryId]",
              params: { categoryId: item.id },
            })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    padding: Spacing.sm,
  },
});
