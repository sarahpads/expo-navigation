import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Notifications() {
  const [toggle, setToggle] = useState(false)

  return (
    <View>
      <Text>Shared Route</Text>
      <Button title="Go to Home" onPress={() => router.navigate("/(tabs)/(home)")} />

      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Text>Tapping on me will eventually cause an exception</Text>
      </TouchableOpacity>

      {toggle && <Text>Toggle is on</Text>}
    </View>
  )
}