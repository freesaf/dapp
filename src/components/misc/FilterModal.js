import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getIconAndColor } from "../layout/icons";

export default function FilterModal({ closeM }) {
  const [state, setstate] = useState({
    Exchanges: false,
    Games: false,
    Marketplaces: false,
    Defi: false,
    Collectibles: false,
    Utilities: false,
    allCheckbox: false,
  });
  const categories = useSelector((state) => state.dapps);

  const handleChange = (target) => {
    if (target.name === "allCheckbox") {
      setstate({
        ...state,
        Exchanges: !state.allCheckbox,
        Games: !state.allCheckbox,
        Marketplaces: !state.allCheckbox,
        Defi: !state.allCheckbox,
        allCheckbox: !state.allCheckbox,
      });
    } else {
      setstate({ ...state, [target.name]: !state[target.name] });
    }
  };

  const getFiltersCount = () => {
    let numberOfFilters = Object.keys(state).length; // get the numbers of kies in the state
    if (state.allCheckbox) {
      return numberOfFilters - 1;
    } else {
      return Object.values(state).filter((val) => val === true).length; // get the number of true values
    }
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <span className="mr-2 font-medium">Filter</span>
          <div className=" bg-purpledark text-center rounded-full text-white h-6 w-6">
            {getFiltersCount()}
          </div>
        </div>
        <button onClick={closeM} className=" font-medium">
          X
        </button>
      </div>
      <label
        className="cursor-pointer flex items-center mb-4"
        htmlFor={`allinput`}>
        <input
          className="cursor-pointer"
          onChange={(e) => {
            handleChange(e.target);
          }}
          checked={state.allCheckbox}
          type="checkbox"
          name={"allCheckbox"}
          id={`allinput`}
        />
        <span className="ml-3">All Experiences</span>
      </label>
      {categories.map((category) => {
        return (
          <label
            key={category.id}
            className="cursor-pointer flex items-center mb-4"
            htmlFor={`${category.name}input`}>
            <input
              className="cursor-pointer"
              onChange={(e) => {
                handleChange(e.target);
              }}
              checked={state[category.name]}
              type="checkbox"
              name={category.name}
              id={`${category.name}input`}
            />
            <span className="mx-3">{getIconAndColor(category.name).icon}</span>
            <span className="">
              {category.name === "Utilities" ? "Others" : category.name}
            </span>
          </label>
        );
      })}
    </div>
  );
}
