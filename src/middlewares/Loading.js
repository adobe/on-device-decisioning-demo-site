/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

export const Loading = store => next => action => {

  let prev = next(action)

  let isFetching = null

   Object.keys(store.getState()).map((reducer) => {
    if('fetching' in store.getState()[reducer]){
      isFetching = isFetching ||  store.getState()[reducer]['fetching']
    }
  })

  if(isFetching) {
    next({type:"SHOW_LOADING"})
  }else{
    next({type:"HIDE_LOADING"})
  }

  return prev
}
