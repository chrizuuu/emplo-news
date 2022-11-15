import { Dimensions, PixelRatio, ViewStyle } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const baseWidth = 390;

export const responsiveSize = (size: number) =>
  (WINDOW_WIDTH / baseWidth) * size;

export const responsiveFont = (size: number) =>
  size * PixelRatio.getFontScale();

export function dimensions(
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: "margin" | "padding"
): ViewStyle {
  const styles = {} as ViewStyle;

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) {
  return dimensions(top, right, bottom, left, "margin");
}

export function padding(
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) {
  return dimensions(top, right, bottom, left, "padding");
}
