import React from "react";
import { useQuery } from "react-query";
import { get } from "../api/news";
import ScreenLayout from "../components/ScreenLayout";
import NewsList from "../feature/News/NewsList";

function NewsScreen() {
  const news = useQuery(["news"], get);

  return (
    <ScreenLayout title={"Wiadomości"} displatTopBar>
      {news.isSuccess ? <NewsList news={news.data.messages} /> : null}
    </ScreenLayout>
  );
}

export default NewsScreen;
