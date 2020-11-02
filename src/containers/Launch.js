/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLaunch } from '../actions/fetchLaunch'
import {Helmet} from "react-helmet"

/**
 * Create About Container
 */
class Launch extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchLaunch());
	}

	render() {
		return (
			
			<div>
				<Helmet title="About Launch by Adobe" />
				<section className="section">
					<div className="container">
						<div className="heading">
							<h1 className="title">
								{/* {this.props.about.title} */}
								Documentation details.
							</h1>
						</div>
						<p>
							{/* {this.props.about.content} */}
							This page will list the URLs for documentation on Adobe Target On Device Decisioning.
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
		about: state.LaunchReducer.data
	}
}

export default connect(stateProps)(Launch)
