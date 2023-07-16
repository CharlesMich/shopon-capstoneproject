import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { fetchGetCart } from '../../store/cart';
import './Navigation.css';

function Navigation({ isLoaded }) {

	const dispatch = useDispatch()

	const sessionUser = useSelector(state => state.session.user);
	const cartItems = useSelector(state => state.cartProducts)

	useEffect(() => {
        dispatch(fetchGetCart())
    }, [dispatch]);

	const cartItemArr = Object.values(cartItems)

	const count = cartItemArr.length

	console.log(count)

	return (
		<>
		
		{sessionUser &&
		<div className="navigation-container">
			<div className="nav-topbar">
				<div><img className="nav-imgClass" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-logo.png" alt="logo"></img></div>
				<i class="fa-solid fa-cart-shopping fa-2x" style={{color:'white', paddingRight:"30px", paddingTop:"10px"}}></i>
				<span style={{color:"white"}}>{count}</span>
				<ProfileButton user={sessionUser} />
				<NavLink exact to="/">Home</NavLink>
				</div>
				
			
			
			<div className= "nav-bottom-bar">
				<NavLink className= "nav-link-item" exact to='/'>Catagories</NavLink>
			
			
				<NavLink className= "nav-link-item" exact to='/products'>Products</NavLink>

			
			
				<NavLink className= "nav-link-item" exact to='/reviews'>Reviews</NavLink>

			
		
				<NavLink className= "nav-link-item" exact to='/cart'>Cart</NavLink>

			</div>
			</div>		
		}	
		</>
	);
}

export default Navigation;