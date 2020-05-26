import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import sliderReducer from './sliderReducer';


export default createStore(sliderReducer, applyMiddleware(thunk));