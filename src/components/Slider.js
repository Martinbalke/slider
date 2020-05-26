import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changePage, selectPage} from '../store/sliderReducer';

function Slider(props) {
  let children = [1,2,3,4];
  const { page, dispatch } = props;
  const [pageScroll, setPageScroll] = useState(null);
  useEffect(() => {
    clearTimeout(pageScroll);
    setPageScroll(setTimeout(() => {
      dispatch(changePage(page, +1))
    }, 4000))
  }, [page]);

  useEffect( () => {
    dispatch({type: 'PAGE_COUNT', pageCount: children.length});
  })

  return (
    <div>
      <button onClick={() => dispatch(changePage(page, +1))}></button>
      <h1>{page}</h1>
      <button onClick={() => dispatch(changePage(page, -1))}></button>
      <input type='checkbox' checked={page === 4 ? true : false} onChange={(e) => dispatch(selectPage(4))}></input>
    </div>
  )
}
let mSTP = state => ({
  page: state.page,
})

export default connect(mSTP)(Slider);