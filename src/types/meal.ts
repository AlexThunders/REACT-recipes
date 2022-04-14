export interface IMeal {
  meal: any[];
  loading: boolean;
  error: {
    message: string,
    status: number
  } | null;
}

export enum MealActionTypes {
  FETCH_MEAL = "FETCH_MEAL",
  FETCH_MEAL_SUCCESS = "FETCH_MEAL_SUCCESS",
  FETCH_MEAL_ERROR = "FETCH_MEAL_ERROR",
}

type FetchMeals = {
  type: MealActionTypes.FETCH_MEAL
}

type FetchMealsSuccess = {
  type: MealActionTypes.FETCH_MEAL_SUCCESS,
  payload: any[]
}

type FetchMealsError = {
  type: MealActionTypes.FETCH_MEAL_ERROR,
  payload: {
    message: string;
    status: number;
  }
}

export type MealActions = 
  FetchMeals |
  FetchMealsSuccess |
  FetchMealsError;