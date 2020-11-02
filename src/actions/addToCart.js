/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import store from '../store'
import axios from 'axios'
import { fireActionTriggerCustomEvent } from '../utils'

import { fetchCart } from './fetchCart'
/**
 * Create fetchAbout Action
 */
const requestAddToCart = () => {
    return {
        type: 'REQUEST_ADD_TO_CART'
    }
}

const receiveAddToCart = (data) => {
    return {
        type: 'RECEIVE_ADD_TO_CART',
        payload: data,
    }
}

const checkUserOrGuest = (productId) => {
    if (localStorage.getItem('guest') || false) {
        return { id: productId, guestKey: localStorage.getItem('guest') }
    }
}

export const addToCart = (productId, target) => {
  //fireActionTriggerCustomEvent(target, { detail : { "linkName" : target.getAttribute("data-link-name") , "action" : target.getAttribute("data-track-action") }});
    return dispatch => {
        dispatch(requestAddToCart())
        return axios.post('https://e-commerce-react-redux-demo.firebaseio.com/cart.json', checkUserOrGuest(productId))
            .then(response => response)
            .then(json => {
                dispatch(receiveAddToCart(json.data))
                dispatch(fetchCart())
            })
    }
}
