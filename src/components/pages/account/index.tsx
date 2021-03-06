import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useTypedSelector";
import { IUsers } from "../../../types/user";
import { 
  setCurrentPageAction,
  logOutAction } from "../../../actions/user";
import { getEmail } from "../../../api/user";
import { useNavigate } from "react-router-dom";

const mainPath = process.env.REACT_APP_MAIN_PATH!

const Account = () => {
  const {logged, users, darkTheme} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCurrentPageAction('account'))
    document.title = "MEAL | Profile"
  },[])

  const logOut = () => {
    navigate(mainPath)
    dispatch(logOutAction(logged))
  }

  return (
    <div className={darkTheme ? 'account-container night-theme' : 'account-container day-theme'}>
      <div className="profile">
        <h2>Profile</h2>
        <h6>{getEmail(users, logged)}</h6>
      </div>
      <h1>Hi, <span style={{textTransform: 'capitalize'}}>{logged}</span></h1>
      <p>As a registered user you can create a list of your favourite dishes</p>
        <div className='enterBtns'>
          <div className='enterBtn2' onClick={logOut}>Log Out</div>
          <Link to={`${mainPath}/pages/contacts`} className='contactsBtn'>
            <span>Go to contacts</span>
          </Link>
      </div>
    </div>
  )
}

export default Account