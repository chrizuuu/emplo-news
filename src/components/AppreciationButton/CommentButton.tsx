import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../context/ThemeContextProvider";
import IconButton from "../IconButton";
import styles from "./AppreciationButton.style";

interface CommentButtonProps {
  onPress: () => void;
}

function CommentButton({ onPress }: CommentButtonProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={[styles.wrapper]} activeOpacity={0.6}>
      <IconButton
        onPress={onPress}
        name="comment"
        color={theme.colors.primary}
      />
      <Text style={[styles.text, { color: theme.colors.primary }]}>
        Skomentuj
      </Text>
    </TouchableOpacity>
  );
}

export default CommentButton;
