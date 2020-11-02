/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { Loading } from './middlewares/Loading'
import { Auth } from './middlewares/Auth'

let composeEnhancers = compose;

if (typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined") {
    composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

/**
 * Create Middleware
 */
const middleware = applyMiddleware(thunk, Loading, Auth)
    /**
     * Create Store
     */
const store = createStore(reducers, composeEnhancers(middleware))

export default store
