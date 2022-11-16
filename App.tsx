import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import AuthContextProvder, {
  useAuthContext,
} from "./src/context/AuthContextProvider";
import ThemeContextProvider from "./src/context/ThemeContextProvider";
import LoginScreen from "./src/screens/LoginScreen";
import NewsScreen from "./src/screens/NewsScreen";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { isToken, isInitializing } = useAuthContext();

  if (isInitializing) {
    return <SplashScreen />;
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

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvder>
        <ThemeContextProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </ThemeContextProvider>
      </AuthContextProvder>
    </QueryClientProvider>
  );
}
