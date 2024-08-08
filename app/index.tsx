import { Text, View, Button, TextInput } from "react-native";
import {useState} from 'react';
import {router } from 'expo-router';

export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login =  ()  =>{
    console.log("### login: ", username);
    
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
        marginBottom: 20,
      }}>Apex Automation</Text>
      {
        <>
        <TextInput
        onChangeText={setUsername}
        style={{
        width: 200,
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
        <TextInput 
        onChangeText={setPassword}
        style={{
        width: 200,
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
      

      {<Button
      title="Login" onPress={login} /> }
    </View>

  );
}
