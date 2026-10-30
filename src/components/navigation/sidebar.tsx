import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavMenu } from "@/components/navigation/nav-menu";
import { Colors, Layout } from "@/constants/theme";

export function Sidebar() {
  return (
    <SafeAreaView edges={["top", "bottom", "left"]} style={styles.sidebar}>
      <ScrollView>
        <NavMenu />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: Layout.sidebarWidth,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
    backgroundColor: Colors.header,
  },
});
