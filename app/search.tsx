import React from "react"
import { Text, View } from "react-native"
import { Link } from "expo-router"

export default function Search() {
  return (
    <View>
      <Text>Search</Text>
      <Link href="/user">User</Link>
    </View>
  )
}