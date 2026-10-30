import { StyleSheet, Text, View } from "react-native";

import { Colors, FontSize, Radius, Spacing } from "@/constants/theme";

type ListProps = {
  items: string[];
  ordered?: boolean;
};

export function List({ items, ordered = false }: ListProps) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={`${index}-${item}`} style={styles.listItem}>
          <View style={styles.marker}>
            {ordered ? (
              <Text style={styles.markerText}>{index + 1}</Text>
            ) : (
              <View style={styles.dot} />
            )}
          </View>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const MARKER_SIZE = 24;
const DOT_SIZE = 6;

const styles = StyleSheet.create({
  list: {
    gap: Spacing.sm,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Spacing.md,
    padding: Spacing.md,
    borderRadius: Radius.md,
    backgroundColor: Colors.surface,
  },
  marker: {
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    borderRadius: MARKER_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  markerText: {
    fontSize: FontSize.xs,
    fontWeight: "700",
    color: Colors.onPrimary,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: Colors.onPrimary,
  },
  itemText: {
    flex: 1,
    fontSize: FontSize.sm,
    lineHeight: 22,
    color: Colors.text,
  },
});
