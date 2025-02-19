import { Tabs } from "expo-router";
import { StyleProp, TextStyle } from "react-native";

const tabBarIconStyle = { display: 'none' } as StyleProp<TextStyle>

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" options={{ title: 'home', tabBarIconStyle }} />
      <Tabs.Screen name="(profile)" options={{ title: 'Profile', tabBarIconStyle }} />
    </Tabs>
  )
}