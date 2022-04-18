import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mainMealAction } from '../../../actions/meal'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import NotFound from '../notFound'
import Meal from './meal'
import {v4 as uuid} from 'uuid'
import MealNav from './mealNav'
import youtubeImg from "../../../assets/youtube1.webp"
import { IMeal } from '../../../types/meal'
import { setCurrentPageAction } from '../../../actions/user'
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const {error, loading, meal} = useAppSelector<IMeal>(state => state.meal)
  const dispatch = useDispatch()
  let params = useParams();

  useEffect(() => {
    let idMeal = params.mealId!
    dispatch(mainMealAction(idMeal, "search"))
    dispatch(setCurrentPageAction('meal-info'))
    document.title = "MEAL | Meal-info"
  },[])

  const renderRows = (meal: any[], ingredientKey: string): string  => {
    const res = Object.entries(meal)
      .filter(([key, val]) => val !== "" && key.includes('strMeasure'))
      .filter(([key,val]) => ingredientKey.slice(13) === key.slice(10))
    return res?.length > 0 && res[0][1]
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
      <div className='restaurant meal-info'>
        <MealNav />
          {meal?.length > 0 && meal.map(meal => (
            <div key={uuid()} className="meal-card">
              <h2>{meal.strArea} {' '} {meal.strCategory}</h2>
              <Meal meal={meal} />
              <p className='meal-instruction'>{meal.strInstructions}</p>
              <hr />
              <table className='receiptTable'>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(meal).filter(([key, val]) => val !== "" && key.includes('strIngredient')).map(([key, val]) => (
                      <tr key={uuid()}>
                        <td>{typeof val === "string" && val}</td>
                        <td>{renderRows(meal, key)}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <hr />
              {meal.strYoutube !== "" && 
                <>
                  <p>Check out video about this meal: </p>
                  <a href={meal.strYoutube} className="youtubelink" target="_blank">
                    <img src={youtubeImg} width="100px" height="30px" alt="youtube-link" />
                  </a>
                </>
              }
            </div>
          ))}
      </div>
  )
}

export default MealInfo