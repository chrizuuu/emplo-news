import { StyleSheet } from "react-native";
import { responsiveSize } from "../../styles/mixins";
import { FONT_SIZE_SMALL, FONT_SIZE_STANDARD } from "../../styles/typography";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: responsiveSize(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    fontSize: FONT_SIZE_SMALL,
    fontWeight: "500",
  },
});

export default styles;
