import { useState, useEffect } from "react";
// import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";
import { useAuthStore } from "../store/store";
import axios from "axios";

const Product = () => {
  //  const { allProduct, product, getAProduct } = useAuthStore();
  const [aProduct, setAProduct] = useState({});
  //  const {all_products} = useContext(ShopContext);
  const { productId } = useParams();
  // const product = all_products.find((e) => e.id === Number(productId));
  // if(!product){
  //   return <div>Product not found!</div>
  // }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
    getAProduct(productId);
  }, []);

  const getAProduct = async (id) => {
    const res = await axios
      .post("https://backend.lillybeautyfashion.com/api/v1/product", {
        productID: id,
      })
      .catch((err) => {
        console.log(err);
        // errorHandle(err?.response?.data);
      });
    if (res) {
      console.log(res.data);
      setAProduct(res?.data);
    }
  };
  console.log(aProduct);
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHd product={aProduct} />
        <ProductDisplay product={aProduct} />
        <ProductDescription description={aProduct?.description} />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
