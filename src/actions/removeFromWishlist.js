/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import store from '../store'
import axios from 'axios'
import {fetchWishlist} from './fetchWishlist'

const requestRemoveFromWishlist = () => {
  return {
    type: 'REQUEST_REMOVE_FROM_WL'
  }
}

const receiveRemoveFromWishlist = (data) => {
   return {
    type: 'RECEIVE_REMOVE_FROM_WL'
  }
}

export  const removeFromWishlist = (key, target) => {
 	return dispatch => {
 		dispatch(requestRemoveFromWishlist())
 		 return axios.delete(`https://e-commerce-react-redux-demo.firebaseio.com/wishlist/${key}.json`)
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveRemoveFromWishlist(json.data))
 			dispatch(fetchWishlist())
 		})
 	}
 }
