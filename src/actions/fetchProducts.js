/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestProducts = () => {
  return {
    type: 'REQUEST_PRODUCTS',
  }
}

const receiveProducts = (data) => {
   return {
    type: 'RECEIVE_PRODUCTS',
    payload:data,
  }
}

export  const fetchProducts = () => {
 	return dispatch => {
 		dispatch(requestProducts())
 		return axios.get('https://e-commerce-react-redux-demo.firebaseio.com/products.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveProducts(json.data))
 		})
 	}
 }
