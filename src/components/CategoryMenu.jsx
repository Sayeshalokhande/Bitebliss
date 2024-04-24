import { useEffect } from "react";
import { useState } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/Slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-md font-semibold m-2  mt-4">
        Pick Your Preferred Food Category...
      </h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 rounded-lg ${
            selectedCategory === "All"
              ? "bg-red-500 text-white font-bold"
              : " bg-gray-200 font-bold text-black"
          }
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white ${
              selectedCategory === category && "bg-red-500 text-white"
            } `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CategoryMenu;
