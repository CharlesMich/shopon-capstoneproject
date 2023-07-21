import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import StarRatingInput from './starAnimate';
import './addreview.css';
import { fetchPostReview } from "../../store/review";

function CreateReviewModal(id) {

    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory();

    let product_id = id.id;

    let sessionUser = useSelector((state) => state.session.user);
    let product = useSelector((state)=> state.product.singleProduct)

    let user_id;
    if (sessionUser) {
        user_id = sessionUser.id
    }

    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(()=> {
        let errors = {};
        if(review.length < 10){
            errors.review = "Review must be 10 Character or more"
        }
        if(rating < 1 || !rating || rating === 0){
            errors.rating = "Rating input has no stars"
        }
        setErrors(errors);
    }, [review, rating]);

    const onSubmit = async (e) => {
        e.preventDefault();
 

        const postReviewForm = {
            product_id,
            user_id,
            review,
            rating
        }

        setHasSubmitted(true);
        if (Object.keys(errors).length > 0) return;

        setReview('')
        setRating()
        closeModal()
        setErrors({});

        await dispatch(fetchPostReview(postReviewForm))    
        closeModal()
        history.push(`/reviews`);

    // let newReview = await dispatch(fetchPostReview(postReviewForm))
    //      if(newReview) {
    //         closeModal()
    //      history.push(`/reviews`);
    //      }
    };

const onChange = (number) => {
    setRating(parseInt(number));
};

return (
    <div className="addReviewContainer">        
        <form onSubmit={onSubmit}>
            <div><img src={product.img1} style={{width:"50px"}}></img></div>
            <div style={{ color: "rgb(18 24 30)", fontFamily:"helvetica", fontSize:"14px" }}>{product.name}</div>
            <div ><h1 style={{ color: "rgb(18 24 30)", fontFamily:"helvetica", fontSize:"20px" }}>Add a review</h1></div>
            <textarea id="description" 
            type="text" 
            value={review} 
            placeholder='What did you like or dislike? What did you use this product for?'
            onChange={(e) => setReview(e.target.value)} />
            <div className="add-review-error">{hasSubmitted && errors.review && `${errors.review}`}</div>
            <div ><StarRatingInput disabled={false} onChange={onChange} stars={rating} /></div>
            <div className="add-review-error">{hasSubmitted && errors.rating && `${errors.rating}`}</div>
            <div><button 
            className="revSubButton"
            style={{ width: "400px", height: "25px", marginTop: "10px", color: "white", border: "none", backgroundColor: "rgb(247 126 40)", borderRadius: "3px" }}
            // disabled= {errors.review || errors.stars? true : false}        
            >Submit Your Review</button></div>
            <div><button  style={{ width: "400px", height: "25px", marginTop: "10px", backgroundColor: "rgb(18 24 30)", color: "white", border: "none", borderRadius: "3px" }} onClick={closeModal}>Cancel</button></div>
        </form>
    </div>
)
}
export default CreateReviewModal;
