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
import TargetContext from '../contexts/TargetContext';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';


import {Helmet} from "react-helmet"
import Slider from "react-slick"
const TargetClientPList = require("@adobe/target-nodejs-sdk");

/**
 * Create ProductList Container
 */
class ProductList extends Component {

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
		function showTarget(content) {
			if(typeof window != "undefined") {
				if(sessionStorage && sessionStorage.getItem("showTarget") == "true") {
					const popover = (
						<Popover id="popover-basic">
						  <Popover.Title as="h3">Adobe target Activity details</Popover.Title>
						  <Popover.Content>
								<strong>Activity Type</strong>
								<p>A/B Test</p>
								<br/>
								<strong>Locations</strong>
								<p>1. home-ondevice-featureflag</p>
								<p>2. home-ondevice-attributes</p>
								<br/>
								<strong>
									JSON Offer for <u>home-ondevice-featureflag</u>
								</strong>
								<div>
									<div style={ { border: content.featureflags.flag == "expA" ? 'solid 1px green' : 'none' }}>
										Exp A
										<pre>
											{
												JSON.stringify( {
													"enabled" : true,
													"flag" : "expA"
												})
											}
										</pre>
									</div>
									<div style={ { border: content.featureflags.flag == "expB" ? 'solid 1px green' : 'none' }}>
										Exp B
										<pre>
											{
												JSON.stringify( {
													"enabled" : true,
													"flag" : "expB"
												})
											}
										</pre>
									</div>
								</div>
								<br/>
								<strong>
									JSON Offer for <u>home-ondevice-attributes</u>
								</strong>
								<div>
									<div style={ { border: content.featureflags.flag == "expA" ? 'solid 1px green' : 'none' }}>
									  	Exp A
										<p><strong>Default Content</strong></p>
									</div>
									<div style={ { border: content.featureflags.flag == "expB" ? 'solid 1px green' : 'none' }}>
										Exp B
										<pre>
											{
												JSON.stringify( {
													"title" : "Thanksgiving Special Products",
													"color" : "green"
												})
											}
									</pre>
									</div>
							  	</div>
								  <br/>	<br/>
						  </Popover.Content>
						</Popover>
					  );

					return  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
								<Button variant="success">Click here to see Target Activity information</Button>
							</OverlayTrigger>
				}
			}
		}

		return (
			
			
			<div key="HomePage">
				<Helmet title="Home" />
				<section className="section">
					<div className="container">
					
					<Slider data-section-name = "jsx_homepagebanner_offer" {...settings}>
						<div><img src="https://cimage.adobe.com/acs/reactreduxdemo/carousel/easter.png"/></div>
						<div><img src="https://cimage.adobe.com/acs/reactreduxdemo/carousel/discount.png"/></div>
						<div><img src="https://cimage.adobe.com/acs/reactreduxdemo/carousel/happy.png"/></div>
						<div><img src="https://cimage.adobe.com/acs/reactreduxdemo/carousel/family.png"/></div>
						<div><img src="https://cimage.adobe.com/acs/reactreduxdemo/carousel/percent.png"/></div>
						<div><img src="https://cimage.adobe.com/acs/reactreduxdemo/carousel/bigsale.png"/></div>
					</Slider>
							
					</div>
					<br></br><br></br>
					<div className="container">
						<div className="heading">


							<TargetContext.Consumer>
							{content => {
								//Used to display meta data about Target Activity when enabled using "sessionStorage.setItem(true)" 
								// Not part of Target Implementation
								return showTarget(content);
							}}
							</TargetContext.Consumer>

						
							<TargetContext.Consumer>
							{content => {
								if(content.featureflags.enabled === true && content.featureflags.flag == "expB") {
									return <h1 className="title" style = {{color: content.attributes.color}}>{content.attributes.title}</h1>	
								}
								else {
									return <h1 className="title">Latest Products</h1>
								}
							}}
							</TargetContext.Consumer>

							<div key = "ProductListHomePage" className="columns is-multiline">
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
export default connect(stateProps)(ProductList)
