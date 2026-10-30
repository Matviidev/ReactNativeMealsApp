import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import {
  Colors,
  FontSize,
  PRESSED_OPACITY,
  Radius,
  Shadow,
  Spacing,
} from "@/constants/theme";
import { Category } from "@/types/category";

type CategoryGridTileProps = {
  category: Category;
  mealCount: number;
  onPress: () => void;
};

export function CategoryGridTile({
  category,
  mealCount,
  onPress,
}: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        accessibilityRole="button"
        android_ripple={{ color: Colors.ripple }}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <View
          style={[styles.innerContainer, { backgroundColor: category.color }]}
        >
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.count}>
            {mealCount} {mealCount === 1 ? "recipe" : "recipes"}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: Spacing.sm,
    height: 140,
    borderRadius: Radius.lg,
    ...Shadow.card,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: PRESSED_OPACITY,
  },
  innerContainer: {
    flex: 1,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: "800",
    fontSize: FontSize.lg,
    color: Colors.onPrimary,
  },
  count: {
    marginTop: Spacing.xs,
    fontSize: FontSize.xs,
    fontWeight: "600",
    color: Colors.onPrimary,
    opacity: 0.75,
  },
});
