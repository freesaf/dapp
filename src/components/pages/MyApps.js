import React, { useState } from "react";
import Search from "../layout/Search";
import Categories from "../Categories";

export default function MyApps() {
  const [state, setstate] = useState({
    searchText: "",
  });
  return (
    <div>
      <Search state={state} setstate={setstate} />
      <div className="p-4">
        <div className="py-2">
          <button className="p-2 rounded-lg border-2 mr-2 border-greybg bg-black text-white ">
            Discover
          </button>
          <button className="p-2 rounded-lg border-2 border-greybg">
            My Apps
          </button>
        </div>
        <Categories searchText={state.searchText} />
      </div>
    </div>
  );
}
