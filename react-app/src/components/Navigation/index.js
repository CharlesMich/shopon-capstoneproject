import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { fetchLoadCartItem } from '../../store/cartproduct';
import './Navigation.css';
import { searchProducts } from '../../store/product'

function Navigation({ isLoaded }) {

	const dispatch = useDispatch()
	const history = useHistory()

	const sessionUser = useSelector(state => state.session.user);
	const cartItems = useSelector(state => state.cartProducts);

	let user_id;
	if (sessionUser) {
		user_id = sessionUser.id
	}

	const [searchtext, setSearchtext] = useState('')

	const cartItemArr = Object.values(cartItems)

	let count = 0

	const countCart = () => {
		for (let item of cartItemArr) {
			count = count + item.quantity
		}
		return count;
	}

	useEffect(() => {
		dispatch(fetchLoadCartItem(user_id))
	}, [dispatch, user_id])

	const handleSearchInput = (e) => {
		setSearchtext(e.target.value)
	}

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		await dispatch(searchProducts(searchtext))
		history.push('/products/search-by-product')
		setSearchtext('')
	}

	return (
		<>

			{sessionUser &&
				<div className="navigation-container">
					<div className="nav-topbar">
						<div><NavLink exact to="/"><img className="nav-imgClass" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-logo.png" alt="logo"></img></NavLink></div>

						<div className="nav-search">
							<div className="nav-search-div"><input className="nav-search-input" placeholder="Search for a product, Example - 'ipad' " type="text" onChange={handleSearchInput} value={searchtext}></input></div>
							<button className='nav-search-icon' onClick={handleSearchSubmit}><i class="fa-solid fa-magnifying-glass"></i></button>
						</div>

						<div className="nav-right-element">
							<p className="nav-p">Hello, {sessionUser.first_name}</p>
							<div>
								<span className="nav-count" style={{ color: "white" }}>{countCart()}</span>
								<Link to="/cart"><img src="https://myaaprojects.s3.us-east-2.amazonaws.com/cart.png" style={{ width: '50px' }}></img></Link>
							</div>
							<ProfileButton user={sessionUser} />
						</div>

					</div>

					<div className="nav-bottom-bar">
						<NavLink className="nav-link-item" exact to='/'>Catagories</NavLink>
						<NavLink className="nav-link-item" exact to='/products/top-rated-products'>Top Rated Products</NavLink>
						<NavLink className="nav-link-item" exact to='/products/new-arrivals'>New Arrivals</NavLink>
						<NavLink className="nav-link-item" exact to='/products/top-deals'>Top Deals</NavLink>

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