import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { responsiveSize } from "../../styles/mixins";
import { FONT_SIZE_HEADER } from "../../styles/typography";

function ScreenTitle({ title }: { title: string }) {
  return (
    <View style={styles.titleWrapper}>
      <Text
        style={{
          fontSize: FONT_SIZE_HEADER,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    minHeight: responsiveSize(60),
    justifyContent: "center",
  },
});

export default ScreenTitle;
