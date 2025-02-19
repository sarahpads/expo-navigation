import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Explore() {
  return (
    <View>
      <Text>Explore</Text>
      <Link href="notifications">Notifications</Link>
    </View>
  )
}