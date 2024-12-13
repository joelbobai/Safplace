import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { toast } from "react-toastify";

const CartItems = () => {
  const navigate = useNavigate();
  const { privateData, cart, user, getCart } = useAuthStore();
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);
  useEffect(() => {
    privateData();

    getCart(localStorage.getItem("user"));
  }, []);

  const getTotalCartAmount = () => {};
  const calculateTotalAmount = (products) => {
    return products.reduce((total, item) => {
      return total + item.products[0].productPrice * item.products[0].quantity;
    }, 0);
  };

  return (
    <section className="max_padd_container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((e) => {
            // if (cartItems[e.id] > 0) {
            return (
              <tr
                key={e._id}
                className="border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center"
              >
                <td
                  className="flexCenter"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/product/${e.products[0].product}`)}
                >
                  <img
                    src={e.products[0].productImage}
                    alt="prdctImg"
                    height={43}
                    width={43}
                    className="rounded-lg ring-1 ring-slate-900/5 my-1"
                  />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/product/${e.products[0].product}`)}
                >
                  <div className="line-clamp-3">
                    {e.products[0].productName}
                  </div>
                </td>
                <td>€{e.products[0].productPrice}</td>
                <td className="w-16 h-16 bg-white">{e.products[0].quantity}</td>
                <td>€{e.products[0].productPrice * e.products[0].quantity}</td>
                <td>
                  <div className="bold-22 pl-14">
                    <TbTrash onClick={() => removeFromCart(e.id)} />
                  </div>
                </td>
              </tr>
            );
            // }
            // return null;
          })}
        </tbody>
      </table>
      {/* cart details */}
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-10">
          <h4 className="bold-20">Summary</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">
                €{calculateTotalAmount(cart)}
              </h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">€{calculateTotalAmount(cart)}</h4>
            </div>
          </div>
          <button className="btn_dark_rounded w-44">Checkout</button>
          <div className="flex flex-col gap-10 ">
            <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
            <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="Coupon code"
                className="bg-transparent border-none outline-none"
              />
              <button className="btn_dark_rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
