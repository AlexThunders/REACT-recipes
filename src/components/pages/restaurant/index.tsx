import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mainMealAction } from '../../../actions/meal'
import { setCurrentPageAction } from '../../../actions/user'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import {v4 as uuid} from 'uuid'
import NotFound from '../notFound'
import Meal from './meal'
import MealNav from './mealNav'
import { IMeal } from '../../../types/meal'
import { IUsers } from '../../../types/user'

const Restaurant = () => {
  const dispatch = useDispatch()
  const {error, loading, meal} = useAppSelector<IMeal>(state => state.meal)
  const {darkTheme} = useAppSelector<IUsers>(state => state.users)

  useEffect(() => {
    dispatch(setCurrentPageAction('restaurant'));
    dispatch(mainMealAction("",""))
    document.title = "MEAL | Recipes"
  },[])

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
      <h1>Restaurant</h1>
      <p className='mainInspirationPar'>Looking for inspiration on how to cook, what to cook, then you are at the right place</p>
      <div className='meal-container'>
        {meal && meal.map(meal => (
          <Meal key={uuid()} meal={meal} />
        ))}
      </div>
      <footer>Alex Thunders <i className="fas fa-copyright"></i> 2022</footer>
    </div>
  )
}

export default Restaurant