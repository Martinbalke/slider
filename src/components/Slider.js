import React from 'react';
import {connect} from 'react-redux';
import {changePage} from '../store/sliderReducer';

function Slider(props){

return(
  <div>
    <button onClick={ () => props.dispatch(changePage(props.page, +1))}></button>
    <button onClick={() => props.dispatch(changePage(props.page, -1))}></button>
  </div>
)
}
let mSTP = state => ({
  page: state.page,
})

export default connect(mSTP)(Slider);