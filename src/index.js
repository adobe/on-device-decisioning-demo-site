/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import TargetContext from './contexts/TargetContext';
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter} from 'react-router-dom'

/**
 * Render App
 */

 window['ASHOP_APP'] = window['ASHOP_APP'] || (() => {
    return {
      initialize: (targetAttributes) => {
        ReactDOM.render(
          <Provider store={store}>
            <TargetContext.Provider value = { targetAttributes } >
                <BrowserRouter forceRefresh={true}>
                    <App/>
                </BrowserRouter>
            </TargetContext.Provider>
          </Provider>,
          document.getElementById('app')
        );
      }
    };
  })();
