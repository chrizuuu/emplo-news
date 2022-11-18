import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useAuthContext } from "../context/AuthContextProvider";
import { useTheme } from "../context/ThemeContextProvider";
import { padding, responsiveSize } from "../styles/mixins";
import { SPACING_MD } from "../styles/spacing";
import { FONT_SIZE_HEADER } from "../styles/typography";
import IconButton from "./IconButton";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  displayLogoutBtn?: boolean;
  title: string;
}

function LogoutBtn() {
  const { logout } = useAuthContext();
  const theme = useTheme();
  return (
    <IconButton name="logout" onPress={logout} color={theme.colors.icon} />
  );
}

function TopBar({
  title,
  displayLogoutBtn = true,
}: {
  title: ScreenLayoutProps["title"];
  displayLogoutBtn?: ScreenLayoutProps["displayLogoutBtn"];
}) {
  const theme = useTheme();
  return (
    <View style={styles.topbarWrapper}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles.screenTitle, { color: theme.colors.text }]}
      >
        {title}
      </Text>
      {displayLogoutBtn && <LogoutBtn />}
    </View>
  );
}

function ScreenLayout({
  children,
  displayLogoutBtn,
  title,
}: ScreenLayoutProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.screenWrapper,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <TopBar title={title} displayLogoutBtn={displayLogoutBtn} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight || 0) + responsiveSize(20)
        : responsiveSize(20),
  },
  topbarWrapper: {
    flexDirection: "row",
    height: responsiveSize(60),
    alignItems: "center",
    ...padding(0, SPACING_MD),
  },
  screenTitle: {
    fontSize: FONT_SIZE_HEADER,
    fontWeight: "bold",
    flex: 1,
  },
});

export default ScreenLayout;
