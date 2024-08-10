import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function dashboard() {
	const selectedCustomer = global.selectedCustomer;
	console.log(selectedCustomer);
	return (
		<View>
			<Text> Dashboard </Text>
			<Text> {selectedCustomer.city} </Text>
		</View>
	)
}

