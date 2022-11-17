import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import AuthContextProvder from "./src/context/AuthContextProvider";
import ThemeContextProvider from "./src/context/ThemeContextProvider";
import Navigation from "./src/Navigation";

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
