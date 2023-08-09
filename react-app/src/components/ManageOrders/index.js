import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchGetOrder } from '../../store/order';
import { fetchLoadorderItem } from '../../store/orderitem'
// import './manageproducts.css'
import './manageorder.css'

function ManageOrder() {

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    let userId;
    if (sessionUser) {
        userId = sessionUser.id;
    }
    const allOrders = useSelector(state => Object.values(state.order))
    const orderItems = useSelector(state => Object.values(state.orderItems))
    const myOrders = allOrders.filter(ele => ele.user_id === userId).sort((a,b) => b.id - a.id)

    const [showItem, setShowItem] = useState(-1)

    useEffect(() => {
        dispatch(fetchGetOrder())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchLoadorderItem())
    }, [dispatch])

    function orderSubtotal(array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            count = count + (array[i].price * array[i].quantity)
        }
        return count.toFixed(2);
    }

    const revealText = (id) => {

        showItem !== id? setShowItem(id): setShowItem(-1)
    }

    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <div className="manage-orders-container">
            <div className="manage-orders-subcontainer">
                {/* <h1 className ="manageproducts-h1">Manage your Orders</h1> */}
                <h2 className="manageproducts-h2">My Orders</h2>
                <div className= "manage-order-map-container">{myOrders.map((ele, index) =>
                    <div className="manage-order-order-1">
                            <div className="manage-order-each-order">
                                        <p>order Id: {ele.id}</p>
                                        <p>Order Placed on: {(ele.created_at).split(' ').slice(1, 4).join(' ')}</p>
                                        <button key={ele.id} className="manage-orders-details-button" style={{cursor:"pointer"}} onClick={()=> revealText(index)}>Order Details</button>
                            </div>
                                                
                                <div  key={ele.id} className="manageorder-orderitem-map">{showItem === index && orderItems.filter(item => item.order_id === Number(ele.id)).map(ele => (
                                                    
                                        <div className="order-map-eachitem-1">
                                                <div><img style={{ width: '50px' }} src={ele.img1} alt=""></img></div>
                                                <div>{ele.name}</div>
                                                <div>Qty: {ele.quantity}</div>
                                                <div>{Number(ele.price * ele.quantity).toFixed(2)}</div>
                                        </div>
                                ))}</div>
                                    
                                <div className="manage-orders-subtotal">
                                            <div key={ele.id}>Subtotal: {orderSubtotal(orderItems.filter(item => item.order_id === Number(ele.id)))}</div>
                                            <div key = {ele.id}>Tax: {orderSubtotal(orderItems.filter(item => item.order_id === Number(ele.id))) * 5 / 100}</div>
                                            <div key = {ele.id}>Total: {Number(orderSubtotal(orderItems.filter(item => item.order_id === Number(ele.id)))) + (orderSubtotal(orderItems.filter(item => item.order_id === Number(ele.id))) * 5 / 100)}</div>
                                </div>
                    </div>            
                )}</div>
            </div>
        </div>
            )
}

export default ManageOrder