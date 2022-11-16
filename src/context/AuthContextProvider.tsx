import React, { createContext, useContext } from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextInterface {
  logout: () => void;
  loginWithEmail: (email: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextInterface);

const AuthContextProvder = ({ children }: { children: React.ReactNode }) => {
  function loginWithEmail(email: string, password: string) {
    fetch("https://afreactrecrutation.azurewebsites.net/api/Auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username: email, password: password }),
    })
      .then((res) => res.json())
      .then(async (resJson) => {
        await SecureStore.setItemAsync("token", resJson);
      })
      .catch((error) => console.log(error));
    return;
  }

  async function logout() {
    return await SecureStore.deleteItemAsync("token");
  }

  return (
    <AuthContext.Provider
      value={{
        loginWithEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContextProvder;
