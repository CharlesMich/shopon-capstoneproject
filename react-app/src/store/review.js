const USER_REVIEWS = "reviews/USER_REVIEWS"
const ALL_REVIEWS = "reviews/ALL_REVIEWS"
const ADD_REVIEW = "review/LOAD_REVIEW"
const PRODUCT_REVIEW = "review/PRODUCT_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"
const UPDATE_REVIEW = "review/UPDATE_REVIEW"



// all reviews
const all_reviews = payload => ({
    type: ALL_REVIEWS,
    payload
})



// user reviews
const user_reviews = payload => ({
    type: USER_REVIEWS,
    payload
})

// product reviews
const product_review = payload => ({
    type: PRODUCT_REVIEW,
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
    type: UPDATE_REVIEW,
    payload
})

// Thunk

// get all reviews
export const fetchAllReviews = () => async dispatch => {
    const response = await fetch(`/api/review/`);
    if(response.ok){
        const payload = await response.json();
        dispatch(all_reviews(payload))
    }
}


// get all reviews of user
export const getAllReviews = (userId) => async dispatch => {
    const response = await fetch(`/api/review/user/${userId}`);
    if (response.ok){
        const payload = await response.json();
        
        dispatch(user_reviews(payload));
    }
}

// get single product review
export const getSingleReview = (productid) => async dispatch => {
    const response = await fetch(`/api/review/product/${productid}`)
    if (response.ok){
        const payload = await response.json();
        dispatch(product_review(payload))
    }
}

// post review
export const fetchPostReview = (postReviewForm) => async dispatch => {
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
export const fetchUpdateReview = (reviewUpdateform, reviewId) => async dispatch => {
       const response = await fetch(`/api/review/update/${reviewId}`, {
        method:"POST",
        headers: { "Content-Type": "application/json",
    },
        body: JSON.stringify(reviewUpdateform)
       })
       if (response.ok) {
        const payload = await response.json()
        dispatch(update_review(payload))
       }
}

const initialState = {allReviews:{}, singleReview:{}, reviews:{}}

export default function reviewReducer(state = initialState, action){
    switch(action.type){

        case ALL_REVIEWS:
            const reviews = {}
            action.payload.forEach(ele => reviews[ele.id] = ele)
            return {...state, reviews}


        case USER_REVIEWS:
            const allReviews = {}
            action.payload.forEach(ele=> allReviews[ele.id]=ele)
            return {...state, allReviews}

        case PRODUCT_REVIEW:
            const singleReview = {}
            action.payload.forEach(ele=> singleReview[ele.id]=ele)
            return {...state, singleReview}

        case ADD_REVIEW:
            return { ...state, allReviews: { ...state.allReviews, [action.payload.id]: action.payload }}

        case UPDATE_REVIEW:
            return { ...state, allReviews: { ...state.allReviews, [action.payload.id]: action.payload }}   
           

        case DELETE_REVIEW:
            const delReview = {...state.allReviews};
            delete delReview[action.payload]
            return{ ...state }  

        default: 
            return state;
    }
}