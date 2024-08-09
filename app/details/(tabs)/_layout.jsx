import { Tabs, Tab } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Drawer } from 'expo-router/drawer';

export default function TabsLayout() {
	return (
		<Tabs options={{

		}}>
			<Tabs.Screen name="dashboard" options={{
				tabBarLabel: 'Dashboard',
				tabBarIcon: ({ color }) => <FontAwesome size={20} name="dashboard" color={color} />,
			}}
			/>
			<Tabs.Screen name="reports"
				options={{
					tabBarLabel: 'Reports',
					tabBarIcon: ({ color }) => <FontAwesome size={20} name="list-alt" color={color} />,
				}}
			/>
			<Tabs.Screen name="charts"
			options={{
				tabBarLabel: 'Charts',
				tabBarIcon: ({ color }) => <FontAwesome size={20} name="area-chart" color={color} />,
			}} />
		</Tabs>
	);
}
