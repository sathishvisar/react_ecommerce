import { Types } from './types'
import { fetchProducts, fetchCategories } from '../../services/products'

const startFetchProducts = () => ({
    type: Types.START_FETCH_PRODUCTS,
    payload: {}
})
  
const endFetchProducts = (success, error) => ({
    type: Types.END_FETCH_PRODUCTS,
    payload: {
      success,
      error
    }
})
  
export const FetchProducts = (params) => async (dispatch) => {
    dispatch(startFetchProducts())
    const [response, error] = await fetchProducts(params)
    dispatch(endFetchProducts(response, error))
}


const startFetchCategories = () => ({
    type: Types.START_FETCH_CATEGORIES,
    payload: {}
})
  
const endFetchCategories = (success, error) => ({
    type: Types.END_FETCH_CATEGORIES,
    payload: {
      success,
      error
    }
})
  
export const FetchCategories = (params) => async (dispatch) => {
    dispatch(startFetchCategories())
    const [response, error] = await fetchCategories(params)
    dispatch(endFetchCategories(response, error))
}