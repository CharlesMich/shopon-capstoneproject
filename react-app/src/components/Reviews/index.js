import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllReviews } from "../../store/review";


function AllReviews(){
    const dispatch = useDispatch()
    const history = useHistory()

    let sessionUser = useSelector((state)=> state.session.user);
   

    let allReviews = useSelector((state)=>Object.values(state.review.allReviews))
    console.log(allReviews)

    useEffect(() => {
        dispatch(getAllReviews())
    },[dispatch]);

    if(!allReviews) return null
    if(!sessionUser) return history.push('/')

    return(
        <div className="review-container">
            <div>Manage All Reviews</div>
              <div className="reviewMap">{allReviews.map((ele)=> 
              <div>
                    
                    <div>{ele.review}</div>
                    <div>{ele.rating}</div>
                </div>
              )}</div>

        <div><Link to={`/products`}>Products</Link></div>
        <div><Link to={`/cart`}>Cart</Link></div>

    
        </div>

    )
       

}

export default AllReviews