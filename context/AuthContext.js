"use client";
import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);

   const router = useRouter();

   const registerUser = async ({ name, email, password }) => {
      console.log("register user", name, email, password);
      try {
         const { data } = await axios.post(
            "http://localhost:3001/auth/signup",
            {
               name,
               email,
               password,
            }
         );
         if (data?.user) {
            router.push("/login");
         }
      } catch (err) {
         setError(err?.response?.data?.message);
      }
   };

   const clearErrors = () => {
      setError(null);
   };

   return (
      <AuthContext.Provider
         value={{ user, error, setUser, registerUser, clearErrors }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
