import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { padding, responsiveSize } from "../../../styles/mixins";
import { SPACING_MD } from "../../../styles/spacing";
import IconButton, { IconButtonProps } from "../../../components/IconButton";

function AppreciationItem({
  iconName,
  onPress,
  text,
  style,
}: {
  iconName: IconButtonProps["name"];
  onPress: () => void;
  text: string | number;
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity
      style={[styles.appreciationBtn, style]}
      activeOpacity={0.6}
    >
      <IconButton onPress={onPress} name={iconName} />
      <Text> {text}</Text>
    </TouchableOpacity>
  );
}

function NewsItemCommentBtn({
  commnetsLen,
  style,
}: {
  commnetsLen: number;
  style?: ViewStyle;
}) {
  return (
    <AppreciationItem
      iconName="comment"
      text={commnetsLen}
      onPress={() => console.log()}
      style={style}
    />
  );
}

function NewsItemLikeBtn({
  messageId,
  isLiked,
  numberOfLikes,
  style,
}: {
  messageId: Message["id"];
  isLiked: Message["isLiked"];
  numberOfLikes: Message["numberOfLikes"];
  style?: ViewStyle;
}) {
  return (
    <AppreciationItem
      iconName={isLiked ? "thumb-up-alt" : "thumb-up-off-alt"}
      text={numberOfLikes}
      onPress={() => console.log("service likes,", messageId)}
      style={style}
    />
  );
}

interface NewsItemAppreciationProps {
  isLiked: Message["isLiked"];
  numberOfLikes: Message["numberOfLikes"];
  commentsLen: number;
  style?: ViewStyle;
  messageId: Message["id"];
}

function NewsItemAppreciation({
  messageId,
  isLiked,
  numberOfLikes,
  commentsLen,
  style,
}: NewsItemAppreciationProps) {
  return (
    <View style={[styles.wrapper, style]}>
      <NewsItemLikeBtn
        messageId={messageId}
        isLiked={isLiked}
        numberOfLikes={numberOfLikes}
        style={{ marginRight: responsiveSize(4) }}
      />
      <NewsItemCommentBtn commnetsLen={commentsLen} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    ...padding(SPACING_MD),
  },
  appreciationBtn: {
    height: responsiveSize(48),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default NewsItemAppreciation;
