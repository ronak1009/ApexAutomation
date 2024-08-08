import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      //headerShown: false,
      title: "ApexAutomation"
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="customerSelection" />
    </Stack>
  );
}
