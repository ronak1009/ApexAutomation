import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
	const router = useRouter();
	const goBack = () => {router.back();};
	return (
		<Stack screenOptions={{
			headerStyle: {
				backgroundColor: '#0a7ea4',
			  },
			  headerTintColor: '#fff',
			  headerTitleStyle: {
				fontWeight: 'bold',
			  },	  
		}}
		>
			<Stack.Screen name="index" options={{
				headerShown: false,
			}} />
			<Stack.Screen name="customerSelection" 
			options={{
				title: "Select Project",
				//headerLeft: () => {return <Pressable onPress={goBack}><MaterialIcons name="arrow-back-ios" size={24} color="white" /></Pressable>}
			}}
			
			/>

			<Stack.Screen name="details" options={{
				headerShown:false				
			}} />

		</Stack>
	);
}
