import { Text, View, Pressable, TextInput, StyleSheet } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router';
import 'react-native-gesture-handler';
import ApexButton from '../components/ApexButton';

const Separator = () => <View style={{
	marginVertical: 8,
	borderBottomColor: '#737373',
	borderBottomWidth: StyleSheet.hairlineWidth,
}} />;


const HSeparator = () => <View style={{
	marginHorizontal: 8,
	borderBottomColor: '#737373',
	borderBottomWidth: StyleSheet.hairlineWidth,
}} />;
export default function Index() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const login = () => {
		console.log("### login: ", username);

	    // clear globals
    

		// TODO: Implement login logic here
		router.replace('/customerSelection');
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
			}}
		>
			<Text style={{
				fontSize: 24,
				fontWeight: "bold",
			}}>Welcome to </Text>
			<Text style={{
				fontSize: 24,
				fontWeight: "bold",
			}}>Apex Automation</Text>
			<Separator />
			{
				<>
					<Text style={{
						marginBottom: 10,
						marginTop: 10,
					}}>Username:</Text>
					<TextInput
						onChangeText={setUsername}
						style={{
							width: 250,
							borderColor: 'grey',
							borderWidth: 1,
							padding: 10,
							marginBottom: 20,
							borderRadius: 5,
							backgroundColor: 'white',
						}}
						placeholder="Username"
					/>
				</>
			}
			{
				<>
					<Text style={{
						marginBottom: 10,
						// marginTop: 10,
					}}>Password:</Text>
					<TextInput
						onChangeText={setPassword}
						style={{
							width: 250,
							borderColor: 'grey',
							borderWidth: 1,
							padding: 10,
							marginBottom: 20,
							borderRadius: 5,
							backgroundColor: 'white',
						}}
						textContentType="password"
						placeholder="Password" />
				</>
			}
			<Separator />
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignContent: 'center',
			}}>
				<ApexButton title="Login" onPress={login} />
				<HSeparator />
				<Pressable onPress={login}><Text style={{marginTop:15}}>Forgot?</Text></Pressable>
			</View>

		</View>

	);
}
