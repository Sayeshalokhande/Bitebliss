import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/Navbar";
import Foodlist from "../components/Foodlist";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <Foodlist />
      <Cart />
    </div>
  );
};

export default Home;
