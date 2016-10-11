import axios from 'axios'

export function getIngredients () {
  return dispatch => {
    dispatch({type: 'FETCH_INGREDIENTS'})
    axios.get(
      '/api/ingredients'
    )
    .then((resp) => {
      dispatch({type: 'FETCH_INGREDIENTS_FULFILLED', payload: resp.data})
    })
    .catch((error) => {
      dispatch({type: 'FETCH_INGREDIENTS_REJECTED', payload: error})
    })
  }
}
