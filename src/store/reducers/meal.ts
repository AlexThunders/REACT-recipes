import { IMeal, MealActions, MealActionTypes } from "../../types/meal";

const initState: IMeal = {
  meal: [],
  loading: false,
  error: null
}

export const mealReducer = (state = initState, action: MealActions) => {
  switch(action.type) {
    case MealActionTypes.FETCH_MEAL:
      return {
        loading: true,
        meal: [],
        error: null
      }

    case MealActionTypes.FETCH_MEAL_SUCCESS:
      return {
        loading: false,
        meal: action.payload,
        error: null
      }

    case MealActionTypes.FETCH_MEAL_ERROR:
      return {
        loading: false,
        meal: [],
        error: {
          message: action.payload.message,
          status: action.payload.status
          }
      }
      
    default:
      return state;
  }
}


