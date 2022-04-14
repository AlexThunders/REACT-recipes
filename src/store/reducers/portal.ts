import { IPortal, PortalActions, PortalActionTypes } from "../../types/portal"

const initState: IPortal = {
  isOpenSignIn: false,
  isOpenSignUp: false,
  isOpenUnderDevInfo: false
}

export const portalReducer = (state = initState, action: PortalActions) => {
  switch(action.type) {
    case PortalActionTypes.OPEN_SIGNIN: 
      return {
        ...state,
        isOpenSignIn: true,
        isOpenSignUp: false,
      }

    case PortalActionTypes.CLOSE_SIGNIN: 
      return {
        ...state,
        isOpenSignIn: false,
        isOpenSignUp: false,
      }
    
    case PortalActionTypes.OPEN_SIGNUP: 
      return {
        ...state,
        isOpenSignIn: false,
        isOpenSignUp: true,
      }

    case PortalActionTypes.CLOSE_SIGNUP: 
      return {
        ...state,
        isOpenSignIn: false,
        isOpenSignUp: false,
      }
    
    case PortalActionTypes.OPEN_UNDERDEVINFO: 
      return {
        ...state,
        isOpenUnderDevInfo: true
      }
    
    case PortalActionTypes.CLOSE_UNDERDEVINFO: 
      return {
        ...state,
        isOpenUnderDevInfo: false
      }

    default:
      return state;
  }
}