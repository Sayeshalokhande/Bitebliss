import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-between m-2">
        <h2 className=" ">
          <img src="logo-png.png" alt="BiteBliss" className="h-12  m-2" />
        </h2>
        <div className="m-2 h-12">
          <h3 className="text-xl font-bold text-red-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
        </div>
      </div>
      <div className="justify-center m-2 ml-6">
        <input
          placeholder="Search here.."
          type="search"
          name="search"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="bg-transparent border-2 border-grey w-80  rounded-lg  p-2 text-sm text-black  outline-none shadow-md hover:border-red-500 hover:rounded-lg "
        />
        {/* <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button> */}
      </div>
    </>
  );
};

export default Navbar;
