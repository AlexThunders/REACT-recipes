import { Link } from 'react-router-dom'
import { setCustomBgColor } from '../../../api/meal'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import { IUsers } from '../../../types/user'

const mainRestaurantPath = process.env.REACT_APP_MAIN_PATH_RESTAURANT!

const MealNav = () => {
  const {currentPage} = useAppSelector<IUsers>(state => state.users)

  return (
    <nav className='meal-nav'>
      <Link to={`${mainRestaurantPath}countryMeal`} style={{backgroundColor: setCustomBgColor(currentPage, 'country-meal')}}>Country</Link>
      <Link to={`${mainRestaurantPath}searchMeal`} style={{backgroundColor: setCustomBgColor(currentPage, 'search-meal')}}>Search Meal</Link>
      <Link to={`${mainRestaurantPath}favourite`} style={{backgroundColor: setCustomBgColor(currentPage, 'favourite')}}>Favourite meal</Link>
      <Link to={`${mainRestaurantPath}categories`} style={{backgroundColor: setCustomBgColor(currentPage, 'categories')}}>Categories</Link>
    </nav>
  )
}

export default MealNav