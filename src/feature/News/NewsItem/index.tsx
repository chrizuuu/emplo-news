import React from "react";
import { View, useWindowDimensions } from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";
import { padding } from "../../../styles/mixins";
import { SPACING_MD } from "../../../styles/spacing";
import { FONT_SIZE_STANDARD } from "../../../styles/typography";
import RenderHtml from "react-native-render-html";
import NewsItemOverview from "./NewsItemOverview";
import NewsItemAppreciation from "./NewsItemAppreciation";
import { BORDER_ROUNDED } from "../../../styles/border";

function NewsContent({ content }: { content: Message["content"] }) {
  const regEx = /<p>\s*<\/p>/gi;
  const source = content.replace(regEx, "");

  return (
    <View style={{ ...padding(SPACING_MD) }}>
      <RenderHtml
        source={{ html: source }}
        contentWidth={useWindowDimensions().width}
        baseStyle={{
          fontSize: FONT_SIZE_STANDARD,
        }}
      />
    </View>
  );
}

function NewsItem({ message }: { message: Message }) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: BORDER_ROUNDED,
      }}
    >
      <NewsItemOverview
        title={message.title}
        createDate={message.createDate}
        author={message.author}
      />
      <NewsContent content={message.content} />

      <NewsItemAppreciation
        messageId={message.id}
        isLiked={message.isLiked}
        numberOfLikes={message.numberOfLikes}
        commentsLen={message.comments?.length}
      />
    </View>
  );
}

export default NewsItem;
