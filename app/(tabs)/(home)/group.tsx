import { router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Notifications() {
  return (
    <View>
      <Text>Group Route</Text>
      <Button title="Go to Home" onPress={() => router.navigate("/(tabs)/(home)")} />

      <TouchableOpacity>
        <Text>Tapping on me will eventually cause an exception</Text>
      </TouchableOpacity>
    </View>
  )
}