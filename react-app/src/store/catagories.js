const LOAD_CATAGORIES = "catagories/LOAD_CATAGORIES"
const SINGLE_CATAGORY = "catagories/SINGLE_CATAGORY"


// all products
const load_catagories = payload => ({
    type: LOAD_CATAGORIES,
    payload
})

// single product
const single_catagory = payload => ({
    type: SINGLE_CATAGORY,
    payload
})



// Thunk
// get all catagories
export const getAllCatagories = () => async dispatch => {
    const response = await fetch(`/api/catagory/`);
    if (response.ok){
        const payload = await response.json();
        
        dispatch(load_catagories(payload));
    }
}

// get single catagory
export const getSingleCatagory = (id) => async dispatch => {
    const response = await fetch(`/api/catagory/${id}`)
    if (response.ok){
        const payload = await response.json();
        console.log(payload)
        dispatch(single_catagory(payload))
    }
}

const initialState = {allCatagories:{}, singleCatagory:{}}
// const initialState = {allProducts:{}, singleProduct:{}}
export default function catagoryReducer(state = initialState, action){
    switch(action.type){
        case LOAD_CATAGORIES:
            const allCatagories = {}
            action.payload.forEach(ele=> allCatagories[ele.id]=ele)
            return {...state, allCatagories}

        case SINGLE_CATAGORY:
            const singleCatagory = {...action.payload}
            
            return {...state, singleCatagory}

        default: 
            return state;
    }
}