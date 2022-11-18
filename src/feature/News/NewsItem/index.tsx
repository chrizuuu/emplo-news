import React from "react";
import { View } from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";
import NewsItemOverview from "./NewsItemOverview";
import NewsItemAppreciationBtn from "./NewsItemAppreciationBtn";
import NewsItemContent from "./NewsItemContent";
import NewsItemAppreciationInfo from "./NewsItemAppreciationInfo";

function NewsItem({ message }: { message: Message }) {
  const theme = useTheme();


  return (
    <View
      style={{
        backgroundColor: theme.colors.surface,
      }}
    >
      <NewsItemOverview
        title={message.title}
        createDate={message.createDate}
        author={message.author}
      />
      <NewsItemContent content={message.content} />
      <NewsItemAppreciationInfo
        numberOfComments={message.comments?.length}
        numberOfLikes={message.numberOfLikes}
      />

      <NewsItemAppreciationBtn
        messageId={message.id}
        isLiked={message.isLiked}
      />
    </View>
  );
}

export default React.memo(NewsItem);
