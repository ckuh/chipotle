export default function reducer (state = {
  projList: [],
  fetching: false,
  fetched: false,
  error: ''
}, action) {
  switch (action.type) {
    case 'FETCH_INGREDIENTS': {
      const newState = {}
      Object.assign(newState, state, {fetching: true})
      return newState
    }
    case 'FETCH_INGREDIENTS_REJECTED': {
      const newState = {}
      Object.assign(newState, state, {fetching: false, error: action.payload})
      return newState
    }
    case 'FETCH_INGREDIENTS_FULFILLED': {
      const newState = {}
      Object.assign(newState, state, {fetching: false, fetched: true, projList: action.payload.data, filterProjList: action.payload.data})
      return newState
    }
    case 'SET_INGREDIENTS': {
      const newState = {}
      Object.assign(newState, state, {filterProjList: action.payload})
      return newState
    }
    default: {
      return state
    }
  }
}
