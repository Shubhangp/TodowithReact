import React from 'react';
import { Provider } from 'react-redux';
import Body from './Components/Body';
import store from './Utils/store';

const App = () => {
  
  
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  )
}

export default App