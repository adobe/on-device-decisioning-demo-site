/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import store from '../store'
import axios from 'axios'
import {fetchCart} from './fetchCart'

const requestRemoveFromCart = () => {
  return {
    type: 'REQUEST_REMOVE_FROM_CART'
  }
}

const receiveRemoveFromCart = (data) => {
   return {
    type: 'RECEIVE_REMOVE_FROM_CART'
  }
}

export  const removeFromCart = (key, target) => {
 	return dispatch => {
 		dispatch(requestRemoveFromCart())
 		 return axios.delete(`https://e-commerce-react-redux-demo.firebaseio.com/cart/${key}.json`)
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveRemoveFromCart(json.data))
 			dispatch(fetchCart())
 		})
 	}
 }
