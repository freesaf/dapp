import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getIconAndColor } from "./layout/icons";

export default function Categories({ searchText }) {
  const categories = useSelector((state) => state.dapps);
  return (
    <>
      <div className="flex justify-between items-center pb-2">
        <h2 className="font-semibold text-xl">Popular Categories</h2>
        <Link
          to={"#"}
          className="flex items-center justify-between text-purplelight font-medium">
          <span>See All</span>
          <BiChevronRight className="text-2xl" />
        </Link>
      </div>
      <div className=" grid grid-cols-2 gap-3">
        {categories
          .filter((category) =>
            category.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((category) => {
            let iconAndColor = getIconAndColor(category.name);
            return (
              <div
                key={category.id}
                className={`${iconAndColor.color} p-4 rounded-lg cursor-pointer `}>
                {iconAndColor.icon}
                <div className="flex justify-between pt-2 items-center">
                  <span className="text-gray-600 font-medium ">
                    {category.name}{" "}
                  </span>
                  <BiChevronRight className="text-xl" />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
