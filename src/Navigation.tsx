import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useAuthContext } from "./context/AuthContextProvider";
import LoginScreen from "./screens/LoginScreen";
import NewsScreen from "./screens/NewsScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { isToken, isInitializing } = useAuthContext();

  if (isInitializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
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

export default Navigation;
