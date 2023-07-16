import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllReviews } from "../../store/review";
import { fetchDeleteReview } from "../../store/review"
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

    const handleDelete =  (e) => {
        e.preventDefault()
        const {value} = e.target.dataset
         dispatch(fetchDeleteReview(value)).then(dispatch(getAllReviews())).then(dispatch(getAllReviews()))
    }

    if(!allReviews) return null
    if(!sessionUser) return history.push('/')
    if (!sessionUser) return <Redirect to="/login" />;

    return(
        <div className="review-container">
                            <div className="review-sub-container">
                                            <h1 className="review-h1">Manage All Reviews</h1>
                                            <div className="reviewMap">{allReviews.map((ele)=> 
                                                        <div className="review-each-review">   
                                                        <div>Review id: {ele.id}</div>                                               
                                                        <p className="review-text">{ele.review}</p>
                                                        <div>{ele.rating}</div>
                                                        <button >Update</button>
                                                        <button key={ele.id} onClick={handleDelete} data-value ={ele.id}>Delete</button>
                                                        </div>
                                            )}</div>
                            </div>
        </div>

    )
       

}

export default AllReviews