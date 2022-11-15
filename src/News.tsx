import React from "react";
import { SafeAreaView } from "react-native";
import EmailPwdForm from "./feature/EmailPwdForm";

import styles from "./News.styles";

export default function News() {
  return (
    <SafeAreaView style={styles.container}>
      <EmailPwdForm onSubmit={() => console.log("auth")} />
    </SafeAreaView>
  );
}
