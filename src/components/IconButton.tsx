import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { responsiveFont, responsiveSize } from "../styles/mixins";
import { useTheme } from "../context/ThemeContextProvider";

export interface IconButtonProps {
  name: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
}

function IconButton({ name, onPress }: IconButtonProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        width: responsiveSize(36),
        height: responsiveSize(36),
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <MaterialIcons
        name={name}
        size={responsiveFont(24)}
        color={theme.colors.icon}
      />
    </TouchableOpacity>
  );
}

export default IconButton;
