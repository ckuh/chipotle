export default function reducer (state = {
  ingredientsList: [],
  fetching: false,
  fetched: false,
  error: ''
}, action) {
  switch (action.type) {
    case 'FETCH_INGREDIENTS': {
      console.log('fetching')
      return {...state, fetching: true}
    }
    case 'FETCH_INGREDIENTS_REJECTED': {
      return {...state, fetching: false, error: action.paylaod}
    }
    case 'FETCH_INGREDIENTS_FULFILLED': {
      return {...state, fetching: false, fetched: true, ingredientsList: action.payload}
    }
    default: {
      return state
    }
  }
}
