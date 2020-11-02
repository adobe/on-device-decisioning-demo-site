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
const requestProduct = () => {
  return {
    type: 'REQUEST_PRODUCT',
  }
}

const receiveProduct = (data,id) => {
   return {
    type: 'RECEIVE_PRODUCT',
    payload:data,
    id:parseInt(id)
  }
}

export  const fetchProduct = (id) => {
 	return dispatch => {
 		dispatch(requestProduct())
 		return axios.get(`https://e-commerce-react-redux-demo.firebaseio.com/products.json`)
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveProduct(json.data,id))
 		})
 	}
 }
