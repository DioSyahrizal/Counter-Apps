import React from 'react';
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import Counter from './containers/Counter/Counter';

import './App.css';

const store = createStore(reducer);

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Counter/>
        </div>
      </Provider>
    );
  }
}

export default App;
