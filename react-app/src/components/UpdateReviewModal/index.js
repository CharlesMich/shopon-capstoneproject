import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { useModal } from "../../context/Modal";
import {fetchUpdateReview} from "../../store/review";
import StarRatingInput from '../AddReview/starAnimate';
import './updatereview.css'

function UpdateReviewModal(id){
    const {reviewId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const review_id = id.id

    const reviews = useSelector((state)=> state.review.allReviews[review_id])

    console.log(reviews, id.id)
    const [review, setReview] = useState(reviews.review);
    const [rating, setRating] = useState(reviews.rating);
    const [errors, setErrors] = useState({});

const [hasSubmitted, setHasSubmitted] = useState(false);

useEffect(()=> {
    const errors = {};
    if(review.length === 0) errors.review = "Review is required";
    if(rating.length === 0) errors.stars = "Rating is required";
    if(rating> 5 || rating < 1) errors.rating = "Rating must be an integer between 1 and 5";
    setErrors(errors);
}, [review, rating])

if(!reviews){
    return null
}

const onSubmit = async (e) => {
    e.preventDefault();

const reviewUpdateform ={
    review,
    rating
}

setHasSubmitted(true);
// if (Object.keys(errors).length > 0) return;
setReview('')
        setRating()
        closeModal()
        setErrors({});

let editedReview = await dispatch(fetchUpdateReview(reviewUpdateform, review_id));

if(editedReview){
    closeModal()
    history.push(`/reviews/`)
}
}

const onChange = (number) => {
    setRating(parseInt(number));
};

return(
    <div className="addReviewContainer">

        <form onSubmit={onSubmit}>
            <div ><h1 style={{ color: "rgb(18 24 30)" }}>Update your written review</h1></div>

            <textarea id="description" 
            type="text" 
            value={review} 
            style={{ width: "300px", height:"200px"}}
            placeholder='What did you like or dislike? What did you use this product for?'
                onChange={(e) => setReview(e.target.value)} />
            <span>{hasSubmitted && errors.review && `${errors.review}`}</span>
            <div ><StarRatingInput disabled={false} onChange={onChange} rating={rating} /></div>
            <span>{hasSubmitted && errors.stars && `${errors.stars}`}</span>
            <div><button 
            className="revSubButton"
            style={{ width: "300px", height: "25px", marginTop: "10px", color: "white", border: "none", backgroundColor: "rgb(18 24 30)", borderRadius: "3px" }}
            disabled= {errors.review || errors.stars? true : false}
          
            >Update Your Review</button></div>
            <div><button  style={{ width: "300px", height: "25px", marginTop: "10px", backgroundColor: "rgb(18 24 30)", color: "white", border: "none", borderRadius: "3px" }} onClick={closeModal}>Cancel</button></div>
        </form>

    </div>
)
}

export default UpdateReviewModal;