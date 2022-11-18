import React from "react";
import { ActivityIndicator, View, FlatList, StyleSheet } from "react-native";
import { padding, responsiveSize } from "../../styles/mixins";
import { SPACING_SM, SPACING_XL } from "../../styles/spacing";
import NewsItem from "./NewsItem";
import { useInfiniteQuery } from "react-query";
import { getNews } from "../../api/news";
import { useTheme } from "../../context/ThemeContextProvider";

function NewsList() {
  const theme = useTheme();

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
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          query.fetchNextPage();
        }}
        ListFooterComponent={() =>
          query.isFetching ? (
            <View style={styles.loadingSpinnerContainer}>
              <ActivityIndicator size="large" color={theme.colors.secondary} />
            </View>
          ) : null
        }
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
  loadingSpinnerContainer: {
    height: responsiveSize(80),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsList;
