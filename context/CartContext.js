"use client";
import { createContext } from "react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const router = useRouter;
   useEffect(() => {
      setCartToState();
   }, []);

   const setCartToState = () => {
      setCart(
         localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
      );
   };

   const addItemToCart = async ({
      product,
      name,
      price,
      image,
      stock,
      seller,
      quantity = 1,
   }) => {
      const item = {
         product,
         name,
         price,
         image,
         stock,
         seller,
         quantity,
      };
      const isItemExists = cart?.cartItems?.find(
         (i) => i.product === item.product
      );
      let newCartItems;
      if (isItemExists) {
         newCartItems = cart?.cartItems?.map((i) =>
            i.product === isItemExists.product ? item : i
         );
      } else {
         newCartItems = [...(cart?.cartItems || []), item];
      }
      localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
      setCartToState();
   };
   return (
      <CartContext.Provider value={{ cart, addItemToCart }}>
         {children}
      </CartContext.Provider>
   );
};
export default CartContext;
