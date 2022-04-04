// In App.js in a new project


import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
// import './App.css';
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />

                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Running tests</Text>
      <StatusBar style="auto" />
    </View>
  );

}

export default App;
