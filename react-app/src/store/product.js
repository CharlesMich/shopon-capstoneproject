const LOAD_PRODUCTS = "products/LOAD_PRODUCTS"
const SINGLE_PRODUCT = "products/SINGLE_PRODUCT"
const ADD_PRODUCT = "products/ADD_PRODUCT"
const SEARCH_PRODUCT = "products/SEARCH_PRODUCT"
const DELETE_PRODUCT = "products/DELETE_PRODUCT"

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

// add product
const add_product = payload => ({
    type: ADD_PRODUCT,
    payload
})

// search products
const search_products = payload => ({
    type: SEARCH_PRODUCT,
    payload
})

// delete product
const delete_product = payload => ({
    type: DELETE_PRODUCT,
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

// get search product
export const searchProducts = (searchtext) => async dispatch => {
    const response = await fetch(`/api/product/${searchtext}`)
    if(response.ok){
        const payload = await response.json();
        dispatch(search_products(payload));
    }
}
// get single product
export const getSingleProduct = (id) => async dispatch => {
    const response = await fetch(`/api/product/${id}`)
    if (response.ok){
        const payload = await response.json();
        dispatch(single_product(payload))
    }
}

// add a product
export const fetchAddProduct = (formData) => async dispatch => {
    const response = await fetch(`/api/product/new`, {
        method:'POST',
        body: formData
    })
    // if(response.ok){
        const payload = await response.json();
        console.log(payload)
        dispatch(add_product(payload))
        return payload
    // } 
}

// delete product
export const fetchDeleteProduct = (productId) => async dispatch =>{
    const response = await fetch(`/api/product/delete/${productId}`, {
        method:"POST",
    });
    if(response.ok){
        dispatch(delete_product(productId))
    }
}

const initialState = {allProducts:{}, singleProduct:{}, searchProducts:{}}
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

        case SEARCH_PRODUCT:
            const searchProducts = {}
            action.payload.forEach(ele => searchProducts[ele.id]=ele)
            return {...state, searchProducts}; 

        case ADD_PRODUCT:
            return {...state, singleProduct: { ...state.singleProduct, [action.payload.id]: action.payload }}   
        
        case DELETE_PRODUCT:
            const delProduct = {...state.allProducts};
            delete delProduct[action.payload]
            return {...state}   
              
        default: 
            return state;
    }
}