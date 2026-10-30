import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Colors } from "@/constants/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.header },
          headerTintColor: Colors.text,
          headerTitleStyle: { fontWeight: "700" },
          headerShadowVisible: false,
          headerBackButtonDisplayMode: "minimal",
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="meals-overview/[categoryId]" />
        <Stack.Screen
          name="meal-detail/[mealId]"
          options={{ title: "About the Meal" }}
        />
      </Stack>
    </>
  );
}
