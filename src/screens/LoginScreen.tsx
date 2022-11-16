import React from "react";
import { SafeAreaView } from "react-native";
import { useAuthContext } from "../context/AuthContextProvider";
import EmailPwdForm from "../feature/EmailPwdForm";

function LoginScreen() {
  const { loginWithEmail } = useAuthContext();
  return (
    <SafeAreaView>
      <EmailPwdForm onSubmit={loginWithEmail} />
    </SafeAreaView>
  );
}

export default LoginScreen;
