import React from 'react';
import{ Link, useLocation } from 'react-router-dom'
import './footer.css'

function Footer() {
    const { pathname } = useLocation();

  // you can check a more conditions here
  if (pathname === "/login") return null;
  if (pathname === "/signup") return null;
    return (
        <div className="footer-container">

            <div className="footer-tex-img">   
                    <div className="img-container">
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/html-circle.png" alt="" /></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/css.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/js.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/react.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/redux.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/Python-Symbol.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/postgress-circle.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/flask.png" alt=""></img></div>
                    </div>
                    <div className="footer-text">
                    <span className="footer-text-p">Designed and developed by Charles</span>
                    <Link to={{ pathname: "https://www.linkedin.com/in/charles-michael-b83571a2/" }} target="_blank"><span><i class="fa-brands fa-linkedin" style={{color:"white"}}></i></span></Link>
                    <Link to={{ pathname: "https://github.com/CharlesMich" }} target="_blank"><i class="fa-brands fa-github"style={{color:"white"}}></i></Link>
                    <Link to={{ pathname: "https://wellfound.com/u/charles-michael-7" }} target="_blank"><i class="fa-brands fa-angellist"style={{color:"white"}}></i></Link>
                    <Link to={{ pathname: "https://sprightly-treacle-331b23.netlify.app" }} target="_blank"><i class="fa-solid fa-c"style={{color:"white"}}></i></Link>
                    </div>
            </div>    
        </div>
    )
}

export default Footer