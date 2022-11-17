import React from "react";
import { View } from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";

import NewsItemOverview from "./NewsItemOverview";
import NewsItemAppreciation from "./NewsItemAppreciation";
import { BORDER_ROUNDED } from "../../../styles/border";
import NewsItemContent from "./NewsItemContent";

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
      <NewsItemContent content={message.content} />

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
