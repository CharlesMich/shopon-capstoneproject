import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { useModal } from "../../context/Modal";
import { fetchUpdateReview } from "../../store/review";
import StarRatingInput from '../AddReview/starAnimate';
import './updatereview.css'

function UpdateReviewModal(id) {
    const { reviewId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const review_id = id.id

    const reviews = useSelector((state) => state.review.allReviews[review_id])

    const [review, setReview] = useState(reviews.review);
    const [rating, setRating] = useState(reviews.rating);
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        let errors = {};
        if (review.length < 10) {
            errors.review = "Review must be 10 Character or more"
        }
        if (rating < 1 || !rating || rating === 0) {
            errors.rating = "Rating input has no stars"
        }
        setErrors(errors);
    }, [review, rating])

    if (!reviews) {
        return null
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const reviewUpdateform = {
            review,
            rating
        }

        setHasSubmitted(true);
        if (Object.keys(errors).length > 0) return;
        setReview('')
        setRating()
        closeModal()
        setErrors({});

        await dispatch(fetchUpdateReview(reviewUpdateform, review_id));

        
            closeModal()
            history.push(`/reviews/`)
       
    }

    const onChange = (number) => {
        setRating(parseInt(number));
    };

    return (
        <div className="addReviewContainer">

            <form onSubmit={onSubmit}>
                <div ><h1 style={{ color: "rgb(18 24 30)", fontFamily: 'helvetica', fontSize: "18px" }}>Update your review</h1></div>

                <textarea id="description"
                    type="text"
                    value={review}
                    style={{ width: "300px", height: "200px" }}
                    placeholder='What did you like or dislike? What did you use this product for?'
                    onChange={(e) => setReview(e.target.value)} />
                <div className="add-review-error">{hasSubmitted && errors.review && `${errors.review}`}</div>
                <div ><StarRatingInput disabled={false} onChange={onChange} stars={rating} /></div>
                <div className="add-review-error">{hasSubmitted && errors.stars && `${errors.stars}`}</div>
                <div><button
                    className="revSubButton"
                    style={{ width: "300px", height: "25px", marginTop: "10px", color: "white", border: "none", backgroundColor: "rgb(1247 126 40)", borderRadius: "3px" }}
                // disabled= {errors.review || errors.stars? true : false}

                >Update Your Review</button></div>
                <div><button style={{ width: "300px", height: "25px", marginTop: "10px", backgroundColor: "rgb(18 24 30)", color: "white", border: "none", borderRadius: "3px" }} onClick={closeModal}>Cancel</button></div>
            </form>

        </div>
    )
}

export default UpdateReviewModal;