import React, { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css"
import { empty_cart } from "../../store/cartproduct";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(empty_cart());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button  className ="profile-button" onClick={openMenu}>
       
        <i className="fas fa-user-circle fa-2x" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="profile-button-li">{user.username}</li>
            <li className="profile-button-li">{user.email}</li>
            <li className="profile-button-li"><Link to="/reviews" style={{textDecoration:'none', color:"black"}} onClick={closeMenu}>Reviews</Link></li>
            <li className="profile-button-li"><Link to="/manageproducts" style={{textDecoration:'none', color:"black"}} onClick={closeMenu}>Products</Link></li>
            <li className="profile-button-li"><Link to="/managecatagories" style={{textDecoration:'none', color:"black"}} onClick={closeMenu}>Catagories</Link></li>
            <li className="profile-button-li"><Link to="/manageorders" style={{textDecoration:'none', color:"black"}} onClick={closeMenu}>Orders</Link></li>
            <li className="profile-button-li"><button className="profile-logout-button" onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
