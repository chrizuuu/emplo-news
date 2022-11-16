import React from "react";
import { useQuery } from "react-query";
import { get } from "../api/news";
import ScreenLayout from "../components/ScreenLayout";
import News from "../News";

function NewsScreen() {
  const news = useQuery(["news"], get);

  if (news.isSuccess) {
    console.log(news.data);
  }
  return (
    <ScreenLayout title={"News"} displatTopBar>
      <News />
    </ScreenLayout>
  );
}

export default NewsScreen;
