import React from "react";
import { Text, ScrollView } from "react-native";
import fetchWithToken from "./api/fetchWithToken";
import styles from "./News.styles";

export default function News() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text>TEST NEWS</Text>
      <Text>TEST NEWS</Text>
      <Text>TEST NEWS</Text>
      <Text>TEST NEWS</Text>
      <Text>TEST NEWS</Text>
    </ScrollView>
  );
}
