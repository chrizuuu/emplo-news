import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { padding, responsiveSize } from "../../styles/mixins";
import { SPACING_MD } from "../../styles/spacing";
import NewsItem from "./NewsItem";

function NewsList({ news }: { news: Message[] }) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem message={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: responsiveSize(20) }} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    ...padding(0, SPACING_MD),
  },
});

export default NewsList;
