import React from "react"
import { Text, View } from "react-native"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/user">User</Link>
    </View>
  )
}