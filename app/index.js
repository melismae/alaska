import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import ReduxPromise from 'redux-promise';
import './styles/index.scss';

import * as reducers from './reducers/index';
import App from './components/index';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        <App />
    </Provider>,
    document.getElementById('app')
);
