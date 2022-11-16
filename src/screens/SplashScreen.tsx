import React from "react";
import { Text, SafeAreaView } from "react-native";
import { useTheme } from "../context/ThemeContextProvider";
import { FONT_SIZE_HEADER } from "../styles/typography";

function SplashScreen() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <Text
        style={{
          fontSize: FONT_SIZE_HEADER,
          fontWeight: "bold",
          color: theme.colors.text,
        }}
      >
        Loading
      </Text>
    </SafeAreaView>
  );
}

export default SplashScreen;
