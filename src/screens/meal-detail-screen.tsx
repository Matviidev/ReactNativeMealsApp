import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { EmptyState } from "@/components/empty-state";
import { FavoriteButton } from "@/components/favorite-button";
import { IconButton } from "@/components/icon-button";
import { DietaryBadges } from "@/components/meal-detail/dietary-badges";
import { List } from "@/components/meal-detail/list";
import { Section } from "@/components/meal-detail/section";
import { MealDetails } from "@/components/meal-details";
import { PageTitle } from "@/components/page-title";
import { FAVORITE_ICON, NOT_FAVORITE_ICON } from "@/constants/icons";
import {
  Colors,
  Fonts,
  FontSize,
  Layout,
  Radius,
  Spacing,
} from "@/constants/theme";
import { getCategoriesByIds, getMealById } from "@/data/queries";
import { useLayout } from "@/hooks/use-layout";
import { selectIsFavorite, toggleFavorite } from "@/store/favorites-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export function MealDetailScreen() {
  const { mealId } = useLocalSearchParams<{ mealId: string }>();
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, mealId));
  const { isTablet, isDesktop } = useLayout();

  const meal = getMealById(mealId);

  if (!meal) {
    return (
      <>
        <PageTitle title="Meal not found" />
        <EmptyState
          icon={{
            ios: "exclamationmark.triangle",
            android: "error",
            web: "error",
          }}
          title="Meal not found"
          message="We couldn't find this recipe. It may have been removed."
        />
      </>
    );
  }

  const categoryNames = getCategoriesByIds(meal.categoryIds)
    .map((category) => category.title)
    .join(" · ");

  function handleToggleFavorite() {
    dispatch(toggleFavorite(mealId));
  }

  return (
    <>
      <PageTitle title={meal.title} />
      <Stack.Screen
        options={{
          headerRight: isTablet
            ? undefined
            : () => (
                <IconButton
                  icon={isFavorite ? FAVORITE_ICON : NOT_FAVORITE_ICON}
                  color={isFavorite ? Colors.favorite : Colors.text}
                  accessibilityLabel={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  onPress={handleToggleFavorite}
                />
              ),
        }}
      />
      <ScrollView
        contentContainerStyle={[styles.content, isTablet && styles.contentWide]}
      >
        <Image
          source={{ uri: meal.imageUrl }}
          style={[styles.image, isTablet && styles.imageWide]}
          contentFit="cover"
          transition={200}
        />
        <View style={[styles.body, isTablet && styles.bodyWide]}>
          <View style={[styles.intro, isTablet && styles.introWide]}>
            <View style={styles.introText}>
              {categoryNames ? (
                <Text style={styles.eyebrow}>{categoryNames}</Text>
              ) : null}
              <Text
                accessibilityRole="header"
                style={[styles.title, isTablet && styles.titleWide]}
              >
                {meal.title}
              </Text>
              <MealDetails meal={meal} />
              <DietaryBadges meal={meal} />
            </View>
            {isTablet ? (
              <FavoriteButton
                isFavorite={isFavorite}
                onPress={handleToggleFavorite}
              />
            ) : null}
          </View>
          <View style={[styles.sections, isDesktop && styles.sectionsWide]}>
            <Section
              title="Ingredients"
              meta={`${meal.ingredients.length} items`}
              style={isDesktop && styles.ingredients}
            >
              <List items={meal.ingredients} />
            </Section>
            <Section
              title="Steps"
              meta={`${meal.steps.length} steps`}
              style={isDesktop && styles.steps}
            >
              <List items={meal.steps} ordered />
            </Section>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: Spacing.xxxl,
  },
  contentWide: {
    width: "100%",
    maxWidth: Layout.maxReadableWidth,
    alignSelf: "center",
    padding: Spacing.xl,
  },
  image: {
    width: "100%",
    height: 280,
    backgroundColor: Colors.surfaceElevated,
  },
  imageWide: {
    height: undefined,
    aspectRatio: 21 / 9,
    borderRadius: Radius.xl,
  },
  body: {
    padding: Spacing.lg,
    gap: Spacing.xl,
  },
  bodyWide: {
    paddingHorizontal: 0,
    paddingTop: Spacing.xl,
  },
  intro: {
    gap: Spacing.lg,
  },
  introWide: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  introText: {
    flexShrink: 1,
    gap: Spacing.md,
  },
  eyebrow: {
    fontFamily: Fonts.semibold,
    fontSize: FontSize.xs,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: Colors.primary,
  },
  title: {
    fontFamily: Fonts.extrabold,
    fontSize: FontSize.xxl,
    lineHeight: 34,
    letterSpacing: -0.6,
    color: Colors.text,
  },
  titleWide: {
    fontSize: FontSize.display,
    lineHeight: 44,
    letterSpacing: -0.8,
  },
  sections: {
    gap: Spacing.lg,
  },
  sectionsWide: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Spacing.xl,
  },
  ingredients: {
    flex: 2,
  },
  steps: {
    flex: 3,
  },
});
