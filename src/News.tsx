import React from "react";
import { ScrollView } from "react-native";
import styles from "./News.styles";

export default function News() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}></ScrollView>
  );
}
