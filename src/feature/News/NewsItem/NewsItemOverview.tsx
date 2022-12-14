import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";
import {
  padding,
  responsiveFont,
  responsiveSize,
} from "../../../styles/mixins";
import { SPACING_MD, SPACING_XL } from "../../../styles/spacing";
import { FONT_SIZE_SMALL } from "../../../styles/typography";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

function NewsItemAuthor({ author }: { author: Message["author"] }) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log("GO TO AUTHOR", author.fullName, author.id)}
      style={{ marginRight: responsiveSize(10) }}
    >
      <Text
        style={{
          color: theme.colors.text,
          fontSize: FONT_SIZE_SMALL,
          fontWeight: "700",
        }}
      >
        {author.fullName}
      </Text>
    </TouchableOpacity>
  );
}

function NewsItemCreateDate({ date }: { date: Message["createDate"] }) {
  const theme = useTheme();
  const createDate = new Date(date);
  const displayedDate = format(createDate, "dd MMM yyy p", { locale: pl });

  return (
    <Text
      style={{
        color: theme.colors.text,
        fontSize: FONT_SIZE_SMALL,
      }}
    >
      {displayedDate}
    </Text>
  );
}

function NewsItemOverview({
  title,
  createDate,
  author,
}: {
  title: Message["title"];
  createDate: Message["createDate"];
  author: Message["author"];
}) {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      {title ? (
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          {title}
        </Text>
      ) : null}
      <View style={styles.detailsWrapper}>
        <NewsItemAuthor author={author} />
        <NewsItemCreateDate date={createDate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...padding(SPACING_XL, SPACING_MD, 0, SPACING_MD),
  },
  title: {
    fontSize: responsiveFont(20),
    fontWeight: "bold",
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NewsItemOverview;
