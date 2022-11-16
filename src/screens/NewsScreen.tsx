import React from "react";
import ScreenLayout from "../components/ScreenLayout";
import News from "../News";

function NewsScreen() {
  return (
    <ScreenLayout title={"News"} displatTopBar>
      <News />
    </ScreenLayout>
  );
}

export default NewsScreen;
