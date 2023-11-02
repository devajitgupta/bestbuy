"use client";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);

   const router = useRouter();
   const registeruser = async ({ name, email, password }) => {
      console.log("register user", name, email, password);
      try {
         const { data } = axios.post(`http://localhost:3001/auth/signup`, {
            name,
            email,
            password,
         });
         if (data?.user) {
            router.push("/");
         }
      } catch (err) {
         setError(err?.response?.data?.message);
      }
      const clearError = () => {
         setError(null);
      };
   };
   return (
      <AuthContext.Provider
         value={{ user, error, setUser, registeruser, clearErrors }}
      >
         {children}
      </AuthContext.Provider>
   );
};
export default AuthContext;
