import React from "react";
import { increase } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Tescom() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const val = state.tes.val;
  return (
    <div className="bg-black text-white">
      <div>{val}</div>
      <button
        onClick={() => {
          dispatch(increase(val + 2));
        }}>
        increase
      </button>
    </div>
  );
}
