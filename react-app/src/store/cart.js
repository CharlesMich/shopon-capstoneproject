const LOAD_CART = "cart/LOAD_CART"
const ADD_CART = "cart/ADD_CART"

// load cart
const load_cart = payload => ({
    type: LOAD_CART,
    payload
})


// add cart
const add_cart = payload => ({
    type: ADD_CART,
    payload
})

// Thunk
// load cart
export const fetchGetCart =() => async dispatch=> {
    const response = await fetch(`/api/cart/`)
    if(response.ok){
        const payload = await response.json();
        dispatch(load_cart(payload))
    }
} 

// Add cart
export const fetchAddCart =(userId) => async dispatch => {
    const response = await fetch(`/api/cart/${userId}`)
    if(response.ok){
        const payload = await response.json();
        dispatch(add_cart(payload))
    }
}

const initialState = {}
export default function cartReducer(state = initialState, action){
    switch(action.type){
        // case LOAD_CART:
        //     return {...action.payload}
        case LOAD_CART:
            const cart = {}
            action.payload.forEach(ele => cart[ele.id] = ele);
            return {...state, ...cart}

        case ADD_CART:
            return {...state.cart, ...action.payload}    
        default:
            return state;    
    }
}