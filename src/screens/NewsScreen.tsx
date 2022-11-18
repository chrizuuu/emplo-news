import React from "react";
import ScreenLayout from "../components/ScreenLayout";
import NewsList from "../feature/News/NewsList";

function NewsScreen() {
  return (
    <ScreenLayout>
      <NewsList />
    </ScreenLayout>
  );
}

export default NewsScreen;
