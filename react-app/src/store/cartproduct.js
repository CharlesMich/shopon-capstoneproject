const ALL_CARTITEMS = "cartitems/ALL_CARTITEMS"
const ADD_CARTITEM = "cartitems/ADD_CARTITEM"
const DELETE_CARTITEM = "cartitems/DELETE_CARTITEM"
const EDIT_CARTITEM = "cartitems/EDIT_CARTITEM"
const EMPTY_CART = "cartitems/EMPTY_CART"

const all_cartitems = payload => ({
    type: ALL_CARTITEMS,
    payload
})

const add_cartitem = payload => ({
    type: ADD_CARTITEM,
    payload
})

const edit_cartitem =payload => ({
    type: EDIT_CARTITEM,
    payload
})


const delete_cartitem = payload => ({
    type: DELETE_CARTITEM,
    payload
})

export const empty_cart =() => ({
    type: EMPTY_CART,
})

// Thunks
// Get
export const fetchLoadCartItem = (userId) => async dispatch => {
    const response = await fetch(`/api/cartproduct/${userId}`)
    if (response.ok){
        const payload = await response.json()
        dispatch(all_cartitems(payload))
    }
}

// Add
export const fetchAddCartItem = (createCartForm) => async dispatch => {
    const response = await fetch('/api/cartproduct/new', {
        method:"POST",
        headers: { "Content-Type": "application/json",
        },
        body: JSON.stringify(createCartForm),
        
    })
    console.log('fetch/send/cartform', createCartForm)
   
    if (response.ok){
        const payload = await response.json();
        dispatch(add_cartitem(payload))
        return payload

    }
}

// Delete
export const fetchDeleteCartItem = (cartItemId) => async dispatch => {
    const response = await fetch(`/api/cartproduct/delete-cart/${cartItemId}`, {
        method:"POST"
    });
    if (response.ok){
        dispatch(delete_cartitem(cartItemId))
    }

}

// Update
export const fetchUpdateCartItem = (quantity, cartItemId) => async dispatch => {
    console.log(JSON.stringify({quantity}))
    const response = await fetch(`/api/cartproduct/update-cart/${cartItemId}`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({quantity}),
    })
    if (response.ok){
        const payload = await response.json();
        dispatch(edit_cartitem(payload));
        return payload
    }
}

const initialState = {};

export default function cartItemReducer(state=initialState, action){
    switch(action.type){
        case ALL_CARTITEMS:
            const cartItems = {};
            action.payload.forEach(ele => cartItems[ele.id] = ele);
            return { ...state, ...cartItems }

        case ADD_CARTITEM:
            const newItems = {}
            newItems[action.payload.id] = action.payload
            return {...state.cartItems, ...newItems}

        case EDIT_CARTITEM:
            return {...state, [action.payload.id]: action.payload}

        case DELETE_CARTITEM:
            const delState = {...state};
            delete delState[action.payload]
            return delState  
        
        case EMPTY_CART:
            return {};

               
        default: return state;        
    }
}


