import React from 'react';
import DashBoard from './components/DashBoard';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
 
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <DashBoard />
      </Provider>
    </div>
  );
}

export default App;
