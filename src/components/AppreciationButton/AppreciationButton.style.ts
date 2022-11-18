import { StyleSheet } from "react-native";
import { responsiveSize } from "../../styles/mixins";
import { FONT_SIZE_STANDARD } from "../../styles/typography";

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: responsiveSize(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    fontSize: FONT_SIZE_STANDARD,
    fontWeight: "500",
  },
});

export default style;
