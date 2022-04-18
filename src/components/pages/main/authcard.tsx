import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useTypedSelector";
import { 
  clearErrorAction,
  closeSignInAction,
  openSignInAction, 
  logOutAction } from "../../../actions/user";
import { IUsers } from "../../../types/user";
import { useNavigate } from "react-router-dom";
const mainPath = process.env.REACT_APP_MAIN_PATH!


const Authcard = () => {
  const {logged, darkTheme} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(closeSignInAction())
  },[])

  const toggleAuth = () => {
    dispatch(clearErrorAction())
    logged !== '' ? getOut() : dispatch(openSignInAction())
  }

  const getOut = () => {
    navigate(mainPath)
    dispatch(logOutAction(logged))
  }

  return (
    <div className={darkTheme ? 'authcard night-theme' : 'authcard day-theme'}>
      <h1>Our recipes are used in the best restaurants in the world</h1>
      <div className='enterBtns'>
        <div className='enterBtn2' onClick={toggleAuth}>
          { logged !== '' ? 'Log Out' : 'Log In' }
        </div>
        <Link to={`${mainPath}/pages/contacts`} className='contactsBtn' >
          <span>Contacts</span>
        </Link>
      </div>
      <h4>We show you dishes from different countries</h4>
    </div>
  )
}

export default Authcard