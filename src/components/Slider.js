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
    <div>
      <button onClick={() => dispatch(changePage(page, +1))}></button>
      <button onClick={() => dispatch(changePage(page, -1))}></button>
      {props.children.map((child, index) => <div className={page === index ? 'active' : 'inactive'}>{child}</div>)}
      <div className='checkbox'>
        {props.children.map((child, index) => {
          return (
            <label for={index} className='checkbox'>
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