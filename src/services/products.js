import axios from 'axios'

export const fetchProducts = async (params) => {
  try {
    const response = await axios.get('http://localhost:8080/api/products', {
      params
    })
    return [response?.data, null]
  } catch ({ response }) {
    return [null, response && response.data]
  }
}


export const fetchCategories = async (params) => {
  try {
    const response = await axios.get('http://localhost:8080/api/categories', {
      params
    })
    return [response?.data, null]
  } catch ({ response }) {
    return [null, response && response.data]
  }
}