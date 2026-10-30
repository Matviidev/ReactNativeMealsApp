import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { headerOptions } from "@/constants/navigation";
import { Colors } from "@/constants/theme";
import { store } from "@/store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          ...headerOptions,
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
    </Provider>
  );
}
