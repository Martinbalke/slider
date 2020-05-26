import React from 'react';
import Slider from './Slider';
import Images from './Images';
import { Provider } from 'react-redux';
import store from '../store';


/**
 * App is the main JSX wrapper component for this React app
 * @author [Martin Balke](https://github.com/Martinbalke)
 * @returns {JSX} 
 */
function App() {
  return (
    //React redux store
    <Provider store={store}>
      <div className="App">
        <Slider>
          <Images/>
          <Images/>
          <Images/>
        </Slider>
      </div>
    </Provider>
  );
}

export default App;
