const initialState = {
  page: 0,
  pageCount: 0,
}

/**
 * Change page takes in the current page and the change we want to make 
 * it then passes those on to dispatch
 * @param {number} page - the current slider state for page
 * @param {number} change - the change we would like to effect on the state
 * @returns {function} - dispatch action to our reducer
 */
export const changePage = (page, change) => {
  return (dispatch) => {
    dispatch({type: 'CHANGE_PAGE', change});
  }
}

/**
 * Select page allows us to select any page instead of incrementing
 * @param {number} page - The page number we would like to change the state to
 * @returns {function} - dispatch action to our reducer
 */
export const selectPage = (page) => {
  return (dispatch) => {
    dispatch({ type: 'SELECT_PAGE', page });
  }
}

/**
 * Slider reducer is the reducer for our stateful changes
 * @param {object} [state=initialState] - The current state of the slider
 * @param {object} action 
 * @param {string} action.type 
 * @param {number} action.change 
 * @returns {object} - The new state 
 */
const sliderReducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type){
    case 'CHANGE_PAGE':
      if(newState.page + action.change > newState.pageCount) {
        newState.page = 0;
        break;
      }
      if (newState.page + action.change < 0) {
        newState.page = newState.pageCount;
        break;
      }
      newState.page += action.change;
      break;
    case 'SELECT_PAGE':
      newState.page = action.page;
      break;
    case 'PAGE_COUNT':
      newState.pageCount = action.pageCount;
      break;
    default:
      break;
  }
  return newState;
}

export default sliderReducer;