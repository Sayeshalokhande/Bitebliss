import React from "react";
import ItemCard from "./ItemCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed  right-0 top-0 w-full lg:w-[22vw] md:w-[42vw]  bg-white h-full ${
          activeCart ? "translate-x-0 " : "translate-x-full"
        }  transition-all duration-500 z-50`}
      >
        <div className=" m-2 flex justify-between items-center my-3 p-5">
          <span className="font-bold text-xl  ">My Order</span>
          <IoCloseSharp
            onClick={() => setActiveCart(!activeCart)}
            className=" text-red-500 font-bold text-2xl cursor-pointer m-1  hover:text-red-600 hover:border-red-400 "
          />
        </div>
        <hr />
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className=" text-center text-xl font-bold text-gray-900">
            Cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 m-2">
          <h3 className="font-semibold text-grey-800">Items:{totalQty}</h3>
          <h3 className="font-semibold text-grey-800">
            Total amount:{totalPrice}
          </h3>

          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-red-500 font-bold p-2 text-white w-full border-red-600 border-2"
          >
            Checkout
          </button>
        </div>
      </div>
      <TiShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
