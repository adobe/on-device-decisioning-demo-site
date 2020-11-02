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
const requestWishlist = () => {
  return {
    type: 'REQUEST_WL',
  }
}

const receiveWishlist = (data) => {
   return {
    type: 'RECEIVE_WL',
		payload:(data === null) ? {} : data,
  }
}

export  const fetchWishlist = () => {
 	return dispatch => {
 		dispatch(requestWishlist())
 		return axios.get('https://e-commerce-react-redux-demo.firebaseio.com/wishlist.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveWishlist(json.data))
 		})
 	}
 }
