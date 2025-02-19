import { Link } from "expo-router";
import { Text, View } from "react-native";

// NOTE: explore and profile need to be in their own route groups, otherwise navigating to 'notifications' will always take you to /explore/notifications

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Link href="/notifications">Notifications</Link>
    </View>
  )
}