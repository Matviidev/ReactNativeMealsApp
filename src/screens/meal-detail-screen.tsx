import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { EmptyState } from "@/components/empty-state";
import { IconButton } from "@/components/icon-button";
import { DietaryBadges } from "@/components/meal-detail/dietary-badges";
import { List } from "@/components/meal-detail/list";
import { Subtitle } from "@/components/meal-detail/subtitle";
import { MealDetails } from "@/components/meal-details";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { getMealById } from "@/data/queries";
import { selectIsFavorite, toggleFavorite } from "@/store/favorites-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

const FAVORITE_ICON = {
  ios: "star.fill",
  android: "star",
  web: "star",
} as const;
const NOT_FAVORITE_ICON = {
  ios: "star",
  android: "star_border",
  web: "star_border",
} as const;

export function MealDetailScreen() {
  const { mealId } = useLocalSearchParams<{ mealId: string }>();
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, mealId));

  const meal = getMealById(mealId);

  if (!meal) {
    return (
      <EmptyState
        icon={{
          ios: "exclamationmark.triangle",
          android: "error",
          web: "error",
        }}
        title="Meal not found"
        message="We couldn't find this recipe. It may have been removed."
      />
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <IconButton
              icon={isFavorite ? FAVORITE_ICON : NOT_FAVORITE_ICON}
              color={isFavorite ? Colors.favorite : Colors.text}
              accessibilityLabel={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
              onPress={() => dispatch(toggleFavorite(meal.id))}
            />
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
        <View style={styles.body}>
          <Text style={styles.title}>{meal.title}</Text>
          <MealDetails meal={meal} style={styles.details} />
          <DietaryBadges meal={meal} />
          <Subtitle>Ingredients</Subtitle>
          <List items={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={meal.steps} ordered />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: Spacing.xxl,
  },
  image: {
    width: "100%",
    height: 300,
  },
  body: {
    padding: Spacing.lg,
  },
  title: {
    fontWeight: "800",
    fontSize: FontSize.xxl,
    textAlign: "center",
    color: Colors.text,
  },
  details: {
    marginVertical: Spacing.md,
  },
});
