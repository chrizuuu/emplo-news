import React from "react";
import { View, Platform, StatusBar } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { useAuthContext } from "../context/AuthContextProvider";
import EmailPwdForm from "../feature/EmailPwdForm";
import { responsiveSize } from "../styles/mixins";

function LoginScreen() {
  const { loginWithEmail } = useAuthContext();
  return (
    <ScreenLayout title={"Logowanie"} displayLogoutBtn={false}>
      <EmailPwdForm onSubmit={loginWithEmail} submitText="Zaloguj się" />
    </ScreenLayout>
  );
}

export default LoginScreen;
