import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { padding } from "../../../styles/mixins";
import { SPACING_MD, SPACING_SM } from "../../../styles/spacing";
import { useTheme } from "../../../context/ThemeContextProvider";
import LikedButton from "../../../components/AppreciationButton/LikedButton";
import CommentButton from "../../../components/AppreciationButton/CommentButton";

interface NewsItemAppreciationProps {
  isLiked: Message["isLiked"];
  style?: ViewStyle;
  messageId: Message["id"];
}

function NewsItemAppreciationBtn({
  messageId,
  isLiked,
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
    >
      <LikedButton
        isLiked={isLiked}
        onPress={() => console.log("service likes,", messageId)}
      />
      <CommentButton onPress={() => console.log()} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderTopWidth: SPACING_SM,
    ...padding(SPACING_MD),
  },
});

export default NewsItemAppreciationBtn;
