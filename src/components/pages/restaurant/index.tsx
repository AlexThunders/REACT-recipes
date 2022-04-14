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

const Restaurant = () => {
  const dispatch = useDispatch()
  const {error, loading, meal} = useAppSelector<IMeal>(state => state.meal)

  useEffect(() => {
    dispatch(setCurrentPageAction('restaurant'));
    dispatch(mainMealAction("",""))
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
    <div className='restaurant'>
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