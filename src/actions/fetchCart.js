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
const requestCart = () => {
    return {
        type: 'REQUEST_CART',
    }
}

const receiveCart = (data) => {
    return {
        type: 'RECEIVE_CART',
        payload: (data === null) ? {} : data
    }
}

export const fetchCart = () => {
    return dispatch => {
        dispatch(requestCart())
        return axios.get('https://e-commerce-react-redux-demo.firebaseio.com/cart.json')
            .then(response => response)
            .then(json => {
                dispatch(receiveCart(json.data))
            })
    }
}
