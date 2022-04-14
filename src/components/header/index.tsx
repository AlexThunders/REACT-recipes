import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedSelector";
import { IUsers } from "../../types/user";
import logo from '../../assets/restlogo.png'
import { 
  bgCustomColor,
  customizeLink,
  customizeLinkTitle } from "../../api/user";
import { 
  openSignInAction,
  clearErrorAction,
  logOutAction } from "../../actions/user";

const Header = () => {
  const {logged, currentPage} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()
  
  const toggleAuth = () => {
    dispatch(clearErrorAction())
    logged !== '' ? getOut() : dispatch(openSignInAction())
  }

  const getOut = () => {
    window.location.assign('/appsR7/2021/restaurant')
    dispatch(logOutAction(logged))
  }

  return (
    <div className="header" style={{"backgroundColor": bgCustomColor(currentPage)}}>
      <div className='logo'>
        <img className="logopic" src={logo} alt="logo" />
      </div>
      <Link to={customizeLink(currentPage, logged)}
         className="headerLink">
         <span>{customizeLinkTitle(currentPage, logged)}</span>
      </Link>
      <Link to={customizeLink(currentPage, 'restaurant')}
         className="headerRestaurantLink">
         <span>{customizeLinkTitle(currentPage, 'restaurant')}</span>
      </Link>
      <a href="https://alexthunders.ru"><i className="fas fa-home"></i></a>
      <div className="rectangle"></div>
      <button className="enterBtn" onClick={toggleAuth}>
        <span>{logged !== '' ? 'Logout' : 'Login'}</span>
      </button>
    </div>
  )
}

export default Header;