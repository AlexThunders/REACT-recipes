export const categoriesList = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"]

export const countriesList = ["Canadian", "Italian", "Russian", "French", "Chinese", "Spanish", "Turkish", "British", "American", "Jamaican", "Dutch", "Egyptian", "Greek", "Indian", "Irish", "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Croatian", "Vietnamese", "Tunisian", "Polish"]

export const setCustomBgColor = (currentPage: string, link: string) => {
  if(currentPage === link) return 'green'
  return 'rgb(101, 141, 110)'
}