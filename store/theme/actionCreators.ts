import Cookies from "js-cookie";
import * as actionTypes from "./actionTypes";

export function toggleDarkMode(value: Boolean) {
  Cookies.set("isLight", value);

  return {
    type: actionTypes.TOGGLE_DARK_MODE,
  };
}
