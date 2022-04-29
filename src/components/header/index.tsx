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
  logOutAction, 
  toggleTheme} from "../../actions/user";
import { useNavigate } from "react-router-dom";

const mainPath = process.env.REACT_APP_MAIN_PATH!


const Header = () => {
  const {logged, currentPage, darkTheme} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const toggleAuth = () => {
    dispatch(clearErrorAction())
    logged !== '' ? getOut() : dispatch(openSignInAction())
  }

  const getOut = () => {
    navigate(mainPath)
    dispatch(logOutAction(logged))
  }

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className="header" style={{"backgroundColor": bgCustomColor(currentPage)}} id="headerId" >
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
      <div className="goback-btn" onClick={(() => navigate(-1))} data-testid="gobacktestID"><i className="fas fa-chevron-left"></i></div>
      <div className="rectangle"></div>
      <button className="enterBtn" onClick={toggleAuth}>
        <span>{logged !== '' ? 'Logout' : 'Login'}</span>
      </button>

      <div 
        className="theme-btn"
        onClick={handleToggleTheme}
        style={darkTheme ? {backgroundColor: '#94bbe2', color: '#002259'} : {backgroundColor: '#002259', color: 'white'}}
        >
        {darkTheme ? 'day-theme' : 'night-theme'}
        </div>
    </div>
  )
}

export default Header;