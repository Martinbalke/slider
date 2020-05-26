const initialState = {
  page: 0,
}

export const changePage = (page, change) => {
  console.log(page);

  return (dispatch) => {
    dispatch({type: 'NEXT_PAGE', change});
  }
}

const sliderReducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type){
    case 'NEXT_PAGE':
      console.log(action)
      break;
    default:
      break;
  }
  return newState;
}

export default sliderReducer;