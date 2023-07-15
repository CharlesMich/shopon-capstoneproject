import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className="navigation-container">

			<div className="nav-topbar">
				<div><img className="nav-imgClass" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-logo.png" alt="logo"></img></div>
				<i class="fa-solid fa-cart-shopping fa-2x" style={{color:'white', paddingRight:"30px", paddingTop:"10px"}}></i>
				<ProfileButton user={sessionUser} />
				<NavLink exact to="/">Home</NavLink>
				</div>
				{/* <ul className="navigation-ul">
					<li>
						<NavLink exact to="/">Home</NavLink>
					</li> 
					{isLoaded && ( 
						 <li>
							<ProfileButton user={sessionUser} />
						</li> 
					)}
				</ul>  */}
			
			
			<div className= "nav-bottom-bar">
				<NavLink className= "nav-link-item" exact to='/'>Catagories</NavLink>
			
			
				<NavLink className= "nav-link-item" exact to='/products'>Products</NavLink>

			
			
				<NavLink className= "nav-link-item" exact to='/reviews'>Reviews</NavLink>

			
		
				<NavLink className= "nav-link-item" exact to='/cart'>Cart</NavLink>

			</div>
		</div>			
	);
}

export default Navigation;