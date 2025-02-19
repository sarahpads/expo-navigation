import { Stack } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export const unstable_settings = {
  home: {
    initialRouteName: "home",
  },
  search: {
    initialRouteName: "search",
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView>

      {/* <Stack>
        <Stack.Screen name="home" />
        <Stack.Screen name="search" />
      </Stack> */}
      <Drawer>
        <Drawer.Screen name="home" />
        <Drawer.Screen name="search" />
      </Drawer>
    </GestureHandlerRootView>
  )
}