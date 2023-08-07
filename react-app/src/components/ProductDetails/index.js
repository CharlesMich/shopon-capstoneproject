import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link, Redirect} from 'react-router-dom'
import { getSingleProduct } from "../../store/product";
import { fetchAddCartItem } from "../../store/cartproduct"
import { getSingleReview } from "../../store/review"
import { fetchLoadCartItem } from '../../store/cartproduct';
import CreateReviewModal from '../AddReview';
import OpenModalButton from '../OpenModalButton';
import CartSummary from '../CartSummary'
import './allproducts.css'

function ProductDetails() {
  const dispatch = useDispatch()
  const history = useHistory()

  let { productId } = useParams()

  productId = Number(productId)
  

  let sessionUser = useSelector((state) => state.session.user);
  let product = useSelector((state) => (state.product.singleProduct))
  let reviews = useSelector((state) => Object.values((state.review.singleReview)))
  let cartItems = useSelector(state => Object.values(state.cartProducts))

  let user_id; 
  if(sessionUser){
    user_id = sessionUser.id
  }
  
  const [previmg, setPrevimg] = useState(product.img1)
  const [quantity, setQuantity] = useState(1)
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(fetchLoadCartItem(user_id))
  }, [dispatch, user_id]);

  useEffect(() => {
    dispatch(getSingleProduct(productId))
  }, [dispatch, productId]);

  useEffect(() => {
    dispatch(getSingleReview(productId))
  }, [dispatch, productId]);

  const count = cartItems.length

  // check if user has no reviews
  let userNoReview = true;
  if (reviews.length > 0) {
    reviews.forEach(review => {
      if (user_id && Number(review.user_id) === Number(user_id)) userNoReview = false;
    });
  }

  // check if user is the seller
  let userIsSeller = false;
  if (sessionUser.username === product.seller){
    userIsSeller = true;
  }

  function avgRating(reviews) {
    let sum = 0
    for (let i = 0; i < reviews.length; i++) {
      sum = sum + reviews[i].rating
    }
    return sum / reviews.length
  }

  function starAvgRating(avgRating) {
    if (avgRating === 1) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (1 < avgRating && avgRating < 2) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (avgRating === 2) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (2 < avgRating && avgRating < 3) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (avgRating === 3) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (3 < avgRating && avgRating < 4) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>)
    } else if (avgRating === 4) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (4 < avgRating && avgRating < 5) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>)
    } else if (avgRating === 5) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>)
    }
  }

  function starRating(star) {
    if (star === 1) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 2) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 3) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 4) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 5) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const createCartForm = {
      productId,
      user_id,
      quantity
    }
    setHasSubmitted(true);

    let newCartItem = await dispatch(fetchAddCartItem(createCartForm))

    if (newCartItem) {
      dispatch(fetchLoadCartItem(user_id))
     setShowCart(true)
      // history.push(`/`);
    }
  }
  
  if (!product) return null
  if (!reviews) return null

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <div className="productdetails-container" >
      <div className="productdetails-subcontainer">
        <div className="product-galary-image-galary">
          <div className="product-detail-thumbnail">
            <img className="product-detail-thumbnail-img" src={product.img1}></img>
            <img className="product-detail-thumbnail-img" src={product.img2}></img>
            <img className="product-detail-thumbnail-img" src={product.img3}></img>
            <img className="product-detail-thumbnail-img" src={product.img4}></img>
            <img className="product-detail-thumbnail-img" src={product.img5}></img>
          </div>
          <div className="produt-detail-main-image">
            <img className="product-detail-img" src={product.img1}></img>
          </div>
          <div className="product-detail-text">
            <h2 className="productdetails-h2">{product.name}</h2>
            <h3 className="productdetails-h3">{product.product_shortdescription}</h3>
            <p className="productdetails-p">Seller: {product.seller}</p>
            <div className="products-review-reviewsummary-div">
        {reviews.length ? <div className="productdeatils-avgstar-rating"><span style={{marginRight:"5px"}}>Avg Rating:</span><span style={{marginRight:"15px"}}>{starAvgRating(Number(avgRating(reviews)))}</span></div>:null}
              <span style={{marginRight:"5px"}} className="products-review-reviewsummary" >{reviews.length}</span><span className="products-review-reviewsummary">{reviews.length === 1 ? <span>Review</span> : <span> Reviews</span>}</span>
        </div>
            <p className="productdetails-review-text">{product.product_longdescription}</p>
            <div>Price: {Number(product.price).toFixed(2)}</div>
            <div className="productdetails-cart-form">
              <form onSubmit={onSubmit}>
                <div className="productdetails-cart-form-elements">
                  <div><label htmlFor='quantity'>Quantity</label></div>
                  <div><select id="quantity" className="product-unit-select" value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select></div>

                </div>
                  <button style={{marginTop:"20px"}} type="sumbit" className="product-details-shoppingcart-button" >Add to Cart</button>
              </form>
            </div>
          </div>
        </div>

        <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
          <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <CartSummary/>
      </div>

        <h2 className="productdetails-h2">Reviews</h2>
        <div className="products-review-reviewsummary-div">
        <span style={{marginRight:"5px"}}>Avg Rating:</span><span style={{marginRight:"15px"}}>{starAvgRating(Number(avgRating(reviews)))}</span>
              <span style={{marginRight:"5px"}} className="products-review-reviewsummary" >{reviews.length}</span><span className="products-review-reviewsummary">{reviews.length === 1 ? <span>Review</span> : <span> Reviews</span>}</span>
        </div>
        
        {!userIsSeller && userNoReview ? <div style={{marginTop:"20px", marginBottom:"20px"}} ><OpenModalButton buttonText="Post your Review" className="postReview" modalComponent={<CreateReviewModal id={product.id} />} /></div> : null}
    
        <div>{reviews.map((ele) =>
          <div className="productdetails-review">
            <div className="productdetails-review-name-rating"><span></span><img src="https://myaaprojects.s3.us-east-2.amazonaws.com/profile-circle.png" style={{width:"30px", paddingRight:"10px"}} alt = ""></img><span style={{ paddingRight: '10px' }}>{ele.first_name} {ele.last_name}</span><span style={{ paddingRight: '10px' }}> • </span><span style={{color:"rgb(2467 126 40)"}}>{starRating(ele.rating)}</span></div>
            <div style={{fontFamily:"helvetica", fontSize:'14px', paddingTop:'10px' }}> Reviewed on {(ele.created_at).split(' ').slice(1,4).join(' ')}</div>
            <h3 style={{fontFamily:"helvetica", fontSize:'14px'}}>{ele.title}</h3>
            <p className="productdetails-review-text">{ele.review}</p>
          </div>
        )}</div>
      </div>
    </div>
  )
}

export default ProductDetails