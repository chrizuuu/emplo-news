import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import { BORDER_ROUNDED } from "../../styles/border";
import { padding, responsiveFont, responsiveSize } from "../../styles/mixins";
import { SPACING_MD, SPACING_XL } from "../../styles/spacing";
import {
  FONT_SIZE_HEADER,
  FONT_SIZE_SMALL,
  FONT_SIZE_STANDARD,
} from "../../styles/typography";
import RenderHtml from "react-native-render-html";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import IconButton from "../../components/IconButton";
import NewsItemOverview from "./NewsItem/NewsItemOverview";

function NewsItemLikeBtn({
  isLiked,
  numberOfLikes,
  style,
}: {
  isLiked: Message["isLiked"];
  numberOfLikes: Message["numberOfLikes"];
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity
      style={[styles.appreciationBtn, style]}
      activeOpacity={0.6}
    >
      <IconButton
        onPress={() => console.log()}
        name={isLiked ? "thumb-up-alt" : "thumb-up-off-alt"}
      />
      <Text> 10 polubień</Text>
    </TouchableOpacity>
  );
}

function NewsItemCommentBtn({ commnetsLen }: { commnetsLen: number }) {
  return (
    <TouchableOpacity style={styles.appreciationBtn} activeOpacity={0.6}>
      <IconButton onPress={() => console.log()} name="comment" />
      <Text> {`${commnetsLen} komentarzy`}</Text>
    </TouchableOpacity>
  );
}

function NewsContent({ content }: { content: Message["content"] }) {
  return (
    <RenderHtml
      source={{ html: content }}
      contentWidth={useWindowDimensions().width}
    />
  );
}

function NewsItem({ message }: { message: Message }) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <NewsItemOverview
        title={message.title}
        createDate={message.createDate}
        author={message.author}
      />

      <View
        style={{
          flexDirection: "row",
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
        }}
      >
        <NewsItemLikeBtn
          isLiked={message.isLiked}
          numberOfLikes={message.numberOfLikes}
          style={{ borderRightColor: theme.colors.border, borderRightWidth: 1 }}
        />
        <NewsItemCommentBtn commnetsLen={message.comments?.length} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_ROUNDED,
    borderWidth: 1,
  },
  title: {
    fontSize: responsiveFont(20),
    fontWeight: "bold",
    ...padding(SPACING_MD),
  },
  overview: {
    flexDirection: "row",
    opacity: 0.6,
    ...padding(SPACING_MD),
  },

  details: {
    fontSize: FONT_SIZE_SMALL,
  },
  appreciationBtn: {
    height: responsiveSize(48),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default NewsItem;
