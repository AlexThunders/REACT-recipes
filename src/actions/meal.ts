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



















// import axios, { AxiosResponse } from "axios"
// import { Dispatch } from "redux"
// import { RootState } from "../store/reducers"
// import { MealActions, MealActionTypes } from "../types/meal"

// const initAPI = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
// const countryMealAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`
// const searchMealAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
// const searchByIdAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
// const searchByCategoryAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`

// export const searchByCategory = (category: string) => async (dispatch: Dispatch<MealActions>, getState: () => RootState) => {
//   try {
//     dispatch({type: MealActionTypes.FETCH_MEAL})
//     const response: AxiosResponse<any> = await axios.get(`${searchByCategoryAPI}${category}`)
//     dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
//   }
//   catch(err: any) {
//     dispatch({
//       type: MealActionTypes.FETCH_MEAL_ERROR, 
//       payload: {message: err.message, status: parseFloat(err.response.status)}
//     })
//   }
// }

// export const searchById = (id: number) => async (dispatch: Dispatch<MealActions>, getState: () => RootState) => {
//   try {
//     dispatch({type: MealActionTypes.FETCH_MEAL})
//     const response: AxiosResponse<any> = await axios.get(`${searchByIdAPI}${id}`)
//     dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
//   }
//   catch(err: any) {
//     dispatch({
//       type: MealActionTypes.FETCH_MEAL_ERROR, 
//       payload: {message: err.message, status: parseFloat(err.response.status)}
//     })
//   }
// }

// export const fetchMeal = async (dispatch: Dispatch<MealActions>, getState: () => RootState) => {
//   try {
//     dispatch({type: MealActionTypes.FETCH_MEAL})
//     const response: AxiosResponse<any> = await axios.get(initAPI)
//     dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
//     console.log(response.data)
//   }
//   catch(err: any) {
//     dispatch({
//       type: MealActionTypes.FETCH_MEAL_ERROR, 
//       payload: {message: err.message, status: parseFloat(err.response.status)}
//     })
//   }
// }

// export const fetchCountryMeal = (country: string) => async (dispatch: Dispatch<MealActions>, getState: () => RootState) => {
//   try {
//     dispatch({type: MealActionTypes.FETCH_MEAL})
//     const response: AxiosResponse<any> = await axios.get(`${countryMealAPI}${country}`)
//     dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
//   }
//   catch(err: any) {
//     dispatch({
//       type: MealActionTypes.FETCH_MEAL_ERROR, 
//       payload: {message: err.message, status: parseFloat(err.response.status)}
//     })
//   }
// }

// export const searchMeal = (mealTitle: string) => async (dispatch: Dispatch<MealActions>, getState: () => RootState) => {
//   try {
//     dispatch({type: MealActionTypes.FETCH_MEAL})
//     const response: AxiosResponse<any> = await axios.get(`${searchMealAPI}${mealTitle}`)
//     dispatch({type: MealActionTypes.FETCH_MEAL_SUCCESS, payload: response.data.meals})
//   }
//   catch(err: any) {
//     dispatch({
//       type: MealActionTypes.FETCH_MEAL_ERROR, 
//       payload: {message: err.message, status: parseFloat(err.response.status)}
//     })
//   }
// }