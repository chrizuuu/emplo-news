import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import IconButton from "../IconButton";
import styles from "./AppreciationButton.style";

interface LikedButtonProps {
  onPress: () => void;
  isLiked: Message["isLiked"];
}

function LikedButton({ onPress, isLiked }: LikedButtonProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={[styles.wrapper]} activeOpacity={0.6}>
      <IconButton
        onPress={onPress}
        name={isLiked ? "thumb-up-alt" : "thumb-up-off-alt"}
        color={isLiked ? theme.colors.secondary : theme.colors.primary}
      />
      <Text
        style={[
          styles.text,
          { color: isLiked ? theme.colors.secondary : theme.colors.primary },
        ]}
      >
        Lubię to
      </Text>
    </TouchableOpacity>
  );
}

export default LikedButton;
