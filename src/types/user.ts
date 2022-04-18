export interface IUser {
  login: string;
  password: string;
  email: string;
  authorized: boolean;
  favouriteMeals: any[];
}

export interface IFavouriteMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface IUsers {
  users:  IUser[];
  loading: boolean;
  error: null | string;
  logged: string;
  currentPage: string;
  darkTheme: boolean;
}

export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  AUTHENTICATE_USER = "AUTHENTICATE_USER",
  REMOVE_USER = "REMOVE_USER",
  LOG_OUT = "LOG_OUT",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  CLEAR_ERROR = "CLEAR_ERROR",
  SET_ERROR = "SET_ERROR",
  ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE",
  SET_FAVOURITE_MEALS = "SET_FAVOURITE_MEALS",
  REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE",
  CLEAR_FAVOURITE = "CLEAR_FAVOURITE",
  TOGGLE_THEME = "TOGGLE_THEME"
}

type AddUserAction = {
  type: UserActionTypes.ADD_USER,
  payload: IUser
}

type FindUserAction = {
  type: UserActionTypes.AUTHENTICATE_USER,
  payload: IUser
}

type RemoveUserAction = {
  type: UserActionTypes.REMOVE_USER,
  payload: IUser
}

type ClearErrorAction = {
  type: UserActionTypes.CLEAR_ERROR,
}

type SetErrorAction = {
  type: UserActionTypes.SET_ERROR,
  payload: string
}

type LogOutAction = {
  type: UserActionTypes.LOG_OUT,
  payload: string
}

type SetCurrentPageAction = {
  type: UserActionTypes.SET_CURRENT_PAGE,
  payload: string
}

type AddToFavouriteAction = {
  type: UserActionTypes.ADD_TO_FAVOURITE,
  payload: {
    logged: string;
    mymeal: IFavouriteMeal;
  }
}

type RemoveFromFavouriteMealsAction = {
  type: UserActionTypes.REMOVE_FROM_FAVORITE,
  payload: {
    logged: string;
    id: string;
    }
}

type ClearFavouriteAction = {
  type: UserActionTypes.CLEAR_FAVOURITE,
  payload: string;
}

type ToggleThemeAction = {
  type: UserActionTypes.TOGGLE_THEME,
}

export type UserActions = 
  AddUserAction |
  FindUserAction | 
  RemoveUserAction |
  ClearErrorAction |
  LogOutAction |
  SetCurrentPageAction |
  SetErrorAction |
  AddToFavouriteAction |
  RemoveFromFavouriteMealsAction |
  ClearFavouriteAction |
  ToggleThemeAction;