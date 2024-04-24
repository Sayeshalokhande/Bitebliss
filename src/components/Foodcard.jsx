import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";

const Foodcard = ({ id, name, img, rating, desc, price, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className=" font-bold w-[250px] bg-white p-5 flex-col rounded-lg justify-center items-center ">
      <img
        src={img}
        alt=""
        className="rounded-lg w-[200px] h-[180px] hover:scale-110 overflow-hidden duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between mt-4">
        <h2>{name}</h2>
        <span className="text-md">₹{price}</span>
      </div>
      <p className="font-normal text-sm">{desc && desc.slice(0, 50)}..</p>
      <div className="flex justify-between ">
        <span className="flex justify-center  items-center">
          <AiFillStar className="mr-1 text-yellow-700" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, qty: 1, img }));
            handleToast(name);
          }}
          className="p-1 rounded-lg text-sm text-white  bg-red-500  border-2  "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
