import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from '../../store/cartproduct';
import { fetchDeleteCartItem } from '../../store/cartproduct';
import { fetchUpdateCartItem } from '../../store/cartproduct';
import { fetchAddOrder } from '../../store/order';
import { fetchAddOrderItem} from '../../store/orderitem'
import './cart.css'

function Cart() {
    const dispatch = useDispatch()
    const history = useHistory()

    let sessionUser = useSelector((state) => state.session.user);
    const product = useSelector(state => state.product)
    const cartItems = useSelector(state => state.cartProducts)

    let userId;
    if(sessionUser){
        userId = sessionUser.id
    }

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    const cartItemArr = Object.values(cartItems)
  
    // delete single item
    const handleDelete = async (e) => {
        e.preventDefault();
        const { value } = e.target.dataset
        await dispatch(fetchDeleteCartItem(value))
    }

    // delete all items 
    const emptyCart = async (e) => {
        e.preventDefault()
        for (let item of cartItemArr) {
            await dispatch(fetchDeleteCartItem(item.id))
        }
    }

    const completeOrder = async (e) => {
        e.preventDefault()
        for (let item of cartItemArr) {
            await dispatch(fetchDeleteCartItem(item.id))
        }
        history.push('/order')
    }

    const checkOut = async (e) => {
        e.preventDefault()
        const newOrder = await dispatch(fetchAddOrder(userId))
        
        if(newOrder){
            const order_id = newOrder.id;
            for (let item of cartItemArr){
                
                const newOrderItemForm  ={
                    order_id,
                    product_id:item.product_id,
                    product:item.name,
                    quantity:item.quantity,
                    price:Number(item.price)
                }   
               await dispatch(fetchAddOrderItem(newOrderItemForm))
               for (let item of cartItemArr) {
                await dispatch(fetchDeleteCartItem(item.id))
                }
            }
            history.push(`/order/${order_id}`)
            }
    }
    // update an item
    useEffect(() => {
        dispatch(fetchLoadCartItem(userId))
    }, [dispatch, userId]);

    const subTotal = (cartItemArr) => {
        let sum = 0
        for (let i = 0; i < cartItemArr.length; i++) {
            sum = sum + Number(cartItemArr[i].price) * cartItemArr[i].quantity
        }
        return sum;
    }

    if (!sessionUser) return <Redirect to="/login" />;

    if (!cartItemArr) {
        return <div>Your Cart is currently Empty</div>
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
        <div className="cart-container">
                                <h1 className="cart-h1">Shopping Cart</h1>
            <div className="cart-sub-container">
                    <div className="cart-items">
                                {!cartItemArr.length ? <div><h2 className="cart-h2" style={{color:'black', fontFamily:"helvetica", fontSize:"17px"}}>Your Shopon Cart is empty</h2><Link to="/"><h2 className="cart-h2" style={{color:'black', fontFamily:"helvetica", fontSize:"17px"}}>Continue Shopping...</h2></Link></div> : null}
                                <div className="cart-map">
                                    {cartItemArr && cartItemArr.map((ele) => (
                                        <div className="cart-map-one">
                                            <div className="cart-map-img-div"><img className="cart-map-img" src={ele.img1}></img></div>


                                            <div className="cart-map-text-div">
                                                <h2 className="cart-map-h2">{ele.name}</h2>
                                                <p className="cart-map-p">{ele.description}</p>
                                            </div>
                                            <div className="cart-quanity-buttons"></div>
                                                <div><button key={ele.id} className="cart-minus" onClick={() => dispatch(fetchUpdateCartItem(Math.max(ele.quantity - 1, 1), ele.id))}><i class="fa-solid fa-circle-minus fa-2x"></i> </button></div>
                                                <span className="cart-quanity-update">{ele.quantity}</span>
                                                <div><button key={ele.id} className="cart-minus" onClick={() => dispatch(fetchUpdateCartItem(ele.quantity + 1, ele.id))}><i class="fa-solid fa-circle-plus fa-2x"></i></button></div>
                                                
                                                <div className="cart-one-price">${(ele.price * ele.quantity).toFixed(2)}</div>
                                                <div className="cart-one-button"><button  className="cart-one-button" onClick={handleDelete} key={ele.id} data-value={ele.id}>Delete</button></div>
                                            </div>

                                    ))}
                                </div>
                               
                    </div>
                   
                    <div>{cartItemArr.length?<div className="cart-summary">
                        <div>{cartItemArr.length? <div>Total Items: {countCart()}</div>: null}</div>
                        {cartItemArr.length ? <div>Subtotal: {subTotal(cartItemArr).toFixed(2)}</div> : null}
                        <div>{cartItemArr.length ? <button className="cart-shoppingcart-button" style={{maxWidth:'270px', cursor:"pointer"}} onClick={emptyCart}>Empty Cart</button> : null}</div>
                        <div>{cartItemArr.length ? <button className="cart-shoppingcart-button" style={{ backgroundColor: "yellow", width:'270px', cursor:"pointer"}} onClick={checkOut}>Buy Now</button> : null}</div>
                    </div>:null}</div>
            </div>
        </div>

    )
}

export default Cart