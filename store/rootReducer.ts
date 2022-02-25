import { combineReducers } from "redux";
import ThemeReducer from "./theme/reducer";
import ArticlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
  theme: ThemeReducer,
  articles: ArticlesReducer,
});

export default rootReducer;
