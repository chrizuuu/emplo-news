import React from "react";
import { useQuery } from "react-query";
import { get } from "../api/news";
import ScreenLayout from "../components/ScreenLayout";
import NewsList from "../feature/News/NewsList";

function NewsScreen() {
  const news = useQuery(["news"], get);

  if (news.isSuccess) {
    console.log(news.data);
  }
  return (
    <ScreenLayout title={"News"} displatTopBar>
      {news.isSuccess ? <NewsList news={news.data.messages} /> : null}
    </ScreenLayout>
  );
}

export default NewsScreen;
