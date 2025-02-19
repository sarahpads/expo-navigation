import { Link, Stack } from "expo-router";

const header = () => (
  <Link href="/(tabs)/(explore)" style={{ color: 'red' }}>Explore</Link>
)

export default function GroupLayout() {
  return (
    <Stack screenOptions={{
      header
    }} />
  )
}