/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAbout } from '../actions/fetchAbout'
import {Helmet} from "react-helmet"
import { ReactHTMLConverter } from 'react-html-converter/node'

/**
 * Create About Container
 */
class About extends Component {
	constructor(props) {
		super(props);
		this.converter = new ReactHTMLConverter();
		this.converter.registerComponent('helmet', Helmet);
    }
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchAbout())
	}
	render() {
		return (
			
			<div>
				<Helmet title="About Demo" />
				<section className="section">
					<div className="container">
						<div className="heading">
						<h1 className="title">
							{/* {this.props.about.title} */}
							SDK Details
						</h1>
						</div>
						<p>
							{/* {this.props.about.content} */}
							This page will list all the Adobe Target SDK locations for various platforms
						</p>
					</div>
				</section>
			</div>
	
		)
	}
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
	return {
		about: state.AboutReducer.data
	}
}

export default connect(stateProps)(About)
