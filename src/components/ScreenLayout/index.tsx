import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { padding, responsiveSize } from "../../styles/mixins";
import { SPACING_MD, SPACING_XL } from "../../styles/spacing";
import ScreenTitle from "./ScreenTitle";
import TopBar from "./TopBar";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  title?: string;
  headerRightComp?: React.ReactNode;
  displatTopBar?: boolean;
}

function ScreenLayout({
  children,
  title,
  headerRightComp,
  displatTopBar = false,
}: ScreenLayoutProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.colors.background }]}
    >
      {displatTopBar && <TopBar />}
      {title && (
        <View
          style={[
            styles.titleContainer,
            { paddingTop: displatTopBar ? 0 : responsiveSize(40) },
          ]}
        >
          <ScreenTitle title={title} />
        </View>
      )}
      <View style={[styles.contentContainer]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    ...padding(0, SPACING_MD),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    paddingTop: SPACING_XL,
  },
});

export default ScreenLayout;
