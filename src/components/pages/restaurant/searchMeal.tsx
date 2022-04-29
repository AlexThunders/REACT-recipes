import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import NotFound from '../notFound'
import Meal from './meal'
import MealNav from './mealNav'
import {v4 as uuid} from 'uuid'
import { mainMealAction } from '../../../actions/meal'
import { IMeal } from '../../../types/meal'
import { setCurrentPageAction } from '../../../actions/user'
import { IUsers } from '../../../types/user'

const SearchMeal = () => {
  const {error, loading, meal} = useAppSelector<IMeal>(state => state.meal)
  const {darkTheme } = useAppSelector<IUsers>(state => state.users)
  const dispatch = useDispatch()
  const [inp, setInp] = useState('')

  useEffect(() => {
    dispatch(setCurrentPageAction('search-meal'))
    document.title = "MEAL | Search Meal"
  },[])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(inp === "") return
    dispatch(mainMealAction(inp, "mealTitle"))
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
    <div className={darkTheme ? 'restaurant night-theme' : 'restaurant day-theme'}>
      <MealNav />
      <p className="searchMealsPar">To find meals and receipts enter a name or just a letter in the input down below</p>
      <form className='searchMealsForm' onSubmit={handleSubmit}>
        <input type="text" value={inp} onChange={e => setInp(e.target.value)} data-testid="searchInpID"/>
        <input type="submit" value="search" />
      </form>
      <hr />
      <div className='meal-container' data-testid="mealContainer">
        {meal && meal.map(meal => (
          <Meal key={uuid()} meal={meal} />
        ))}
      </div>
      <footer>AT <i className="fas fa-copyright"></i> Search meal</footer>
    </div>
  )
}

export default SearchMeal