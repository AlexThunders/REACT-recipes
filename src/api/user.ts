import { IUser } from "../types/user"

export const getUsersFromLocal = () => {
  const localUsers = localStorage.getItem('users')
  return localUsers ? JSON.parse(localUsers).users : []
}

export const getLoggedFromLocal = () => {
  const localUsers = localStorage.getItem('users')
  return localUsers ? JSON.parse(localUsers).logged : ''
}

export const customizeLink = (currentPage: string, logged: string) => {
  if(currentPage !== 'restaurant' && logged === 'restaurant') return '/appsR7/2021/restaurant/pages/restaurant'
  if(currentPage === 'restaurant' && logged === 'restaurant')  return '/appsR7/2021/restaurant'
  if(currentPage === 'restaurant' && logged === '') return '/appsR7/2021/restaurant/pages/contacts'
  if(currentPage === 'restaurant' && logged !== '') return '/appsR7/2021/restaurant/pages/contacts'
  if(currentPage === '/' && logged === '') return '/appsR7/2021/restaurant/pages/contacts'
  if(currentPage === '/' && logged !== '') return '/appsR7/2021/restaurant/pages/account'
  if(currentPage === 'contacts' && logged === '') return '/appsR7/2021/restaurant'
  if(currentPage === 'contacts' && logged !== '') return '/appsR7/2021/restaurant/pages/account'
  if(currentPage === 'account' && logged !== '') return '/appsR7/2021/restaurant'
  if(currentPage === 'restaurant') return '/appsR7/2021/restaurant'
  return '/appsR7/2021/restaurant'
}

export const customizeLinkTitle = (currentPage: string, logged: string) => {
  if(currentPage !== 'restaurant' && logged === 'restaurant') return 'Recipes'
  if(currentPage === 'restaurant' && logged === 'restaurant')  return 'Home'
  if(currentPage === '/' && logged === '') return 'Contacts'
  if(currentPage === '/' && logged !== '') return 'Profile'
  if(currentPage === 'contacts' && logged === '') return 'Home'
  if(currentPage === 'contacts' && logged !== '') return 'Profile'
  if(currentPage === 'account' && logged !== '') return 'Home'
  return 'Contacts'
}

export const getEmail = (users: IUser[], logged: string ) => {
  let currentEmailArr = users.filter(user => user.login === logged)
  return currentEmailArr !== undefined ? currentEmailArr[0].email : ''
}

export const bgCustomColor = (currentPage: string) => {
  if(currentPage === 'restaurant') return '#ffff66'
  if(currentPage === 'country-restaurant') return '#ffff1a'
  if(currentPage === 'contacts') return '#94b8b8'
  if(currentPage === '/') return '#80aaff'
  if(currentPage === 'account') return '#00e673'
  return 'hsl(205, 86%, 97%)'
}