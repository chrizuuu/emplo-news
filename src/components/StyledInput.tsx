import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { useTheme } from "../context/ThemeContextProvider";
import { padding, responsiveSize } from "../styles/mixins";

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
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 4,
    ...padding(0, responsiveSize(8)),
    height: responsiveSize(42),
  },
});

export default StyledInput;
