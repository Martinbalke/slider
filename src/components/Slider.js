import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changePage, selectPage } from '../store/sliderReducer';

function Slider(props) {
  const { page, dispatch } = props;
  const [pageScroll, setPageScroll] = useState(null);
  useEffect(() => {
    clearTimeout(pageScroll);
    setPageScroll(setTimeout(() => {
      dispatch(changePage(page, +1))
    }, 4000))
  }, [page]);

  useEffect(() => {
    dispatch({ type: 'PAGE_COUNT', pageCount: props.children.length - 1 });
  })

  return (
    <div className='slider'>
      <button className=' slider__button slider__button-right' onClick={() => dispatch(changePage(page, -1))}>&#8249;</button>
      <button className=' slider__button slider__button-left' onClick={() => dispatch(changePage(page, +1))}>&#8250;</button>
      <div className='content'>
        {props.children.map((child, index) => <div className={page === index ? 'active content__child' : 'inactive content__child'}>{child}</div>)}

      </div>
      <div className='checkbox'>
        {props.children.map((child, index) => {
          return (
            <label for={index} className='checkbox__label'>
              <input id={index} type='checkbox' key={index} checked={page === index ? true : false} onChange={(e) => dispatch(selectPage(index))} />
              <span className='checkbox__checkmark' />
            </label>
          )
        })}
      </div>
    </div>
  )
}
let mSTP = state => ({
  page: state.page,
})

export default connect(mSTP)(Slider);