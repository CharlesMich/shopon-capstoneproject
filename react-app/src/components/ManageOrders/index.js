// import { useSelector } from "react-redux"
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
// import { fetchGetOrder } from '../../store/order';
// import { fetchLoadorderItem } from '../../store/orderitem'
// // import './manageproducts.css'
// import './manageorder.css'

// function ManageOrder() {

//     const dispatch = useDispatch()
//     const sessionUser = useSelector(state => state.session.user)

//     let userId;
//     if (sessionUser) {
//         userId = sessionUser.id;
//     }
//     const allOrders = useSelector(state => Object.values(state.order))
//     const orderItems = useSelector(state => Object.values(state.orderItems))
//     const myOrders = allOrders.filter(ele => ele.user_id === userId)

//     const [showItem, setShowItem] = useState(false)
//     console.log(showItem)
//     useEffect(() => {
//         dispatch(fetchGetOrder())
//     }, [dispatch])

//     useEffect(() => {
//         dispatch(fetchLoadorderItem())
//     }, [dispatch])

//     function orderSubtotal(array) {
//         let count = 0;
//         for (let i = 0; i < array.length; i++) {
//             count = count + (array[i].price * array[i].quantity)
//         }
//         return count;
//     }

//     const revealText = () => {
//         !showItem ? setShowItem(true) : setShowItem(false)
//     }

//     if (!sessionUser) return <Redirect to="/login" />;

//     return (
//         <div className="manageproducts-container">
//             <div className="manageproducts-subcontainer">
//                 {/* <h1 className ="manageproducts-h1">Manage your Orders</h1> */}
//                 <h2 className="manageproducts-h2">My Orders</h2>
//                 <div>{myOrders.map((ele) =>
//                     <div>
//                         <div className="manageproduct-each-product">
//                             <p>order Id: {ele.id}</p>
//                             <p>Order Placed on: {(ele.created_at).split(' ').slice(1, 4).join(' ')}</p>
//                             <button onClick={revealText} >Order Details</button>
//                         </div>
//                         <div key={ele.id}>{showItem && orderItems.filter(item => item.order_id === Number(ele.id)).map(ele => (
//                                         <div>
//                                             <div className="order-map-eachitem">
//                                                 <div><img style={{ width: '50px' }} src={ele.img1} alt=""></img></div>
//                                                 <div>{ele.name}</div>
//                                                 <div>Qty: {ele.quantity}</div>
//                                                 <div>{Number(ele.price * ele.quantity).toFixed(2)}</div>
//                                             </div>
//                                         </div>
//                         ))}</div>
//                         <div>Subtotal: {orderSubtotal(orderItems)}</div>
//                         <div>Tax: {orderSubtotal(orderItems) * 5 / 100}</div>
//                         <div>Total: {orderSubtotal(orderItems) + orderSubtotal(orderItems) * 5 / 100}</div>
//                     </div>
//                 )}</div>
//             </div>
//         </div>
//     )
// }

// export default ManageOrder