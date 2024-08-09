import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack screenOptions={{
			headerShown: false,
			title: "ApexAutomation"
		}}>
			<Stack.Screen name="index" options={{
				headerShown: false,
			}} />
			<Stack.Screen name="customerSelection" options={{
				title: "Select Customer & Project"
			}} />
			<Stack.Screen name="(tabs)"></Stack.Screen>
		</Stack>
	);
}
