import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import AuthContextProvder, {
  useAuthContext,
} from "./src/context/AuthContextProvider";
import ThemeContextProvider from "./src/context/ThemeContextProvider";
import LoginScreen from "./src/screens/LoginScreen";
import NewsScreen from "./src/screens/NewsScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { isToken, isInitializing } = useAuthContext();

  if (isInitializing) {
    return <Text>Loading</Text>;
  }

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {isToken ? (
        <>
          <Stack.Screen name="News" component={NewsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
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
