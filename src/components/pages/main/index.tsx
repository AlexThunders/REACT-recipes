import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Authcard from './authcard';
import Card from './card';
import { openUnderDevInfoAction, setCurrentPageAction } from '../../../actions/user';
import img1c from '../../../assets/dinner1c.webp'
import img2c from '../../../assets/table1c.webp'
import img3c from '../../../assets/imagesc.webp'
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { IUsers } from '../../../types/user';

const Main = () => {
  const {darkTheme} = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPageAction('/'))
    dispatch(openUnderDevInfoAction())
    document.title = "MEAL | Home"
  },[])
  return (
    <div className={darkTheme ? 'container night-theme' : 'container day-theme'} id="main">
      <Authcard />
      <div className="cards">
        <Card header="Dinner" bgPicture={img1c} icon="fas fa-utensils" />
        <Card header="Lunch" bgPicture={img2c} icon="fas fa-hamburger" />
        <Card header="Dessert" bgPicture={img3c} icon="fas fa-cheese" />
      </div>
      <footer title="Alex_Thunders">Alex Thunders <i className="fas fa-copyright" data-testid="yearTestID"></i> 2022</footer>
    </div>
  )
}

export default Main;