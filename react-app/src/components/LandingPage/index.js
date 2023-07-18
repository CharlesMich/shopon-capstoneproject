import React from "react";
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
      {/* <p className="auth-slogan">A platform for exchanging knowledge and gaining a deeper insight into the world</p> */}
      <div className="auth-container">
        <div className="auth-container-section signupform-container">
          {/* <p className="auth-terms">By continuing you indicate that you agree to Koras’s Terms of Service and Privacy Policy.</p> */}
          <DemoUser
            itemText="Log in as Demo User"
          />
          <OpenModalButton
            buttonText="Sign Up"
            className="signup-btn"
            modalComponent={<SignupFormModal />}
          />
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
