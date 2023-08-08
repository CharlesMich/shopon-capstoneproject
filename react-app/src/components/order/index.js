import {Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchLoadorderItem} from '../../store/orderitem'
import './order.css'

function Order(){

    const orderId = useParams().orderId;
    const dispatch = useDispatch()
    console.log(orderId)

    const myOrder = useSelector(state => Object.values((state.orderItems)));
    const orderItems = myOrder.filter(ele => ele.order_id === Number(orderId))
    console.log(orderItems)

    useEffect(()=> {
        dispatch(fetchLoadorderItem())
    }, [dispatch])

    function orderSubtotal(array){
        let count = 0;
        for(let i = 0; i < array.length; i++){
            count = count + (array[i].price * array[i].quantity)
        }
        return count.toFixed(2);
    }

    if(!myOrder) return null;
    return (
        <div className="order-container">
            <div className ="order-body">
                <h1 className= "order-h1">Thank you for the Order</h1>
                <h2 className="order-h2">Order Summary</h2>
             <div className="order-map">{orderItems.map((ele)=>
                <div className="order-map-eachitem">
                    <div><img style={{width:'50px'}} src ={ele.img1} alt=""></img></div>
                <div>{ele.name}</div>
                <div>Qty: {ele.quantity}</div>
                <div>{Number(ele.price * ele.quantity).toFixed(2)}</div>
                </div>
                )}</div>
                <div className="order-grandtotal">
                    <div className="order-sub-grandtotal">
                <div>Subtotal: {orderSubtotal(orderItems)}</div>
                <div>Tax: {orderSubtotal(orderItems) * 5 /100}</div>
                <div>Total: {Number(orderSubtotal(orderItems)) + orderSubtotal(orderItems) * 5 /100}</div>
                </div>
                </div>
             <Link to="/"><h2 className="order-h2">Continue Shopping...</h2></Link>
             </div>
        </div>
    )
}
export default Order