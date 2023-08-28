import { useContext, useEffect, useState } from "react";
import { login as userlgin, createUser } from "../api/index";
import jwtDecode from "jwt-decode";
import { LOCALSTORAGE_TOKEN_KEY } from "../utils";
import { AuthContext } from "../providers/User";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const userToken = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
      // console.log("sayyad", userToken);
      if (userToken) {
        const data = jwtDecode(userToken);
        setUser(data);
      }

      setLoading(false);
    };

    getUser();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    const response = await userlgin(email, password);

    if (response.success) {
      const valueToStore =
        typeof response.data.token !== "string"
          ? JSON.stringify(response.data.token)
          : response.data.token;
      if (valueToStore) {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, valueToStore);
      }
      const data = jwtDecode(response.data.token);

      setUser(data);
      setLoading(false);
      return {
        success: true,
      };
    } else {
      setLoading(false);

      return {
        success: false,
      };
    }
  };

  const signup = async (name, email, password) => {
    setLoading(true);
    const response = await createUser(name, email, password);
    if (response.success) {
      setLoading(false);
      return {
        success: true,
      };
    }
    setLoading(false);
    return {
      success: false,
      message: response.message,
    };
  };

  const logout = () => {
    setLoading(true);
    window.localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    setUser(null);
    setLoading(false);
  };

  return {
    loading,
    user,
    login,
    signup,
    logout,
  };
};
