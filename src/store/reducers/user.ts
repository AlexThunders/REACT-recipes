import { IUser, IUsers, UserActions, UserActionTypes } from "../../types/user";
import { getLoggedFromLocal, getUsersFromLocal } from "../../api/user";

const initState: IUsers = {
  users: getUsersFromLocal(),
  loading: false,
  error: null,
  logged: getLoggedFromLocal(),
  currentPage: '/appsR7/2021/restaurant',
}

export const userReducer = (state = initState, action: UserActions) => {
  switch(action.type) {
    case UserActionTypes.AUTHENTICATE_USER: 
      state.error = null
      let newUsers: IUser[];
      if(state.users?.length === 0) {
        return {...state, error: "User with this name is not registered."}
      }
      else if(state.users.some(user => user.login.toLowerCase() == action.payload.login.toLowerCase())) {
        newUsers = state.users.map(user => {
          if(user.login.toLowerCase() == action.payload.login.toLowerCase() && user.password == action.payload.password){
              if(state.users.some(user => user.authorized === true)) return user
              state.error = null
              user.authorized = true
              state.logged = user.login
              return user
            } else {
              state.error = "Passowrd or name is incorrect"
            }
          return user
        })
      }
      else {
        return {...state, error: "User with this name is not registered."}
      }
      return {...state, users: [...newUsers]}

    case UserActionTypes.ADD_USER:
      if(state.users.some(user => user.login === action.payload.login)) {
        return {...state, error: "User with this name is already registered."}
      } 
      if(state.users.some(user => user.email === action.payload.email)) {
        return {...state, error: "This email is already registered"}
      }
      return {...state,
          users: [
            ...state.users, { 
              login: action.payload.login,
              email: action.payload.email,
              password: action.payload.password,
              authorized: false,
              favouriteMeals: []
            }
          ]
      }

    case UserActionTypes.LOG_OUT: 
      let newArr: IUser[] = state.users.map(user => {
        if(user.login === action.payload) {
          user.authorized = false
        }
        return user
      })
      return {
        ...state,
        logged: '',
        users: [...newArr]
      }

    case UserActionTypes.CLEAR_ERROR:
      return {
        ...state, error: null
      }

    case UserActionTypes.SET_ERROR:
      return {
        ...state, error: action.payload
      }

    case UserActionTypes.SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.payload
      }

    case UserActionTypes.ADD_TO_FAVOURITE:
      let updatedUsers: IUser[] = state.users.map(user => {
        if(user.login === action.payload.logged) {
          if(user.favouriteMeals.length === 0) user.favouriteMeals.push(action.payload.mymeal) 
          if(user.favouriteMeals.some(meal => meal.idMeal === action.payload.mymeal.idMeal)) return user
          user.favouriteMeals.push(action.payload.mymeal)
        }
        return user
      })
      return {
        ...state, users: [...updatedUsers]
      }

    case UserActionTypes.REMOVE_FROM_FAVORITE:
      let reducedMeals: IUser[] = state.users.map(user => {
        if(user.login === action.payload.logged) {
          user.favouriteMeals = user.favouriteMeals.filter(meal => meal.idMeal !== action.payload.id)
        }
        return user
      })
      return {
        ...state, users: reducedMeals
      }
    
    case UserActionTypes.CLEAR_FAVOURITE:
      let clearedFavourets = state.users.map(user => {
        if(user.login === action.payload) {
          user.favouriteMeals = []
        }
        return user
      })
      return {
        ...state, users: clearedFavourets
      }

    default:
      return state;
  }
}
