const LOAD_ORDER = "order/LOAD_ORDER"
const ADD_ORDER = "cart/ADD_ORDER"

// load cart
const load_order = payload => ({
    type: LOAD_ORDER,
    payload
})


// add cart
const add_order = payload => ({
    type: ADD_ORDER,
    payload
})

// Thunk
// load cart
export const fetchGetOrder =() => async dispatch=> {
    const response = await fetch(`/api/order/`)
    if(response.ok){
        const payload = await response.json();
        dispatch(load_order(payload))
    }
} 

// Add cart
export const fetchAddOrder =(userId) => async dispatch => {
    const response = await fetch(`/api/order/new`, {
        method:"POST",
        headers: { "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id:userId}),
    })
    // if(response.ok){
        const payload = await response.json();
        dispatch(add_order(payload))
        return payload
    // }
}

const initialState = {}
export default function orderReducer(state = initialState, action){
    switch(action.type){
        // case LOAD_CART:
        //     return {...action.payload}
        case LOAD_ORDER:
            const order = {}
            action.payload.forEach(ele => order[ele.id] = ele);
            return {...state, ...order}

        case ADD_ORDER:
            return {...state.order, ...action.payload}    
        default:
            return state;    
    }
}