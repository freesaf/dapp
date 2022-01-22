import { combineReducers } from "redux";
import contacts from "./contacts";
import dapps from "./dapps";

export default combineReducers({
  contacts,
  dapps,
});
