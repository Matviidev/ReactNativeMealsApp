import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { MealDetails } from "@/components/meal-details";
import {
  Colors,
  FontSize,
  PRESSED_OPACITY,
  Radius,
  Shadow,
  Spacing,
} from "@/constants/theme";
import { Meal } from "@/types/meal";

type MealItemProps = {
  meal: Meal;
};

export function MealItem({ meal }: MealItemProps) {
  const router = useRouter();

  function handlePress() {
    router.push({
      pathname: "/meal-detail/[mealId]",
      params: { mealId: meal.id },
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        accessibilityRole="button"
        android_ripple={{ color: Colors.ripple }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: meal.imageUrl }}
            style={styles.image}
            contentFit="cover"
            transition={200}
          />
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={2}>
              {meal.title}
            </Text>
            <MealDetails meal={meal} />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    marginBottom: Spacing.lg,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surface,
    ...Shadow.card,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: {
    opacity: PRESSED_OPACITY,
  },
  innerContainer: {
    borderRadius: Radius.lg,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.lg,
    color: Colors.text,
  },
});
