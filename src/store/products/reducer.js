import { Types } from './types'

const initialState = {
  products: [],
  productsTotal: 0,
  productsError: null,
  productsLoading: false,

  categories: [],
  categoriesTotal: 0,
  categoriesError: null,
  categoriesLoading: false,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.START_FETCH_PRODUCTS:
          return {
            ...state,
            productsLoading: true,
            productsError: null
          }
    
        case Types.END_FETCH_PRODUCTS: {
          const { success, error } = action.payload
          if (error) {
            return {
              ...state,
              products: [],
              productsError: error,
              productsLoading: false
            }
          }
          return {
            ...state,
            products: success,
            productsLoading: false
          }
        }


        case Types.START_FETCH_CATEGORIES:
          return {
            ...state,
            categoriesLoading: true,
            categoriesError: null
          }
    
        case Types.END_FETCH_CATEGORIES: {
          const { success, error } = action.payload
          if (error) {
            return {
              ...state,
              categories: [],
              categoriesError: error,
              categoriesLoading: false
            }
          }
          return {
            ...state,
            categories: success,
            categoriesLoading: false
          }
        }
    
        default:
          return state
    }
}

export default productsReducer