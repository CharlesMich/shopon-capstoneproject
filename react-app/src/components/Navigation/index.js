import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { fetchGetCart } from '../../store/cart';
import './Navigation.css';

function Navigation({ isLoaded }) {

	const dispatch = useDispatch()

	const sessionUser = useSelector(state => state.session.user);
	// const cartItems = useSelector(state => state.cartProducts)

	useEffect(() => {
		dispatch(fetchGetCart())
    }, [dispatch]);

	// const cartItemArr = Object.values(cartItems)

	// let abc;
	// useEffect(()=> {
	// 	dispatch(fetchGetCart()).then(abc = cartItemArr.length).then(dispatch(fetchGetCart()))
	// }, [dispatch])
	
	// const count = cartItemArr.length
	// useEffect(() => {
	// 	dispatch(fetchGetCart())
    // }, [dispatch, count]);


	return (
		<>
		
		{sessionUser &&
		<div className="navigation-container">
			<div className="nav-topbar">
				<div><NavLink exact to="/"><img className="nav-imgClass" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-logo.png" alt="logo"></img></NavLink></div>
				{/* <span style={{color:"white"}}>{count}</span> */}
				<div className= "nav-right-element">
				<Link to ="/cart"><i class="fa-solid fa-cart-shopping fa-2x" style={{color:'white', paddingRight:"10px"}}></i></Link>
				<ProfileButton user={sessionUser}/>
				</div>
				
				</div>
						
			<div className= "nav-bottom-bar">
				<NavLink className= "nav-link-item" exact to='/'>Catagories</NavLink>
			
				{/* <NavLink className= "nav-link-item" exact to='/products'>Products</NavLink> */}
				{/* <NavLink className= "nav-link-item" exact to='/'>Top Rated</NavLink>
				<NavLink className= "nav-link-item" exact to='/reviews'>Reviews</NavLink>	
				<NavLink className= "nav-link-item" exact to='/cart'>Cart</NavLink>
				<NavLink className= "nav-link-item" exact to='/order'>Order</NavLink> */}

			</div>
			</div>		
		}	
		</>
	);
}

export default Navigation;