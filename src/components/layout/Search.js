import React, { useRef } from "react";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";
import FilterModal from "../misc/FilterModal";
import Modal from "./Modal";
export default function Search({ state, setstate }) {
  const modalRef = useRef();
  const openModal = (content) => {
    modalRef.current.open(content);
  };
  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <div className="flex justify-between items-center px-4 mt-2">
      <div
        className={`bg-greybg h-12 overflow-x-hidden rounded-lg w-[85%] flex items-center `}>
        <span className="px-4 inline-block text-2xl">
          <RiSearchLine />
        </span>
        <input
          onChange={(e) => {
            setstate({ ...state, searchText: e.target.value });
          }}
          value={state.searchText}
          className="h-full p-2 pl-0 border-none outline-none bg-greybg"
          type="search"
          placeholder="Search Experiences"
        />
      </div>
      <RiFilterLine
        onClick={() => {
          openModal(<FilterModal closeM={closeModal} />);
        }}
        className="text-3xl text-gray-500 cursor-pointer"
      />
      <Modal ref={modalRef} />
    </div>
  );
}
