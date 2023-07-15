const LOAD_PRODUCTS = "products/LOAD_PRODUCTS"
const SINGLE_PRODUCT = "products/SINGLE_PRODUCT"


// all products
const load_products = payload => ({
    type: LOAD_PRODUCTS,
    payload
})

// single product
const single_product = payload => ({
    type: SINGLE_PRODUCT,
    payload
})



// Thunk
// get all products
export const getAllProducts = () => async dispatch => {
    const response = await fetch(`/api/product/`);
    if (response.ok){
        const payload = await response.json();
        
        dispatch(load_products(payload));
    }
}

// get single product
export const getSingleProduct = (id) => async dispatch => {
    const response = await fetch(`/api/product/${id}`)
    if (response.ok){
        const payload = await response.json();
        console.log(payload)
        dispatch(single_product(payload))
    }
}

const initialState = {allProducts:{}, singleProduct:{}}
// const initialState = {allProducts:{}, singleProduct:{}}
export default function productReducer(state = initialState, action){
    switch(action.type){
        case LOAD_PRODUCTS:
            const allProducts = {}
            action.payload.forEach(ele=> allProducts[ele.id]=ele)
            return {...state, allProducts}

        case SINGLE_PRODUCT:
            const singleProduct = {...action.payload}
            
            return {...state, singleProduct}

        default: 
            return state;
    }
}