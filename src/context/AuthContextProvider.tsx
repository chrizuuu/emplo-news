import React, { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextInterface {
  isToken: boolean;
  isInitializing: boolean;
  logout: () => void;
  loginWithEmail: (email: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextInterface);

const AuthContextProvder = ({ children }: { children: React.ReactNode }) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isToken, setIsToken] = useState(false);

  async function checkIfTokenExist() {
    SecureStore.getItemAsync("TOKEN").then((token) => {
      if (token) {
        setIsToken(true);
      } else {
        setIsToken(false);
      }
    });
  }

  useEffect(() => {
    checkIfTokenExist().finally(() => setIsInitializing(false));
  }, []);

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
        const token = resJson.token;
        await SecureStore.setItemAsync("TOKEN", token);
      })
      .catch((error) => console.log(error))
      .finally(async () => await checkIfTokenExist());

    return;
  }

  function logout() {
    SecureStore.deleteItemAsync("TOKEN").then(
      async () => await checkIfTokenExist()
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isToken,
        isInitializing,
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
