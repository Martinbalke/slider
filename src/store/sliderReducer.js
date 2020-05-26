const initialState = {
  page: 0,
  pageCount: 0,
}


export const changePage = (page, change) => {
  return (dispatch) => {
    dispatch({type: 'CHANGE_PAGE', change});
  }
}

export const selectPage = (page) => {
  return (dispatch) => {
    dispatch({ type: 'SELECT_PAGE', page });
  }
}

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