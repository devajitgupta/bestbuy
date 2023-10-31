import React from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from "../layouts/BreadCrumbs";
//import NewReview from "../reviews/NewReview";
//import Reviews from "../reviews/Reviews";

const ProductDetails = ({ formData }) => {
   return (
      <>
         <BreadCrumbs />
         <section className="bg-white py-10">
            <div className="container max-w-screen-xl mx-auto px-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                  <aside>
                     <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                        <img
                           className="object-cover inline-block"
                           src={
                              formData.images
                                 ? formData.images[0].url
                                 : "/images/default_product.png"
                           }
                           alt="Product title"
                           width="340"
                           height="340"
                        />
                     </div>
                     <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                        <a className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer">
                           <img
                              className="w-14 h-14"
                              src={"/logo192.png"}
                              alt="Product title"
                              width="500"
                              height="500"
                           />
                        </a>
                     </div>
                  </aside>
                  <main>
                     <h2 className="font-semibold text-2xl mb-4">
                        {formData.name}
                     </h2>

                     <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                           <StarRatings
                              rating={formData.rating}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="20px"
                              starSpacing="2px"
                              name="rating"
                           />
                        </div>
                        <span className="text-yellow-500">5</span>

                        <svg
                           width="6px"
                           height="6px"
                           viewBox="0 0 6 6"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                        </svg>

                        <span className="text-green-500">Verified</span>
                     </div>

                     <p className="mb-4 font-semibold text-xl">
                        {formData.price}$
                     </p>

                     <p className="mb-4 text-gray-500">
                        {formData.description}
                     </p>

                     <div className="flex flex-wrap gap-2 mb-5">
                        <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                           <i className="fa fa-shopping-cart mr-2"></i>
                           Add to cart
                        </button>
                     </div>

                     <ul className="mb-5">
                        <li className="mb-1">
                           {" "}
                           <b className="font-medium w-36 inline-block">
                              {formData.stock}
                           </b>
                        </li>
                        <li className="mb-1">
                           {" "}
                           <b className="font-medium w-36 inline-block">
                              Category:
                           </b>
                           <span className="text-gray-500">
                              {formData.category}
                           </span>
                        </li>
                        <li className="mb-1">
                           {" "}
                           <b className="font-medium w-36 inline-block">
                              Seller / Brand:
                           </b>
                           <span className="text-gray-500">
                              {formData.seller}
                           </span>
                        </li>
                     </ul>
                  </main>
               </div>

               <hr />

               <div className="font-semibold">
                  <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
                     Other Customers Reviews
                  </h1>
               </div>
            </div>
         </section>
      </>
   );
};

export default ProductDetails;
