import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changePage, selectPage } from '../store/sliderReducer';

/**
 * Slider is a wrapper component for content that is displayed on a carousel
 * the content is displayed dynamically and can be any type
 * @param {number} props.page - The current selected active page 
 * @param {function} props.dispatch - Dispatch function for our redux store controller
 * @returns {JSX} - The fully rendered component
 */
function Slider(props) {


  const { page, dispatch } = props;
  //Setting up an automatic page scroll stateful variable
  const [pageScroll, setPageScroll] = useState(null);

  //This use effect sets and or resets the automatic scroll through the children of slider
  useEffect(() => {
    clearTimeout(pageScroll);
    setPageScroll(setTimeout(() => {
      dispatch(changePage(page, +1))
    }, 4000))
    //eslint-disable-next-line
  }, [page]);

  //Initializing the number of pages/children that the component has to use this number
  //as a control for other stateful actions
  useEffect(() => {
    dispatch({ type: 'PAGE_COUNT', pageCount: props.children.length - 1 });
  })

  /**
   * Dynamic checkboxes is a variable that allows us to generate a checkbox selector
   * for each child component
   */
  const dynamicCheckboxes = props.children.map((child, index) => {
    return (
      <label for={index} className='checkbox__label'>
        <input id={index} type='checkbox' key={index} checked={page === index ? true : false} onChange={(e) => dispatch(selectPage(index))} />
        <span className='checkbox__checkmark' />
      </label>
    )
  })

  /**
   * Dynamic children allows us to wrap each child element in a div that controls styling and
   * active state
   */
  const dynamicChildren = props.children.map((child, index) => <div className={page === index ? 'active content__child' : 'inactive content__child'}>{child}</div>);

  return (
    <div className='slider'>
      <button className=' slider__button slider__button-right' onClick={() => dispatch(changePage(page, -1))}>&#8249;</button>
      <button className=' slider__button slider__button-left' onClick={() => dispatch(changePage(page, +1))}>&#8250;</button>
      <div className='content'>
        {dynamicChildren}

      </div>
      <div className='checkbox'>
        {dynamicCheckboxes}
      </div>
    </div>
  )
}


let mSTP = state => ({
  page: state.page,
})

export default connect(mSTP)(Slider);