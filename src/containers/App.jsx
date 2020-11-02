/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import {Helmet} from "react-helmet"
import Laoding from '../components/Laoding'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Launch from './Launch'
import Cart from './Cart'
import Wishlist from './Wishlist'
import ProductList from './ProductList'
import Checkout from './Checkout'
import Confirm from './Confirm'
import Products from './Products'
import SingleProduct from './SingleProduct'

/**
 * Create App Component
 */
class App extends Component {
	
	render() {

		return (
			<div>
				<Helmet titleTemplate="ACS Demo - %s" />
				<Laoding loading={this.props.loading} />
				<NavBar />
				<Switch>
					<Route exact path="/" component={ProductList}/>
					<Route path="/sdks" component={About} />
					<Route path="/cart" component={Cart} />
					<Route path="/wishlist" component={Wishlist} />
					<Route path="/docs" component={Launch} />
					<Route path="/confirm" component={Confirm} />
					<Route path="/products" component={Products} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/product/:id" component={SingleProduct} onEnter={ () => store.dispatch({type:'CLEAR_PRODUCT'}) } />
				</Switch>
				<Footer />
			</div>		
		)
	}
}

const stateProps = (state) => {
	return {
		loading: state.LoadingReducer.isVisible
	}
}
export default connect(stateProps)(App)
