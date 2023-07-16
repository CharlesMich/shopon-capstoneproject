import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllReviews } from "../../store/review";
import './reviews.css'


function AllReviews(){
    const dispatch = useDispatch()
    const history = useHistory()

    let sessionUser = useSelector((state)=> state.session.user);
   

    let allReviews = useSelector((state)=>Object.values(state.review.allReviews))
    console.log(allReviews)

    useEffect(() => {
        dispatch(getAllReviews())
    },[dispatch]);

    if(!allReviews) return null
    if(!sessionUser) return history.push('/')

    return(
        <div className="review-container">
                            <div className="review-sub-container">
                                            <h1 className="review-h1">Manage All Reviews</h1>
                                            <div className="reviewMap">{allReviews.map((ele)=> 
                                                        <div className="review-each-review">                                                  
                                                        <p className="review-text">{ele.review}</p>
                                                        <div>{ele.rating}</div>
                                                        <button>Update</button>
                                                        <button>Delete</button>
                                                        </div>
                                            )}</div>
                            </div>
        </div>

    )
       

}

export default AllReviews