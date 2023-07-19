import {Link } from 'react-router-dom'
import './order.css'

function Order(){
    return (
        <div className="order-container">
            <div className ="order-body">
             <h1 className= "order-h1">Thank you for the Order.</h1>
             <Link to="/"><h2 className="order-h2">Continue Shopping...</h2></Link>
             </div>
        </div>
    )
}
export default Order