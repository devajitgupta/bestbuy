// ListProducts.jsx

import React from "react";
import Productitems from "../products/Productitems";
import Filters from "../layouts/Filters";

const ListProducts = ({ products }) => {
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
