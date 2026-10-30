import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { MealDetails } from "@/components/meal-details";
import {
  Colors,
  Fonts,
  FontSize,
  HOVER_LIFT,
  PRESSED_SCALE,
  Radius,
  Shadow,
  Spacing,
} from "@/constants/theme";
import { InteractionState } from "@/types/interaction";
import { Meal } from "@/types/meal";

type MealItemProps = {
  meal: Meal;
};

const IMAGE_ASPECT_RATIO = 16 / 10;

export function MealItem({ meal }: MealItemProps) {
  const router = useRouter();

  function handlePress() {
    router.push({
      pathname: "/meal-detail/[mealId]",
      params: { mealId: meal.id },
    });
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={meal.title}
      android_ripple={{ color: Colors.ripple, foreground: true }}
      onPress={handlePress}
      style={({ pressed, hovered }: InteractionState) => [
        styles.card,
        hovered && styles.hovered,
        pressed && styles.pressed,
      ]}
    >
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    overflow: "hidden",
    ...Shadow.card,
  },
  hovered: {
    borderColor: Colors.borderStrong,
    backgroundColor: Colors.surfaceElevated,
    transform: [{ translateY: HOVER_LIFT }],
    ...Shadow.cardHover,
  },
  pressed: {
    transform: [{ scale: PRESSED_SCALE }],
  },
  image: {
    width: "100%",
    aspectRatio: IMAGE_ASPECT_RATIO,
    backgroundColor: Colors.surfaceElevated,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
    gap: Spacing.md,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSize.lg,
    lineHeight: 24,
    letterSpacing: -0.2,
    color: Colors.text,
  },
});
