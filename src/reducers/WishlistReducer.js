/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

/**
 * Wishlist Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const WishlistReducer = (state = {
  loading: false,
  data: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_ADD_TO_WL':
      return Object.assign({}, state, {loading: true})
      break
    case 'RECEIVE_ADD_TO_WL':
      return Object.assign({}, state, {loading: false})
      break
    case 'REQUEST_WL':
      return Object.assign({}, state, {loading: true})
      break
    case 'RECEIVE_WL':
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      })
      break
      case 'REQUEST_REMOVE_FROM_WL':
      return Object.assign({}, state, {
        loading: true,
      })
      break
      case 'RECEIVE_REMOVE_FROM_WL':
      return Object.assign({}, state, {
        loading: false
      })
      break
    default:
      return state
  }
}
export default WishlistReducer