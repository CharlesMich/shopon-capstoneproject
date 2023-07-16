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
            errors.stars = "Rating input has no stars"
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

        setHasSubmitted(true)

        setReview('')
        setRating()
        closeModal()
        setErrors({});


    let newReview = await dispatch(fetchPostReview(postReviewForm))
    // console.log(newReview)
         if(newReview) closeModal()
    };

    history.push(`/products/${product_id}`);


const onChange = (number) => {
    setRating(parseInt(number));
};

return (
    <div className="addReviewContainer" style={{ width: "300px", height: " 250px" }}>

        <form onSubmit={onSubmit}>
            <div ><h1 style={{ color: "rgb(18 24 30)" }}>Add a written review</h1></div>

            <div><img src={product.img1} style={{width:"50px"}}></img></div>
            <div>{product.name}</div>

            <textarea id="description" 
            type="text" 
            value={review} 
            placeholder='What did you like or dislike? What did you use this product for?'
                onChange={(e) => setReview(e.target.value)} />
            <span>{hasSubmitted && errors.review && `${errors.review}`}</span>
            <div ><StarRatingInput disabled={false} onChange={onChange} rating={rating} /></div>
            <span>{hasSubmitted && errors.stars && `${errors.stars}`}</span>
            <div><button 
            className="revSubButton"
            style={{ width: "400px", height: "25px", marginTop: "10px", color: "white", border: "none", backgroundColor: "rgb(18 24 30)", borderRadius: "3px" }}
            disabled= {errors.review || errors.stars? true : false}
          
            >Submit Your Review</button></div>
            <div><button  style={{ width: "400px", height: "25px", marginTop: "10px", backgroundColor: "rgb(18 24 30)", color: "white", border: "none", borderRadius: "3px" }} onClick={closeModal}>Cancel</button></div>
        </form>

    </div>
)

}
export default CreateReviewModal;
