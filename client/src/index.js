import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxthunk from 'redux-thunk';
import './components/css/index.css';

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxthunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector('#root')
)