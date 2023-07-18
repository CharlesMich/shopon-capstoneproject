import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from '../../store/cartproduct';
import { fetchGetCart } from '../../store/cart';
import { fetchDeleteCartItem } from '../../store/cartproduct';
import { fetchUpdateCartItem } from '../../store/cartproduct';
import './cart.css'


function Cart() {
    const dispatch = useDispatch()
    const history = useHistory()

    const userId = useSelector(state => state.session.user.id)
    let sessionUser = useSelector((state) => state.session.user);
    // const cartId = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const cartItems = useSelector(state => state.cartProducts)

    useEffect(() => {
        dispatch(fetchGetCart())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    const cartItemArr = Object.values(cartItems)
    // cartItemArr.forEach(ele => console.log(ele.name))
    // console.log('cartitemsarr', cartItemArr)

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
   console.log(countCart())

    return (
        <div className="cart-container">
            <div className="cart-items">
                <h1 className="cart-h1">Shopping Cart</h1>
                {!cartItemArr.length ? <h2 className="cart-h2">Your Shopon Cart is empty</h2> : null}
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
                                
                                <div>${(ele.price * ele.quantity).toFixed(2)}</div>
                                <div><button onClick={handleDelete} key={ele.id} data-value={ele.id}>Delete</button></div>
                            </div>

                    ))}
                </div>
                <div className="cart-itemcount-total">
                <div>Total Items: {countCart()}</div>
                {cartItemArr.length ? <div>Subtotal: {subTotal(cartItemArr).toFixed(2)}</div> : null}
                </div>
            </div>
            <div className="cart-buttons">
                <div>{cartItemArr.length ? <button className="product-details-shoppingcart-button" onClick={emptyCart}>Empty Cart</button> : null}</div>
                <div>{cartItemArr.length ? <button className="product-details-shoppingcart-button" style={{ backgroundColor: "yellow", width: "270px" }} onClick={completeOrder}>Buy Now</button> : null}</div>
            </div>
        </div>

    )
}

export default Cart