import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllReviews } from "../../store/review";
import { fetchDeleteReview } from "../../store/review";
import UpdateReviewModal from '../UpdateReviewModal';
import OpenModalButton from '../OpenModalButton';
import './reviews.css'


function AllReviews(){
    const dispatch = useDispatch()
    const history = useHistory()

    let sessionUser = useSelector((state)=> state.session.user);

    let userId;
    if(sessionUser){
        userId = sessionUser.id
    }
   
    let allReviews = useSelector((state)=>Object.values(state.review.allReviews))
    allReviews.sort((a,b)=> b.id-a.id)

    useEffect(() => {
        dispatch(getAllReviews(userId))
    },[dispatch, userId]);

    const handleDelete =  (e) => {
        e.preventDefault()
        const {value} = e.target.dataset
         dispatch(fetchDeleteReview(value)).then(dispatch(getAllReviews(userId))).then(dispatch(getAllReviews(userId)))
    }

    if(!allReviews) return null
    // if(!sessionUser) return history.push('/')
    if (!sessionUser) return <Redirect to="/login" />;


    function starRating(star){
        if(star === 1){
            return  (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)

        } else if  (star === 2 ){
            return  (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
        }else if  (star === 3 ){
            return  (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
        }else if  (star === 4 ){
            return  (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>)
        }else if  (star === 5 ){
            return  (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>)
        }
    }

    return(
        <div className="review-container">
                            <div className="review-sub-container">
                                            <h1 className="review-h1">Manage Reviews</h1>
                                           {allReviews.length > 0 ? <div className="reviewMap">{allReviews.map((ele)=> 
                                                        <div className="review-each-review"> 
                                                        <img className="review-img" src={ele.img1} ale="" style={{width:"50px"}}></img>
                                                        <h2 className ="review-h2">{ele.name}</h2>
                                                        {/* <h3 className = "review-h3">{ele.created_at}</h3> */}
                                                        <div style={{float:"left", 
                                                        display:"flex", 
                                                        alignItems:"center",
                                                        
                                                        }}><span style={{display:'inline', 
                                                        fontFamily:"helvetica", 
                                                        fontWeight:"bold", 
                                                        fontSize:"18px",
                                                        paddingRight:"5px"
                                                        }}>{ele.title}</span><span style={{display:'inline'}}>{starRating(ele.rating)}</span></div>
                                                        {/* <div>Review id: {ele.id}</div>                                                */}
                                                        <p className="review-text">{ele.review}</p>
                                                        <div className="review-update-del-button">
                                                        
                                                        <div><OpenModalButton buttonText="Update" className="review-button" style={{cursor:"pointer"}} modalComponent={<UpdateReviewModal id={ele.id} />} /></div>
                                                        <button key={ele.id} className="review-button" style={{
                                                            color:"white", cursor:"pointer"
                                                        }} onClick={handleDelete} data-value ={ele.id}>Delete</button>
                                                        </div>
                                                        </div>
                                            )}</div>: "You currently have no reviews"}
                            </div>
        </div>

    )
       

}

export default AllReviews