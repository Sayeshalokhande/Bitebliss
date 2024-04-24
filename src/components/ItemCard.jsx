import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementqty,
} from "../redux/Slices/CartSlice";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, qty, price }));
          toast(`${name} is removed!`, {
            icon: "❌",
          });
        }}
        className="absolute right-7 text-red-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px] rounded-xl m-2" />
      <div className=" leading-5">
        <h2 className=" text-bold text-xl text-gray-800 "> {name}</h2>
        <div className="flex  justify-between items-center ">
          <span className="text-red-500 text-bold">₹{price}</span>
          <div className="flex  justify-center items-center gap-2 absolute right-7">
            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-slate-400 text-slate-400 hover:bg-red-500 hover:border-red-600 hover:text-white m-1"
            />
            <span className="px-2">{qty}</span>
            <FaMinus
              onClick={() => dispatch(decrementqty({ id }))}
              className="border-2 border-slate-400 text-slate-400 hover:bg-red-500 hover:border-red-600 hover:text-white m-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
