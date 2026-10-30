import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter/800ExtraBold";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { Sidebar } from "@/components/navigation/sidebar";
import { headerOptions } from "@/constants/navigation";
import { Colors } from "@/constants/theme";
import { useLayout } from "@/hooks/use-layout";
import { store } from "@/store/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  const { isDesktop } = useLayout();
  const isReady = fontsLoaded || fontError !== null || Platform.OS === "web";

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <View style={styles.shell}>
        {isDesktop ? <Sidebar /> : null}
        <View style={styles.main}>
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
              options={{ title: "Recipe" }}
            />
          </Stack>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.background,
  },
  main: {
    flex: 1,
  },
});
