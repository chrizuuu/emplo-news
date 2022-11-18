import React from "react";
import { View, useWindowDimensions } from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";
import { padding } from "../../../styles/mixins";
import { SPACING_MD } from "../../../styles/spacing";
import RenderHtml from "react-native-render-html";
import { FONT_SIZE_SMALL } from "../../../styles/typography";

function NewsItemContent({ content }: { content: Message["content"] }) {
  const theme = useTheme();
  const regEx = /<p>\s*<\/p>/gi;
  const source = content.replace(regEx, "");

  return (
    <View
      style={{
        ...padding(SPACING_MD),
      }}
    >
      <RenderHtml
        source={{ html: `<span>${source}</span>` }}
        contentWidth={useWindowDimensions().width}
        ignoredDomTags={["iframe"]}
        baseStyle={{
          fontSize: FONT_SIZE_SMALL,
        }}
        tagsStyles={{
          span: {
            color: theme.colors.text,
          },
          a: {
            color: theme.colors.secondary,
            textDecorationLine: "none",
          },
        }}
      />
    </View>
  );
}

export default NewsItemContent;
