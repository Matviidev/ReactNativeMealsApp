import { ReactElement } from "react";

import { Grid } from "@/components/grid";
import { MealItem } from "@/components/meals-list/meal-item";
import { useGridColumns } from "@/hooks/use-layout";
import { Meal } from "@/types/meal";

type MealsListProps = {
  meals: Meal[];
  header?: ReactElement;
  emptyState?: ReactElement;
};

const MIN_CARD_WIDTH = 320;
const MAX_COLUMNS = 3;

export function MealsList({ meals, header, emptyState }: MealsListProps) {
  const columns = useGridColumns(MIN_CARD_WIDTH, MAX_COLUMNS);

  return (
    <Grid
      data={meals}
      columns={columns}
      keyExtractor={(meal) => meal.id}
      renderItem={(meal) => <MealItem meal={meal} />}
      header={meals.length > 0 ? header : undefined}
      emptyState={emptyState}
    />
  );
}
