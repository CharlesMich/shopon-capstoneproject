const ALL_CARTITEMS = "cartitems/ALL_CARTITEMS"
const ADD_CARTITEM = "cartitems/ADD_CARTITEM"
const DELETE_CARTITEM = "cartitems/DELETE_CARTITEM"
const EDIT_CARTITEM = "cartitems/EDIT_CARTITEM"

const all_cartitems = payload => ({
    type: ALL_CARTITEMS,
    payload
})

const add_cartitem = payload => ({
    type: ADD_CARTITEM,
    payload
})

const edit_caritem =payload => ({
    type: EDIT_CARTITEM,
    payload
})


const delete_caritem = payload => ({
    type: DELETE_CARTITEM,
    payload
})

// Thunks
// Get
export const fetchLoadCartItem = (cartId) => async dispatch => {
    const response = await fetch(`/api/cartproduct/${cartId}`)
    if (response.ok){
        const payload = await response.json()
        dispatch(all_cartitems(payload))
        console.log('fetch cartitem', payload)
    }
}

// Add
export const fetchAddCartItem = () => async dispatch => {
    const response = await fetch('/api/cartproduct/new')
    if (response.ok){
        const payload = await response.json();
        dispatch(add_cartitem(payload))

    }
}

// Delete
export const fetchDeleteCartItem = (cartItemId) => async dispatch => {
    const response = await fetch(`/api/cartproduct/delete-cart/${cartItemId}`, {
        method:"POST"
    });
    if (response.ok){
        dispatch(delete_caritem(cartItemId))
    }

}

// Update
export const fetchUpdateCartItem = (updateCartItemForm, cartItemId) => async dispatch => {
    const response = await fetch(`/api/cartproduct/update-cart/${cartItemId}`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCartItemForm),
    })
    if (response.ok){
        const payload = await response.json();
        dispatch(edit_caritem(payload));
        return payload
    }
}

const initialState = {};

export default function cartItemReducer(state=initialState, action){
    switch(action.type){
        case ALL_CARTITEMS:
            const cartItems = {};
            console.log(action.payload)
            action.payload.forEach(ele => cartItems[ele.id] = ele);
            return { ...state, ...cartItems }

        // case ADD_CARTITEM:
        //     return {...state.cartItems, [action.payload.id]: action.payload}

        // case EDIT_CARTITEM:
        //     return {...state.cartItems, [action.payload.id]: action.payload}

        // case DELETE_CARTITEM:
        //     const delState = {...state.cartItems}
        //     delete delState[action.payload]
        //     return {...state}    
               
        default: return state;        
    }
}


