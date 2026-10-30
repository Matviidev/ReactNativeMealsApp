import { useRouter } from "expo-router";

import { CategoryGridTile } from "@/components/category-grid-tile";
import { Grid } from "@/components/grid";
import { PageHeader } from "@/components/page-header";
import { PageTitle } from "@/components/page-title";
import { CATEGORIES } from "@/data/dummy-data";
import { getMealsByCategory } from "@/data/queries";
import { useGridColumns, useLayout } from "@/hooks/use-layout";

const MIN_TILE_WIDTH = 168;
const MAX_COLUMNS = 5;

export function CategoriesScreen() {
  const router = useRouter();
  const { isTablet } = useLayout();
  const columns = useGridColumns(MIN_TILE_WIDTH, MAX_COLUMNS);

  return (
    <>
      <PageTitle title="Categories" />
      <Grid
        data={CATEGORIES}
        columns={columns}
        keyExtractor={(category) => category.id}
        header={
          isTablet ? (
            <PageHeader
              eyebrow="Discover"
              title="What are we cooking today?"
              subtitle={`Browse ${CATEGORIES.length} categories of hand-picked recipes.`}
            />
          ) : undefined
        }
        renderItem={(category) => (
          <CategoryGridTile
            category={category}
            mealCount={getMealsByCategory(category.id).length}
            onPress={() =>
              router.push({
                pathname: "/meals-overview/[categoryId]",
                params: { categoryId: category.id },
              })
            }
          />
        )}
      />
    </>
  );
}
