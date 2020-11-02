/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { fetchProducts } from '../actions/fetchProducts'
import { addToCart } from '../actions/addToCart'
import { addToWishlist } from '../actions/addToWishlist'
import { removeFromWishlist } from '../actions/removeFromWishlist'
import { removeFromCart } from '../actions/removeFromCart'
import {Helmet} from "react-helmet"

class Products extends Component {

	addToCart(id, target) {
		const { dispatch } = this.props
		dispatch(addToCart(id, target))
	}
	addToWishlist(id, target) {
		const { dispatch } = this.props
		dispatch(addToWishlist(id, target))
	}
	removeFromWishlist(id, target) {
		const { dispatch } = this.props
		dispatch(removeFromWishlist(id, target))
	}
	removeFromCart(id, target) {
		const { dispatch } = this.props
		dispatch(removeFromCart(id, target))
	}
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchProducts())
	}
	render() {

		const settings = {
      dots: true,
      speed: 500,
			autoplay : true,
			autoplaySpeed : 3000,
			infinite: true
    };

		return (

			<div>
				<Helmet title="Home" />
				<section className="section">
					<div className="container">
						<div className="heading">
							<h1 className="title">Products</h1>
							<div className="columns is-multiline">
								{this.props.products.map((product) => {
									return <ProductItem key={product.id}
										product={product}
										addToCart={this.addToCart.bind(this)}
										addToWishlist={this.addToWishlist.bind(this)}
										removeFromWishlist={this.removeFromWishlist.bind(this)}
										removeFromCart={this.removeFromCart.bind(this)}
										wishlist={this.props.wishlist}
										cart={this.props.cart}
									/>
								})}
							</div>
						</div>
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
		products: state.ProductsReducer.data,
		wishlist: state.WishlistReducer.data,
		cart: state.CartReducer.data
	}
}
export default connect(stateProps)(Products)
