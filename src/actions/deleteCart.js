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

const requestDeleteCart = () => {
  return {
    type: 'REQUEST_DELETE_CART'
  }
}

const receiveDeleteCart = () => {
   return {
    type: 'RECEIVE_DELETE_CART'
  }
}

export  const deleteCart = (key) => {
 	return dispatch => {
 		dispatch(requestDeleteCart())
 		 return axios.delete(`https://e-commerce-react-redux-demo.firebaseio.com/cart/.json`)
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveDeleteCart())
 			dispatch(fetchCart())
 		})
 	}
 }
