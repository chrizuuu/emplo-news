import React from "react";
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from "react-native";
import { useTheme } from "../context/ThemeContextProvider";
import { BORDER_ROUNDED } from "../styles/border";
import { padding, responsiveFont, responsiveSize } from "../styles/mixins";
import { SPACING_SM } from "../styles/spacing";
import { FONT_SIZE_STANDARD } from "../styles/typography";

function SubmitBtn({
  onPress,
  submitText,
  style,
  disabled,
}: {
  onPress: () => void;
  submitText: string;
  style?: ViewStyle;
  disabled?: boolean;
}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.button,
        style,
        { backgroundColor: theme.colors.btnBg, opacity: disabled ? 0.6 : 1 },
      ]}
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
    ...padding(0, SPACING_SM),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDER_ROUNDED,
  },
  textStyle: {
    fontSize: FONT_SIZE_STANDARD,
    fontWeight: "600",
  },
});

export default SubmitBtn;
