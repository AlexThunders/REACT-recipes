import { useAppSelector } from "../../../hooks/useTypedSelector";
import {v4 as uuid} from 'uuid';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPageAction } from "../../../actions/user";
import { IUsers } from "../../../types/user";
import YandexMap from "./map";
import { FcBusinessman } from "react-icons/fc";

const Contacts = () => {
  const [showMarker, setShowMarker] = useState(true)
  const {logged, users} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPageAction('contacts'))
    document.title = "MEAL | Contacts"
  },[])

  return (
    <div className='contacts-container'>
      <h1>Clients <FcBusinessman className="contactIcon"/></h1>
      <h5>HQ is marked on the map</h5>
      <YandexMap />
      <p>There is a list of registered users</p>
      {logged ? 
        <ol>
          {users.map(user => (
            <li key={uuid()}>{user.login}</li>
          ))}
        </ol> : 
        <h3>Sign In to see the list of registered visitors</h3>
      }
      <footer>Alex Thunders <i className="fas fa-copyright"></i> 2022</footer>
    </div>
  )
}

export default Contacts;