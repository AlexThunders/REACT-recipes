import Main from "./components/pages/main";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Contacts from "./components/pages/contacts";
import Account from "./components/pages/account";
import { useAppSelector } from "./hooks/useTypedSelector";
import SignInPortal from "./components/portal/signin";
import SignUpPortal from "./components/portal/signup";
import Restaurant from "./components/pages/restaurant";
import CountryMeal from "./components/pages/restaurant/countryMeal";
import SearchMeal from "./components/pages/restaurant/searchMeal";
import NotFound from "./components/pages/notFound";
import MealInfo from "./components/pages/restaurant/mealInfo";
import Categories from "./components/pages/restaurant/categories";
import Favourite from "./components/pages/restaurant/favourite";
import UnderDevInfo from "./components/portal/info";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeUnderDevInfoAction, openUnderDevInfoAction } from "./actions/user";


const App = () => {
  const {isOpenSignIn, isOpenSignUp, isOpenUnderDevInfo} = useAppSelector(state => state.portal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(openUnderDevInfoAction())
  },[])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/appsR7/2021/restaurant" element={<Main />} />
        <Route path="/appsR7/2021/restaurant/pages/contacts" element={<Contacts />} />
        <Route path="/appsR7/2021/restaurant/pages/account" element={<Account />} />
        <Route path="/appsR7/2021/restaurant/pages/restaurant" element={<Restaurant />} />
        <Route path="/appsR7/2021/restaurant/pages/restaurant/countryMeal" element={<CountryMeal />} />
        <Route path="/appsR7/2021/restaurant/pages/restaurant/searchMeal" element={<SearchMeal />} />
        <Route path="/appsR7/2021/restaurant/pages/restaurant/:mealId" element={<MealInfo />} />
        <Route path="/appsR7/2021/restaurant/pages/restaurant/categories" element={<Categories />} />
        <Route path="/appsR7/2021/restaurant/pages/restaurant/favourite" element={<Favourite />} />
        <Route path="*" element={<NotFound error={{message: "There's nothing here!", status: 404}} />}/>
      </Routes>
      {isOpenSignIn && <SignInPortal />}
      {isOpenSignUp && <SignUpPortal />}
      {isOpenUnderDevInfo && <UnderDevInfo />}
    </div>
  );
}

export default App;
