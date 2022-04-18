import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { mainMealAction } from '../../../actions/meal'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import {v4 as uuid} from 'uuid'
import Meal from './meal'
import MealNav from './mealNav'
import { categoriesList } from '../../../api/meal'
import { IMeal } from '../../../types/meal'
import { setCurrentPageAction } from '../../../actions/user'

const Categories = () => {
  const [category, setCategory] = useState('Beef')
  const [myList, setMyList] = useState(categoriesList)
  const {error, loading, meal} = useAppSelector<IMeal>(state => state.meal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mainMealAction(category,"category"))
    dispatch(setCurrentPageAction('categories'))
    document.title = "MEAL | Categories"
  },[])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
    dispatch(mainMealAction(e.target.value, "category"))
  }

  return (
    <div className='restaurant'>
      <MealNav />
      <h1>Choose Category
      <select value={category} onChange={handleChange}>
        {myList.map(foodCategory => (
          <option key={uuid()} value={foodCategory}>{foodCategory}</option>
        ))}
      </select>
      </h1>
      <div className='meal-container'>
        {meal && meal.map(meal => (
          <Meal key={uuid()} meal={meal} />
        ))}
      </div>
      <footer>AT <i className="fas fa-copyright"></i> Categories</footer>
    </div>
  )
}

export default Categories