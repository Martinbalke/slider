import React from 'react';
import Slider from './Slider';
import Images from './Images';
import { Provider } from 'react-redux';
import store from '../store';



function App() {
  return (
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
