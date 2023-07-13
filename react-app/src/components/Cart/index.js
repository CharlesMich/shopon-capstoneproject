import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from '../../store/cartproduct';
import { fetchGetCart } from '../../store/cart';


function Cart(){
    const dispatch = useDispatch()
    // const history = useHistory()
    
    const userId = useSelector(state => state.session.user.id) 
    const cartId = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const cartItems = useSelector(state => state.cartProducts)

    console.log(userId)
    console.log(cartId)
    console.log('product', product)
    // console.log(cartItems)

    useEffect(() => {
        dispatch(fetchGetCart())
    },[dispatch]);

    useEffect(() => {
        dispatch(fetchLoadCartItem())
    },[dispatch]);

    
    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);
    


    const cartItemArr = Object.values(cartItems)


    return(
        <div className="cart-container">
        <div>Shopping Cart</div>
        <div className="cart-items">
            <div className= "cart-map">
                {cartItemArr.map(ele=> (
                    <div>
                    
                    <div>{ele.name}</div>
                    <div>{ele.description}</div>
                    <div>{ele.price}</div>
                    <div>{ele.quantity}</div>
                    </div>

                ))}
            </div>
        </div>
        </div>

    )
}

export default Cart