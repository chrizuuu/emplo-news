import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { responsiveSize } from "../../styles/mixins";
import NewsItem from "./NewsItem";

function NewsList({ news }: { news: Message[] }) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem message={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: responsiveSize(30) }} />
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
  },
});

export default NewsList;
