import React from "react";
import { Link } from "react-router-dom";
import { contactsPageLink, myAppsPageLink } from "../../routes";
import { BiChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div className="p-4">
      <div className=" grid grid-cols-2 gap-3">
        <div className={`bg-gray-200 p-3 rounded-lg overflow-hidden`}>
          <div className="flex flex-col justify-between">
            <Link
              to={contactsPageLink}
              className="flex justify-between items-center text-gray-600 font-medium text-xl">
              <span>Contacts</span>
              <BiChevronRight className="text-3xl" />
            </Link>
            <div className="flex">
              {contacts.map((contact, i) => {
                return (
                  <img
                    key={contact.id}
                    className={`${
                      i > 0 ? "-ml-3" : ""
                    } border-4 border-b-gray-200 w-12 h-12 rounded-full cursor-pointer`}
                    src={contact.image}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={` bg-purpledark p-3 rounded-lg overflow-hidden`}>
          <div className="flex flex-col justify-between">
            <Link
              to={myAppsPageLink}
              className="flex justify-between items-center text-white font-medium text-xl">
              <span>Web3 Apps</span>
              <BiChevronRight className="text-3xl" />
            </Link>
            <span className="text-white bg-teal-400 mt-2 rounded-lg p-px w-32 text-center cursor-pointer">
              12 Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
