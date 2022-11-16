import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import { useAuthContext } from "../../context/AuthContextProvider";
import { padding, responsiveSize } from "../../styles/mixins";
import { SPACING_SM } from "../../styles/spacing";
import IconButton from "../IconButton";

function LogoutBtn() {
  const { logout } = useAuthContext();
  return <IconButton name="logout" onPress={logout} />;
}

function ToggleDrawerMenuBtn() {
  const fakeDrawerMenu = () =>
    Alert.alert("DrawerMenu", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return <IconButton name="menu" onPress={fakeDrawerMenu} />;
}

function TopBar() {
  return (
    <View style={styles.wrapper}>
      <ToggleDrawerMenuBtn />
      <LogoutBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...padding(0, SPACING_SM),
    height: responsiveSize(60),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TopBar;
