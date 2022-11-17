import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../../context/ThemeContextProvider";
import {
  padding,
  responsiveFont,
  responsiveSize,
} from "../../../styles/mixins";
import { SPACING_MD } from "../../../styles/spacing";
import { FONT_SIZE_SMALL } from "../../../styles/typography";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

function NewsItemAuthor({ author }: { author: Message["author"] }) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log("GO TO AUTHOR", author.fullName, author.id)}
    >
      <Text style={[styles.detailText, { color: theme.colors.text }]}>
        {author.fullName}
      </Text>
    </TouchableOpacity>
  );
}

function NewsItemCreateDate({
  date,
  style,
}: {
  date: Message["createDate"];
  style?: ViewStyle;
}) {
  const theme = useTheme();
  const createDate = new Date(date);
  const displayedDate = format(createDate, "dd MMM yyy", { locale: pl });

  return (
    <Text style={[styles.detailText, style, { color: theme.colors.text }]}>
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
      <View style={styles.detailsWrapper}>
        <NewsItemCreateDate
          date={createDate}
          style={{ marginRight: responsiveSize(10) }}
        />
        <NewsItemAuthor author={author} />
      </View>
      {title ? (
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...padding(0, SPACING_MD),
  },
  title: {
    fontSize: responsiveFont(20),
    fontWeight: "bold",
    ...padding(SPACING_MD, 0),
  },
  detailText: {
    fontSize: FONT_SIZE_SMALL,
    fontWeight: "500",
    opacity: 0.7,
  },
  detailsWrapper: {
    flexDirection: "row",
    height: responsiveSize(40),
    alignItems: "flex-end",
  },
});

export default NewsItemOverview;
