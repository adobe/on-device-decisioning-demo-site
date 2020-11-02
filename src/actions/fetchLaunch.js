/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import store from '../store'
import axios from 'axios'

const requestPosts = () => {
  return {
    type: 'REQUEST_LAUNCH',
  }
}

const receiveLaunch = (data) => {
   return {
    type: 'RECEIVE_LAUNCH',
    payload:data,
  }
}

export  const fetchLaunch = () => {
 	return dispatch => {
 		dispatch(requestPosts())
 		return axios.get('https://e-commerce-react-redux-demo.firebaseio.com/pages/launch.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveLaunch(json.data))
 		})
 	}
 }
