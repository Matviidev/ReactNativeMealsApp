export type Affordability = "affordable" | "pricey" | "luxurious";

export type Complexity = "simple" | "challenging" | "hard";

export type Meal = {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: Affordability;
  complexity: Complexity;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};
