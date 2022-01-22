import React from "react";
import { FaBell } from "react-icons/fa";
import {
  RiArrowDownSFill,
  RiArrowLeftLine,
  RiHomeLine,
  RiSettings5Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import profileImage from "../../images/profile.png";
import { dashboardLink } from "../../routes";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header
      className={`flex justify-between items-center py-4 px-4 w-full bg-greybg`}>
      <RiArrowLeftLine
        onClick={() => {
          navigate(-1);
        }}
        className="text-2xl text-gray-500 cursor-pointer"
      />
      <Link to={dashboardLink}>
        <RiHomeLine className="text-2xl text-gray-500" />
      </Link>
      <div
        className={`border-2 border-gray-300 h-12 overflow-x-hidden rounded-full w-[50%] flex items-center bg-white`}>
        <div className="w-full flex items-center justify-between px-1">
          <img
            className="w-10 h-10 mr-2 rounded-full"
            src={profileImage}
            alt=""
          />

          <span className="">john.nexr</span>
          <RiArrowDownSFill className="text-2xl text-gray-500" />
        </div>
      </div>
      <FaBell className="text-2xl text-gray-500" />
      <RiSettings5Line className="text-2xl text-gray-500" />
    </header>
  );
}
