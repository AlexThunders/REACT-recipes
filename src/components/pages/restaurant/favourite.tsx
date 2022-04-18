import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import { IFavouriteMeal, IUsers } from '../../../types/user'
import MealNav from './mealNav'
import {v4 as uuid} from 'uuid'
import Meal from './meal'
import { useDispatch } from 'react-redux'
import { clearFavourite, setCurrentPageAction } from '../../../actions/user'

const Favourest = () => {
  const {logged, users, darkTheme } = useAppSelector<IUsers>(state => state.users)
  const [favouriteList, setFavouriteList] = useState<IFavouriteMeal[]>(() => {
    let mainuser = users?.length > 0 && users.filter(user => user.login === logged)[0]
    return mainuser ? mainuser.favouriteMeals : []
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPageAction('favourite'))
    document.title = "MEAL | Favourite"
  },[])

  useEffect(() => {
    let mainuser = users?.length > 0 && users.filter(user => user.login === logged)[0]
    const renewdList = mainuser ? mainuser.favouriteMeals : []
    setFavouriteList(renewdList)
  },[users])

  const handleClear = () => {
    dispatch(clearFavourite(logged))
  }

  return (
    <div className={darkTheme ? 'restaurant night-theme' : 'restaurant day-theme'}>
      <MealNav />
      <h1>My favorite meals</h1>
      {logged === "" ? 
        <p className='favouriteMealPar'>You must Sign In to see favourite meals</p> : 
          <>
            {favouriteList?.length > 0 && <div className='clearbtn' onClick={handleClear}>Clear</div>}

            <div className='meal-container favourite-container'>
              {favouriteList?.length > 0 ? 
                <>
                  {favouriteList.map(meal => (
                      <Meal key={uuid()} meal={meal} />
                  ))} 
                </>          
                : <p className='favouriteMealPar'>You haven't added favourite meals yet</p>
              }
            </div>
          </>
  
        }
    </div>
  )
}

export default Favourest