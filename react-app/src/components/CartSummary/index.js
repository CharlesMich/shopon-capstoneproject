import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchLoadCartItem } from '../../store/cartproduct';
import { getAllProducts } from "../../store/product";
import { Link, Redirect } from 'react-router-dom'
import './cartsummary.css'


function CartSummary(){
    const dispatch = useDispatch()
    let sessionUser = useSelector((state) => state.session.user);
    const product = useSelector(state => state.product);
    const cartItems = useSelector(state => state.cartProducts);
    
    
    let userId;
    if(sessionUser){
        userId = sessionUser.id
    }
    
    useEffect(() => {
        dispatch(fetchLoadCartItem(userId))
    }, [dispatch, userId]);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);    

    const cartItemArr = Object.values(cartItems);

    if (!sessionUser) return <Redirect to="/login" />;


    // subtotal
    const subTotal = (cartItemArr) => {
        let sum = 0
        for (let i = 0; i < cartItemArr.length; i++) {
            sum = sum + Number(cartItemArr[i].price) * cartItemArr[i].quantity
        }
        return sum;
    }

      // count of items
   const countCart = ()=>{
    let count = 0                       
    for (let item of cartItemArr){
        count = count + item.quantity
    }
    return count;
   }

    return (
        <div className="cartsummary-container">
        <h1 className="cartsummary-title">Cart Summary</h1>
        <div>{cartItemArr && cartItemArr.map((ele) => (
            <div className="cartsummary-body">
            <span className="cartsummary-name">{ele.name}</span>
            <span className="cartsummary-quantity">Qty: {ele.quantity}</span>
            </div>
        ))}</div>
        <Link to="/cart"className="cartsummary-button">Go to Cart</Link>
        <Link to="/"className="cartsummary-button">Continue Shopping</Link>
        </div>
    )
}

export default CartSummary;