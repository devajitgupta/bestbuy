"use client";
import StarRatings from "react-star-ratings";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Productitems from "../products/Productitems";
import Link from "next/link";
import Filters from "../layouts/Filters";
import Header from "../layouts/Header";

const ListProducts = ({ product }) => {
   const [products, setProducts] = useState([]);
   console.log(products);
   useEffect(() => {
      // Fetch product data from your API
      axios
         .get("http://localhost:3001/products")
         .then((response) => {
            // Check if the response data is an array before setting it in the state
            if (Array.isArray(response.data)) {
               setProducts(response.data);
            } else {
               console.error("Response data is not an array:", response.data);
            }
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
         });
   }, []);
   return (
      <section className="py-12">
         <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row -mx-4">
               <Filters />
               <main className="md:w-2/3 lg:w-3/4 px-3">
                  {products.map((product) => (
                     <Productitems key={product?._id} product={product} />
                  ))}
               </main>
            </div>
         </div>
      </section>
   );
};

export default ListProducts;
