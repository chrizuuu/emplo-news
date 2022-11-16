import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StyledInput from "../components/StyledInput";
import SubmitBtn from "../components/SubmitBtn";
import { padding } from "../styles/mixins";
import { SPACING_MD, SPACING_XL } from "../styles/spacing";

interface EmailPwdFormProps {
  onSubmit: (email: string, password: string) => void;
}

function EmailPwdForm({ onSubmit }: EmailPwdFormProps) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleOnSubmit = () => {
    onSubmit(email, pwd);
  };

  return (
    <View style={styles.wrapper}>
      <StyledInput
        placeholder="Email"
        keyboardType="email-address"
        style={{ marginBottom: SPACING_XL }}
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <StyledInput
        placeholder="Password"
        secureTextEntry
        style={{ marginBottom: SPACING_XL }}
        onChangeText={(val) => setPwd(val)}
        onSubmitEditing={handleOnSubmit}
      />
      <SubmitBtn onPress={handleOnSubmit} submitText="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    ...padding(SPACING_MD),
  },
});

export default EmailPwdForm;
