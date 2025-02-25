import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Notifications() {
  return (
    <View>
      <Text>Group Route</Text>
      <Button title="Go to Home" onPress={() => router.navigate("/(tabs)/(home)")} />
    </View>
  )
}