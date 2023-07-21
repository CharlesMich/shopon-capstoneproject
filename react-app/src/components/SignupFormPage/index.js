import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../../store/session";
import  '../LandingPage/landingpage.css'
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false);


  useEffect(()=> {
    let newError = {}
    if (!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))) newError.email = 'Not a valid email address'
    setValidationErrors(newError)
  }, [email])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) setErrors(['Not a valid email address'])

    setHasSubmitted(true);
    if (Object.keys(validationErrors).length > 0) return;
    
    if (password === confirmPassword) {
      const data = await dispatch(signUp(first_name, last_name, username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };
  
  
  if (sessionUser) return <Redirect to="/" />;
  
  return (
    <div className="signup-container">
      <div className="landing-main">
      <img className="landing-logo" src="https://myaaprojects.s3.us-east-2.amazonaws.com/shopon-logo.png" id='logo' alt='logo' />
      <div className="signup-subtext">If you are a current user, <Link to ="/login"> Log in</Link></div>
      <h1 className="signup-h1">Create New Account</h1>
      <div className="signup-sub-container">
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li style={{color:'white', listStyle:"none"}} key={idx}>{error}</li>)}
        </ul>
        <div className="signup-email-error">{hasSubmitted && validationErrors.email && `${validationErrors.email}`}</div>
        <div className="signup-form-container">
        <div className="signup-form-container-1">
      
                        <div className="signup-form-sub-container">
                                            <div><label>
                                              First Name   
                                              <input className="signup-input"
                                                type="text"
                                                value={first_name}
                                                onChange={(e) => setFirst_name(e.target.value)}
                                                required
                                              />
                                            </label></div>
                                            <div><label>
                                              Last Name
                                              <input 
                                              input className="signup-input"
                                                type="text"
                                                value={last_name}
                                                onChange={(e) => setLast_name(e.target.value)}
                                                required
                                              />
                                            </label></div>
                                            <div><label>
                                              Email
                                              <input
                                              input className="signup-input"
                                                type="text"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                              />

                                            </label></div>
                        </div>
                        <div className="signup-form-sub-container">
                                            <div><label>
                                              Username
                                              <input
                                              input className="signup-input"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                              />
                                            </label></div>
                                            <div><label>
                                              Password
                                              <input
                                              input className="signup-input"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                              />
                                            </label></div>
                                            <div><label>
                                              Confirm Password
                                              <input
                                              input className="signup-input"
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                              />
                                            </label></div>
                          </div>
        </div>
                          <div><button className="signup-button" type="submit">Sign Up</button></div>
                          </div>
      </form>
      </div>
      </div>
    </div>
  );
}

export default SignupFormPage;
