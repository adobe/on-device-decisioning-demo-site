/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import store from '../store'
import axios from 'axios'
import { fetchWishlist } from './fetchWishlist'

/**
 * Create fetchAbout Action
 */
const requestAddToWishlist = () => {
    return {
        type: 'REQUEST_ADD_TO_WL',
    }
}

const receiveAddToWishlist = (data) => {
    return {
        type: 'RECEIVE_ADD_TO_WL',
        payload: data,
    }
}
const checkUserOrGuest = (productId) => {
    if (localStorage.getItem('guest') || false) {
        return { id: productId, guestKey: localStorage.getItem('guest') }
    }
}

export const addToWishlist = (productId, target) => {
    return dispatch => {
        dispatch(requestAddToWishlist())
        return axios.post('https://e-commerce-react-redux-demo.firebaseio.com/wishlist.json', checkUserOrGuest(productId))
            .then(response => response)
            .then(json => {
                dispatch(receiveAddToWishlist(json.data))
                dispatch(fetchWishlist())
            })
    }
}
