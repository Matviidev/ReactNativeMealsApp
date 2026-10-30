import { Drawer } from "expo-router/drawer";
import { SymbolView } from "expo-symbols";

import { Colors } from "@/constants/theme";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: Colors.header },
        headerTintColor: Colors.text,
        headerTitleStyle: { fontWeight: "700" },
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: Colors.background },
        drawerStyle: { backgroundColor: Colors.header },
        drawerLabelStyle: { fontWeight: "600" },
        drawerInactiveTintColor: Colors.text,
        drawerActiveTintColor: Colors.onPrimary,
        drawerActiveBackgroundColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "All Categories",
          drawerLabel: "Categories",
          drawerIcon: ({ color, size }) => (
            <SymbolView
              name={{
                ios: "square.grid.2x2",
                android: "grid_view",
                web: "grid_view",
              }}
              tintColor={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <SymbolView
              name={{ ios: "star.fill", android: "star", web: "star" }}
              tintColor={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer>
  );
}
