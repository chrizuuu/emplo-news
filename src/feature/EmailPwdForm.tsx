import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StyledInput from "../components/StyledInput";
import SubmitBtn from "../components/SubmitBtn";
import { padding } from "../styles/mixins";
import { SPACING_MD, SPACING_XL } from "../styles/spacing";

interface EmailPwdFormProps {
  onSubmit: (email: string, password: string) => Promise<any>;
  submitText: string;
}

function EmailPwdForm({ onSubmit, submitText }: EmailPwdFormProps) {
  const [isAuthing, setIsAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleOnSubmit = () => {
    setIsAuthing(true);
    onSubmit(email, pwd).finally(() => setIsAuthing(false));
  };

  return (
    <View style={styles.wrapper}>
      <StyledInput
        placeholder="Email"
        keyboardType="email-address"
        style={{ marginBottom: SPACING_XL }}
        value={email}
        onChangeText={(val) => setEmail(val)}
        autoCapitalize="none"
      />
      <StyledInput
        placeholder="Hasło"
        secureTextEntry
        style={{ marginBottom: SPACING_XL }}
        onChangeText={(val) => setPwd(val)}
        onSubmitEditing={handleOnSubmit}
      />
      <SubmitBtn
        disabled={isAuthing}
        onPress={handleOnSubmit}
        submitText={submitText}
      />
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
