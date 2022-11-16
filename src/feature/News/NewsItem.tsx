import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import { responsiveFont, responsiveSize } from "../../styles/mixins";
import { FONT_SIZE_SMALL, FONT_SIZE_STANDARD } from "../../styles/typography";

function NewsItem({ message }: { message: Message }) {
  const theme = useTheme();
  const createDate = new Date(message.createDate);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        {message.type === 0 ? message.title : message.content}
      </Text>
      <View style={styles.detailsWrapper}>
        <Text style={styles.details}>{message?.author?.fullName}</Text>
        <Text style={styles.details}>
          {createDate.toLocaleDateString()} {createDate.toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    fontSize: responsiveFont(16),
    fontWeight: "bold",
  },
  detailsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: responsiveSize(20),
  },

  details: {
    fontSize: FONT_SIZE_SMALL,
  },
});

export default NewsItem;
