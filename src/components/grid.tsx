import { ReactElement } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Layout, Spacing } from "@/constants/theme";

type GridProps<T> = {
  data: readonly T[];
  columns: number;
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactElement;
  header?: ReactElement;
  emptyState?: ReactElement;
};

export function Grid<T>({
  data,
  columns,
  keyExtractor,
  renderItem,
  header,
  emptyState,
}: GridProps<T>) {
  const itemWidth = `${100 / columns}%` as const;

  return (
    <FlatList
      key={`grid-${columns}`}
      data={data}
      numColumns={columns}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <View style={[styles.cell, { width: itemWidth }]}>
          {renderItem(item)}
        </View>
      )}
      ListHeaderComponent={header}
      ListHeaderComponentStyle={styles.header}
      ListEmptyComponent={emptyState}
      contentContainerStyle={styles.content}
    />
  );
}

const CELL_GAP = Spacing.lg;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    width: "100%",
    maxWidth: Layout.maxContentWidth,
    alignSelf: "center",
    paddingHorizontal: Layout.gutter - CELL_GAP / 2,
    paddingVertical: Layout.gutter - CELL_GAP / 2,
  },
  header: {
    paddingHorizontal: CELL_GAP / 2,
  },
  cell: {
    padding: CELL_GAP / 2,
  },
});
