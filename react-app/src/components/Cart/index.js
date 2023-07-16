import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from '../../store/cartproduct';
import { fetchGetCart } from '../../store/cart';
import { fetchDeleteCartItem } from '../../store/cartproduct';
import { fetchUpdateCartItem } from '../../store/cartproduct';
import './cart.css'


function Cart() {
    const dispatch = useDispatch()
    // const history = useHistory()

    const userId = useSelector(state => state.session.user.id)
    const cartId = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const cartItems = useSelector(state => state.cartProducts)

    useEffect(() => {
        dispatch(fetchGetCart())
    }, [dispatch]);

    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);
    
    const cartItemArr = Object.values(cartItems)
    cartItemArr.forEach(ele => console.log(ele.name))
    console.log('cartitemsarr', cartItemArr)
    // if (cartId) return null;
    

    // delete single item
    const handleDelete = async(e) => {
        e.preventDefault();
        const {value} = e.target.dataset
        
        await dispatch(fetchDeleteCartItem(value))
    }    

    // delete all items 
    
        const emptyCart = async(e) => {
            e.preventDefault()
            for (let item of cartItemArr){
            await dispatch(fetchDeleteCartItem(item.id))
        }    
    }

    // update an item

    useEffect(() => {
        dispatch(fetchLoadCartItem(userId))
    }, [dispatch, userId]);


    const subTotal = (cartItemArr)=> {
            let sum = 0 
        for (let i = 0; i < cartItemArr.length; i++){
            sum = sum + Number(cartItemArr[i].price)*cartItemArr[i].quantity
        }    
        return sum;
    }
    console.log(subTotal(cartItemArr))
  

    if(!cartItemArr){
        return <div>Your Cart is currently Empty</div>
    }

    return (
        <div className="cart-container">
            <div className="cart-items">
            <h1 className= "cart-h1">Shopping Cart</h1>
                <div className="cart-map">
                    {cartItemArr && cartItemArr.map((ele) => (
                        <div className="cart-map-one">
                                    <div className="cart-map-img-div">
                                            <img className="cart-map-img" src={ele.img1}></img>
                                    </div>


                                    <div className="cart-map-text-div">           
                                            <h2 className ="cart-map-h2">{ele.name}</h2>
                                            <p className ="cart-map-p">{ele.description}</p>
                                    </div>        
                                            <div className="cart-quanity-buttons"></div>
                                            <button key={ele.id} className="cart-minus" onClick={() =>dispatch(fetchUpdateCartItem(Math.max(ele.quantity-1,1), ele.id ))}><i class="fa-solid fa-circle-minus fa-2x"></i> </button>
                                            <span className="cart-quanity-update">{ele.quantity}</span>
                                            <button key={ele.id} className="cart-minus" onClick={() => dispatch(fetchUpdateCartItem(ele.quantity+1, ele.id ))}><i class="fa-solid fa-circle-plus fa-2x"></i></button>
                        
                                            <div>${(ele.price * ele.quantity).toFixed(2)}</div>
                                            
                                            <div><button onClick={handleDelete} key = {ele.id} data-value ={ele.id}>Delete</button></div>
                                   
                        </div>

                    ))}
                </div>
                <div>Subtotal: ${subTotal(cartItemArr).toFixed(2)}</div>
            </div>
            <div className="cart-buttons">
            <div><button className="product-details-shoppingcart-button" onClick={emptyCart}>Empty Cart</button></div>
            <div><button className="product-details-shoppingcart-button" style={{backgroundColor:"yellow", width:"270px"}} onClick={emptyCart}>Buy Now</button></div>
            </div>
        </div>
        
    )
}

export default Cart