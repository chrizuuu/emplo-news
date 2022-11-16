import React, { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import post from "../api/auth";

interface AuthContextInterface {
  isToken: boolean;
  isInitializing: boolean;
  logout: () => Promise<any>;
  loginWithEmail: (email: string, password: string) => Promise<any>;
}

export const AuthContext = createContext({} as AuthContextInterface);

const AuthContextProvder = ({ children }: { children: React.ReactNode }) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    checkIfTokenExist().finally(() => {
      setIsInitializing(false);
    });
  }, []);

  async function checkIfTokenExist() {
    const token = await SecureStore.getItemAsync("TOKEN");
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }

  async function loginWithEmail(email: string, password: string) {
    try {
      const res = await post({ email: email, password: password });
      const data = await res.json();
      const token = data.token;
      await SecureStore.setItemAsync("TOKEN", token);
      await checkIfTokenExist();
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    await SecureStore.deleteItemAsync("TOKEN");
    await checkIfTokenExist();
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
