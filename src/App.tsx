import Main from './components/pages/main';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Contacts from './components/pages/contacts';
import Account from './components/pages/account';
import { useAppSelector } from './hooks/useTypedSelector';
import SignInPortal from './components/portal/signin';
import SignUpPortal from './components/portal/signup';
import Restaurant from './components/pages/restaurant';
// import CountryMeal from './components/pages/restaurant/countryMeal';
import SearchMeal from './components/pages/restaurant/searchMeal';
import NotFound from './components/pages/notFound';
import MealInfo from './components/pages/restaurant/mealInfo';
import Categories from './components/pages/restaurant/categories';
import Favourite from './components/pages/restaurant/favourite';
import UnderDevInfo from './components/portal/info';
const mainPath = process.env.REACT_APP_MAIN_PATH!;

const App = () => {
  const { isOpenSignIn, isOpenSignUp, isOpenUnderDevInfo } = useAppSelector(
    (state) => state.portal
  );

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path={mainPath}>
          <Route index={true} element={<Main />} />
          <Route path={`${mainPath}/pages/contacts`} element={<Contacts />} />
          <Route path={`${mainPath}/pages/account`} element={<Account />} />
          <Route path={`${mainPath}/pages/restaurant`}>
            <Route index={true} element={<Restaurant />} />
            {/* <Route path='countryMeal' element={<CountryMeal />} /> */}
            <Route path='searchMeal' element={<SearchMeal />} />
            <Route path=':mealId' element={<MealInfo />} />
            <Route path='categories' element={<Categories />} />
            <Route path='favourite' element={<Favourite />} />
          </Route>
        </Route>
        <Route
          path='*'
          element={
            <NotFound
              error={{ message: "There's nothing here!", status: 404 }}
            />
          }
        />
      </Routes>
      {isOpenSignIn && <SignInPortal />}
      {isOpenSignUp && <SignUpPortal />}
      {isOpenUnderDevInfo && <UnderDevInfo />}
    </div>
  );
};

export default App;
