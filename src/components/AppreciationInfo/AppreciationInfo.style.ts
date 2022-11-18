import { StyleSheet } from "react-native";
import { responsiveSize } from "../../styles/mixins";
import { FONT_SIZE_SMALL } from "../../styles/typography";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: FONT_SIZE_SMALL,
    fontWeight: "500",
  },
  icon: {
    marginRight: responsiveSize(4),
  },
});

export default styles;
