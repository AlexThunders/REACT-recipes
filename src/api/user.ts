import { IUser } from '../types/user';

const mainPath = process.env.REACT_APP_MAIN_PATH!;
const mainRestaurantPath = process.env.REACT_APP_MAIN_PATH_RESTAURANT!;

export const getUsersFromLocal = () => {
  const localUsers = localStorage.getItem('users');
  return localUsers ? JSON.parse(localUsers).users : [];
};

export const getLoggedFromLocal = () => {
  const localUsers = localStorage.getItem('users');
  return localUsers ? JSON.parse(localUsers).logged : '';
};

export const customizeLink = (currentPage: string, logged: string) => {
  if (currentPage !== 'restaurant' && logged === 'restaurant')
    return mainRestaurantPath;
  if (currentPage === 'restaurant' && logged === 'restaurant') return mainPath;
  if (currentPage === 'restaurant' && logged === '')
    return `${mainPath}/pages/contacts`;
  if (
    currentPage === 'country-meal' ||
    currentPage === 'search-meal' ||
    currentPage === 'favourite' ||
    currentPage === 'categories' ||
    currentPage === 'meal-info'
  )
    return `${mainPath}/pages/contacts`;
  if (currentPage === 'restaurant' && logged !== '')
    return `${mainPath}/pages/contacts`;
  if (currentPage === '/' && logged === '') return `${mainPath}/pages/contacts`;
  if (currentPage === '/' && logged !== '') return `${mainPath}/pages/account`;
  if (currentPage === 'contacts' && logged === '') return mainPath;
  if (currentPage === 'contacts' && logged !== '')
    return `${mainPath}/pages/account`;
  if (currentPage === 'account' && logged !== '') return mainPath;
  if (currentPage === 'restaurant') return mainPath;
  return mainPath;
};

export const customizeLinkTitle = (currentPage: string, logged: string) => {
  if (currentPage !== 'restaurant' && logged === 'restaurant') return 'Recipes';
  if (currentPage === 'restaurant' && logged === 'restaurant') return 'Main';
  if (currentPage === '/' && logged === '') return 'Contacts';
  if (currentPage === '/' && logged !== '') return 'Profile';
  if (currentPage === 'contacts' && logged === '') return 'Main';
  if (currentPage === 'contacts' && logged !== '') return 'Profile';
  if (currentPage === 'account' && logged !== '') return 'Main';
  return 'Contacts';
};

export const getEmail = (users: IUser[], logged: string) => {
  let currentEmailArr = users.filter((user) => user.login === logged);
  return currentEmailArr !== undefined ? currentEmailArr[0].email : '';
};

export const bgCustomColor = (currentPage: string) => {
  if (currentPage === 'restaurant') return '#ffff66';
  if (currentPage === 'country-restaurant') return '#ffff1a';
  if (currentPage === 'contacts') return '#94b8b8';
  if (currentPage === '/') return '#80aaff';
  if (currentPage === 'account') return '#00e673';
  return 'hsl(205, 86%, 97%)';
};
