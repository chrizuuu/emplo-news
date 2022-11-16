import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import AuthContextProvder, {
  useAuthContext,
} from "./src/context/AuthContextProvider";
import ThemeContextProvider from "./src/context/ThemeContextProvider";
import News from "./src/News";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { isToken, isInitializing } = useAuthContext();

  if (isInitializing) {
    return <Text>Loading</Text>;
  }

  return (
    <Stack.Navigator initialRouteName="Login">
      {isToken ? (
        <>
          <Stack.Screen name="News" component={News} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={LoginScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function Root() {
  return (
    <AuthContextProvder>
      <ThemeContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeContextProvider>
    </AuthContextProvder>
  );
}
