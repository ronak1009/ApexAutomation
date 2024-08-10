import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import Colors from '../../constants/Colors';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContents from '../../components/CustomDrawerContents';

export default function Details() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={CustomDrawerContents}
				options={{
					headerShown: false,
					drawerStyle: {},
					headerShownStyle: {
						background: "#0a7ea4",
					},
					headerTintColor: Colors.light.backgroundColor,
				}}
				screenOptions={{
					headerBackgroundColor: "#0a7ea4",
					drawerActiveBackgroundColor: "#0a7ea4",
					drawerActiveTintColor: "white",
					drawerLabelStyle: {
						margin: -10
					}
				}}
			>
				<Drawer.Screen
					name="dashboard"
					options={{
						drawerLabel: 'Dashboard',
						title: "Dashboard",
						drawerIcon: ({size, color}) => { return <SimpleLineIcons name="grid" size={size} color={color} /> },

					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="charts"
					options={{
						drawerLabel: 'Charts',
						title: "Charts",
						drawerIcon: ({size, color}) => { return <SimpleLineIcons name="chart" size={size} color={color} /> }

					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="reports"
					options={{
						drawerLabel: 'Reports',
						title: "Reports",
						drawerIcon: ({size, color}) => { return <SimpleLineIcons name="book-open" size={size} color={color} /> }

					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="changeCustomer"
					options={{
						drawerLabel: 'Select Project',
						title: "Project",
						drawerIcon: ({size, color}) => { return <SimpleLineIcons name="settings" size={size} color={color} /> }
					}}
					screenOptions={{

					}}
				></Drawer.Screen>
			</Drawer>
		</GestureHandlerRootView>
	)
}