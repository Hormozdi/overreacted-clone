import { getStateFromCookies } from "redux-cookies-middleware";
import * as actionTypes from "./actionTypes";

const initialState: ThemeSettingsState = {
  isLight: false,
};

const paths = {
  isLight: { name: "isLight" },
};

const initialStateWithCookie = getStateFromCookies(initialState, paths);

const reducer = (
  state: ThemeSettingsState = initialStateWithCookie,
  action: ArticleAction
): ThemeSettingsState => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE:
      const isLight = !state.isLight;
      return {
        ...state,
        isLight,
      };
  }
  return state;
};

export default reducer;
