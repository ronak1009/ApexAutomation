import { Text, View, Button, TextInput } from "react-native";

export default function Index() {
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
        <TextInput style={{
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
        <TextInput style={{
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
      title="Login" onPress={() => navigation.navigate('Login')} /> }
    </View>
  );
}
