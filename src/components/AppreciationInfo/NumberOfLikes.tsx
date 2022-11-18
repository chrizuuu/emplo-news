import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { FONT_SIZE_SMALL } from "../../styles/typography";
import styles from "./AppreciationInfo.style";
import { responsiveFont } from "../../styles/mixins";

interface NumberOfCommentsProps {
  numberOfLikes: Message["numberOfLikes"];
  style?: ViewStyle;
}

function NumberOfLikes({ numberOfLikes, style }: NumberOfCommentsProps) {
  const theme = useTheme();

  return (
    <View style={[styles.wrapper, style]}>
      <MaterialIcons
        name={"thumb-up-alt"}
        size={responsiveFont(18)}
        color={theme.colors.secondary}
        style={{ marginRight: 4 }}
      />
      <Text
        style={{
          color: theme.colors.secondary,
          fontSize: FONT_SIZE_SMALL,
        }}
      >
        {numberOfLikes}
      </Text>
    </View>
  );
}

export default NumberOfLikes;
