import React from "react";

import ScreenLayout from "../components/ScreenLayout";
import { useAuthContext } from "../context/AuthContextProvider";
import EmailPwdForm from "../feature/EmailPwdForm";

function LoginScreen() {
  const { loginWithEmail } = useAuthContext();
  return (
    <ScreenLayout title="Login">
      <EmailPwdForm onSubmit={loginWithEmail} />
    </ScreenLayout>
  );
}

export default LoginScreen;
