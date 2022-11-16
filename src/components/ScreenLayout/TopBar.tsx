import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { responsiveSize } from "../../styles/mixins";

function TopBar() {
  return <View style={styles.wrapper}></View>;
}

const styles = StyleSheet.create({
  wrapper: {
    height: responsiveSize(60),
    justifyContent: "center",
  },
});

export default TopBar;
