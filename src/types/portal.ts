export interface IPortal {
  isOpenSignIn: boolean;
  isOpenSignUp: boolean;
  isOpenUnderDevInfo: boolean;
}

export enum PortalActionTypes {
  OPEN_SIGNIN = "OPEN_SIGNIN",
  OPEN_SIGNUP = "OPEN_SIGNUP",
  CLOSE_SIGNIN = "CLOSE_SIGNIN",
  CLOSE_SIGNUP = "CLOSE_SIGNUP",
  OPEN_UNDERDEVINFO = "OPEN_UNDERDEVINFO",
  CLOSE_UNDERDEVINFO = "CLOSE_UNDERDEVINFO"
}

type OpenSignInAction = {
  type: PortalActionTypes.OPEN_SIGNIN
}

type CloseSignInAction = {
  type: PortalActionTypes.CLOSE_SIGNIN
}

type OpenSignUpAction = {
  type: PortalActionTypes.OPEN_SIGNUP
}

type CloseSignUpAction = {
  type: PortalActionTypes.CLOSE_SIGNUP
}

type OpenUnderDevInfo = {
  type: PortalActionTypes.OPEN_UNDERDEVINFO
}

type CloseUnderDevInfo = {
  type: PortalActionTypes.CLOSE_UNDERDEVINFO
}


export type PortalActions =
  OpenSignInAction |
  CloseSignInAction |
  OpenSignUpAction |
  CloseSignUpAction |
  OpenUnderDevInfo |
  CloseUnderDevInfo;