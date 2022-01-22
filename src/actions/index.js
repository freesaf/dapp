import { ACTION_TYPE } from "./types";

export const increase = (val) => {
  console.log(val);
  return {
    type: ACTION_TYPE,
    payload: val,
  };
};
