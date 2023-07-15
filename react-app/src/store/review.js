const LOAD_REVIEWS = "reviews/LOAD_REVIEWS"
const SINGLE_REVIEW = "review/SINGLE_REVIEW"


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
        console.log(payload)
        dispatch(single_review(payload))
    }
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

        default: 
            return state;
    }
}