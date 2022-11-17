import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";
import { BORDER_ROUNDED } from "../../../styles/border";
import {
  padding,
  responsiveFont,
  responsiveSize,
} from "../../../styles/mixins";
import { SPACING_MD } from "../../../styles/spacing";
import { FONT_SIZE_SMALL } from "../../../styles/typography";
import RenderHtml from "react-native-render-html";

import NewsItemOverview from "./NewsItemOverview";
import NewsItemAppreciation from "./NewsItemAppreciation";

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
        },
      ]}
    >
      <NewsItemOverview
        title={message.title}
        createDate={message.createDate}
        author={message.author}
      />

      <NewsItemAppreciation
        messageId={message.id}
        isLiked={message.isLiked}
        numberOfLikes={message.numberOfLikes}
        commentsLen={message.comments?.length}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_ROUNDED,
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
