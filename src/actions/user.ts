import { PortalActionTypes } from "../types/portal"
import { IFavouriteMeal, UserActionTypes } from "../types/user"

export const openUnderDevInfoAction = () => ({type: PortalActionTypes.OPEN_UNDERDEVINFO})
export const closeUnderDevInfoAction = () => ({type: PortalActionTypes.CLOSE_UNDERDEVINFO})
export const openSignInAction = () => ({type: PortalActionTypes.OPEN_SIGNIN})
export const openSignUpAction = () => ({type: PortalActionTypes.OPEN_SIGNUP})
export const closeSignInAction = () => ({type: PortalActionTypes.CLOSE_SIGNIN})
export const closeSignUpAction = () => ({type: PortalActionTypes.CLOSE_SIGNUP})
export const logOutAction = (logged: string) => ({type: UserActionTypes.LOG_OUT, payload: logged})
export const setCurrentPageAction = (page: string) => ({type: UserActionTypes.SET_CURRENT_PAGE, payload: page})
export const clearErrorAction = () => ({type: UserActionTypes.CLEAR_ERROR})
export const authUserAction = (login: string, password: string) => (
  {type: UserActionTypes.AUTHENTICATE_USER, payload: {login, password}}
  )
export const addUserInAction = (login: string, email: string, password: string) => ({
        type: UserActionTypes.ADD_USER,
        payload: {login, email, password}
      })
export const addMealToFavourite = (logged: string, favouriteMeal: IFavouriteMeal) => ({
        type: UserActionTypes.ADD_TO_FAVOURITE,
        payload: {logged, mymeal: favouriteMeal}
      })

export const removeMealFromFavourite = (logged: string, id: string) => ({
        type: UserActionTypes.REMOVE_FROM_FAVORITE,
        payload: {logged, id}
      })

export const clearFavourite = (logged: string) => ({
        type: UserActionTypes.CLEAR_FAVOURITE,
        payload: logged
      })
