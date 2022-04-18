import axios, { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { MealActions, MealActionTypes } from "../types/meal"

const initAPI = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
const countryMealAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`
const searchMealAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
const searchByIdAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
const searchByCategoryAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`

export const mainMealAction = (value: string, switchMarker: string) => 
  async (dispatch: Dispatch<MealActions>) => {
  try {
    let response: AxiosResponse<any>;
    dispatch({type: MealActionTypes.FETCH_MEAL})
    switch(switchMarker) {
      case "category":
        response = await axios.get(`${searchByCategoryAPI}${value}`)
        dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
        return response
      case "country":
        response = await axios.get(`${countryMealAPI}${value}`)
        dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
        return response
      case "search":
        response = await axios.get(`${searchByIdAPI}${value}`)
        dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
        return response
      case "mealTitle":
        response = await axios.get(`${searchMealAPI}${value}`)
        dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
        return response
      default:
        response = await axios.get(initAPI)
        dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
        return response
    }
  }
  catch(err: any) {
    dispatch({
      type: MealActionTypes.FETCH_MEAL_ERROR, 
      payload: {message: err.message, status: parseFloat(err.response.status)}
    })
  }
}