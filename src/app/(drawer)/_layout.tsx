import { Drawer } from "expo-router/drawer";

import { DrawerContent } from "@/components/navigation/drawer-content";
import { headerOptions } from "@/constants/navigation";
import { Colors, Layout } from "@/constants/theme";
import { useLayout } from "@/hooks/use-layout";

export default function DrawerLayout() {
  const { isDesktop } = useLayout();

  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        ...headerOptions,
        headerLeft: isDesktop ? () => null : undefined,
        swipeEnabled: !isDesktop,
        sceneStyle: { backgroundColor: Colors.background },
        drawerStyle: [
          { width: Layout.sidebarWidth, backgroundColor: Colors.header },
          isDesktop && { display: "none" },
        ],
      }}
    >
      <Drawer.Screen name="index" options={{ title: "All Categories" }} />
      <Drawer.Screen name="favorites" options={{ title: "Favorites" }} />
    </Drawer>
  );
}
