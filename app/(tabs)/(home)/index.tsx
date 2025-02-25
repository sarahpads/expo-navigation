import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Explore() {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Shared Route" onPress={() => router.navigate('/shared')} />
      <Button title="Go to Group Route" onPress={() => router.navigate('/group')} />
    </View>
  )
}