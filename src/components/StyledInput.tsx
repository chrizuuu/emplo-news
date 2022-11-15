import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { useTheme } from "../context/ThemeContextProvider";
import { BORDER_ROUNDED } from "../styles/border";
import { padding, responsiveSize } from "../styles/mixins";
import { SPACING_SM } from "../styles/spacing";
import { FONT_SIZE_STANDARD } from "../styles/typography";

function StyledInput(props: TextInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const theme = useTheme();
  const { style, ...otherProps } = props;

  return (
    <TextInput
      onBlur={() => setIsFocus(false)}
      onFocus={() => setIsFocus(true)}
      style={[
        styles.input,
        {
          color: theme.colors.text,
          borderColor: isFocus ? theme.colors.text : theme.colors.border,
          backgroundColor: isFocus
            ? theme.colors.transparent
            : theme.colors.border,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: FONT_SIZE_STANDARD,
    borderWidth: 2,
    borderRadius: BORDER_ROUNDED,
    ...padding(0, SPACING_SM),
    height: responsiveSize(42),
  },
});

export default StyledInput;
