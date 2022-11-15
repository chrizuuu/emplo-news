import React from "react";
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from "react-native";
import { useTheme } from "../context/ThemeContextProvider";
import { padding, responsiveFont, responsiveSize } from "../styles/mixins";

function SubmitBtn({
  onPress,
  submitText,
  style,
}: {
  onPress: () => void;
  submitText: string;
  style?: ViewStyle;
}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style, { backgroundColor: theme.colors.btnBg }]}
      onPress={onPress}
    >
      <Text
        numberOfLines={1}
        style={[styles.textStyle, { color: theme.colors.btnText }]}
      >
        {submitText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: responsiveSize(42),
    ...padding(0, 8),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  textStyle: {
    fontSize: responsiveFont(16),
    fontWeight: "600",
  },
});

export default SubmitBtn;
