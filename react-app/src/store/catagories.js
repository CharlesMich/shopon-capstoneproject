const LOAD_CATAGORIES = "catagories/LOAD_CATAGORIES"
const SINGLE_CATAGORY = "catagories/SINGLE_CATAGORY"
const ADD_CATAGORY = "catagories/ADD_CATAGORY"
const UPDATE_CATAGORY = "catagories/UPDATE_CATAGORY"
const DELETE_CATAGORY = "catagories/DELETE_CATAGORY"

// all catagories
const load_catagories = payload => ({
    type: LOAD_CATAGORIES,
    payload
})

// single catagory
const single_catagory = payload => ({
    type: SINGLE_CATAGORY,
    payload
})

// add a catagory
const add_catagory = payload => ({
    type: ADD_CATAGORY,
    payload
})

// update catagoty
const update_catagory = payload => ({
    type: UPDATE_CATAGORY,
    payload
})

// delete catagory
const delete_catagory = payload => ({
    type: DELETE_CATAGORY,
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
        dispatch(single_catagory(payload))
    }
}

// add a catagory
export const fetchAddCatagory=(formData) => async dispatch => {
    const response = await fetch(`/api/catagory/new`, {
        method:'POST',
        body: formData
    })
    const payload = await response.json();
    dispatch(add_catagory(payload))
    return payload
}

// update catagories
export const fetchUpdateCatagories = (formData, catagoryId) => async dispatch => {
    const response = await fetch(`/api/cagagories/update/${catagoryId}`, {
        method: "POST",
        body: formData
    })
    const payload = await response.json();
    dispatch(update_catagory(payload))
    return payload;
}

// delete catagories
export const fetchDeleteCatagory = (catagoryId) => async dispatch => {
    const response = await fetch(`/api/catagories/delete/${catagoryId}`, {
        method: "POST",
    })
    if(response.ok){
        dispatch(delete_catagory(catagoryId))
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

        case ADD_CATAGORY:
            return {...state, allCatagories:{ ...state.allCatagories, [action.payload.id]: action.payload}}   

        case UPDATE_CATAGORY:
            return {...state, allCatagories:{ ...state.allCatagories, [action.payload.id]: action.payload}}   

        case DELETE_CATAGORY:
            const delCatagory = {...state.allCatagories};
            delete delCatagory[action.payload]
            return {...state}       

        default: 
            return state;
    }
}