import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useAuthContext } from "./context/AuthContextProvider";
import { useTheme } from "./context/ThemeContextProvider";
import LoginScreen from "./screens/LoginScreen";
import NewsScreen from "./screens/NewsScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { isToken, isInitializing } = useAuthContext();
  const theme = useTheme();

  if (isInitializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: theme.colors.onSecondary,
        },
      }}
    >
      {isToken ? (
        <>
          <Stack.Screen
            name="News"
            component={NewsScreen}
            options={{
              headerTitle: "Wiadomości",
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Navigation;
