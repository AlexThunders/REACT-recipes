import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { IUser, IUsers } from '../../types/user';
import { 
  authUserAction,
  clearErrorAction,
  closeSignInAction,
  openSignUpAction, } from '../../actions/user';

const SignInPortal:React.FC = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const {error, users} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()
  
  const checkAuth = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(authUserAction(login, password))
    if(users && users.some((user: IUser) => user.authorized === true)) {
      dispatch(closeSignInAction())
      window.location.assign("/appsR7/2021/restaurant/pages/account")
    }
    setLogin('');
    setPassword('');
  }

  const openSignUp = () => {
    dispatch(openSignUpAction())
    dispatch(clearErrorAction())
  }

  return ReactDom.createPortal(
    <div className="authPortal">
      <h3>Please, sign in</h3>
      <div onClick={() => dispatch(closeSignInAction())}>
        <i className="fas fa-window-close"></i>
      </div>
      <h5 className="error">{error && error}</h5>
      <form onSubmit={checkAuth}>
        <label is="3dx" htmlFor='login'>Name: </label><br />
        <input 
          type="text"
          name="login"
          value={login}
          placeholder='enter nickname'
          onChange={e => setLogin(e.target.value)}
          required
          autoComplete='off'
        />
        <br /><br />
        <label is="3dx" htmlFor='password' >Paasword: </label><br />
        <input 
          type="password"
          name="password"
          value={password}
          placeholder='enter password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <input type="submit" name="submit" value="Sign In" className='sbmt'/>
        <button className='create-acc-btn' type="button" onClick={openSignUp}>Register</button>
      </form>
    </div>,
    document.getElementById('signin-portal') as HTMLDivElement
  );
}
 
export default SignInPortal;
