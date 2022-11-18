import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { padding, responsiveSize } from "../../styles/mixins";
import { SPACING_SM, SPACING_XL } from "../../styles/spacing";
import NewsItem from "./NewsItem";
import { useInfiniteQuery } from "react-query";
import { getNews } from "../../api/news";

function NewsList() {
  const query = useInfiniteQuery(
    ["news"],
    ({ pageParam = 0 }) => getNews({ pageParam: pageParam }),
    {
      cacheTime: Infinity,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.messages?.length) {
          const nextPage = allPages.length;
          return nextPage;
        }
        return undefined;
      },
    }
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={query?.data?.pages.flatMap((page) => page.messages)}
        renderItem={({ item }) => <NewsItem message={item} key={item.id} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: responsiveSize(30) }} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ ...padding(SPACING_XL, SPACING_SM) }}
        onEndReachedThreshold={0.3}
        onEndReached={() => {
          query.fetchNextPage();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default NewsList;
