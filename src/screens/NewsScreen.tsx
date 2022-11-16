import React from "react";
import ScreenLayout from "../components/ScreenLayout";
import News from "../News";

function NewsScreen() {
  return (
    <ScreenLayout title={"News"}>
      <News />
    </ScreenLayout>
  );
}

export default NewsScreen;
