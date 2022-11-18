import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import IconButton from "../IconButton";
import style from "./AppreciationButton.style";

interface LikedButtonProps {
  onPress: () => void;
  isLiked: Message["isLiked"];
}

function LikedButton({ onPress, isLiked }: LikedButtonProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={[style.wrapper]} activeOpacity={0.6}>
      <IconButton
        onPress={onPress}
        name={isLiked ? "thumb-up-alt" : "thumb-up-off-alt"}
        color={theme.colors.secondary}
      />
      <Text style={[style.text, { color: theme.colors.secondary }]}>
        Lubię to
      </Text>
    </TouchableOpacity>
  );
}

export default LikedButton;
