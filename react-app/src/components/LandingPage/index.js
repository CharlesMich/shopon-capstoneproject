import React from "react";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginForm from "../LoginFormPage";
import DemoUser from "./Demouser";
import "./landingpage.css"
import "./demouser.css"


function LandingPage() {

  return (
    // <div className="landing-main" style={{backgroundImage:`url(https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-landingpage-bg.png)`}}>
       <div className="landing-main">           
                               
                {/* <div><img className="landing-logo" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-dark-logo.png" id='logo' alt='logo'/></div> */}
                             
          <div className="test123">
                <div className="login-demo-signup-login">
                                <div className="login-demo-signup">
                                            
                                  <DemoUser itemText="Log in as Demo User"/>
                                  <OpenModalButton buttonText="Sign Up" 
                                                  style={{backgroundColor:"green"}}
                                                  className="abc"
                                                  modalComponent={<SignupFormModal />}
                                                />                       
                                </div>
                              <LoginForm />
                </div>                            
          </div>     
  </div>
  );
}

export default LandingPage;
