const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES_LIST': {
      const aux1 = state.moviesList.concat(action.payload.results)
      return {
        ...state,
        moviesList: aux1
      }
    }
    case 'SET_MOVIES_CLEAR': {
      return { ...state, moviesList: action.payload}
    }
    case 'SET_RESULT_LIST': {
      const aux3 = state.resultList.concat(action.payload.results)
      return {
        ...state,
        resultList: aux3
      }
    }
    case 'SET_RESULT_CLEAR': {
      return { ...state, resultList: action.payload}
    }
    default: {
      return state
    }
  }
}
export default reducer