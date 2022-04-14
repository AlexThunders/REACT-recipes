import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { 
  addUserInAction,
  clearErrorAction,
  closeSignUpAction,
  openSignInAction } from '../../actions/user';

const SignUpPortal:React.FC = () => {
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkAuth, setCheckAuth] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [passError, setPassError] = useState('')
  const {error} = useAppSelector(state => state.users)
  const dispatch = useDispatch()
  
  useEffect(() => {
    !error && checkAuth && switchPortals()
  },[error, checkAuth])

  const addUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(loginError === '' && passError === '') {
    dispatch(clearErrorAction())
      dispatch(addUserInAction(login, email, password))
      setLogin('');
      setEmail('');
      setPassword('');
      setCheckAuth(true)
    }
  }

  const switchPortals = () => {
    dispatch(closeSignUpAction())
    dispatch(openSignInAction())
  }

  const validatePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    let pattern = /^[0-9a-zA-Zа-яА-ЯёЁ@$!%*#?&]*$/
      if(pattern.test(e.target.value)) {
        setPassError('')
        setPassword(e.target.value)
        if(password.length < 8) {setPassError('Password shouldn\'t be less than 8 signs.')}
        if(password.length >= 25) {setPassError('Password shouldn\'t exceed 25 signs.')}  
      } else {
        setPassError('For password use only these symbols @$!%*#?&')
      }
  }

  const validateLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let pattern = /^[0-9a-zA-Zа-яА-ЯёЁ]*$/
    if(pattern.test(e.target.value)) {
      setLogin(e.target.value)
      setLoginError('')
      if(login.length >= 20) {
        setLoginError('Name shouldn\'t exceed 20 signs.')
      } 
    } 
    else {
      setLoginError('Name must include only letters and numbers.')
    }
  }

  return ReactDom.createPortal(
    <div className="authPortal">
      <h3>Create an account</h3>
      <div onClick={() => dispatch(closeSignUpAction())}>
        <i className="fas fa-window-close"></i>
      </div>
      <h5 className="error">{error && error}{' '}{loginError}{' '}{passError}</h5>
      <form onSubmit={addUser}>
        <label is="3dx" htmlFor='login'>Name: </label><br />
        <input 
          type="text"
          name="login"
          value={login}
          placeholder='enter nickname'
          onChange={e => validateLogin(e)}
          required
          autoComplete='off'
        />
        <br /><br />
        <label is="3dx" htmlFor='email'>E-mail: </label><br />
        <input 
          type="email"
          name="email"
          value={email}
          placeholder='enter email'
          onChange={e => setEmail((e.target.value))}
          required
          autoComplete='off'
        />
        <br /><br />
        <label is="3dx" htmlFor='password' >Password: </label><br />
        <input 
          type="text"
          name="password"
          value={password}
          placeholder='enter password'
          onChange={e => validatePass(e)}
          required
          autoComplete='off'
        />
        <br /><br />
        <input type="submit" name="submit" value="create" className='sbmt'/>
      </form>
    </div>,
    document.getElementById('signup-portal') as HTMLDivElement
  );
}
 
export default SignUpPortal;
