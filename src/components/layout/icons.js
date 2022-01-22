import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { BsController } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaShapes } from "react-icons/fa";
import { HiOutlineCube, HiOutlineShoppingBag } from "react-icons/hi";
//   get the background color and the icon of Dapps
export const getIconAndColor = (name) => {
  switch (name) {
    case "Exchanges":
      return {
        color: "bg-gray-200",
        icon: (
          <AiOutlineRise className="bg-bluedark h-10 w-10 p-2 text-2xl flex items-center justify-center rounded-full text-white " />
        ),
      };
    case "Games":
      return {
        color: "bg-gray-100",
        icon: (
          <BsController className="bg-black h-10 w-10 p-2 text-2xl flex items-center justify-center rounded-full text-white " />
        ),
      };
    case "Marketplaces":
      return {
        color: "bg-gray-300",
        icon: (
          <HiOutlineShoppingBag className="bg-teal-400 h-10 w-10 p-2 text-2xl flex items-center justify-center rounded-full text-white " />
        ),
      };
    case "Defi":
      return {
        color: "bg-orange-100",
        icon: (
          <HiOutlineCube className="bg-orange-500 h-10 w-10 p-2 text-2xl flex items-center justify-center rounded-full text-white " />
        ),
      };
    case "Collectibles":
      return {
        color: "bg-blue-100",
        icon: (
          <CgCrown className=" bg-bluedark h-10 w-10 p-2 text-2xl flex items-center justify-center rounded-full text-white " />
        ),
      };
    case "Utilities":
      return {
        color: "bg-gray-100",
        icon: (
          <FaShapes className=" bg-purpledark h-10 w-10 p-2 text-2xl flex items-center justify-center rounded-full text-white " />
        ),
      };
    default:
      break;
  }
};
