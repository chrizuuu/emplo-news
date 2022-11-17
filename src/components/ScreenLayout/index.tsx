import { useTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";

interface ScreenLayoutProps {
  children?: React.ReactNode;
}

function ScreenLayout({ children }: ScreenLayoutProps) {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {children}
    </SafeAreaView>
  );
}

export default ScreenLayout;
