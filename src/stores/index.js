import React from "react";
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";


const middlewares = [thunk, reduxPromise];

const Root = ({children, initialState = {}}) =>{
    const store = createStore(
        reducers,
        compose(applyMiddleware(...middlewares))
    );
    return <Provider store={store}>{children}</Provider>
}
export default Root