import { StyleSheet } from "react-native";
import { padding } from "./styles/mixins";
import { SPACING_MD } from "./styles/spacing";

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "100%",
    ...padding(0, SPACING_MD),
  },
});
