import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useAuthStore } from "../store/store";

const NewCollections = () => {
  const { allProduct, product } = useAuthStore();

  useEffect(() => {
    // fetch("http://localhost:4000/popularproducts").then((response)=> response.json()).then((data)=> setPopularProducts(data))
    allProduct();
  }, []);

  const calculatePercentage = (total, percent) => {
    return (total * percent) / 100;
  };

  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Latest Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {product?.map((item) => (
            <Item
              key={item._id}
              id={item._id}
              image={item.productImage}
              name={item.productName}
              new_price={
                item.productPrice -
                calculatePercentage(item.productPrice, item.offPercentage)
              }
              old_price={item.productPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
