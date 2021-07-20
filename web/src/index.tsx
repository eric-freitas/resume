import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux'

import App from './App'

import rootReducer from './reducers'
import { StateLoader } from "./stateLoader";

import './style.scss';
import './i18n';

const stateLoader = new StateLoader();

const store = createStore(
  rootReducer,
  stateLoader.loadState()
);

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

