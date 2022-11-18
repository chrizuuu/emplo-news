import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { FONT_SIZE_SMALL } from "../../styles/typography";
import styles from "./AppreciationInfo.style";
import { responsiveFont } from "../../styles/mixins";

interface NumberOfCommentsProps {
  numberOfComments: number;
  style?: ViewStyle;
}

function NumberOfComments({ numberOfComments, style }: NumberOfCommentsProps) {
  const theme = useTheme();

  return (
    <View style={[styles.wrapper, style]}>
      <MaterialIcons
        name={"comment"}
        size={responsiveFont(18)}
        color={theme.colors.primary}
        style={{ marginRight: 4 }}
      />
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: FONT_SIZE_SMALL,
        }}
      >
        {numberOfComments}
      </Text>
    </View>
  );
}

export default NumberOfComments;
