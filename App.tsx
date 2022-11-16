import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthContextProvder from "./src/context/AuthContextProvider";
import ThemeContextProvider from "./src/context/ThemeContextProvider";
import News from "./src/News";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <AuthContextProvder>
      <ThemeContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
              component={LoginScreen}
            />
            <Stack.Screen name="News" component={News} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContextProvider>
    </AuthContextProvder>
  );
}
