import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { mainMealAction } from '../../../actions/meal'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import NotFound from '../notFound'
import Meal from './meal'
import {v4 as uuid} from 'uuid'
import MealNav from './mealNav'
import { countriesList } from '../../../api/meal'
import { IMeal } from '../../../types/meal'
import { setCurrentPageAction } from '../../../actions/user'

const CountryMeal = () => {
  const [country, setCountry] = useState('Italian')
  const {error, loading, meal} = useAppSelector<IMeal>(state => state.meal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mainMealAction(country, "country"))
    dispatch(setCurrentPageAction('country-meal'))
  }, [])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value)
    dispatch(mainMealAction(e.target.value, "country"))
  }

  if(loading) {
    return (
      <div className='restaurant'>
        <h2>Loading....</h2>
      </div>
    )
  }

  if(error) {
    return <NotFound error={error} />
  }

  return (
    <div className='restaurant'>
      <MealNav />
      <h3>Meal in 
        <select value={country} onChange={handleChange}>
          {countriesList.map(countryFromList => (
          <option key={uuid()} value={countryFromList}>{countryFromList}</option>
        ))}
        </select>
      restaurants</h3>
      <div className='meal-container'>
        {meal && meal.map(meal => (
          <Meal key={uuid()} meal={meal} />
        ))}
      </div>
      <footer>AT <i className="fas fa-copyright"></i> Countries</footer>
    </div>
  )
}

export default CountryMeal