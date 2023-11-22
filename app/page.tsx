// Home.jsx
'use client'
import ListProducts from "@/components/products/ListProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import queryString from "query-string";
interface SearchParams {
   keyword: string;
}
export default function Home({ searchParams }: { searchParams: SearchParams }) {
   const [products, setProducts] = useState([]);
   const urlParams = {
      keyword: searchParams.keyword,
     
    };
    const searchQuery = queryString.stringify(urlParams);


   useEffect(() => {
      // Fetch product data from your API
      axios
      .get(`http://localhost:3001/products?${searchQuery}`)
         .then((response) => {
            // Check if the response data is an array before setting it in the state
            setProducts(response.data.products);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
         });
   }, [searchQuery]);
   
   return <ListProducts products={products}  />;
}
