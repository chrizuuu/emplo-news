import React, { useRef, useState } from "react";
import { View, Pressable, Text, TextInput, StyleSheet } from "react-native";
import StyledInput from "../components/StyledInput";
import SubmitBtn from "../components/SubmitBtn";
import { padding, responsiveSize } from "../styles/mixins";

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
      <View>
        <StyledInput
          placeholder="Email"
          keyboardType="email-address"
          style={{ marginBottom: responsiveSize(20) }}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <StyledInput
          placeholder="Password"
          secureTextEntry
          style={{ marginBottom: responsiveSize(20) }}
          onChangeText={(val) => setPwd(val)}
          onSubmitEditing={handleOnSubmit}
        />
        <SubmitBtn onPress={handleOnSubmit} submitText="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...padding(14),
  },
  container: {},
});

export default EmailPwdForm;
