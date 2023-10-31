"use client";

import ProductDetails from "../../../components/products/ProductDetails";
import ListProducts from "@/components/products/ListProducts";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = ({ params }) => {
   const id = params.id;
   console.log(id);
   const [formData, setFormData] = useState("");
   console.log(formData);
   useEffect(() => {
      // Fetch product data from your API
      axios.get(`http://localhost:3001/products/${id}`).then((response) => {
         const productData = response.data;

         setFormData({
            name: productData.name,
            description: productData.description,
            price: productData.price,
            category: productData.category,
            image: productData.image,
            stock: productData.stock,
            seller: productData.seller,
         });
      });
   }, [id]);

   return <ProductDetails formData={formData} />;
};

export default page;
