import React from "react";
import {Link} from 'react-router-dom'
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginForm from "../LoginFormPage";
import DemoUser from "./Demouser";
import "./landingpage.css"
import "./demouser.css"


// <div className="landing-main" style={{backgroundImage:`url(https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-landingpage-bg.png)`}}>
{/* <div><img className="landing-logo" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-dark-logo.png" id='logo' alt='logo'/></div> */}
function LandingPage() {

  return (
    <div className="login-container">
    <div className="landing-main">
      <img className="landing-logo" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-logo.png" id='logo' alt='logo' />
      <div className="auth-container">
        <div className="auth-container-section signupform-container">
         
          <DemoUser
            itemText="Log in as Demo User"
          />
          {/* <OpenModalButton
            buttonText="Sign Up"
            className="signup-btn"
        
            modalComponent={<SignupFormModal />}
          /> */}
          <Link to="/signup" className="landing-signup-link">Sign Up</Link>
        </div>
        <div className="auth-container-section loginform-container">
        
          <LoginForm />
        </div>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
