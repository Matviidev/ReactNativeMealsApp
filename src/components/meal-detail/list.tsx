import { StyleSheet, Text, View } from "react-native";

import { Colors, Fonts, FontSize, Spacing } from "@/constants/theme";

type ListProps = {
  items: string[];
  ordered?: boolean;
};

export function List({ items, ordered = false }: ListProps) {
  return (
    <View>
      {items.map((item, index) => (
        <View
          key={`${index}-${item}`}
          style={[
            styles.listItem,
            ordered ? styles.orderedItem : styles.unorderedItem,
            index > 0 && styles.divider,
          ]}
        >
          {ordered ? (
            <View style={styles.step}>
              <Text style={styles.stepText}>{index + 1}</Text>
            </View>
          ) : (
            <View style={styles.dot} />
          )}
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const STEP_SIZE = 28;
const DOT_SIZE = 6;
const LINE_HEIGHT = 24;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Spacing.md,
  },
  unorderedItem: {
    paddingVertical: Spacing.md,
  },
  orderedItem: {
    paddingVertical: Spacing.lg,
  },
  divider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.borderStrong,
  },
  step: {
    width: STEP_SIZE,
    height: STEP_SIZE,
    borderRadius: STEP_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryMuted,
  },
  stepText: {
    fontFamily: Fonts.bold,
    fontSize: FontSize.sm,
    color: Colors.primary,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    marginTop: (LINE_HEIGHT - DOT_SIZE) / 2,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: Colors.primary,
  },
  itemText: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: FontSize.md,
    lineHeight: LINE_HEIGHT,
    color: Colors.text,
  },
});
