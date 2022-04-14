import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMealToFavourite, removeMealFromFavourite } from '../../../../actions/user'
import { useAppSelector } from '../../../../hooks/useTypedSelector'
import { IFavouriteMeal, IUsers } from '../../../../types/user'

interface IProps {
  meal: any,
  trashIcon?: any;
}

const Meal: React.FC<IProps> = ({meal}) => {
  const [inFavourite, setInFavourite] = useState(false)
  const {logged, users, currentPage} = useAppSelector<IUsers>(state => state.users)
  const [favouriteList, setFavouriteList] = useState<IFavouriteMeal[]>(() => {
    let mainuser = users?.length > 0 && users.filter(user => user.login === logged)[0]
    return mainuser ? mainuser.favouriteMeals : []
  })
  const dispatch = useDispatch()

  useEffect(() => {
    checkForFavourite()
  },[inFavourite])

  const handleClick = () => {
  if(window.location.pathname.includes(meal.idMeal)) return
    window.location.assign(`/appsR7/2021/restaurant/pages/restaurant/:${meal.idMeal}`)
  }

  const checkForFavourite = () => {
    if(favouriteList?.length > 0 &&  favouriteList?.some(user => user.idMeal === meal.idMeal)) {
      setInFavourite(true)
    }
  }

  const addToFavorite = () => {
    dispatch(addMealToFavourite(logged, meal))
    checkForFavourite()
  }

  const deleteFromFavorite = () => {
    dispatch(removeMealFromFavourite(logged, meal.idMeal))
  }

  return (
    <div className='meal' >
      <h3 onClick={handleClick}>{meal.strMeal}</h3> 
      
        <div className='addtofavor_btn' onClick={addToFavorite}>
          {inFavourite ? <i className="fas fa-bookmark"></i> : <i className="fas fa-star"></i>}
        </div> 
          {
            currentPage === 'favourite' && 
              <div className='deletemeal_btn' onClick={deleteFromFavorite}>
                <i className="fas fa-trash-alt"></i> 
              </div>
          }
      <img onClick={handleClick} src={meal.strMealThumb} alt={meal.strMealThumb} />
    </div>
  )
}

export default Meal


    