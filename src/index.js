
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App';
import './normalize.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "../src/redux/reducer";
import initialState from "../src/redux/store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
