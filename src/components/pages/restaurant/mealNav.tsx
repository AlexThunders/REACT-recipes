import { useState } from 'react'
import { Link } from 'react-router-dom'
import { setCustomBgColor } from '../../../api/meal'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import { IUsers } from '../../../types/user'

const MealNav = () => {
  const [mainLink, serMainLink] = useState('/appsR7/2021/restaurant/pages/restaurant/')
  const {currentPage} = useAppSelector<IUsers>(state => state.users)

  return (
    <nav className='meal-nav'>
      <Link to={`${mainLink}countryMeal`} style={{backgroundColor: setCustomBgColor(currentPage, 'country-meal')}}>Country</Link>
      <Link to={`${mainLink}searchMeal`} style={{backgroundColor: setCustomBgColor(currentPage, 'search-meal')}}>Search Meal</Link>
      <Link to={`${mainLink}favourite`} style={{backgroundColor: setCustomBgColor(currentPage, 'favourite')}}>Favourite meal</Link>
      <Link to={`${mainLink}categories`} style={{backgroundColor: setCustomBgColor(currentPage, 'categories')}}>Categories</Link>
    </nav>
  )
}

export default MealNav