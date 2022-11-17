import React from "react";
import { View, Platform, StatusBar } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import ScreenTitle from "../components/ScreenLayout/ScreenTitle";
import { useAuthContext } from "../context/AuthContextProvider";
import EmailPwdForm from "../feature/EmailPwdForm";
import { responsiveSize } from "../styles/mixins";

function LoginScreen() {
  const { loginWithEmail } = useAuthContext();
  return (
    <ScreenLayout>
      <View
        style={{
          paddingTop:
            Platform.OS === "android"
              ? (StatusBar.currentHeight || 0) + responsiveSize(20)
              : responsiveSize(20),
        }}
      >
        <ScreenTitle title="Logowanie" />
        <EmailPwdForm onSubmit={loginWithEmail} submitText="Zaloguj się" />
      </View>
    </ScreenLayout>
  );
}

export default LoginScreen;
