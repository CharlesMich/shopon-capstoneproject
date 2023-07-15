import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from '../../store/cartproduct';
import { fetchGetCart } from '../../store/cart';
import { fetchDeleteCartItem } from '../../store/cartproduct';


function Cart() {
    const dispatch = useDispatch()
    // const history = useHistory()

    const userId = useSelector(state => state.session.user.id)
    const cartId = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const cartItems = useSelector(state => state.cartProducts)


    const [quantity, setQuantity] = useState()

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

    useEffect(() => {
        dispatch(fetchLoadCartItem(userId))
    }, [dispatch, userId]);

    const minusQty = e => {
        const {value} = e.target.dataset
        setQuantity(value-1)
    }

    const addQty = e => {
        const {value} = e.target.dataset
        setQuantity(value+1)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

    }

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
                            <div>{ele.id}</div>
                            <div>{ele.description}</div>
                            <div>{ele.price}</div>
                            <div>{ele.quantity}</div>
                            <form onSubmit={onSubmit}>
                            <div><button key={ele.id} className="cart-minus" onClick={minusQty}>minus</button></div>
                            <div><input type="number" value ={quantity} quantity = {ele.quantity} ></input></div>
                            <div><button key={ele.id} className="cart-minus" onClick={addQty}>Add</button></div>
                            <div><button>Update</button></div>
                            </form>
                           

                            <div><button onClick={handleDelete} key = {ele.id} data-value ={ele.id}>Delete</button></div>
                        </div>

                    ))}
                </div>
            </div>
            <div><button onClick={emptyCart}>Empty Cart</button></div>
            <div><Link to={`/reviews`}>Reviews</Link></div>
            <div><Link to={`/products`}>Products</Link></div>
        </div>
        
    )
}

export default Cart