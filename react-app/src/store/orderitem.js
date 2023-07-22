const ALL_ORDERITEMS = "orderitems/ALL_ORDERITEMS"
const ADD_ORDERITEM = "orderitems/ADD_ORDERITEM"
const DELETE_ORDERITEM = "orderitems/DELETE_ORDERITEM"
const EDIT_ORDERITEM = "orderitems/EDIT_ORDERITEM"

const all_orderitems = payload => ({
    type: ALL_ORDERITEMS,
    payload
})

const add_orderitem = payload => ({
    type: ADD_ORDERITEM,
    payload
})

const edit_orderitem =payload => ({
    type: EDIT_ORDERITEM,
    payload
})


const delete_orderitem = payload => ({
    type: DELETE_ORDERITEM,
    payload
})

// Thunks
// Get
export const fetchLoadorderItem = () => async dispatch => {
    const response = await fetch('/api/orderitem/')
    if (response.ok){
        const payload = await response.json()
        dispatch(all_orderitems(payload))
    }
}

// Add
export const fetchAddOrderItem = (newOrderItemForm) => async dispatch => {
    const response = await fetch('/api/orderitem/new', {
        method:"POST",
        headers: { "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrderItemForm),
    })
    
    if (response.ok){
        const payload = await response.json();
        dispatch(add_orderitem(payload))

    }
}

// Delete
// export const fetchDeleteCartItem = (cartItemId) => async dispatch => {
//     const response = await fetch(`/api/cartproduct/delete-cart/${cartItemId}`, {
//         method:"POST"
//     });
//     if (response.ok){
//         dispatch(delete_caritem(cartItemId))
//     }

// }

// Update
// export const fetchUpdateCartItem = (updateCartItemForm, cartItemId) => async dispatch => {
//     const response = await fetch(`/api/cartproduct/update-cart/${cartItemId}`,{
//         method:"POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updateCartItemForm),
//     })
//     if (response.ok){
//         const payload = await response.json();
//         dispatch(edit_caritem(payload));
//         return payload
//     }
// }

const initialState = {};

export default function orderItemReducer(state=initialState, action){
    switch(action.type){
        case ALL_ORDERITEMS:
            const orderItems = {};
            
            action.payload.forEach(ele => orderItems[ele.id] = ele);
            return { ...state, ...orderItems }

        case ADD_ORDERITEM:
            return {...state.orderItems, [action.payload.id]: action.payload}

        // case EDIT_CARTITEM:
        //     return {...state.cartItems, [action.payload.id]: action.payload}

        // case DELETE_CARTITEM:
        //     const delState = {...state.cartItems}
        //     delete delState[action.payload]
        //     return {...state}    
               
        default: return state;        
    }
}


