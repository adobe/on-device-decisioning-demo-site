/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import document from "global/document";
/**
 * Create Loading Component
 */
class Loading extends Component {
  render() {
    let isLoading = (this.props.loading) ? 'is-loading' : 'is-loaded'
    isLoading = 'is-loaded';
    if (this.props.loading)
      document.getElementsByTagName('html')[0].style = "overflow:hidden"
    else
      document.getElementsByTagName('html')[0].style = "";
    return (
      <div className={`loading-wrapper ${isLoading}`}>
        <div className="loading">
          <span>Loading ...</span>
        </div>
      </div>
    )
  }
}
export default Loading
