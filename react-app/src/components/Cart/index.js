import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from '../../store/cartproduct';
import { fetchGetCart } from '../../store/cart';


function Cart() {
    const dispatch = useDispatch()
    // const history = useHistory()

    const userId = useSelector(state => state.session.user.id)
    const cartId = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const cartItems = useSelector(state => state.cartProducts)


    const [quantity, setquantity] = useState()

    useEffect(() => {
        dispatch(fetchGetCart())
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchLoadCartItem(userId))
    }, [dispatch, userId]);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    const cartItemArr = Object.values(cartItems)
    cartItemArr.forEach(ele => console.log(ele.name))
    console.log('cartitemsarr', cartItemArr)
    // if (cartId) return null;


    if(!cartItemArr){
        return <div>Your Cart is currently Empty</div>
    }

    return (
        <div className="cart-container">
            <div>Shopping Cart</div>
            <div className="cart-items">
                <div className="cart-map">
                    {cartItemArr && cartItemArr.map((ele) => (
                        <div>

                            <div >{ele.cart_id}</div>
                            <div>{ele.description}</div>
                            <div>{ele.price}</div>
                            <div>{ele.quantity}</div>
                            <div><button>Update</button></div>
                        </div>

                    ))}
                </div>
            </div>
            <div><button>Empty Cart</button></div>
        </div>

    )
}

export default Cart