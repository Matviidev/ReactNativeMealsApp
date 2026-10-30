import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "expo-router/drawer";

import { NavMenu } from "@/components/navigation/nav-menu";

export function DrawerContent({ navigation }: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <NavMenu onNavigate={() => navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
}
