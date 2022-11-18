import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { padding, responsiveSize } from "../../../styles/mixins";
import { SPACING_MD, SPACING_SM } from "../../../styles/spacing";
import { useTheme } from "../../../context/ThemeContextProvider";
import LikedButton from "../../../components/AppreciationButton/LikedButton";
import CommentButton from "../../../components/AppreciationButton/CommentButton";

interface NewsItemAppreciationProps {
  numberOfLikes: Message["numberOfLikes"];
  numberOfComments: number;
  style?: ViewStyle;
}

function NewsItemAppreciation({
  numberOfLikes,
  numberOfComments,
  style,
}: NewsItemAppreciationProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.wrapper,
        style,
        { borderTopColor: theme.colors.background },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderTopWidth: SPACING_SM,
    ...padding(SPACING_MD),
  },
});

export default NewsItemAppreciation;
