/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ProductsReducer from './ProductsReducer'
import ProductReducer from './ProductReducer'
import LoadingReducer from './LoadingReducer'
import CartReducer from './CartReducer'
import WishlistReducer from './WishlistReducer'
import LaunchReducer from './LaunchReducer'

/**
 * Combine Reducers In One Object
 */
export default combineReducers({
  AboutReducer: AboutReducer,
  ProductsReducer:ProductsReducer,
  ProductReducer:ProductReducer,
  LoadingReducer:LoadingReducer,
  CartReducer:CartReducer,
  LaunchReducer:LaunchReducer,
  WishlistReducer:WishlistReducer
})
