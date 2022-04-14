import { combineReducers } from "redux";
import { mealReducer } from "./meal";
import { portalReducer } from "./portal";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  users: userReducer,
  portal: portalReducer,
  meal: mealReducer
})

export type RootState = ReturnType<typeof rootReducer>;