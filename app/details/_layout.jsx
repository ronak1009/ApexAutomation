import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';

export default function Details() {
	return (
		<Drawer>
			<Drawer.Screen
				name="changeCustomer"
			></Drawer.Screen>
			<Drawer.Screen
				name="Dashboard"
			></Drawer.Screen>
			<Drawer.Screen
				name="Reports"
			></Drawer.Screen>
			<Drawer.Screen
				name="Charts"
			></Drawer.Screen>
		</Drawer>
	)
}