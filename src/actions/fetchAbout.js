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
const requestPosts = () => {
  return {
    type: 'REQUEST_ABOUT',
  }
}

const receiveAbout = (data) => {
   return {
    type: 'RECEIVE_ABOUT',
    payload:data,
  }
}

export  const fetchAbout = () => {
 	return dispatch => {
 		dispatch(requestPosts())
 		return axios.get('https://e-commerce-react-redux-demo.firebaseio.com/pages/about.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveAbout(json.data))
 		})
 	}
 }
