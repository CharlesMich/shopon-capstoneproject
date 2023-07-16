const LOAD_REVIEWS = "reviews/LOAD_REVIEWS"
const ADD_REVIEW = "review/LOAD_REVIEW"
const SINGLE_REVIEW = "review/SINGLE_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"
const UPDATE_REVIEW = "review/UPDATE_REVIEW"




// allreviews
const load_reviews = payload => ({
    type: LOAD_REVIEWS,
    payload
})

// single product review
const single_review = payload => ({
    type: SINGLE_REVIEW,
    payload
})

// add review
const add_review = payload => ({
    type:ADD_REVIEW,
    payload
})

// delete single review
const delete_review = payload => ({
    type: DELETE_REVIEW,
    payload
})

// update single review
const update_review = payload => ({
    type: update_review,
    payload
})

// Thunk
// get all reviews of user
export const getAllReviews = () => async dispatch => {
    const response = await fetch(`/api/review/`);
    if (response.ok){
        const payload = await response.json();
        
        dispatch(load_reviews(payload));
    }
}

// get single product review
export const getSingleReview = (productid) => async dispatch => {
    const response = await fetch(`/api/review/${productid}`)
    if (response.ok){
        const payload = await response.json();
        dispatch(single_review(payload))
    }
}

// post review
export const fetchPostReview = (postReviewForm) => async dispatch => {
    console.log(postReviewForm)
    const response = await fetch('/api/review/new', {
        method:"POST",
        headers: { "Content-Type": "application/json",
    },
        body: JSON.stringify(postReviewForm)
    })
    if(response.ok){
        const payload = await response.json()
        dispatch(add_review(payload))
        return payload
    }
}

// delete single review
export const fetchDeleteReview = (reviewId) => async dispatch => {
    const response = await fetch(`/api/review/delete/${reviewId}`, {
        method:"POST",
    });
    if (response.ok){
        dispatch(delete_review(reviewId))
    }

}

// update single review
export const fetchUpdateReview = (reviewId) => async dispatch => {
       const response = await fetch(`/api/review/update/${reviewId}`)
}

const initialState = {allReviews:{}, singleReview:{}}

export default function reviewReducer(state = initialState, action){
    switch(action.type){
        case LOAD_REVIEWS:
            const allReviews = {}
            action.payload.forEach(ele=> allReviews[ele.id]=ele)
            return {...state, allReviews}

        case SINGLE_REVIEW:
            const singleReview = {}
            action.payload.forEach(ele=> singleReview[ele.id]=ele)
            return {...state, singleReview}

        case ADD_REVIEW:
            return { ...state, allReviews: { ...state.allReviews, [action.payload.id]: action.payload } }
           

        case DELETE_REVIEW:
            const delReview = {...state.allReviews};
            delete delReview[action.payload]
            return{ ...state }  

        default: 
            return state;
    }
}