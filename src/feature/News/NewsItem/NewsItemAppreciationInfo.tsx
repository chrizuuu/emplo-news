import React from "react";
import { View } from "react-native";
import { padding } from "../../../styles/mixins";
import { SPACING_MD } from "../../../styles/spacing";
import NumberOfLikes from "../../../components/AppreciationInfo/NumberOfLikes";
import NumberOfComments from "../../../components/AppreciationInfo/NumberOfComments";

interface NewsItemAppreciationProps {
  numberOfLikes: Message["numberOfLikes"];
  numberOfComments: number;
}

function NewsItemAppreciationInfo({
  numberOfLikes,
  numberOfComments,
}: NewsItemAppreciationProps) {
  return (
    <View style={{ flexDirection: "row", ...padding(SPACING_MD) }}>
      <NumberOfLikes numberOfLikes={numberOfLikes} style={{ marginRight: 8 }} />
      <NumberOfComments numberOfComments={numberOfComments} />
    </View>
  );
}

export default NewsItemAppreciationInfo;
